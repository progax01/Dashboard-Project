import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditAreaPopUp } from "./EditAreaPopUp";

export const AreasTable = () => {
	const areas = useSelector(state => state.territory.areas);
	const [editItem, setEditItem] = useState(false);
	const [isView, setIsView] = useState(false);
	return (
		<div className="mt-7 max-w-[100vw]  overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">S.No.</td>
						<td>Action</td>
						<td>State Name</td>
						<td>Region</td>
						<td>District</td>
						<td>Area</td>
						<td>Status</td>
						<td>Created By</td>
						<td>Created Date</td>
					</tr>
				</thead>
				<tbody>
					{
						areas?.map((item, index) => (
							<tr key={item.areaId}>
								<td>{index + 1}</td>
								<td>
									<div>
										<CustomButton1
											icon={<BiEdit />}
											className="bg-sixt text-white grow min-w-[30px]"
											onClick={() => setEditItem(item)}
										/>
										 {/* <CustomButton1
                                        className="bg-sixt text-white grow min-w-[30px]"
                                        icon={<BsEyeFill />}
										onClick={() => {
											setEditItem(item);
											setIsView(true)
										}}
                                    /> */}
									</div>
								</td>
								<td>{item.stateName}</td>
								<td>{item.regionName}</td>
								<td>{item.districtName}</td>
								<td>{item.areaName}</td>
								<td>
									<div>
										<h2>{item.isActive ? 'Active' : 'Inactive'}</h2>
									</div>
								</td>
								<td>{item.creatorName}</td>
								<td>{moment(item.createdOn).format("DD-MM-YYYY")}</td>
							</tr>
						))
					}
				</tbody>
			</table>

			{/* POPUP 2 : EDIT */}
			<EditAreaPopUp
				isVisible={editItem}
				isView={isView}
				onCancel={() => {
					setEditItem(false);
					setIsView(false);
				}}
			/>
		</div>
	);
};
