import React, { useState } from "react";
import { AiOutlineSearch, AiTwotoneEdit } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import CustomButton1 from "../../components/CustomButton1.component";
import { AddContactDetailPopUp } from "./AddContactDetailPopUp";
import { EditContactDetailPopUp } from "./EditContactDetailPopUp";

export const ContactDetails = ({
	isView,
	handleBackTab,
	handleNextTab
}) => {
	const customerDetails = useSelector(state => state.customer.customerDetails);
	const [popupContactAdd, setPopupContactAdd] = useState(false);
    const [editItem, setEditItem] = useState(false);

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
							<td>Contact Name</td>
							<td>Mobile</td>
							<td>Email ID</td>
							<td>Is Default</td>
							<td>Created By</td>
							<td>Created Date</td>
							<td>Modified By</td>
							<td>Modified Date</td>
							<td>Status</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{
							customerDetails.contactDetails?.map((item, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{item.contactName}</td>
									<td>{item.mobileNo}</td>
									<td>{item.emailId}</td>
									<td>Lorem ipsum </td>
									<td>Lorem ipsum </td>
									<td>Lorem ipsum </td>
									<td>Lorem ipsum </td>
									<td>Lorem ipsum </td>
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
				<CustomButton1 label={"Back"} onClick={handleBackTab} />
				{
					!isView && <CustomButton1 label={"Next"} className="text-white bg-first" onClick={handleNextTab} />
				}
			</div>

			{/* POPUP 1 : ADD */}
			<AddContactDetailPopUp
				isVisible={popupContactAdd}
				onClose={() => setPopupContactAdd(false)}
			/>

			{/* POPUP 1 : EDIT */}
			<EditContactDetailPopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/>
		</div>
	)
};
