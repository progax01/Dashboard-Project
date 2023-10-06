import React, { useState } from "react";
import { useSelector } from 'react-redux';
import moment from "moment";
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditBaseDesignPopUp } from "./EditBaseDesignPopUp";

export const BaseDesignTable = () => {
	const baseDesigns = useSelector(state => state.administrator?.baseDesigns);
	const [editItem, setEditItem] = useState(false);
	const [isView, setIsView] = useState(false);
	return (
		<div className="mt-7 max-w-[100vw] hide-scrollbar overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
					<td className="">S. No</td>
					<td>Design Name</td>
					<td>Status</td>
					<td>Created By</td>
					<td>Created Date</td>
					<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						baseDesigns?.map((item) => (
							<tr key={`${item.baseDesignId}`}>
								<td>{item.baseDesignId}</td>

								<td>{item.baseDesignName}</td>
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
                                        className="bg-sixt text-white grow min-w-[30px]"
                                        icon={<BsEyeFill />}
										onCancel={() => {
											setEditItem(item);
											setIsView(true);
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
			<EditBaseDesignPopUp
				isVisible={editItem}
				isView={isView}
				onCancel={() => {
					setEditItem(false);
					setIsView(false);
				}}
			/>
		</div>
	)
};
