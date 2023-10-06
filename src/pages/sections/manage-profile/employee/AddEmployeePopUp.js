import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { FormHelperText } from "@mui/material";
import { randStreetAddress , randEmail, randFullName, randNumber } from '@ngneat/falso';
import CustomButton1 from "../../../components/CustomButton1.component";
import CustomCheckBox2 from "../../../components/CustomCheckBox2.component";
import PopUp from "../../../components/PopUp.componenet";
import PrimaryInput from "../../../components/PrimaryInput";
import CustomSelect2 from "../../../components/CustomSelect2.component";
import {
    getAreaForSelectList,
    getBloodGroupList,
    getDistrictForSelectList,
    getEmployeeList,
    getRegionsForSelectList,
    getReportingToEmpListForSelectList,
    getStatesForSelectList,
    saveEmployeeDetails,
} from "../../../../redux/apis";
import CustomDate1 from "../../../components/CustomDate1.component";
import { isDev } from "../../../../helpers";
import moment from "moment";

const initialState = {
    employeeName: isDev ? randFullName() : "",
    employeeCode: isDev ? new Date().getTime() : "",
    emailId: isDev ? randEmail({ nameSeparator: '.' }) : "",
    mobileNumber: isDev ? randNumber({ min: 1000000000, max: 9999999999 }) : "",
    roleId: "",
    reportingTo: "",
    stateId: "",
    regionId: "",
    districtId: "",
    areaId: "",
    address: isDev ? randStreetAddress () : "",
    pincode: isDev ? randNumber({ min: 100000, max: 999999 }) : "",
    emergencyContactNumber: isDev ? randNumber({ min: 1000000000, max: 9999999999 }) : "",
    dateOfBirth: isDev ? moment().format("YYYY-MM-DD") : "",
    dateOfJoining: isDev ? moment().format("YYYY-MM-DD") : "",
    bloodGroup: "",
	initialPassword: isDev ? "1234" : "",
    imageUpload: "",
};

