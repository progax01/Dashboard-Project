import React, { useState } from "react";
import { AiOutlineSearch, AiTwotoneEdit } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import CustomButton1 from "../../components/CustomButton1.component";
import { getCustomersList, saveCustomerDetails } from "../../../redux/apis";
import { AddAddressDetailPopUp } from "./AddAddressDetailPopUp";
import { EditAddressDetailPopUp } from "./EditAddressDetailPopUp";

export const AddressDetails = ({
	isView,
	handleBackTab
}) => {
	const dispatch = useDispatch();
	const customerDetails = useSelector(state => state.customer.customerDetails);
	const [loading, setLoading] = useState(false);
	const [popupContactAdd, setPopupContactAdd] = useState(false);
    const [editItem, setEditItem] = useState(false);

	const handleUpdateCustomer = async () => {
		console.log('customerDetails', customerDetails);
		setLoading(true);
		let formData = {
			...customerDetails.customerDetails,
			contactDetails: {
				...customerDetails.contactDetails,
				employeeRoleId: customerDetails.contactDetails.employeeId
			},
			addressDetails: customerDetails.addressDetails
		};
		console.log('formData', formData);
		// formData.contactDetails['employeeRoleId'] = formData.contactDetails.employeeId;
		const response = await dispatch(saveCustomerDetails(formData));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				dispatch(getCustomersList()); // Refresh customer list
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

	return (
		<div className="px-2 lg:px-4">
			{/* 4 BUTTONS */}
			<div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
				{
					!isView && (
						<CustomButton1
							label={"Add"}
							icon={<IoMdAdd />}
							className="bg-sixt text-white shrink grow md:grow-0 min-w-[30px]"
							onClick={() => setPopupContactAdd(true)}
							disabled={loading}
						/>
					)
				}

				<div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
					<input
						type="text"
						className="w-[120px] grow capitalize bg-transparent "
						placeholder="Search"
					/>
					<AiOutlineSearch className="min-w-[20px]" />
				</div>
			</div>

			{/* TABLE */}
			<div className="mt-7 max-w-[100vw] overflow-auto table-container">
				<table className="w-full custom-table" border={1}>
					<thead>
						<tr className="table-heading">
							<td className="">S.No.</td>
							<td>Company Name</td>
							<td>State</td>
							<td>Region</td>
							<td>District</td>
							<td>Area</td>
							<td>Pincode</td>
							<td>Status</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{
							customerDetails.addressDetails?.map((item, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>Lorem ipsum</td>
									<td>{item.stateName}</td>
									<td>{item.regionName}</td>
									<td>{item.districtName}</td>
									<td>{item.areaName}</td>
									<td>{item.pincode}</td>
									<td>
										<h2>
											{ item.isActive ? "Active" : "Inactive"}
										</h2>
									</td>
									<td>
										<div>
											<CustomButton1
												icon={<AiTwotoneEdit />}
												className="bg-sixt text-white grow min-w-[30px]"
												onClick={() => setEditItem(item)}
											/>
										</div>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
			<div className="flex justify-between pt-5">
				<CustomButton1 label={"Back"} onClick={handleBackTab} disabled={loading} />
				{
					!isView && (
						<CustomButton1
							label={"Submit"}
							disabled={loading}
							onClick={handleUpdateCustomer}
						/>
					)
				}
			</div>

			{/* POPUP 1 : ADD */}
			<AddAddressDetailPopUp
				isVisible={popupContactAdd}
				onClose={() => setPopupContactAdd(false)}
			/>

			{/* POPUP 1 : Edit */}
			<EditAddressDetailPopUp
				isVisible={editItem}
				onClose={() => setEditItem(false)}
			/>
		</div>
	)
};
