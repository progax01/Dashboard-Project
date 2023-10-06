import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditReportingToPopUp } from "./EditReportingToPopUp";
import { BsEyeFill } from "react-icons/bs";

export const ReportingToTable = () => {
	const reportingToList = useSelector(state => state.profile.reportingToList);
    const [editItem, setEditItem] = useState(false);
	const [isView, setIsView] = useState(false);
	return (
		<div className="mt-7 max-w-[100vw]  overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">S.No.</td>
						<td>Role Name</td>
						<td>Role Hierarchy</td>
						<td>Status</td>
						<td>Created By</td>
						<td>Created Date</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						reportingToList.map((item, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item.roleName}</td>
								<td>{item.reportingToName}</td>
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
							</tr>
						))
					}
				</tbody>
			</table>
			<EditReportingToPopUp
				isVisible={editItem}
				onCancel={() => {setEditItem(false);
					setIsView(false);
				}}
			/>
		</div>
	);
};
