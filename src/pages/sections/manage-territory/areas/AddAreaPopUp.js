import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PopUp from "../../../components/PopUp.componenet";
import CustomButton1 from "../../../components/CustomButton1.component";
import CustomSelect1 from "../../../components/CustomSelect1.component";
import CustomTextField2 from "../../../components/CustomTextField2.component";
import CustomCheckBox2 from "../../../components/CustomCheckBox2.component";
import { getAreasList, getDistrictForSelectList, getRegionsForSelectList, saveArea } from "../../../../redux/apis";

export const AddAreaPopUp = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(state => state.territory.states);
	const regions = useSelector(state => state.masterData.regions);
	const districts = useSelector(state => state.masterData.districts);
	const [isActive, setIsActive] = useState(true);
	const [stateId, setStateId] = useState('');
	const [regionId, setRegionId] = useState('');
	const [districtId, setDistrictId] = useState('');
	const [areaName, setAreaName] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (stateId) {
			dispatch(getRegionsForSelectList({ stateId, isActive: true })); // Get regions for selected state
		}
	}, [stateId, dispatch]);

	useEffect(() => {
		if (regionId) {
			dispatch(getDistrictForSelectList({ regionId, isActive: true })); // Get districts for selected state
		}
	}, [regionId, dispatch]);

	const onChangeText = (e) => {
		setAreaName(e.target.value);
	}

	const onChangeState = (e) => {
		setStateId(e.target.value);
		// dispatch(getRegionsForSelectList({ stateId: Number(e.target.value), isActive: true })); // Get regions for selected state
	}

	const onChangeRegion = (e) => {
		setRegionId(e.target.value);
	}

	const onChangeDistrict = (e) => {
		setDistrictId(e.target.value);
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
		if (districtId === '' || districtId === undefined || districtId === null) {
			toast.error("Please select region");
			return;
		}
		if (areaName === '' || areaName === undefined || areaName === null) {
			toast.error("Please enter area name");
			return;
		}
		setLoading(true);
		const response = await dispatch(saveArea({ stateId, regionId, districtId, areaName, isActive }));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getAreasList()); // Refresh areas list
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
					<h1 className="text-l font-weight-[300]">Add Area</h1>
					<div className="flex items-center text-sm">
						
					</div>
				</div>

				<div className="p-4 mx-auto">
					<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
						<div className="py-2">
							<CustomSelect1
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
						</div>
						<div className="py-2">
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
						</div>
						<div className="py-2">
							<CustomSelect1
								value={districtId}
								label={"District"}
								onChange={onChangeDistrict}
								disabled={!regionId}
							>
								{
									districts?.map((item) => (
										<option key={item.value} value={item.value}>
											{item.text}
										</option>
									))
								}
							</CustomSelect1>
						</div>
						<div className="py-2">
							<CustomTextField2
								value={areaName}
								label={"Area Name"}
								placeholder={"Enter"}
								onChange={onChangeText}
							/>
						</div>
						<div className="py-2">
							<CustomCheckBox2
								label={"Status"}
								state={isActive}
								setState={setIsActive}
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-center gap-5">
					<div>
						<CustomButton1
							onClick={onSave}
							label={"Submit"}
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
