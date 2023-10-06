import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../components/CustomButton1.component";
import { EditRefMasterPopUp } from "./EditRefMasterPopUp";
import { BsEyeFill } from "react-icons/bs";

export const RefMasterTable = () => {
    const references = useSelector((state) => state.administrator.references);
    const [editItem, setEditItem] = useState(false);
	const [isView, setIsView] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw]  overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">S.No</td>
						<td>Action</td>
						<td>Unique Number </td>
						<td>Ref. Party (Account name)</td>
						<td>Address</td>
						<td>City Name</td>
						<td>State</td>
						<td>Pin Code</td>
						<td>Phone(Landline)</td>
						<td>Mobile</td>
						<td>GST</td>
						<td>PAN</td>
						<td>Email</td>
                        <td>Created By</td>
                        <td>Created Date</td>
					</tr>
				</thead>
				<tbody>
					{
						references.map((item, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
                                <td>
									<div>
										<CustomButton1
											className="bg-sixt text-white grow min-w-[30px]"
											icon={<BiEdit />}
											onClick={() => setEditItem(item)}
										/>
                                        <CustomButton1
											className="bg-sixt text-white grow min-w-[30px]"
											icon={<BsEyeFill />}
											onClick={() => {
												setEditItem(item);
												setIsView(true)
											}}
										/>
									</div>
								</td>
								<td>{item.uniqueNumber}</td>
								<td>{item.referenceParty}</td>
								<td>{item.address}</td>
								<td>{item.districtName}</td>
								<td>{item.stateName}</td>
								<td>{item.pincode}</td>
								<td>{item.phoneNumber}</td>
								<td>{item.mobileNumber}</td>
								<td>{item.gstNumber}</td>
								<td>{item.panNumber}</td>
								<td>{item.emailId}</td>
								<td>Admin</td>
                                <td>10/08/23</td>
							</tr>
						))
					}
				</tbody>
			</table>
			<EditRefMasterPopUp
				isVisible={editItem}
				isView={isView}
				onCancel={() => {
					setEditItem(false);
					setIsView(false);
				}}
			/>
		</div>
	);
}