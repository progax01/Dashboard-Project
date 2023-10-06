import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getLeaveTypesList, saveLeaveType } from '../../../redux/apis/leave-type';
import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from '../../components/CustomCheckBox2.component';
import CustomTextField2 from '../../components/CustomTextField2.component';
import PopUp from '../../components/PopUp.componenet';

export const EditLeaveTypePopUp = (props) => {
	const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
	const [leaveTypeName, setLeaveTypeName] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (props.isVisible) {
			setLeaveTypeName(props.isVisible.leaveTypeName);
			setIsActive(props.isVisible.isActive);
		} 
	}, [props.isVisible]);

	const onChangeText = (e) => {
		setLeaveTypeName(e.target.value);
	}

	const onSave = async () => {
		if (leaveTypeName === '' || leaveTypeName === undefined || leaveTypeName === null) {
			toast.error("Please enter leave type name");
			return;
		}
		setLoading(true); 
		const leaveTypeId = props.isVisible.leaveTypeId;
		const response = await dispatch(saveLeaveType({ leaveTypeId, leaveTypeName, isActive }));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getLeaveTypesList()); // Refresh leave types list
			} else {
				toast.error(response.payload.message);
			}
		} else {
			toast.error(response.payload.message || response.payload.title);
		}
	}

	if (!props.isVisible) {
		return null;
	}

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
				<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-l font-weight-[300]">Edit Leave Type</h1>
					<div className="flex items-center text-sm">
						
					</div>
				</div>

				<div className="p-2 mx-auto popup-table">
					<table className="max-w-full">
						<tbody>
							<tr>
								<td>
									<CustomTextField2
										value={leaveTypeName}
										label={"Leave Type"}
										placeholder={"Enter"}
										onChange={onChangeText}
									/>
								</td>
								<td>
									<CustomCheckBox2
										label={"Status"}
										state={isActive}
										setState={setIsActive}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="flex justify-center gap-5">
					<div>
						<CustomButton1
							label={"Update"}
							className="text-white bg-first"
							onClick={onSave}
							loading={loading}
						/>
					</div>
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
