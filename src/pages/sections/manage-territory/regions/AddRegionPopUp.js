import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PopUp from "../../../components/PopUp.componenet";
import CustomButton1 from "../../../components/CustomButton1.component";
import CustomSelect1 from "../../../components/CustomSelect1.component";
import CustomTextField2 from "../../../components/CustomTextField2.component";
import CustomCheckBox2 from "../../../components/CustomCheckBox2.component";
import { getRegionsList, saveRegion } from "../../../../redux/apis";

export const AddRegionPopUp = (props) => {
	const dispatch = useDispatch();
	const states = useSelector(state => state.territory.states);
	const [isActive, setIsActive] = useState(true);
	const [regionName, setRegionName] = useState('');
	const [stateId, setStateId] = useState('');
	const [loading, setLoading] = useState(false);

	if (!props.isVisible) {
		return null;
	}

	const onChangeText = (e) => {
		setRegionName(e.target.value);
	}

	const onChangeState = (e) => {
		setStateId(e.target.value);
	}

	const onSave = async () => {
		if (stateId === '' || stateId === undefined || stateId === null) {
			toast.error("Please select state");
			return;
		}
		if (regionName === '' || regionName === undefined || regionName === null) {
			toast.error("Please enter region name");
			return;
		}
		setLoading(true);
		const response = await dispatch(saveRegion({ stateId, regionName, isActive }));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getRegionsList()); // Refresh region list
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
					<h1 className="text-l font-weight-[300]">Add Region</h1>
					<div className="flex items-center text-sm">
						
					</div>
				</div>

				<div className="p-2 mx-auto">
					<table className="max-w-full popup-table">
						<tbody>
							<tr>
								<td>
									<CustomSelect1
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
