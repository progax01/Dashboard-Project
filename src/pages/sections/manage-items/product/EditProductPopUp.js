import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PopUp from "../../../components/PopUp.componenet";
import CustomButton1 from "../../../components/CustomButton1.component";
import CustomTextField2 from "../../../components/CustomTextField2.component";
import CustomCheckBox2 from "../../../components/CustomCheckBox2.component";
import { getProductsList, saveProduct } from "../../../../redux/apis";

export const EditProductPopUp = (props) => {
	const dispatch = useDispatch();
	const [isActive, setIsActive] = useState(true);
	const [productName, setProductName] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (props.isVisible) {
			setProductName(props.isVisible.productName);
			setIsActive(props.isVisible.isActive);
		} 
	}, [props.isVisible])

	if (!props.isVisible) {
		return null;
	}

	const onChangeText = (e) => {
		setProductName(e.target.value);
	}

	const onSave = async () => {
		if (productName === '' || productName === undefined || productName === null) {
			toast.error("Please enter product name");
			return;
		}
		setLoading(true); 
		const response = await dispatch(saveProduct({ productId: props.isVisible.productId, productName, isActive }));
		setLoading(false);
		console.log('response', response);
		if (!response.error) {
			if (response.payload.isSuccess) {
				toast.success(response.payload.message);
				props.onCancel(); // Close PopUp
				dispatch(getProductsList()); // Refresh product list
			} else {
				toast.error(response.payload.message);
			}
		} else {
			// Todo: Handle other error
		}
	}

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
				<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-xl font-weight-[300]">Edit Product</h1>
					<div className="flex items-center text-sm">
						
					</div>
				</div>

				<div className="p-5 mx-auto">
					<table className="max-w-full popup-table">
						<tbody>
							<tr>
								<td>
									<CustomTextField2
										value={productName}
										label={"Item Name"}
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
};
