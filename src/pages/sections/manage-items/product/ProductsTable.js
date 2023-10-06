import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditProductPopUp } from "./EditProductPopUp";

export const ProductsTable = () => {
	const products = useSelector(state => state.administrator?.products);
	const [editItem, setEditItem] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw] hide-scrollbar overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">No</td>
						<td>Product Name</td>
						<td>Status</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						products?.map((product, index) => (
							<tr key={index}>
								<td>{index + 1}</td>

								<td>{product.productName}</td>
								<td>
									<div>
										<h2>{product.isActive ? 'Active' : 'Inactive'}</h2>
									</div>
								</td>
								<td>
									<div>
										<CustomButton1
											
											className="bg-sixt text-white grow max-w-[120px]"
											icon={<BiEdit />}
											onClick={() => setEditItem(product)}
											// onClick={() => setPopupItemEdit(true)}
										/>
									</div>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
			{/* POPUP 2 : EDIT */}
			<EditProductPopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/>
		</div>
	)
};
