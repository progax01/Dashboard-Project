// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import PopUp from "../../../components/PopUp.componenet";
// import CustomButton1 from "../../../components/CustomButton1.component";
// import CustomSelect1 from "../../../components/CustomSelect1.component";
// import CustomTextField2 from "../../../components/CustomTextField2.component";
// import CustomCheckBox2 from "../../../components/CustomCheckBox2.component";
// import { getCountryList, saveCountry } from "../../../../redux/apis";

// export const EditCountryPopUp = (props) => {
// 	const dispatch = useDispatch();
// 	const country = useSelector(state => state.territory.country);
// 	const [isActive, setIsActive] = useState(true);
// 	const [countryName, setCountryName] = useState('');
// 	const [createdby, setCreatedby] = useState('');
//     const [createddate, setCreateddate] = useState('');
// 	const [loading, setLoading] = useState(false);

// 	useEffect(() => {
// 		if (props.isVisible) {
// 			const countryData = props.isVisible;
// 			setCountryName(countryData.countryName);
// 			setIsActive(countryData.isActive);
// 			setCreatedby(countryData.createdby);
// 		} 
// 	}, [props.isVisible]);


// 	if (!props.isVisible) {
// 		return null;
// 	}

// 	const onChangeState = (e) => {
// 		setCreatedby(e.target.value);
// 	}

// 	const onChangeText = (e) => {
// 		setCountryName(e.target.value);
// 	}

// 	const onSave = async () => {
// 		if (createdby === '' || createdby === undefined || createdby === null) {
// 			toast.error("Please select Created By");
// 			return;
// 		}
//         if (createddate === '' || createddate === undefined || createddate === null) {
// 			toast.error("Please select Created Date");
// 			return;
// 		}
// 		if (countryName === '' || countryName === undefined || countryName === null) {
// 			toast.error("Please enter Country Name");
// 			return;
// 		}
// 		setLoading(true); 
// 		const createdby = props.isVisible.createdby;
// 		const response = await dispatch(saveRegion({ createddate, createdby, countryName, isActive }));
// 		setLoading(false);
// 		if (!response.error) {
// 			if (response.payload.isSuccess) {
// 				toast.success(response.payload.message);
// 				props.onCancel(); // Close PopUp
// 				dispatch(getCountryList()); // Refresh state list
// 			} else {
// 				toast.error(response.payload.message);
// 			}
// 		} else {
// 			toast.error(response.payload.message);
// 		}
// 	}

// 	return (
// 		<PopUp>
// 			<div className="pb-10 bg-white rounded-lg">
// 			<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
// 					<h1 className="text-l font-weight-[300]">Edit Country</h1>
// 					<div className="flex items-center text-sm">
// 						<p>Manage Territory</p>
// 					</div>
// 				</div>

// 				<div className="p-5 mx-auto">
// 					<table className="max-w-full popup-table">
// 						<tbody>
// 							<tr>
// 								<td>
// 									<CustomSelect1
// 										value={createdby}
// 										label={"CreatedBy"}
// 										onChange={onChangeState}
// 									>
// 										{
// 											country?.map((state) => (
// 												<option key={state.createdby} value={state.createddate}>{state.countryName}</option>
// 											))
// 										}
// 									</CustomSelect1>
// 								</td>
// 								<td>
// 									<CustomTextField2
// 										value={countryName}
// 										label={"Country Name"}
// 										placeholder={"Enter"}
// 										onChange={onChangeText}
// 									/>
// 								</td>
//                                 <td>
// 									<CustomTextField2
// 										value={createdby}
// 										label={"Created By"}
// 										placeholder={"Enter"}
// 										onChange={onChangeText}
// 									/>
// 								</td>
//                                 <td>
// 									<CustomTextField2
// 										value={createddate}
// 										label={"Created Date"}
// 										placeholder={"Enter"}
// 										onChange={onChangeText}
// 									/>
// 								</td>
// 								<td>
// 									<CustomCheckBox2
// 										label={"Status"}
// 										state={isActive}
// 										setState={setIsActive}
// 									/>
// 								</td>
// 							</tr>
// 						</tbody>
// 					</table>
// 				</div>

// 				<div className="flex justify-center gap-5">
// 					<div>
// 						<CustomButton1
// 							onClick={onSave}
// 							label={"Update"}
// 							className="text-white bg-first"
// 							loading={loading}
// 						/>
// 					</div>
// 					<div>
// 						<CustomButton1
// 							label={"Cancel"}
// 							variant="outlined"
// 							className="text-first"
// 							disabled={loading}
// 							onClick={props.onCancel}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</PopUp>
// 	)
// };
