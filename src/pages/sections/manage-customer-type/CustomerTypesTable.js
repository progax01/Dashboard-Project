import React, { useState } from 'react';
import moment from "moment";
import { useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import CustomButton1 from "../../components/CustomButton1.component";
import { EditCustomerTypePopUp } from './EditCustomerTypePopUp';

export const CustomerTypesTable = () => {
	const customerTypes = useSelector(state => state.administrator.customerTypes);
    const [editItem, setEditItem] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw] hide-scrollbar overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">No</td>
						<td>Customer Type</td>
						<td>Status</td>
						<td>Created By</td>
						<td>Created Date</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						customerTypes.map((item, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item.customerTypeName}</td>
								<td>
									<div>
										<h2>{item.isActive ? 'Active' : 'Inactive'}</h2>
									</div>
								</td>
								<td>{item.creatorName}</td>
								<td>{moment(item.createdOn).format("DD-MM-YYYY")}</td>
								<td>
									<div>
										<CustomButton1
											className="bg-sixt text-white grow min-w-[30px]"
											icon={<BiEdit />}
											onClick={() => setEditItem(item)}
										/>
										 
                                  
									</div>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
			<EditCustomerTypePopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/>
		</div>
	)
}
