import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineSetting } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditRolePopUp } from "./EditRolePopUp";
import { BsEyeFill } from "react-icons/bs";

export const RolesTable = () => {
	const navigate = useNavigate();
	const roles = useSelector(state => state.profile.roles);
    const [editItem, setEditItem] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw]  overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">S.No</td>
						<td>Role Name</td>
						<td>Status</td>
						<td>Created By</td>
						<td>Created Date</td>
						<td>Action</td>
						<td>Manage Access</td>
					</tr>
				</thead>
				<tbody>
					{
						roles.map((item, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item.roleName}</td>
								<td>
									<div>
										<h2>{item.isActive ? 'Active' : 'Inactive'}</h2>
									</div>
								</td>
								<td>{item.creatorName}</td>
								<td>{moment(item.createdOn).format("DD-MM-YYYY")}</td>
								<td>
									<div className="gap-2">
										<CustomButton1
											className="bg-sixt text-white grow min-w-[30px]"
											icon={<BiEdit />}
											onClick={() => setEditItem(item)}
										/>
									 
									</div>
								</td>
								<td>
								<CustomButton1
										 
										 className="bg-[#979799] text-white grow max-w-[30px]"
										 icon={<AiOutlineSetting />}
										 onClick={() => navigate("/admin/role-permission")}
									 />
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
			<EditRolePopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/>
		</div>
	);
};
