import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

// Components
import PopUp from "../../components/PopUp.componenet";
import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from "../../components/CustomCheckBox2.component";
import PrimaryInput from "../../components/PrimaryInput";
import { attachAddressDetail } from "../../../redux/slices/customer-slice";
import CustomSelect2 from "../../components/CustomSelect2.component";
import { getAreaForSelectList, getDistrictForSelectList, getRegionsForSelectList, getStatesForSelectList } from "../../../redux/apis";

const initialState = {
	address: "",
	stateId: "",
	regionId: "",
	districtId: "",
	areaId: "",
	pincode: ""
}

export const EditAddressDetailPopUp = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(state => state.masterData.states);
	const regions = useSelector(state => state.masterData.regions);
	const districts = useSelector(state => state.masterData.districts);
	const areas = useSelector(state => state.masterData.areas);
	const [isActive, setIsActive] = useState(true);
	const [initialData] = useState(initialState);

	useEffect(() => {
		dispatch(getStatesForSelectList());
	}, []);

	const digitsOnly = (value) => /^\d+$/.test(value)
	const addAddressDetailSchema = yup.object().shape({
		stateId: yup.string().required("Please select state"),
		regionId: yup.string().required("Please select region"),
		districtId: yup.string().required("Please select district"),
		areaId: yup.string().required("Please select area"),
		pincode: yup.string()
			.test('Digits only', 'Pincode should have digits only', digitsOnly)
			.required("Please enter pincode")
			.max(6, 'Maximum 6 digits'),
	});

	const handleAddAddressDetail = async (formValues) => {
		dispatch(attachAddressDetail({
			...formValues,
			isActive
		}));
		props.onClose();
		resetForm();
	};

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
		validationSchema: addAddressDetailSchema,
		onSubmit: handleAddAddressDetail,
	});

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

	useEffect(() => {
		if (props.isVisible) {
			const editData = props.isVisible;
			setFieldValue("stateId", editData.stateId);
			setFieldValue("regionId", editData.regionId);
			setFieldValue("districtId", editData.districtId);
			setFieldValue("areaId", editData.areaId);
			setFieldValue("pincode", editData.pincode);
			setIsActive(editData.isActive);
		} else {
			resetForm();
		}
	}, [props.isVisible])

	if (!props.isVisible) {
		return null;
	}

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
				<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-l font-weight-[300]">Edit Address Detail</h1>
					<div className="flex items-center text-sm"></div>
				</div>

				<div className="grid grid-cols-2 p-5 gap-2 md:grid-cols-3 max-h-[70vh] overflow-y-auto ">
					<div className="mt-2 md:col-span-3 ">Address Details</div>
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
						min="100000"
						max="999999"
						error={touched?.pincode && errors?.pincode && errors?.pincode}
					/>

					<CustomCheckBox2
						label="Is Active"
						state={isActive}
						setState={setIsActive}
					/>
				</div>

				<div className="flex justify-center gap-5">
					<div>
						<CustomButton1
							label={"Update"}
							className="text-white bg-first"
							onClick={handleSubmit}
						/>
					</div>
					<div>
						<CustomButton1
							label={"Cancel"}
							variant="outlined"
							className="text-first"
							onClick={props.onClose}
						/>
					</div>
				</div>
			</div>
		</PopUp>
	);
}
