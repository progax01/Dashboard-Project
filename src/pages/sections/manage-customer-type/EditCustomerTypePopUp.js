import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getCustomerTypesList, saveCustomerType } from '../../../redux/apis';
import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from '../../components/CustomCheckBox2.component';
import CustomTextField2 from '../../components/CustomTextField2.component';
import PopUp from '../../components/PopUp.componenet';

export const EditCustomerTypePopUp = (props) => {
	const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
	const [customerTypeName, setCustomerTypeName] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (props.isVisible) {
			setCustomerTypeName(props.isVisible.customerTypeName);
			setIsActive(props.isVisible.isActive);
		} 
	}, [props.isVisible]);

	if (!props.isVisible) {
		return null;
	}

	const onChangeText = (e) => {
		setCustomerTypeName(e.target.value);
	}

	const onSave = async () => {
		if (customerTypeName === '' || customerTypeName === undefined || customerTypeName === null) {
			toast.error("Please enter customer type name");
			return;
		}
		setLoading(true); 
		const customerTypeId = props.isVisible.customerTypeId;
		const response = await dispatch(saveCustomerType({ customerTypeId, customerTypeName, isActive }));
		setLoading(false);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getCustomerTypesList()); // Refresh customer types list
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

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
				<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-xl font-weight-[300]">Edit Customer Type</h1>
					<div className="flex items-center text-sm">
					
					</div>
				</div>

				<div className="p-2 mx-auto">
					<table className="max-w-full popup-table ">
						<tbody>
							<tr>
								<td>
									<CustomTextField2
										value={customerTypeName}
										label={"Customer Type"}
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
