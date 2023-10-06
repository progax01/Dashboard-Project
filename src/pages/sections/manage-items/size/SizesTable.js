import React, { useState } from "react";
import { useSelector } from 'react-redux';
import moment from "moment";
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditSizePopUp } from "./EditSizePopUp";
import { BsEyeFill } from "react-icons/bs";

export const SizesTable = () => {
	const sizes = useSelector(state => state.administrator?.sizes);
	const [editItem, setEditItem] = useState(false);
	const [isView, setIsView] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw] hide-scrollbar overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
					<td className="">S. No</td>
					<td>Size</td>
					<td>Status</td>
					<td>Created By</td>
					<td>Created Date</td>
					<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						sizes?.map((size) => (
							<tr key={`${size.sizeId}`}>
								<td>{size.sizeId}</td>

								<td>{size.sizeName}</td>
								<td>
									<div>
										<h2>{size.isActive ? 'Active' : 'Inactive'}</h2>
									</div>
								</td>
								<td>{size.creatorName}</td>
								<td>{moment(size.createdOn).format("DD-MM-YYYY")}</td>
								<td>
									<div>
										<CustomButton1
											className="bg-sixt text-white grow min-w-[30px]"
											icon={<BiEdit />}
											onClick={() => setEditItem(size)}
										/>
										 {/* <CustomButton1
                                        className="bg-eye text-white grow min-w-[30px]"
                                        icon={<BsEyeFill />}
										onClick={() => {
											setEditItem(size);
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
			<EditSizePopUp
				isVisible={editItem}
				isView={isView}

				onCancel={() => {setEditItem(false);
					setIsView(false);
				}}
				
			/>
		</div>
	)
};
