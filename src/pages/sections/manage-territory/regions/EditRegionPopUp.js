import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PopUp from "../../../components/PopUp.componenet";
import CustomButton1 from "../../../components/CustomButton1.component";
import CustomSelect1 from "../../../components/CustomSelect1.component";
import CustomTextField2 from "../../../components/CustomTextField2.component";
import CustomCheckBox2 from "../../../components/CustomCheckBox2.component";
import { getRegionsList, saveRegion } from "../../../../redux/apis";

export const EditRegionPopUp = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(state => state.territory.states);
	const [isActive, setIsActive] = useState(true);
	const [regionName, setRegionName] = useState('');
	const [stateId, setStateId] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (props.isVisible) {
			const regionData = props.isVisible;
			setRegionName(regionData.regionName);
			setIsActive(regionData.isActive);
			setStateId(regionData.stateId);
		} 
	}, [props.isVisible]);


	if (!props.isVisible) {
		return null;
	}

	const onChangeState = (e) => {
		setStateId(e.target.value);
	}

	const onChangeText = (e) => {
		setRegionName(e.target.value);
	}

	const onSave = async () => {
		if (stateId === '' || stateId === undefined || stateId === null) {
			toast.error("Please select state");
			return;
		}
		if (regionName === '' || regionName === undefined || regionName === null) {
			toast.error("Please enter state name");
			return;
		}
		setLoading(true); 
		const regionId = props.isVisible.regionId;
		const response = await dispatch(saveRegion({ stateId, regionId, regionName, isActive }));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getRegionsList()); // Refresh state list
			} else {
				toast.error(response.payload.message);
			}
		} else {
			toast.error(response.payload.message);
		}
	}

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
			<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-l font-weight-[300]">Edit Region</h1>
					<div className="flex items-center text-sm">
						
					</div>
				</div>

				<div className="p-5 mx-auto">
					<table className="max-w-full popup-table">
						<tbody>
							<tr>
								<td>
									<CustomSelect1
										value={stateId}
										label={"State"}
										onChange={onChangeState}
									>
										{
											states?.map((state) => (
												<option key={state.stateId} value={state.stateId}>{state.stateName}</option>
											))
										}
									</CustomSelect1>
								</td>
								<td>
									<CustomTextField2
										value={regionName}
										label={"Region Name"}
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
							onClick={onSave}
							label={"Update"}
							className="text-white bg-first"
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
};
