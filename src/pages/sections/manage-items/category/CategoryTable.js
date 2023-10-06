import React, { useState } from "react";
import { useSelector } from 'react-redux';
import moment from "moment";
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditCategoryPopUp } from "./EditCategoryPopUp";
import { BsEyeFill } from "react-icons/bs";

export const CategoryTable = () => {
	const categories = useSelector(state => state.administrator?.categories);
	const [editItem, setEditItem] = useState(false);
	const [isView, setIsView] = useState(false);
	return (
		<div className="mt-7 max-w-[100vw] hide-scrollbar overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
					<td className="">S. No</td>
					<td>Category</td>
					<td>Status</td>
					<td>Created By</td>
					<td>Created Date</td>
					<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						categories?.map((category) => (
							<tr key={`${category.categoryId}`}>
								<td>{category.categoryId}</td>

								<td>{category.categoryName}</td>
								<td>
									<div>
										<h2>{category.isActive ? 'Active' : 'Inactive'}</h2>
									</div>
								</td>
								<td>{category.creatorName}</td>
								<td>{moment(category.createdOn).format("DD-MM-YYYY")}</td>

								<td>
									<div>
										<CustomButton1
											className="bg-sixt text-white grow min-w-[30px]"
											icon={<BiEdit />}
											onClick={() => setEditItem(category)}
										/>
										 {/* <CustomButton1
                                        className="bg-eye text-white grow min-w-[30px]"
                                        icon={<BsEyeFill />}
										onClick={() => {
											setEditItem(category);
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
			<EditCategoryPopUp
				isVisible={editItem}
				isView={isView}
				onCancel={() => {setEditItem(false);
					setIsView(false);
				}}
			/>
		</div>
	)
};
