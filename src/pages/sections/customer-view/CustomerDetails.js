import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from "../../components/CustomCheckBox2.component";
import { getCustomerTypesForSelectList, getRolesList } from "../../../redux/apis";
import { FormHelperText } from "@mui/material";

export const CustomerDetails = ({
	isView,
	onCancel,
	handleNextTab
}) => {
	const dispatch = useDispatch();
	const roles = useSelector(state => state.profile.roles);
	const customerTypes = useSelector(state => state.masterData.customerTypes);
	const customerDetails = useSelector(state => state.customer.customerDetails);
	const [initialData] = useState({
		companyName: "",
		landlineNo: "",
		mobileNumber: "",
		emailId: "",
		customerTypeId: "",
		specialRemarks: "",
		employeeRoleId: ""
	});
    const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		dispatch(getCustomerTypesForSelectList());
		dispatch(getRolesList({ isActive: true }));
	}, []);

	const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
	const customerSchema = yup.object().shape({
		companyName: yup.string().required("Company name is required"),
		landlineNo: yup.string().required("Landline number is required").max(10, 'Maximum 10 digits'),
		mobileNumber: yup.string().required("Mobile number is required").max(10, 'Maximum 10 digits'),
		emailId: yup.string()
			.email("Email should be valid")
			.required("Email is required")
			.matches(emailRegex, "Email should be valid"),
		customerTypeId: yup.string().required("Please select customer type"),
		specialRemarks: yup.string(),
		employeeRoleId: yup.string().required("Please select employee role"),
	});

	const handleUpdateCustomer = async (formValues) => {
		handleNextTab();
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
		validationSchema: customerSchema,
		onSubmit: handleUpdateCustomer,
	});

	useEffect(() => {
		console.log('customerDetails', customerDetails);
		if (customerDetails && customerDetails.customerDetails) {
			const data = customerDetails.customerDetails;
			setFieldValue("companyName", data.companyName);
			setFieldValue("landlineNo", data.landlineNo);
			setFieldValue("mobileNumber", data.mobileNumber);
			setFieldValue("emailId", data.emailId);
			setFieldValue("customerTypeId", data.customerTypeId);
			setFieldValue("specialRemarks", data.specialRemarks);
			setFieldValue("employeeRoleId", data.employeeId);
			setIsActive(data.isActive);
		}
	}, [customerDetails]);

	return (
		<div className="px-2 lg:px-4">
			{/* 4 BUTTONS */}

			<div className="pb-10 bg-white rounded-lg">
				<h1 className="text-xl pt-4 border-b-2">Customer Detail</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
					<div>
						<label className="block mb-2" htmlFor="companyName">
							Customer Name
						</label>
						<input
							type="text"
							className="w-full px-4 py-2 border rounded"
							id="companyName"
							placeholder="Enter"
							style={{ backgroundColor: "#E6E6E6" }}
							value={values?.companyName}
							onChange={handleChange}
							disabled={isView}
						/>
						{
							touched?.companyName && errors?.companyName && (
								<FormHelperText error>{errors?.companyName}</FormHelperText>
							)
						}
					</div>
					<div>
						<label className="block mb-2" htmlFor="landlineNo">
							Landline
						</label>
						<input
							type="text"
							className="w-full px-4 py-2 border rounded"
							id="landlineNo"
							placeholder="Enter"
							value={values?.landlineNo}
							onChange={handleChange}
							disabled={isView}
							style={{ backgroundColor: "#E6E6E6" }}
						/>
						{
							touched?.landlineNo && errors?.landlineNo && (
								<FormHelperText error>{errors?.landlineNo}</FormHelperText>
							)
						}
					</div>
					<div>
						<label className="block mb-2" htmlFor="mobileNumber">
							Mobile
						</label>
						<input
							type="text"
							className="w-full px-4 py-2 border rounded"
							id="mobileNumber"
							placeholder="Enter"
							value={values?.mobileNumber}
							onChange={handleChange}
							disabled={isView}
							pattern="[0-9]{10}"
							style={{ backgroundColor: "#E6E6E6" }}
						/>
						{
							touched?.mobileNumber && errors?.mobileNumber && (
								<FormHelperText error>{errors?.mobileNumber}</FormHelperText>
							)
						}
					</div>
					<div>
						<label className="block mb-2" htmlFor="emailId">
							Email
						</label>
						<input
							type="email"
							className="w-full px-4 py-2 border rounded"
							id="emailId"
							placeholder="Enter"
							value={values?.emailId}
							onChange={handleChange}
							disabled={isView}
							style={{ backgroundColor: "#E6E6E6" }}
						/>
						{
							touched?.emailId && errors?.emailId && (
								<FormHelperText error>{errors?.emailId}</FormHelperText>
							)
						}
					</div>
					<div>
						<label className="block mb-2" htmlFor="customerTypeId">
							Customer Type
						</label>
						<select
							className="w-full px-4 py-2 border rounded"
							id="customerTypeId"
							value={values?.customerTypeId}
							onChange={handleChange}
							disabled={isView}
							style={{ backgroundColor: "#E6E6E6" }}
						>
							<option value="">Select</option>
							{
								customerTypes?.map((item) => (
									<option key={item.value} value={item.value}>{item.text}</option>
								))
							}
						</select>
						{
							touched?.customerTypeId && errors?.customerTypeId && (
								<FormHelperText error>{errors?.customerTypeId}</FormHelperText>
							)
						}
					</div>
					<div>
						<label className="block mb-2" htmlFor="specialRemarks">
							Special Remarks
						</label>
						<textarea
							type="textarea"
							className="w-full px-4 py-2 border rounded"
							id="specialRemarks"
							placeholder="Enter"
							value={values?.specialRemarks}
							onChange={handleChange}
							disabled={isView}
							style={{ backgroundColor: "#E6E6E6" }}
						/>
					</div>
					<div>
						<label className="block mb-2" htmlFor="employeeRoleId">
							Employee Role
						</label>
						<select
							className="w-full px-4 py-2 border rounded"
							id="employeeRoleId"
							value={values?.employeeRoleId}
							onChange={handleChange}
							disabled={isView}
							style={{ backgroundColor: "#E6E6E6" }}
						>
							<option value="">Select</option>
							{
								roles?.map((item) => (
									<option key={item.roleId} value={item.roleId}>{item.roleName}</option>
								))
							}
						</select>
						{
							touched?.employeeRoleId && errors?.employeeRoleId && (
								<FormHelperText error>{errors?.employeeRoleId}</FormHelperText>
							)
						}
					</div>
					{/* <div>
						<label className="block mb-2" htmlFor="employee-name">
							Employee Name
						</label>
						<select
							className="w-full px-4 py-2 border rounded"
							id="employee-name"
							style={{ backgroundColor: "#E6E6E6" }}
						>
							<option value="">Select</option>
							<option value="john-doe">John Doe</option>
							<option value="jane-doe">Jane Doe</option>
						</select>
					</div> */}
					<div>
						<CustomCheckBox2
							label="Is Active"
							state={isActive}
							setState={setIsActive}
							disabled={isView}
						/>
					</div>
				</div>

				<div className="flex justify-between ">
					<CustomButton1 label={"Cancel"} onClick={onCancel} />
					{
						!isView && <CustomButton1 label={"Next"} className="text-white bg-first" onClick={handleSubmit} />
					}
				</div>
			</div>
		</div>
	);
}
