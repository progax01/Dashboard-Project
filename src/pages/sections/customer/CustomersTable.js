import React, { useState } from "react";
import moment from "moment";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai"
import CustomButton1 from "../../components/CustomButton1.component";
import { EditCustomerPopUp } from "./EditCustomerPopUp";
import { BsEyeFill } from "react-icons/bs";

export const CustomersTable = () => {
	const navigate = useNavigate();
	const customers = useSelector(state => state.customer.customers);
    const [editItem, setEditItem] = useState(false);

	return (
		<div className="mt-7 max-w-[98vw]  overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td>S.No</td>
						<td>Action</td>
						<td>Customer Name</td>
						<td>Landline # </td>
						<td>Mobile #</td>
						<td>Email</td>
						<td>Customer Type</td>
						<td>Special Remark</td>
						<td>Employee Role</td>
						<td>Employee Name</td>
						<td>Company Address</td>
						<td>State</td>
						<td>Region</td>
						<td>District</td>
						<td>Area</td>
						<td>Created By</td>
						<td>Created Date</td>
						<td>Status</td>
					</tr>
				</thead>
				<tbody>
					{
						customers?.map((customer, index) => (
							<tr key={customer.customerId}>
								<td>{index + 1}</td>
								<td>
									<div className="flex gap-3">
										<CustomButton1
											icon={<BiEdit />}
											className="bg-sixt text-white grow min-w-[30px]"
											onClick={() => navigate(`/admin/customer/${customer.customerId}`)}
										/>
									 	<CustomButton1
											className="bg-sixt text-white grow min-w-[30px]"
											icon={<BsEyeFill />}
											onClick={() => navigate(`/admin/customer-view/${customer.customerId}`)}
										/>
									</div>
								</td>
								<td>{customer.companyName}</td>
								<td>{customer.landlineNo}</td>
								<td>{customer.mobileNumber}</td>
								<td>{customer.emailId}</td>
								<td>{customer.customerTypeName}</td>
								<td>{customer.specialRemarks}</td>
								<td>Lorem Lorem</td>
								<td>{customer.employeeName}</td>
								<td>Lorem Lorem</td>
								<td>Lorem Lorem</td>
								<td>Lorem Lorem</td>
								<td>Lorem Lorem</td>
								<td>Lorem Lorem</td>
								<td>{customer.creatorName}</td>
								<td>{moment(customer.createdOn).format("DD-MM-YYYY")}</td>
								<td>{customer.isActive ? 'Active' : 'Inactive'}</td>
							</tr>
						))
					}
				</tbody>
			</table>

			{/* PopUp Box 2 : Edit */}
			<EditCustomerPopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/>
		</div>
	);
};
