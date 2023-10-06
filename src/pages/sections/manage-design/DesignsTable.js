import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";
import CustomButton1 from "../../components/CustomButton1.component";

export const DesignsTable = () => {
	const designs = useSelector(state => state.design.designs);
    const [editItem, setEditItem] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw]  overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">S.No</td>
						<td>Action</td>
						<td>Collection</td>
						<td>Size</td>
						<td>Series</td>
						<td>Design Name</td>
						<td>Status</td>
						<td>Created Date</td>
						<td>Created By</td>
					</tr>
				</thead>
				<tbody>
					{
						designs.map((item, index) => (
							<tr key={index}>
								<td>1</td>
								<td>
									<div className="gap-1">
										<CustomButton1
											icon={<BiEdit />}
											className="bg-sixt text-white grow max-w-[50px]"
											onClick={() => setEditItem(item)}
										/>
										<CustomButton1
											icon={<AiOutlineEye />}
											className="bg-sixt text-white grow max-w-[50px]"
											onClick={() => setEditItem(item)}
										/>
									</div>
								</td>
								<td>Lorem ipsum</td>
								<td>Lorem ipsum dolor sit amet </td>
								<td>Lorem ipsum dolor sit amet </td>
								<td>Lorem ipsum</td>
								<td>Lorem ipsum</td>
								<td>Lorem ipsum</td>
								<td>Active</td>
							
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	);
};
