import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getBloodGroupList, saveBloodGroupDetails } from '../../../redux/apis';
import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from '../../components/CustomCheckBox2.component';
import CustomTextField2 from '../../components/CustomTextField2.component';
import PopUp from '../../components/PopUp.componenet';

export const EditBloodGroupPopUp = (props) => {
	const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
	const [bloodGroupName, setBloodGroupName] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (props.isVisible) {
			setBloodGroupName(props.isVisible.bloodGroup);
			setIsActive(props.isVisible.isActive);
		} 
	}, [props.isVisible]);

	const onChangeText = (e) => {
		setBloodGroupName(e.target.value);
	}

	const onSave = async () => {
		if (bloodGroupName === '' || bloodGroupName === undefined || bloodGroupName === null) {
			toast.error("Please enter blood group");
			return;
		}
		setLoading(true); 
		const bloodGroupId = props.isVisible.bloodGroupId;
		const response = await dispatch(saveBloodGroupDetails({ bloodGroupId, bloodGroupName, isActive }));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getBloodGroupList()); // Refresh blood groups list
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
				<div className="flex bg-first p-2 text-white justify-between rounded-t-lg">
					<h1 className=" font-weight-[400]">Edit Blood Group</h1>
					<div className="flex items-center text-sm">
					</div>
				</div>

				<div className="p-2 mx-auto popup-table">
					<table className="max-w-full">
						<tbody>
							<tr>
								<td>
									<CustomTextField2
										value={bloodGroupName}
										label={"Blood Group"}
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
