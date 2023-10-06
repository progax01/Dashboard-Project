import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PopUp from "../../../components/PopUp.componenet";
import CustomButton1 from "../../../components/CustomButton1.component";
import CustomTextField2 from "../../../components/CustomTextField2.component";
import CustomCheckBox2 from "../../../components/CustomCheckBox2.component";
import { getDesignTypesList, saveDesignType } from "../../../../redux/apis";

export const EditDesignTypePopUp = (props) => {
	const dispatch = useDispatch();
	const [isActive, setIsActive] = useState(true);
	const [designTypeName, setDesignTypeName] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (props.isVisible) {
			setDesignTypeName(props.isVisible.designTypeName);
			setIsActive(props.isVisible.isActive);
		} 
	}, [props.isVisible]);

	if (!props.isVisible) {
		return null;
	}

	const onChangeText = (e) => {
		setDesignTypeName(e.target.value);
	}

	const onSave = async () => {
		if (designTypeName === '' || designTypeName === undefined || designTypeName === null) {
			toast.error("Please enter design type name");
			return;
		}
		setLoading(true); 
		const designTypeId = props.isVisible.designTypeId;
		const response = await dispatch(saveDesignType({ designTypeId, designTypeName, isActive }));
		setLoading(false);
		console.log('saveDesignType response', response);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getDesignTypesList()); // Refresh design types list
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
					<h1 className="text-xl font-weight-[300]">Edit Design Type</h1>
					<div className="flex items-center text-sm">
						
					</div>
				</div>

				<div className="p-2 mx-auto">
					<table className="max-w-full popup-table">
						<tbody>
							<tr>
								<td>
									<CustomTextField2
										value={designTypeName}
										label={"Design Type"}
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
