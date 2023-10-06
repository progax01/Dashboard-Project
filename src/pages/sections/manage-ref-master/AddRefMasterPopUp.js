import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from 'react-toastify';
import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from "../../components/CustomCheckBox2.component";
import PopUp from "../../components/PopUp.componenet";
import PrimaryInput from "../../components/PrimaryInput";
import CustomSelect2 from "../../components/CustomSelect2.component";
import { getAreaForSelectList, getDistrictForSelectList, getRegionsForSelectList, getStatesForSelectList } from "../../../redux/apis";
import { getReferencesList, saveReferenceDetails } from "../../../redux/apis";

export const AddRefMasterPopUp = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(state => state.masterData.states);
	const regions = useSelector(state => state.masterData.regions);
	const districts = useSelector(state => state.masterData.districts);
	const areas = useSelector(state => state.masterData.areas);
	const [loading, setLoading] = useState(false);
	const [initialData] = useState({
		referenceParty: "",
		address: "",
		stateId: "",
		regionId: "",
		districtId: "",
		areaId: "",
		pincode: "",
		mobileNumber: "",
		gstNumber: "",
		panNumber: "",
		emailId: ""
	});
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		dispatch(getStatesForSelectList());
	}, []);

	const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
	const digitsOnly = (value) => /^\d+$/.test(value)
	const addRefMasterSchema = yup.object().shape({
		referenceParty: yup.string().required("Please enter reference party name"),
		address: yup.string().required("Please enter address"),
		stateId: yup.string().required("Please select state"),
		regionId: yup.string().required("Please select city"),
		districtId: yup.string().required("Please select district"),
		areaId: yup.string().required("Please select area"),
		pincode: yup.string()
				.test('Digits only', 'Pincode should have digits only', digitsOnly)
				.required("Please enter pincode")
				.max(6, 'Maximum 6 digits'),
		mobileNumber: yup.string().required("Mobile number is required").max(10, 'Maximum 10 digits'),
		gstNumber: yup.string().required("GST No. is required"),
		panNumber: yup.string().required("PAN is required"),
		emailId: yup.string()
			.email("Email should be valid")
			.required("Please enter email")
			.matches(emailRegex, "Email should be valid"),
	});

	const handleAddRefMaster = async (formValues) => {
		console.log('formValues', formValues);
		const formData = {
			...formValues,
			pincode: formValues.pincode.toString(),
			isActive,
		}
		// delete formData.referenceParty;
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
	}

	const {
		handleSubmit,
		errors,
		values,
		resetForm,
		handleChange,
		setFieldValue,
		touched,
	} = useFormik({
		initialValues: initialData,
		enableReinitialize: true,
		validationSchema: addRefMasterSchema,
		onSubmit: handleAddRefMaster,
	});

	useEffect(() => {
		if (!props.isVisible) {
			resetForm();
		}
	}, [props.isVisible]);

	useEffect(() => {
		if (values?.stateId) {
			dispatch(getRegionsForSelectList({ stateId: values?.stateId, isActive: true })); // Get regions for selected state
			setFieldValue("regionId", "")
			setFieldValue("districtId", "")
			setFieldValue("areaId", "")
		}
	}, [values?.stateId]);
	
	useEffect(() => {
		if (values?.regionId) {
			dispatch(getDistrictForSelectList({ regionId: values?.regionId, isActive: true })); // Get districts for selected region
			setFieldValue("districtId", "")
			setFieldValue("areaId", "")
		}
	}, [values?.regionId]);

	useEffect(() => {
		if (values?.districtId) {
			dispatch(getAreaForSelectList({ districtId: values?.districtId, isActive: true })); // Get areas for selected district
			setFieldValue("areaId", "")
		}
	}, [values?.districtId]);

	if (!props.isVisible) {
		return null;
	}

	return (
		<PopUp>
			<div className="bg-white min-w-[350px] pb-5 rounded-lg overflow-visible">
				<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-l font-weight-[300]">Add Ref. Master</h1>
					<div className="flex items-center text-sm">
						<p>Manage Ref Master</p>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-2 p-5 gap-x-4 gap-y-3 md:grid-cols-3 max-h-[70vh] overflow-y-auto  ">
				<PrimaryInput
						name="uniqueref"
						label="Unique Ref. No."
						placeholder="Enter"
						//value={values?.referenceParty}
						// required={true}
						//onChange={handleChange}
						//error={touched?.referenceParty && errors?.referenceParty && errors?.referenceParty}
					/>
					<PrimaryInput
						name="referenceParty"
						label="Ref. party (A/C Name)"
						placeholder="Enter"
						value={values?.referenceParty}
						required={true}
						onChange={handleChange}
						error={touched?.referenceParty && errors?.referenceParty && errors?.referenceParty}
					/>
					<PrimaryInput
						name="mobileNumber"
						label="Mobile #"
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
						type="email"
						value={values?.emailId}
						required={true}
						onChange={handleChange}
						error={touched?.emailId && errors?.emailId && errors?.emailId}
					/>
						
						<PrimaryInput
						name="gstNumber"
						label="GST No. #"
						placeholder="Enter"
						value={values?.gstNumber}
						required={true}
						onChange={handleChange}
						error={touched?.gstNumber && errors?.gstNumber && errors?.gstNumber}
					/>
					<PrimaryInput
						name="panNumber"
						label="PAN"
						placeholder="Enter"
						value={values?.panNumber}
						required={true}
						onChange={handleChange}
						error={touched?.panNumber && errors?.panNumber && errors?.panNumber}
					/>
				
					<PrimaryInput
						name="address"
						label="Address"
						placeholder="Enter"
						value={values?.address}
						required={true}
						onChange={handleChange}
						error={touched?.address && errors?.address && errors?.address}
					/>
					<CustomSelect2
						name="stateId"
						label="State"
						value={values?.stateId}
						onChange={handleChange}
						error={touched?.stateId && errors?.stateId && errors?.stateId}
					>
						{
							states?.map((item) => (
								<option key={item.value} value={item.value}>{item.text}</option>
							))
						}
					</CustomSelect2>
					<CustomSelect2
						name="regionId"
						label="Region"
						value={values?.regionId}
						onChange={handleChange}
						disabled={values?.stateId === ""}
						error={touched?.regionId && errors?.regionId && errors?.regionId}
					>
						{
							regions?.map((item) => (
								<option key={item.value} value={item.value}>{item.text}</option>
							))
						}
					</CustomSelect2>
					<CustomSelect2
						name="districtId"
						label="District"
						value={values?.districtId}
						onChange={handleChange}
						disabled={values?.regionId === ""}
						error={touched?.districtId && errors?.districtId && errors?.districtId}
					>
						{
							districts?.map((item) => (
								<option key={item.value} value={item.value}>{item.text}</option>
							))
						}
					</CustomSelect2>
					<CustomSelect2
						name="areaId"
						label="Area"
						value={values?.areaId}
						onChange={handleChange}
						disabled={values?.districtId === ""}
						error={touched?.areaId && errors?.areaId && errors?.areaId}
					>
						{
							areas?.map((item) => (
								<option key={item.value} value={item.value}>{item.text}</option>
							))
						}
					</CustomSelect2>
					<PrimaryInput
						name="pincode"
						label="Pincode"
						placeholder="Enter"
						value={values?.pincode}
						required={true}
						onChange={handleChange}
						error={touched?.pincode && errors?.pincode && errors?.pincode}
					/>
					
					<CustomCheckBox2
						label="Is Active"
						state={isActive}
						setState={setIsActive}
					/>
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
