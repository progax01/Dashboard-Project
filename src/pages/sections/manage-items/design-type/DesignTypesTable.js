import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditDesignTypePopUp } from "./EditDesignTypePopUp";

export const DesignTypesTable = () => {
	const designTypes = useSelector(state => state.administrator?.designTypes);
	const [editItem, setEditItem] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw] hide-scrollbar overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
					<td className="">S. No</td>
					<td>Design Type</td>
					<td>Status</td>
					<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						designTypes?.map((item) => (
							<tr key={`${item.designTypeId}`}>
								<td>{item.designTypeId}</td>

								<td>{item.designTypeName}</td>
								<td>
									<div>
										<h2>{item.isActive ? 'Active' : 'Inactive'}</h2>
									</div>
								</td>
								<td>
									<div>
										<CustomButton1
											className="bg-sixt text-white grow max-w-[120px]"
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

			{/* POPUP 2 : EDIT */}
			<EditDesignTypePopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/>
		</div>
	)
};
