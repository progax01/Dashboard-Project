import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getReportingToList, saveReportingToDetails } from '../../../../redux/apis';
import CustomButton1 from "../../../components/CustomButton1.component";
import CustomCheckBox2 from '../../../components/CustomCheckBox2.component';
import CustomSelect1 from '../../../components/CustomSelect1.component';
import PopUp from '../../../components/PopUp.componenet';

export const EditReportingToPopUp = (props) => {
	const dispatch = useDispatch();
	const roles = useSelector(state => state.profile.roles);
	const [isActive, setIsActive] = useState(false);
	const [roleId, setRoleId] = useState('');
	const [reportingToId, setReportingToId] = useState('');
	const [loading, setLoading] = useState(false);
    const isView = props.isView;
	useEffect(() => {
		if (props.isVisible === false) {
			setRoleId('');
			setReportingToId('');
		} else {
			const data = props.isVisible;
			setRoleId(data.roleId);
			setReportingToId(data.reportingTo);
			setIsActive(data.isActive);
		}
	}, [props.isVisible]);

	const onChangeRole = (e) => {
		setRoleId(e.target.value);
		setReportingToId('');
	}

	const onChangeReportingTo = (e) => {
		setReportingToId(e.target.value);
	}

	const onSave = async () => {
		if (roleId === '' || roleId === undefined || roleId === null) {
			toast.error("Please select role");
			return;
		}
		if (reportingToId === '' || reportingToId === undefined || reportingToId === null) {
			toast.error("Please select reporting to");
			return;
		}
		setLoading(true);
		const id = props.isVisible.id;
		const response = await dispatch(saveReportingToDetails({ id, roleId, reportingTo: reportingToId, isActive }));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getReportingToList()); // Refresh reporting to list
			} else {
				toast.error(response.payload.message);
			}
		} else {
			if (response.payload.data && response.payload.data.length) {
				const errorMessage = response.payload.data.map(u => u.errorMessage).join(', ');
				toast.error(errorMessage);
			} else {
				toast.error(response.payload.message || response.payload.title);
			}
		}
	}

	if (!props.isVisible) {
		return null;
	}

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
				<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-l font-weight-[300]">{isView ? "View Role Hircarrchy" : "Edit Role Hircarrchy"}</h1>
					 {/* reporting to is renamed to Role Hierarchy */}
					<div className="flex items-center text-sm">
						
					</div>
				</div>

				<div className="p-2 mx-auto">
					<table className="max-w-full popup-table ">
						<tbody>
							<tr>
								<td>
									<CustomSelect1
										value={roleId}
										label={"Role Name"}
										onChange={onChangeRole}
										disabled={isView}
									>
										{
											roles?.map((item) => (
												<option key={item.roleId} value={item.roleId}>{item.roleName}</option>
											))
										}
									</CustomSelect1>
								</td>
								<td>
									<CustomSelect1
										value={reportingToId}
										label={"Role Hircarrchy"}
										onChange={onChangeReportingTo}
										//disabled={roleId === ""}
										disabled={isView}
									>
										{
											roles
											?.filter(item => item.roleId.toString() !== roleId.toString())
											?.map((item) => (
												<option key={item.roleId} value={item.roleId}>{item.roleName}</option>
											))
										}
									</CustomSelect1>
								</td>
								<td>
									<CustomCheckBox2
										label={"Status"}
										state={isActive}
										setState={setIsActive}
										disabled={isView}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="flex justify-center gap-5">
				{!isView && (
					<div>
						<CustomButton1
							label={"Update"}
							className="text-white bg-first"
							onClick={onSave}
							loading={loading}
						/>
					</div>
				)}
					<div>
						<CustomButton1
							label={"Cancel"}
							variant="outlined"
							className="text-first"
							disabled={loading}
							onClick={props.onCancel}
						/>
					</div>
				</div>
			</div>
		</PopUp>
	)
}
