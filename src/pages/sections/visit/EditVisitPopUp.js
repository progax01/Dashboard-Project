import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";

// Components
import PopUp from "../../components/PopUp.componenet";
import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from "../../components/CustomCheckBox2.component";
import CustomDate1 from "../../components/CustomDate1.component";
import PrimaryInput from "../../components/PrimaryInput";
import CustomSelect2 from "../../components/CustomSelect2.component";
import {
	getAreaForSelectList,
	getCustomersForSelectList,
	getCustomerTypesForSelectList,
	getDistrictForSelectList,
	getRegionsForSelectList,
	getStatesForSelectList,
	getStatusMasterForSelectList,
	getVisitsList,
	saveVisitDetails
} from "../../../redux/apis";
import moment from "moment";
import Accordion from "../../components/Accodion.component";

const initialState = {
	visitDate: "",
	visitStatusId: "",
	employeeId: "",
	customerTypeId: "",
	customerId: "",
	stateId: "",
	regionId: "",
	districtId: "",
	areaId: "",
	contactPerson: "",
	contactNumber: "",
	emailId: "",
	nextActionDate: "",
	latitude: 0,
	longitude: 0,
	address: "",
	remarks: ""
}

export const EditVisitPopUp = (props) => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user);
	const states = useSelector(state => state.masterData.states);
	const regions = useSelector(state => state.masterData.regions);
	const districts = useSelector(state => state.masterData.districts);
	const areas = useSelector(state => state.masterData.areas);
	const customers = useSelector(state => state.masterData.customers);
	const customerTypes = useSelector(state => state.masterData.customerTypes);
	const statusMaster = useSelector(state => state.masterData.statusMaster);
	const [loading, setLoading] = useState(false);
	const [isActive, setIsActive] = useState(true);
    const isView = props.isView;

	useEffect(() => {
		dispatch(getStatesForSelectList());
		dispatch(getCustomerTypesForSelectList());
		dispatch(getStatusMasterForSelectList());
	}, []);

	const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
	const addVisitSchema = yup.object().shape({
		visitNo: yup.string().required(),
		visitDate: yup.string().required("Please select visit date"),
		visitStatusId: yup.string().required("Please select visit status"),
		employeeId: yup.string(),
		customerTypeId: yup.string().required("Please select customer type"),
		customerId: yup.string().required("Please select customer"),
		stateId: yup.string().required("Please select state"),
		regionId: yup.string().required("Please select city"),
		districtId: yup.string().required("Please select district"),
		areaId: yup.string().required("Please select area"),
		contactPerson: yup.string(),
		contactNumber: yup.string(),
		emailId: yup.string()
			.email("Email should be valid")
			.required("Please enter email")
			.matches(emailRegex, "Email should be valid"),
		nextActionDate: yup.string(),
		latitude: yup.number(),
		longitude: yup.number(),
		address: yup.string().required("Please enter address"),
		remarks: yup.string()
	});

	const handleAddVisit = async (formValues) => {
		console.log('formValues', formValues);
        const editData = props.isVisible;
		const formDataValues = {
			...formValues,
			isActive,
			remarks: formValues.remarks ? [{
				remarks: formValues.remarks
			}] : undefined,
            visitId: editData.visitId,
		}
		setLoading(true);
		const response = await dispatch(saveVisitDetails(formDataValues));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getVisitsList()); // Refresh visit list
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
		initialValues: initialState,
		enableReinitialize: true,
		validationSchema: addVisitSchema,
		onSubmit: handleAddVisit,
	});

	useEffect(() => {
        if (!props.isVisible) {
            resetForm();
        } else {
            const editData = props.isVisible;
			const updateData = {
				visitNo: `V00${editData.visitNo}`,
				visitDate: editData.visitDate ? moment(editData.visitDate).format("YYYY-MM-DD") : "",
				visitStatusId: editData.visitStatusId,
				employeeId: editData.employeeId,
				customerTypeId: editData.customerTypeId,
				customerId: editData.customerId,
				stateId: editData.stateId,
				regionId: editData.regionId,
				districtId: editData.districtId,
				areaId: editData.areaId,
				contactPerson: editData.contactPerson,
				contactNumber: editData.contactNumber,
				emailId: editData.emailId,
				nextActionDate: editData.nextActionDate ? moment(editData.nextActionDate).format("YYYY-MM-DD") : "",
				latitude: editData.latitude,
				longitude: editData.longitude,
				address: editData.address,
				remarks: editData.remarks
			}
		
            // eslint-disable-next-line no-undef
            for (const key in updateData) {
                if (updateData.hasOwnProperty(key)) {
                    // console.log(`${key}: ${updateInitialData[key]}`);
                    setFieldValue([key], updateData[key]);
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

	useEffect(() => {
		if (values?.customerTypeId) {
			dispatch(getCustomersForSelectList({ customerTypeId: values?.customerTypeId, isActive: true })); // Get customers for select list
		}
	}, [values?.customerTypeId]);

	if (!props.isVisible) {
		return null;
	}

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
				<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-l font-weight-[300]">
						{isView ? "View Visit" : "Edit Visit"}
					</h1>
					<div className="flex items-center text-sm"></div>
				</div>
				<div className="p-4 mx-auto">
					<div className="grid grid-cols-1 gap-2  md:grid-cols-3">
						<div className="py-1">
							{/* <PrimaryInput
								name="visitNo"
								label="Visit No"
								placeholder="Enter"
								disabled
								value={values?.visitNo}
							/> */}
							{/* <CustomTextField2
								label={"Visit No"}
								placeholder={"Enter"}
							/> */}
						</div>
						{/* <div className="py-1">
							<CustomDate1
								name="visitDate"
								label="Visit Date"
								value={values?.visitDate}
								onChange={handleChange}
								error={touched?.visitDate && errors?.visitDate && errors?.visitDate}
								disabled={isView}
							/>
						</div> */}
						{/* <div className="py-1">
							<CustomSelect2
								name="visitStatusId"
								label="Visit Status"
								value={values?.visitStatusId}
								onChange={handleChange}
								error={touched?.visitStatusId && errors?.visitStatusId && errors?.visitStatusId}
								disabled={isView}
							>
								{
									statusMaster?.map((item) => (
										<option key={item.value} value={item.value}>{item.text}</option>
									))
								}
							</CustomSelect2>
						</div> */}

						{/* <div className="py-1">
							<PrimaryInput
								label={"Employee Role"}
								placeholder={"Enter"}
								disabled
								value={user?.roleName}
							/>
						</div> */}
						<div className="py-1">
							<PrimaryInput
								label={"Employee Name"}
								placeholder={"Enter"}
								disabled
								value={user?.name}
							/>
						</div>
						<div className="py-1">
							<CustomSelect2
								name="customerTypeId"
								label="Customer Type"
								value={values?.customerTypeId}
								onChange={handleChange}
								error={touched?.customerTypeId && errors?.customerTypeId && errors?.customerTypeId}
								disabled={isView}
							>
								{
									customerTypes?.map((item) => (
										<option key={item.value} value={item.value}>{item.text}</option>
									))
								}
							</CustomSelect2>
						</div>
						<div className="py-1">
							<CustomSelect2
								name="customerId"
								label="Customer Name"
								value={values?.customerId}
								onChange={handleChange}
								disabled={values?.customerTypeId === "" || isView}
								error={touched?.customerId && errors?.customerId && errors?.customerId}
							>
								{
									customers?.map((item) => (
										<option key={item.value} value={item.value}>{item.text}</option>
									))
								}
							</CustomSelect2>
						</div>
						<div className="py-1">
							<CustomSelect2
								name="stateId"
								label="State"
								value={values?.stateId}
								onChange={handleChange}
								error={touched?.stateId && errors?.stateId && errors?.stateId}
								disabled={isView}
							>
								{
									states?.map((item) => (
										<option key={item.value} value={item.value}>{item.text}</option>
									))
								}
							</CustomSelect2>
						</div>
						<div className="py-1">
							<CustomSelect2
								name="regionId"
								label="Region"
								value={values?.regionId}
								onChange={handleChange}
								disabled={values?.stateId === "" || isView}
								error={touched?.regionId && errors?.regionId && errors?.regionId}
							>
								{
									regions?.map((item) => (
										<option key={item.value} value={item.value}>{item.text}</option>
									))
								}
							</CustomSelect2>
						</div>
						<div className="py-1">
							<CustomSelect2
								name="districtId"
								label="District"
								value={values?.districtId}
								onChange={handleChange}
								disabled={values?.regionId === "" || isView}
								error={touched?.districtId && errors?.districtId && errors?.districtId}
							>
								{
									districts?.map((item) => (
										<option key={item.value} value={item.value}>{item.text}</option>
									))
								}
							</CustomSelect2>
						</div>
						<div className="py-1">
							<CustomSelect2
								name="areaId"
								label="Area"
								value={values?.areaId}
								onChange={handleChange}
								disabled={values?.districtId === "" || isView}
								error={touched?.areaId && errors?.areaId && errors?.areaId}
							>
								{
									areas?.map((item) => (
										<option key={item.value} value={item.value}>{item.text}</option>
									))
								}
							</CustomSelect2>
						</div>
						<div className="py-1">
							<PrimaryInput
								name="contactPerson"
								label="Contact Person"
								placeholder="Enter"
								// value={values?.contactPerson}
								// onChange={handleChange}
								disabled={isView}
							/>
						</div>
						<div className="py-1">
							<PrimaryInput
								name="contactNumber"
								label="Contact No."
								placeholder="Enter"
								// value={values?.contactNumber}
								// onChange={handleChange}
								disabled={isView}
							/>
						</div>
						<div className="py-1">
							<PrimaryInput
								name="emailId"
								label="Email ID"
								placeholder="Enter"
								value={values?.emailId}
								required={true}
								onChange={handleChange}
								disabled={isView}
								error={touched?.emailId && errors?.emailId && errors?.emailId}
							/>
						</div>
						<div className="py-1">
							<CustomDate1
								name="nextActionDate"
								label="Follow Up Date"
								value={values?.nextActionDate}
								onChange={handleChange}
								disabled={isView}
								error={touched?.nextActionDate && errors?.nextActionDate && errors?.nextActionDate}
							/>
						</div>
						{/* <div className="py-1">
							<PrimaryInput
								name="latitude"
								label="Latitude"
								type="number"
								placeholder="Enter"
								value={values?.latitude}
								disabled={isView}
								onChange={handleChange}
							/>
						</div>
						<div className="py-1">
							<PrimaryInput
								name="longitude"
								label="Longitude"
								type="number"
								placeholder="Enter"
								value={values?.longitude}
								disabled={isView}
								onChange={handleChange}
							/>
						</div> 
						<div className="py-1">
							<PrimaryInput
								name="address"
								label="Address"
								placeholder="Enter"
								value={values?.address}
								required={true}
								onChange={handleChange}
								disabled={isView}
								error={touched?.address && errors?.address && errors?.address}
							/>
						</div> */}
						<div className="py-1">
							<PrimaryInput
								name="remarks"
								label="Remark"
								placeholder="Enter"
								value={values?.remarks}
								disabled={isView}
								onChange={handleChange}
							/>
						</div>
						<Accordion title={"Remarks"}>
                        <div className=" p-4 border-2 ">
                            <div className="flex   flex-row justify-between  ">
                                <h1> Hello</h1>
                            <div className="flex justify-end items-end ">
                                <h1> SuperAdmin</h1>
                            </div>
                            </div>
                            <div className="text-sm flex flex-row justify-start">

                            01/08/2023
                            </div>
                        </div>
                    </Accordion>
						<div className="py-2">
							<CustomCheckBox2
								label="Status"
								state={isActive}
								setState={setIsActive}
								disabled={isView}
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-center gap-5">
					{
						!isView && (
							<div>
								<CustomButton1
									label={"Update"}
									className="text-white bg-first"
									onClick={handleSubmit}
									loading={loading}
								/>
							</div>
						)
					}
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
	)
}