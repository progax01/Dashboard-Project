import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import CustomButton1 from "../../../components/CustomButton1.component";
import { EditStatePopUp } from "./EditStatePopUp";

export const StatesTable = () => {
	const states = useSelector(state => state.territory.states);
	const [editItem, setEditItem] = useState(false);

	return (
		<div className="mt-7 max-w-[100vw] overflow-auto table-container">
			<table className="w-full custom-table" border={1}>
				<thead>
					<tr className="table-heading">
						<td className="">S.No.</td>
						<td>State Name</td>
						<td>Status</td>
						<td>Created By</td>
						<td>Created Date</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{
						states?.map((state, index) => (
							<tr key={state.stateId}>
								<td>{index + 1}</td>
								<td>{state.stateName}</td>
								<td>
									<div>
										<h2>{state.isActive ? 'Active' : 'Inactive'}</h2>
									</div>
								</td>
								<td>{state.creatorName}</td>
								<td>{moment(state.createdOn).format("DD-MM-YYYY")}</td>
								<td>
									<div>
										<CustomButton1
											icon={<BiEdit />}
											className="bg-sixt text-white grow min-w-[30px]"
											onClick={() => setEditItem(state)}
										/>
									</div>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>

			{/* POPUP 2 : EDIT */}
			<EditStatePopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/>
		</div>
	);
};
