import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { toast } from "react-toastify";
import { randFirstName, randCompanyName, randStreetAddress , randEmail, randFullName, randNumber, randText } from '@ngneat/falso';
import PopUp from "../../components/PopUp.componenet";
import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from "../../components/CustomCheckBox2.component";
import {
    getAreaForSelectList,
    getCustomersList,
    getCustomerTypesForSelectList,
    getDistrictForSelectList,
    getRegionsForSelectList,
    getRolesList,
    getStatesForSelectList,
    saveCustomerDetails,
} from "../../../redux/apis";
import PrimaryInput from "../../components/PrimaryInput";
import CustomSelect2 from "../../components/CustomSelect2.component";
import { isDev } from "../../../helpers";
import CustomTextArea from "../../components/CustomTextArea.component";

const initialState = {
    companyName: isDev ? randCompanyName() : "",
    landlineNo: isDev ? randNumber({ min: 1000000000, max: 9999999999 }).toString() : "",
    mobileNumber: isDev ? randNumber({ min: 1000000000, max: 9999999999 }).toString() : "",
    emailId: isDev ? randEmail({ nameSeparator: '.' }) : "",
    customerTypeId: "",
    specialRemarks: isDev ? randText() : "",
    employeeRoleId: "",
    // Contact details
    contactDetails: {
        contactName: isDev ? randFullName() : "",
        mobileNo: isDev ? randNumber({ min: 1000000000, max: 9999999999 }).toString() : "",
        emailId: isDev ? randEmail({ nameSeparator: '.' }) : "",
        refPartyName: isDev ? randFirstName() : "",
    },
    // Address details
    addressDetails: {
        address: isDev ? randStreetAddress () : "",
        stateId: "",
        regionId: "",
        districtId: "",
        areaId: "",
        pincode: isDev ? randNumber({ min: 100000, max: 999999 }).toString() : "",
    },
};

