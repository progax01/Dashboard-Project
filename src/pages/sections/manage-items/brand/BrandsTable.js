import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditBrandPopUp } from "./EditBrandPopUp";

export const BrandsTable = () => {
	const brands = useSelector(state => state.administrator?.brands);
	const [editItem, setEditItem] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw] hide-scrollbar overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
					<td className="">S. No</td>
					<td>Brand</td>
					<td>Status</td>
					<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						brands?.map((brand) => (
							<tr key={`${brand.brandId}`}>
								<td>{brand.brandId}</td>

								<td>{brand.brandName}</td>
								<td>
									<div>
										<h2>{brand.isActive ? 'Active' : 'Inactive'}</h2>
									</div>
								</td>
								<td>
									<div>
										<CustomButton1
											className="bg-sixt text-white grow max-w-[120px]"
											icon={<BiEdit />}
											onClick={() => setEditItem(brand)}
										/>
									</div>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
			<EditBrandPopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/>
		</div>
	)
};
