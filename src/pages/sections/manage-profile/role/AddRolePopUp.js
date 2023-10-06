import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getRolesList, saveRoleDetails } from '../../../../redux/apis';
import CustomButton1 from "../../../components/CustomButton1.component";
import CustomCheckBox2 from '../../../components/CustomCheckBox2.component';
import CustomTextField2 from '../../../components/CustomTextField2.component';
import PopUp from '../../../components/PopUp.componenet';

export const AddRolePopUp = (props) => {
	const dispatch = useDispatch();
	const [isActive, setIsActive] = useState(true);
	const [roleName, setRoleName] = useState('');
	const [loading, setLoading] = useState(false);

	if (!props.isVisible) {
		return null;
	}

	const onChangeText = (e) => {
		setRoleName(e.target.value);
	}

	const onSave = async () => {
		if (roleName === '' || roleName === undefined || roleName === null) {
			toast.error("Please enter role name");
			return;
		}
		setLoading(true);
		const response = await dispatch(saveRoleDetails({ roleName, isActive }));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getRolesList()); // Refresh roles list
			} else {
				toast.error(response.payload.message);
			}
		} else {
			toast.error(response.payload.message || response.payload.title);
		}
	}

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
				<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-l font-weight-[300]">Add Role</h1>
					<div className="flex items-center text-sm">
						
					</div>
				</div>

				<div className="p-2 mx-auto">
					<table className="max-w-full popup-table ">
						<tbody>
							<tr>
								<td>
									<CustomTextField2
										label={"Role Name"}
										placeholder={"Enter"}
										onChange={onChangeText}
										required
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
							label={"Submit"}
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