export const AddEmployeePopup = (props) => {
    const dispatch = useDispatch();
    const roles = useSelector((state) => state.profile.roles);
    const states = useSelector((state) => state.masterData.states);
    const regions = useSelector((state) => state.masterData.regions);
    const districts = useSelector((state) => state.masterData.districts);
    const areas = useSelector((state) => state.masterData.areas);
    const bloodGroups = useSelector((state) => state.administrator.bloodGroups);
    const [loading, setLoading] = useState(false);
    const [initialData] = useState(initialState);
    const [isActive, setIsActive] = useState(true);
    const [isWebUser, setIsWebUser] = useState(false);
    const [isMobileUser, setIsMobileUser] = useState(false);

    const [selectedImage, setSelectedImage] = useState(null);

    const [imageName, setImageName] = useState("");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageName(file.name);
            setSelectedImage(file);
        } else {
            setImageName("");
            setSelectedImage("");
        }
    };
    useEffect(() => {
        dispatch(getStatesForSelectList());
        dispatch(getBloodGroupList());
    }, []);

    const validFileExtensions = { image: ["jpg", "png", "jpeg"] };

    function isValidFileType(filePath, fileType) {
        console.log(filePath);
        if (!filePath) {
            return true;
        }
        const fileName = filePath;
        return fileName && validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1;
    }

    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const digitsOnly = (value) => /^\d+$/.test(value);
    const addEmployeeSchema = yup.object().shape({
        employeeName: yup.string().required("Employee name is required"),
        employeeCode: yup.string().required("Employee code is required"),
        emailId: yup
            .string()
            .email("Email should be valid")
            .required("Please enter email")
            .matches(emailRegex, "Email should be valid"),
        mobileNumber: yup.string().required("Mobile number is required").min(10, "Minimum 10 digits").max(10, "Maximum 10 digits"),
        roleId: yup.string().required("Please select role"),
        reportingTo: yup.string().required("Please select reporting to"),
        stateId: yup.string().required("Please select state"),
        regionId: yup.string().required("Please select city"),
        districtId: yup.string().required("Please select district"),
        areaId: yup.string().required("Please select area"),
        address: yup.string().required("Please enter address"),
        pincode: yup
            .string()
            .test("Digits only", "Pincode should have digits only", digitsOnly)
            .required("Please enter pincode")
            .max(6, "Maximum 6 digits"),
        // emergencyContactNumber: yup.string(),
		emergencyContactNumber:	yup.lazy((value) =>
				value === ""
				? yup.string()
				: yup.string().optional().nullable().notRequired()
					.test("Digits only", "Should have digits only", digitsOnly)
					.max(10, "Maximum 10 digits")
			),
		// emergencyContactNumber: yup
		// 	.string()
		// 	.when("emergencyContactNumber", {
		// 		is: (value) => value?.length > 0,
		// 		then: yup
		// 		  .string()
		// 		  .nullable()
		// 		  .test("Digits only", "Should have digits only", digitsOnly)
		// 		  .max(10, "Maximum 10 digits"),
		// 		otherwise: yup.string(),
		// 	  }),
        dateOfBirth: yup.date().required("Please select dob"),
        dateOfJoining: yup.date(),
        bloodGroup: yup.string(),
        // imageUpload: yup.mixed()
        // 	.test("is-valid-type", "Not a valid image type", value => isValidFileType(value, "image"))
        imageUpload: yup.mixed(),
		initialPassword: yup.string().required("Please enter password")
    });
	
    const handleAddEmployee = async (formValues) => {
        console.log("formValues", formValues);
        const formDataValues =  {
            ...formValues,
            isWebUser,
            isMobileUser,
            isActive,
        };
        // const formData = new FormData()
        // Object.keys(formDataValues).forEach((key) => {
        // 	formData.append(key, formDataValues[key])
        // })
        setLoading(true);
        const response = await dispatch(saveEmployeeDetails(formDataValues));
        setLoading(false);
        if (!response.error) {
            if (response.payload.isSuccess) {
                toast.success(response.payload.message);
                props.onCancel(); // Close PopUp
                dispatch(getEmployeeList()); // Refresh employee list
            } else {
                toast.error(response.payload.message);
            }
        } else {
            if (response.payload.data && response.payload.data.length) {
                const errorMessage = response.payload.data.map((u) => u.errorMessage).join(", ");
                toast.error(errorMessage);
            } else {
                toast.error(response.payload.message || response.payload.title);
            }
        }
    };

    const { handleSubmit, errors, values, resetForm, handleChange, setFieldValue, touched } = useFormik({
        initialValues: initialData,
        enableReinitialize: true,
        validationSchema: addEmployeeSchema,
        onSubmit: handleAddEmployee,
    });

	console.log(values);
    console.log(errors);

    useEffect(() => {
        if (!props.isVisible) {
            resetForm();
        }
    }, [props.isVisible, resetForm]);

    useEffect(() => {
        if (values?.stateId) {
            dispatch(getRegionsForSelectList({ stateId: values?.stateId, isActive: true })); // Get regions for selected state
            setFieldValue("regionId", "");
            setFieldValue("districtId", "");
            setFieldValue("areaId", "");
        }
    }, [values?.stateId]);

    useEffect(() => {
        if (values?.regionId) {
            dispatch(getDistrictForSelectList({ regionId: values?.regionId, isActive: true })); // Get districts for selected region
            setFieldValue("districtId", "");
            setFieldValue("areaId", "");
        }
    }, [values?.regionId]);

    useEffect(() => {
        if (values?.districtId) {
            dispatch(getAreaForSelectList({ districtId: values?.districtId, isActive: true })); // Get areas for selected district
            setFieldValue("areaId", "");
        }
    }, [values?.districtId]);

	useEffect(() => {
        if (values?.roleId) {
            dispatch(getReportingToEmpListForSelectList({ roleId: values?.roleId })); // Get areas for selected district
            // setFieldValue("areaId", "");
        }
    }, [values?.roleId]);

    if (!props.isVisible) {
        return null;
    }

    return (
        <PopUp>
            <div className="bg-white min-w-[350px] pb-5 rounded-lg overflow-visible">
                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                    <h1 className="text-l font-weight-[300]">Add Employee</h1>
                    <div className="flex items-center text-sm"></div>
                </div>

                <div className="grid grid-cols-2 gap-2 p-5 gap-x-4 gap-y-3 md:grid-cols-3 max-h-[70vh] overflow-y-auto  ">
                    <PrimaryInput
                        name="employeeName"
                        label="Employee Name"
                        placeholder="Enter"
                        value={values?.employeeName}
                        required={true}
                        onChange={handleChange}
                        error={touched?.employeeName && errors?.employeeName && errors?.employeeName}
                    />
                    <PrimaryInput
                        name="employeeCode"
                        label="Employee Code"
                        placeholder="Enter"
                        value={values?.employeeCode}
                        required={true}
                        onChange={handleChange}
                        error={touched?.employeeCode && errors?.employeeCode && errors?.employeeCode}
                    />
                    <PrimaryInput
                        name="mobileNumber"
                        label="Mobile Number"
                        placeholder="Enter"
                        value={values?.mobileNumber}
                        required={true}
                        onChange={handleChange}
                        error={touched?.mobileNumber && errors?.mobileNumber && errors?.mobileNumber}
                    />
                    <PrimaryInput
                        name="emailId"
                        label="Email ID"
                        placeholder="Enter"
                        value={values?.emailId}
                        required={true}
                        onChange={handleChange}
                        error={touched?.emailId && errors?.emailId && errors?.emailId}
                    />
                    <CustomSelect2
                        name="roleId"
                        label="Role"
                        value={values?.roleId}
                        onChange={handleChange}
                        error={touched?.roleId && errors?.roleId && errors?.roleId}
                    >
                        {roles?.map((item) => (
                            <option key={item.roleId} value={item.roleId}>
                                {item.roleName}
                            </option>
                        ))}
                    </CustomSelect2>
                    <CustomSelect2
                        name="reportingTo"
                        label="Reporting To"
                        value={values?.reportingTo}
                        onChange={handleChange}
                        error={touched?.reportingTo && errors?.reportingTo && errors?.reportingTo}
                    >
                        {[]
                            ?.filter((item) => item.roleId.toString() !== values?.roleId.toString())
                            ?.map((item) => (
                                <option key={item.roleId} value={item.roleId}>
                                    {item.roleName}
                                </option>
                            ))}
                    </CustomSelect2>
                    <CustomSelect2
                        name="stateId"
                        label="State"
                        value={values?.stateId}
                        onChange={handleChange}
                        error={touched?.stateId && errors?.stateId && errors?.stateId}
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
                        disabled={values?.stateId === ""}
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
                        disabled={values?.regionId === ""}
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
                        disabled={values?.districtId === ""}
                        error={touched?.areaId && errors?.areaId && errors?.areaId}
                    >
                        {areas?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.text}
                            </option>
                        ))}
                    </CustomSelect2>
                    <PrimaryInput
                        name="address"
                        label="Address"
                        placeholder="Enter"
                        value={values?.address}
                        required={true}
                        onChange={handleChange}
                        error={touched?.address && errors?.address && errors?.address}
                    />
                    <PrimaryInput
                        name="pincode"
                        label="Pincode"
                        placeholder="Enter"
                        value={values?.pincode}
                        required={true}
                        onChange={handleChange}
                        error={touched?.pincode && errors?.pincode && errors?.pincode}
                    />
                    <CustomDate1
                        name="dateOfBirth"
                        label="Date of Birth"
                        value={values?.dateOfBirth}
                        required={true}
                        onChange={handleChange}
                        error={touched?.dateOfBirth && errors?.dateOfBirth && errors?.dateOfBirth}
                    />
                    <CustomDate1
                        name="dateOfJoining"
                        label="Date of Joining"
                        value={values?.dateOfJoining}
                        onChange={handleChange}
                    />
                    <PrimaryInput
                        name="emergencyContactNumber"
                        label="Emergency Contact Number"
                        placeholder="Enter"
                        value={values?.emergencyContactNumber}
                        required={false}
                        onChange={handleChange}
                        error={touched?.emergencyContactNumber && errors?.emergencyContactNumber && errors?.emergencyContactNumber}
                    />
                    <CustomSelect2
                        name="bloodGroup"
                        label="Blood Group"
                        value={values?.bloodGroup}
                        onChange={handleChange}
                        error={touched?.bloodGroup && errors?.bloodGroup && errors?.bloodGroup}
                    >
                        {bloodGroups?.map((item) => (
                            <option key={item.bloodGroupId} value={item.bloodGroupId}>
                                {item.bloodGroup}
                            </option>
                        ))}
                    </CustomSelect2>
                    <PrimaryInput
                        name="initialPassword"
                        label="Password"
                        placeholder="Enter"
                        value={values?.initialPassword}
                        required={false}
                        onChange={handleChange}
                        error={touched?.initialPassword && errors?.initialPassword && errors?.initialPassword}
                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="image-upload" className="text-sm font-medium">
                            Aadhaar Card Upload
                        </label>
                        <div className="flex items-left  gap-2">
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

                    <div className="flex flex-col gap-1">
                        <label htmlFor="image-upload" className="text-sm font-medium">
                            PAN Card
                        </label>
                        <div className="flex items-left  gap-2">
                            <label
                                htmlFor="image-upload"
                                className="text-center cursor-pointer text-sm font-medium bg-sixt text-white p-2 rounded-md"
                            >
                                Upload
                            </label>
                            <input
                                name="panImage"
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

                    <div className="flex flex-col items-start justify-center  ">
                        <label htmlFor="image-upload" className="text-xs font-small">
                            Image Upload
                        </label>
                        <div className="flex items-center gap-2">
                            <label
                                htmlFor="image-upload"
                                className="cursor-pointer text-xs bg-sixt text-white p-2 rounded-md"
                            >
                                Upload
                            </label>
                            {imageName && <p className="flex items-center text-xs ">{imageName}</p>}
                            <input type="file" id="image-upload" className="hidden" onChange={handleImageChange} />
                            <div
                                className={`flex w-16 h-16 rounded-full border border-[#3D3D3D66] ${
                                    selectedImage ? "hidden" : ""
                                }`}
                            >
                                <span className="text-[#3D3D3D66] flex items-center justify-center w-full h-full">
                                    No Image
                                </span>
                            </div>
                            {selectedImage && (
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full border border-[#3D3D3D66]"
                                />
                            )}
                        </div>
                    </div>
                    
                    <CustomCheckBox2 label="Is Web User" state={isWebUser} setState={setIsWebUser} />
                    <CustomCheckBox2 label="Is Mobile User" state={isMobileUser} setState={setIsMobileUser} />
                    <CustomCheckBox2 label="Status" state={isActive} setState={setIsActive} />
                </div>
                <div className="flex justify-center gap-5 mt-5">
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
