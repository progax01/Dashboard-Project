import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditRegionPopUp } from "./EditRegionPopUp";

export const RegionsTable = () => {
	const regions = useSelector(state => state.territory.regions);
	const [editItem, setEditItem] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw] overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">S.No.</td>
						<td>State Name</td>
						<td>Region</td>
						<td>Status</td>
						<td>Created By</td>
						<td>Created Date</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						regions?.map((item, index) => (
							<tr key={item.regionId}>
								<td>{index + 1}</td>
								<td>{item.stateName}</td>
								<td>{item.regionName}</td>
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
											icon={<BiEdit />}
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

			{/* POPUP 2 : EDIT */}
			<EditRegionPopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/>
		</div>
	);
};
