import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditDistrictPopUp } from "./EditDistrictPopUp";
import { BsEyeFill } from "react-icons/bs";

export const DistrictsTable = () => {
	const districts = useSelector(state => state.territory.districts);
	const [editItem, setEditItem] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw]  overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">S.No.</td>
						<td>State Name</td>
						<td>Region</td>
						<td>District</td>
						<td>Status</td>
						<td>Created By</td>
						<td>Created Date</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						districts?.map((item, index) => (
							<tr key={item.districtId}>
								<td>{index + 1}</td>
								<td>{item.stateName}</td>
								<td>{item.regionName}</td>
								<td>{item.districtName}</td>
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
			<EditDistrictPopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/>
		</div>
	);
};
