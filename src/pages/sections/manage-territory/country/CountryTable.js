// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { BiEdit } from "react-icons/bi";
// import CustomButton1 from "../../../components/CustomButton1.component";
// import { EditCountryPopUp } from "./EditCountryPopUp";

// export const CountryTable = () => {
// 	const country = useSelector(state => state.territory.country);
// 	const [editItem, setEditItem] = useState(false);

// 	return (
// 		<div className="mt-7 max-w-[100vw] overflow-auto table-container">
// 			<table className="w-full custom-table" border={1}>
// 				<thead>
// 					<tr className="table-heading">
// 						<td className="">S.No.</td>
//                         <td>Id</td>
// 						<td>Country</td>
// 						<td>Created By</td>
//                         <td>Created Date</td>
// 						<td>Status</td>
// 						<td>Action</td>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{
// 						country?.map((item, index) => (
// 							<tr key={item.countryId}>
// 								<td>{index + 1}</td>
//                                 <td>123</td>
//                                 <td>India</td>
// 								<td>{item.createdBy}</td>
// 								<td>{item.createdDate}</td>
// 								<td>
// 									<div>
// 										<h2>{item.isActive ? 'Active' : 'Inactive'}</h2>
// 									</div>
// 								</td>
// 								<td>
// 									<div>
// 										<CustomButton1
// 											icon={<BiEdit />}
// 											className="bg-sixt text-white grow max-w-[120px]"
// 											onClick={() => setEditItem(item)}
// 										/>
// 									</div>
// 								</td>
// 							</tr>
// 						))
// 					}
// 				</tbody>
// 			</table>

// 			{/* POPUP 2 : EDIT */}
// 			<EditCountryPopUp
// 				isVisible={editItem}
// 				onCancel={() => setEditItem(false)}
// 			/>
// 		</div>
// 	);
// };
