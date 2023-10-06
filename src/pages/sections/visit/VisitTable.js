 import React, { useState } from 'react';
import moment from 'moment';
import { AiOutlineEye } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import CustomButton1 from '../../components/CustomButton1.component';
import { EditVisitPopUp } from './EditVisitPopUp';

export const VisitTable = () => {
	const visits = useSelector(state => state.visit.visits);
	const [editItem, setEditItem] = useState(false);
	const [isView, setIsView] = useState(false);

	const getDifference = (item) => {
		const date1 = moment(item.nextActionDate);
		const date2 = moment(item.visitDate);
		const days = date1.diff(date2, 'days');
		return days;
	};

	return (
		<div className="mt-7 max-w-[100vw]  overflow-auto table-container">
			<table className="w-full custom-table gap-4" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">S.No</td>
						<td>Action</td>
						<td>Visits No</td>
						<td>Employee Name</td>
						<td>Customer Name</td>
						<td>Visit Date</td>
						<td>Next Action Date</td>
						<td>Status</td>
						<td>Data Range</td>
						<td>Created By</td>
						<td>Created Date</td>
					</tr>
				</thead>
				<tbody>
					{
						visits.map((item, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td className="flex gap-3">
									{/* <CustomButton1
										icon={<BiEdit />}
										className="bg-sixt text-white grow min-w-[30px]"
										onClick={() => setEditItem(item)}
									/> */}
									<CustomButton1
										className="bg-sixt text-white grow min-w-[30px]"
										icon={<AiOutlineEye />}
										onClick={() => {
											setEditItem(item);
											setIsView(true);
										}}
									/>
								</td>
								<td>{item.visitNo}</td>
								<td>{item.employeeName}</td>
								<td>{item.customerName}</td>
								<td>{moment(item.visitDate).format("DD-MM-YYYY")}</td>
								<td>{moment(item.nextActionDate).format("DD-MM-YYYY")}</td>
								<td>
									<h2>{item.isActive ? 'Active' : 'Inactive'}</h2>
								</td>
								<td>{getDifference(item)}</td>
								<td>{item.creatorName}</td>
								<td>{moment(item.createdOn).format("DD-MM-YYYY")}</td>
							</tr>
						))
					}
				</tbody>
			</table>
			<EditVisitPopUp
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