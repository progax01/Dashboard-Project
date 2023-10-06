import React, { useState } from "react";
import { useSelector } from 'react-redux';
import moment from "moment";
import { BiEdit } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditSeriesPopUp } from "./EditSeriesPopUp";

export const SeriesTable = () => {
	const series = useSelector(state => state.administrator?.series);
	const [editItem, setEditItem] = useState(false);
	const [isView, setIsView] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw] hide-scrollbar overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
					<td className="">S. No</td>
					<td>Series</td>
					<td>Status</td>
					<td>Created By</td>
					<td>Created Date</td>
					<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						series?.map((item) => (
							<tr key={`${item.seriesId}`}>
								<td>{item.seriesId}</td>

								<td>{item.seriesName}</td>
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
										 {/* <CustomButton1
                                        className="bg-eye text-white grow min-w-[30px]"
                                        icon={<BsEyeFill />}
										onClick={() => {
											setEditItem(item);
											setIsView(true)
										}}
                                    /> */}
									</div>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
			{/* POPUP 2 : EDIT */}
			<EditSeriesPopUp
				isVisible={editItem}
				isView={isView}
				onCancel={() => {setEditItem(false);
					setIsView(false);}}
				
			/>
		</div>
	)
};
