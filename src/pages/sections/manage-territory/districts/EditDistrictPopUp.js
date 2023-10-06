import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PopUp from "../../../components/PopUp.componenet";
import CustomButton1 from "../../../components/CustomButton1.component";
import CustomSelect1 from "../../../components/CustomSelect1.component";
import CustomTextField2 from "../../../components/CustomTextField2.component";
import CustomCheckBox2 from "../../../components/CustomCheckBox2.component";
import { getDistricstList, getRegionsForSelectList, saveDistrict } from "../../../../redux/apis";

export const EditDistrictPopUp = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(state => state.territory.states);
	const regions = useSelector(state => state.masterData.regions);
	const [isActive, setIsActive] = useState(true);
	const [districtName, setDistrictName] = useState('');
	const [stateId, setStateId] = useState('');
	const [regionId, setRegionId] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (props.isVisible) {
			const districtData = props.isVisible;
			console.log('districtData', districtData);
			setDistrictName(districtData.districtName);
			setRegionId(districtData.regionId);
			setIsActive(districtData.isActive);
			setStateId(districtData.stateId);
		} 
	}, [props.isVisible]);

	useEffect(() => {
		if (stateId) {
			dispatch(getRegionsForSelectList({ stateId, isActive: true })); // Get regions for selected state
		}
	}, [stateId]);

	const onChangeText = (e) => {
		setDistrictName(e.target.value);
	}

	const onChangeState = (e) => {
		setStateId(e.target.value);
	}

	const onChangeRegion = (e) => {
		setRegionId(e.target.value);
	}

	const onSave = async () => {
		if (stateId === '' || stateId === undefined || stateId === null) {
			toast.error("Please select state");
			return;
		}
		if (regionId === '' || regionId === undefined || regionId === null) {
			toast.error("Please select region");
			return;
		}
		if (districtName === '' || districtName === undefined || districtName === null) {
			toast.error("Please enter district name");
			return;
		}
		setLoading(true);
		const districtId = props.isVisible.districtId;
		const response = await dispatch(saveDistrict({ districtId, stateId, regionId, districtName, isActive }));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getDistricstList()); // Refresh district list
			} else {
				toast.error(response.payload.message);
			}
		} else {
			toast.error(response.payload.message);
		}
	}

	if (!props.isVisible) {
		return null;
	}

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
				<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-l font-weight-[300]">Edit District</h1>
					<div className="flex items-center text-sm">
				
					</div>
				</div>

				<div className="p-2 mx-auto">
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
												<option key={state.stateId} value={state.stateId}>
													{state.stateName}
												</option>
											))
										}
									</CustomSelect1>
								</td>
								<td>
									<CustomSelect1
										value={regionId}
										label={"Region"}
										onChange={onChangeRegion}
										disabled={!stateId}
									>
										{
											regions?.map((item) => (
												<option key={item.value} value={item.value}>
													{item.text}
												</option>
											))
										}
									</CustomSelect1>
								</td>
								<td>
									<CustomTextField2
										value={districtName}
										label={"District Name"}
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