export const AddCustomerPopUp = (props) => {
    const dispatch = useDispatch();
    const roles = useSelector((state) => state.profile.roles);
    const states = useSelector((state) => state.masterData.states);
    const regions = useSelector((state) => state.masterData.regions);
    const districts = useSelector((state) => state.masterData.districts);
    const areas = useSelector((state) => state.masterData.areas);
    // const references = useSelector((state) => state.administrator.references);
    const customerTypes = useSelector((state) => state.masterData.customerTypes);
    const [initialData] = useState(initialState);
    const [isActive, setIsActive] = useState(true);
    const [loading, setLoading] = useState(false);

    const digitsOnly = (value) => /^\d+$/.test(value);
    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const addCustomerSchema = yup.object().shape({
        companyName: yup.string().required("Company name is required"),
        landlineNo: yup.string().required("Landline number is required").max(10, "Maximum 10 digits"),
        mobileNumber: yup.string().required("Mobile number is required").max(10, "Maximum 10 digits"),
        emailId: yup
            .string()
            .email("Email should be valid")
            .required("Email is required")
            .matches(emailRegex, "Email should be valid"),
        customerTypeId: yup.string().required("Please select customer type"),
        specialRemarks: yup.string(),
        employeeRoleId: yup.string().required("Please select employee role"),
        // Contact details
        contactDetails: yup.object().shape({
            contactName: yup.string().required("Please enter contact name"),
            mobileNo: yup.string().required("Please enter mobile").max(10, "Maximum 10 digits"),
            emailId: yup
                .string()
                .email("Email should be valid")
                .required("Email is required")
                .matches(emailRegex, "Email should be valid"),
            refPartyName: yup.string(),
        }),
        // Address details
        addressDetails: yup.object().shape({
            // address: yup.string().required("Please enter address"),
            stateId: yup.string().required("Please select state"),
            regionId: yup.string().required("Please select city"),
            districtId: yup.string().required("Please select district"),
            areaId: yup.string().required("Please select area"),
            pincode: yup
                .string()
                .test("Digits only", "Pincode should have digits only", digitsOnly)
                .required("Please enter pincode")
                .max(6, "Maximum 6 digits"),
        }),
    });

    const handleAddCustomer = async (formValues) => {
        console.log("formValues", formValues);
        const formData = {
            ...formValues,
            contactDetails: [formValues.contactDetails],
            addressDetails: [formValues.addressDetails],
            isActive,
        };
        console.log("formData", formData);
        setLoading(true);
        const response = await dispatch(saveCustomerDetails(formData));
        setLoading(false);
        if (!response.error) {
            if (response.payload.isSuccess) {
                toast.success(response.payload.message);
                props.onCancel(); // Close PopUp
                dispatch(getCustomersList()); // Refresh customer list
            } else {
                toast.error(response.payload.message);
            }
        } else {
            if (response.payload.data && response.payload.data.length) {
                const errorMessage = response.payload.data.map((u) => u.errorMessage).join(", ");
                toast.error(errorMessage);
            } else {
                toast.error(response.payload.message || response.payload.title || response.payload.Message);
            }
        }
    };

    const { handleSubmit, errors, values, resetForm, handleChange, setFieldValue, touched } = useFormik({
        initialValues: initialData,
        enableReinitialize: true,
        validationSchema: addCustomerSchema,
        onSubmit: handleAddCustomer,
    });

    useEffect(() => {
        dispatch(getStatesForSelectList());
        dispatch(getCustomerTypesForSelectList());
        dispatch(getRolesList({ isActive: true }));
        // dispatch(getReferencesList({ isActive: true }));
    }, []);

    useEffect(() => {
        if (!props.isVisible) {
            resetForm();
        }
    }, [props.isVisible]);

    useEffect(() => {
        if (values?.addressDetails?.stateId) {
            dispatch(getRegionsForSelectList({ stateId: values?.addressDetails?.stateId, isActive: true })); // Get regions for selected state
            setFieldValue("addressDetails.regionId", "");
            setFieldValue("addressDetails.districtId", "");
            setFieldValue("addressDetails.areaId", "");
        }
    }, [values?.addressDetails?.stateId]);

    useEffect(() => {
        if (values?.addressDetails?.regionId) {
            dispatch(getDistrictForSelectList({ regionId: values?.addressDetails?.regionId, isActive: true })); // Get districts for selected region
            setFieldValue("addressDetails.districtId", "");
            setFieldValue("addressDetails.areaId", "");
        }
    }, [values?.addressDetails?.regionId]);

    useEffect(() => {
        if (values?.addressDetails?.districtId) {
            dispatch(getAreaForSelectList({ districtId: values?.addressDetails?.districtId, isActive: true })); // Get areas for selected district
            setFieldValue("addressDetails.areaId", "");
        }
    }, [values?.addressDetails?.districtId]);

    if (!props.isVisible) {
        return null;
    }

    console.log(errors);

    return (
        <PopUp>
            <div className="pb-10 bg-white rounded-lg">
                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                    <h1 className="text-xl font-weight-[300]">Add Customer</h1>
                    {/* <div className="flex items-center text-sm"></div> */}
                </div>
                <div className="grid grid-cols-2 p-5 gap-4 md:grid-cols-3 max-h-[70vh] overflow-y-auto ">
                    <div className=" md:col-span-3 border-b-2 ">Company Details</div>
                    <PrimaryInput
                        name="companyName"
                        label="Company Name"
                        placeholder="Enter"
                        value={values?.companyName}
                        required={true}
                        onChange={handleChange}
                        error={touched?.companyName && errors?.companyName && errors?.companyName}
                    />
                    <PrimaryInput
                        name="landlineNo"
                        label="Landline #"
                        placeholder="Enter"
                        value={values?.landlineNo}
                        required={true}
                        onChange={handleChange}
                        error={touched?.landlineNo && errors?.landlineNo && errors?.landlineNo}
                    />
                    <PrimaryInput
                        name="mobileNumber"
                        label="Mobile #"
                        placeholder="Enter"
                        value={values?.mobileNumber}
                        required={true}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        error={touched?.mobileNumber && errors?.mobileNumber && errors?.mobileNumber}
                    />
                    <PrimaryInput
                        name="emailId"
                        label="Email Id"
                        placeholder="Enter"
                        value={values?.emailId}
                        required={true}
                        onChange={handleChange}
                        error={touched?.emailId && errors?.emailId && errors?.emailId}
                    />
                    <CustomSelect2
                        name="customerTypeId"
                        label="Customer Type"
                        value={values?.customerTypeId}
                        onChange={handleChange}
                        error={touched?.customerTypeId && errors?.customerTypeId && errors?.customerTypeId}
                    >
                        {customerTypes?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </CustomSelect2>
                    <CustomTextArea
                        name="specialRemarks"
                        label="Special Remarks"
                        placeholder="Enter"
                        value={values?.specialRemarks}
                        required={true}
                        onChange={handleChange}
                        error={touched?.specialRemarks && errors?.specialRemarks && errors?.specialRemarks}
                    />
                    <CustomSelect2
                        name="employeeRoleId"
                        label="Employee Role"
                        value={values?.employeeRoleId}
                        onChange={handleChange}
                        error={touched?.employeeRoleId && errors?.employeeRoleId && errors?.employeeRoleId}
                    >
                        {roles?.map((item) => (
                            <option key={item.roleId} value={item.roleId}>
                                {item.roleName}
                            </option>
                        ))}
                    </CustomSelect2>
                    {/* <CustomSelect1 label="Employee Role" /> */}
                    <CustomSelect2 label="Employee Name" />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="image-upload" className="text-sm font-medium">
                            GST Upload
                        </label>
                        <div className="flex items-left  gap-1">
                            <label
                                htmlFor="image-upload"
                                className="text-center cursor-pointer text-sm font-medium bg-sixt text-white p-1 rounded-md"
                            >
                                Upload
                            </label>
                            <input
                                name="aadharImage"
                                type="file"
                                // id="image-upload"
                                accept="image/png, image/jpg, image/jpeg"
                                className="hidden"
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    // Your code to handle the selected file
                                }}
                            />
                        </div>
                        <div className="text-red-500 text-sm">{/* Display error message here if needed */}</div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="image-upload" className="text-sm font-medium">
                            PAN Card
                        </label>
                        <div className="flex items-left  gap-1">
                            <label
                                htmlFor="image-upload"
                                className="text-center cursor-pointer text-sm font-medium bg-sixt text-white p-2 rounded-md"
                            >
                                Upload
                            </label>
                            <input
                                name="aadharImage"
                                type="file"
                                // id="image-upload"
                                accept="image/png, image/jpg, image/jpeg"
                                className="hidden"
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    // Your code to handle the selected file
                                }}
                            />
                        </div>
                        <div className="text-red-500 text-sm">{/* Display error message here if needed */}</div>
                    </div>

                    <div className="mt-2 md:col-span-3 border-b-2">Contact Details</div>

                    <PrimaryInput
                        name="contactDetails.contactName"
                        label="Contact Name"
                        placeholder="Enter"
                        value={values?.contactDetails.contactName}
                        required={true}
                        onChange={handleChange}
                        error={
                            touched?.contactDetails?.contactName &&
                            errors?.contactDetails?.contactName &&
                            errors?.contactDetails?.contactName
                        }
                    />
                    <PrimaryInput
                        name="contactDetails.mobileNo"
                        label="Mobile #"
                        placeholder="Enter"
                        value={values?.contactDetails.mobileNo}
                        required={true}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        error={
                            touched?.contactDetails?.mobileNo &&
                            errors?.contactDetails?.mobileNo &&
                            errors?.contactDetails?.mobileNo
                        }
                    />
                    <PrimaryInput
                        name="contactDetails.emailId"
                        label="Email"
                        placeholder="Enter"
                        value={values?.contactDetails.emailId}
                        required={true}
                        onChange={handleChange}
                        error={
                            touched?.contactDetails?.emailId &&
                            errors?.contactDetails?.emailId &&
                            errors?.contactDetails?.emailId
                        }
                    />
                    <PrimaryInput
                        name="contactDetails.refPartyName"
                        label="Ref Party"
                        value={values?.contactDetails?.refPartyName}
                        placeholder="Enter"
                        onChange={handleChange}
                        error={
                            touched?.contactDetails?.refPartyName &&
                            errors?.contactDetails?.refPartyName &&
                            errors?.contactDetails?.refPartyName
                        }
                    />

                    <div className="mt-2  md:col-span-3 border-b-2">Address Details</div>

                    <CustomTextArea
                        name="addressDetails.address"
                        label="Company Address"
                        placeholder="Enter"
                        value={values?.addressDetails?.address}
                        required={true}
                        onChange={handleChange}
                        error={
                            touched?.addressDetails?.address &&
                            errors?.addressDetails?.address &&
                            errors?.addressDetails?.address
                        }
                    />
                    {/*	<CustomSelect2
						name="addressDetails.stateId"
						label="City"
						value={values?.addressDetails?.stateId}
						onChange={handleChange}
						error={touched?.addressDetails?.stateId && errors?.addressDetails?.stateId && errors?.addressDetails?.stateId}
					>
						{
							states?.map((item) => (
								<option key={item.value} value={item.value}>{item.text}</option>
							))
						}
					</CustomSelect2> */}
                    <CustomSelect2
                        name="addressDetails.stateId"
                        label="State"
                        value={values?.addressDetails?.stateId}
                        onChange={handleChange}
                        error={
                            touched?.addressDetails?.stateId &&
                            errors?.addressDetails?.stateId &&
                            errors?.addressDetails?.stateId
                        }
                    >
                        {states?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </CustomSelect2>
                    <CustomSelect2
                        name="addressDetails.regionId"
                        label="Region"
                        value={values?.addressDetails?.regionId}
                        onChange={handleChange}
                        disabled={values?.addressDetails?.stateId === ""}
                        error={
                            touched?.addressDetails?.regionId &&
                            errors?.addressDetails?.regionId &&
                            errors?.addressDetails?.regionId
                        }
                    >
                        {regions?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </CustomSelect2>
                    <CustomSelect2
                        name="addressDetails.districtId"
                        label="District"
                        value={values?.addressDetails?.districtId}
                        onChange={handleChange}
                        disabled={values?.addressDetails?.regionId === ""}
                        error={
                            touched?.addressDetails?.districtId &&
                            errors?.addressDetails?.districtId &&
                            errors?.addressDetails?.districtId
                        }
                    >
                        {districts?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </CustomSelect2>
                    <CustomSelect2
                        name="addressDetails.areaId"
                        label="Area"
                        value={values?.addressDetails?.areaId}
                        onChange={handleChange}
                        disabled={values?.addressDetails?.districtId === ""}
                        error={
                            touched?.addressDetails?.areaId &&
                            errors?.addressDetails?.areaId &&
                            errors?.addressDetails?.areaId
                        }
                    >
                        {areas?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </CustomSelect2>

                    <PrimaryInput
                        name="addressDetails.pincode"
                        label="Pincode"
                        placeholder="Enter"
                        value={values?.addressDetails?.pincode}
                        required={true}
                        onChange={handleChange}
                        min="100000"
                        max="999999"
                        error={
                            touched?.addressDetails?.pincode &&
                            errors?.addressDetails?.pincode &&
                            errors?.addressDetails?.pincode
                        }
                    />

                    <CustomCheckBox2 label="Is Active" state={isActive} setState={setIsActive} />
                </div>

                <div className="flex justify-center gap-5">
                    <div>
                        <CustomButton1
                            label={"Submit"}
                            className="text-white bg-first"
                            onClick={handleSubmit}
                            loading={loading}
                        />
                    </div>
                    <div>
                        <CustomButton1
                            label={"Cancel"}
                            variant="outlined"
                            className="text-first"
                            disabled={loading}
                            onClick={props.onCancel}
                        />
                    </div>
                </div>
            </div>
        </PopUp>
    );
};
