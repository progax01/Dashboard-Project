import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from "../../components/CustomCheckBox2.component";
import PopUp from "../../components/PopUp.componenet";
import PrimaryInput from "../../components/PrimaryInput";
import CustomSelect2 from "../../components/CustomSelect2.component";
import {
    getAreaForSelectList,
    getDistrictForSelectList,
    getRegionsForSelectList,
    getStatesForSelectList,
} from "../../../redux/apis";
import { getReferencesList, saveReferenceDetails } from "../../../redux/apis";

const initialState = {
    referenceParty: "",
    address: "",
    stateId: "",
    regionId: "",
    districtId: "",
    areaId: "",
    pincode: "",
    phoneNumber: "",
    mobileNumber: "",
    gstNumber: "",
    panNumber: "",
    emailId: "",
};

export const EditRefMasterPopUp = (props) => {
    const dispatch = useDispatch();
    const states = useSelector((state) => state.masterData.states);
    const regions = useSelector((state) => state.masterData.regions);
    const districts = useSelector((state) => state.masterData.districts);
    const areas = useSelector((state) => state.masterData.areas);
    const [loading, setLoading] = useState(false);
    const [initialData, setInitialData] = useState(initialState);
    const [isActive, setIsActive] = useState(true);
    const isView = props.isView;

    useEffect(() => {
        dispatch(getStatesForSelectList());
    }, []);

    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const digitsOnly = (value) => /^\d+$/.test(value);
    const addRefMasterSchema = yup.object().shape({
        referenceParty: yup.string().required("Please enter reference party name"),
        address: yup.string().required("Please enter address"),
        stateId: yup.string().required("Please select state"),
        regionId: yup.string().required("Please select city"),
        districtId: yup.string().required("Please select district"),
        areaId: yup.string().required("Please select area"),
        pincode: yup
            .string()
            .test("Digits only", "Pincode should have digits only", digitsOnly)
            .required("Please enter pincode")
            .max(6, "Maximum 6 digits"),
        phoneNumber: yup.string().required("Phone number is required").max(10, "Maximum 10 digits"),
        mobileNumber: yup.string().required("Mobile number is required").max(10, "Maximum 10 digits"),
        gstNumber: yup.string().required("GST No. is required"),
        panNumber: yup.string().required("PAN is required"),
        emailId: yup
            .string()
            .email("Email should be valid")
            .required("Please enter email")
            .matches(emailRegex, "Email should be valid"),
    });

    const handleUpdateRefMaster = async (formValues) => {
        const editData = props.isVisible;
        const formData = {
            ...formValues,
            isActive,
            pincode: formValues.pincode.toString(),
            referenceId: editData.referenceId,
        };
        setLoading(true);
        const response = await dispatch(saveReferenceDetails(formData));
        setLoading(false);
        if (!response.error) {
            if (response.payload.isSuccess) {
                toast.success(response.payload.message);
                props.onCancel(); // Close PopUp
                dispatch(getReferencesList()); // Refresh employee list
            } else {
                toast.error(response.payload.message);
            }
        } else {
            if (response.payload.data && response.payload.data.length) {
				const errorMessage = response.payload.data.map(u => u.errorMessage).join(', ');
				toast.error(errorMessage);
			} else {
				toast.error(response.payload.message || response.payload.title);
			}
        }
    };

    const { handleSubmit, errors, values, resetForm, handleChange, setFieldValue, touched } = useFormik({
        initialValues: initialData,
        enableReinitialize: true,
        validationSchema: addRefMasterSchema,
        onSubmit: handleUpdateRefMaster,
    });

    useEffect(() => {
        if (!props.isVisible) {
            resetForm();
            setInitialData(initialState);
        } else {
            const editData = props.isVisible;
            const updateInitialData = {
                referenceParty: editData.referenceParty,
                address: editData.address,
                stateId: editData.stateId,
                regionId: editData.regionId,
                districtId: editData.districtId,
                areaId: editData.areaId,
                pincode: editData.pincode,
                phoneNumber: editData.phoneNumber,
                mobileNumber: editData.mobileNumber,
                gstNumber: editData.gstNumber,
                panNumber: editData.panNumber,
                emailId: editData.emailId,
            };
            setInitialData(updateInitialData);
            // eslint-disable-next-line no-undef
            for (const key in updateInitialData) {
                if (updateInitialData.hasOwnProperty(key)) {
                    // console.log(`${key}: ${updateInitialData[key]}`);
                    setFieldValue([key], updateInitialData[key]);
                }
            }
            console.log("editData", editData);
            setIsActive(editData.isActive);
        }
    }, [props.isVisible]);

    useEffect(() => {
        if (values?.stateId) {
            dispatch(getRegionsForSelectList({ stateId: values?.stateId, isActive: true })); // Get regions for selected state
        }
    }, [values?.stateId]);

    useEffect(() => {
        if (values?.regionId) {
            dispatch(getDistrictForSelectList({ regionId: values?.regionId, isActive: true })); // Get districts for selected region
        }
    }, [values?.regionId]);

    useEffect(() => {
        if (values?.districtId) {
            dispatch(getAreaForSelectList({ districtId: values?.districtId, isActive: true })); // Get areas for selected district
        }
    }, [values?.districtId]);

    if (!props.isVisible) {
        return null;
    }

    return (
        <PopUp>
            <div className="bg-white min-w-[350px] pb-5 rounded-lg overflow-visible">
                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                    <h1 className="text-l font-weight-[300]">{isView ? "View Ref. Master" : "Edit Ref. Master"}</h1>
                    <div className="flex items-center text-sm"></div>
                </div>

                <div className="grid grid-cols-2 gap-2 p-5 gap-x-4 gap-y-3 md:grid-cols-3 max-h-[70vh] overflow-y-auto  ">
                <PrimaryInput
						name="uniqueref"
						label="Unique Ref. No."
						placeholder="Enter"
						//value={values?.referenceParty}
						required={true}
						//onChange={handleChange}
						//error={touched?.referenceParty && errors?.referenceParty && errors?.referenceParty}
                        disabled={isView}
                        />
                    <PrimaryInput
                        name="referenceParty"
                        label="Ref. party (A/C Name)"
                        placeholder="Enter"
                        value={values?.referenceParty}
                        required={true}
                        onChange={handleChange}
                        error={touched?.referenceParty && errors?.referenceParty && errors?.referenceParty}
                        disabled={isView}
                    />
                      <PrimaryInput
                        name="mobileNumber"
                        label="Mobile #"
                        placeholder="Enter"
                        value={values?.mobileNumber}
                        required={true}
                        onChange={handleChange}
                        error={touched?.mobileNumber && errors?.mobileNumber && errors?.mobileNumber}
                        disabled={isView}
                    />
                      <PrimaryInput
                        name="emailId"
                        label="Email ID"
                        placeholder="Enter"
                        type="email"
                        value={values?.emailId}
                        required={true}
                        onChange={handleChange}
                        error={touched?.emailId && errors?.emailId && errors?.emailId}
                        disabled={isView}
                    />
                      <PrimaryInput
                        name="gstNumber"
                        label="GST No."
                        placeholder="Enter"
                        value={values?.gstNumber}
                        required={true}
                        onChange={handleChange}
                        error={touched?.gstNumber && errors?.gstNumber && errors?.gstNumber}
                        disabled={isView}
                    />
                    <PrimaryInput
                        name="panNumber"
                        label="PAN"
                        placeholder="Enter"
                        value={values?.panNumber}
                        required={true}
                        onChange={handleChange}
                        error={touched?.panNumber && errors?.panNumber && errors?.panNumber}
                        disabled={isView}
                    />
                    <PrimaryInput
                        name="address"
                        label="Address"
                        placeholder="Enter"
                        value={values?.address}
                        required={true}
                        onChange={handleChange}
                        error={touched?.address && errors?.address && errors?.address}
                        disabled={isView}
                    />
                    <CustomSelect2
                        name="stateId"
                        label="State"
                        value={values?.stateId}
                        onChange={handleChange}
                        error={touched?.stateId && errors?.stateId && errors?.stateId}
                        disabled={isView}
                    >
                        {states?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </CustomSelect2>
                    <CustomSelect2
                        name="regionId"
                        label="Region"
                        value={values?.regionId}
                        onChange={handleChange}
                        disabled={values?.stateId === "" || isView}
                        error={touched?.regionId && errors?.regionId && errors?.regionId}
                    >
                        {regions?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </CustomSelect2>
                    <CustomSelect2
                        name="districtId"
                        label="District"
                        value={values?.districtId}
                        onChange={handleChange}
                        disabled={values?.regionId === "" || isView}
                        error={touched?.districtId && errors?.districtId && errors?.districtId}
                    >
                        {districts?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </CustomSelect2>
                    <CustomSelect2
                        name="areaId"
                        label="Area"
                        value={values?.areaId}
                        onChange={handleChange}
                        disabled={values?.districtId === "" || isView}
                        error={touched?.areaId && errors?.areaId && errors?.areaId}
                    >
                        {areas?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </CustomSelect2>
                    <PrimaryInput
                        name="pincode"
                        label="Pincode"
                        placeholder="Enter"
                        value={values?.pincode}
                        required={true}
                        onChange={handleChange}
                        error={touched?.pincode && errors?.pincode && errors?.pincode}
                        disabled={isView}
                    />
                   
                  
                  
                    <CustomCheckBox2 label="Status" state={isActive} setState={setIsActive} disabled={isView} />
                </div>
                <div className="flex justify-center gap-5 mt-5">
                    {!isView && (
                        <div>
                            <CustomButton1
                                label={"Update"}
                                className="text-white bg-first"
                                onClick={handleSubmit}
                                loading={loading}
                            />
                        </div>
                    )}
                    <div>
                        <CustomButton1
                            label={"Cancel"}
                            variant="outlined"
                            className={`text-first`}
                            disabled={loading}
                            onClick={props.onCancel}
                        />
                    </div>
                </div>
            </div>
        </PopUp>
    );
};
