import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

// Components
import PopUp from "../../components/PopUp.componenet";
import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from "../../components/CustomCheckBox2.component";
import CustomTextField2 from "../../components/CustomTextField2.component";
import PrimaryInput from "../../components/PrimaryInput";

const initialState = {
	contactName: "",
	mobileNo: "",
	emailId: "",
	refParty: ""
}

export const EditContactDetailPopUp = (props) => {
	const [isActive, setIsActive] = useState(true);
	const [initialData] = useState(initialState);

	const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
	const updateContactDetailSchema = yup.object().shape({
		contactName: yup.string().required("Please enter contact name"),
		mobileNo: yup.string().required("Please enter mobile").max(10, 'Maximum 10 digits'),
		emailId: yup.string()
			.email("Email should be valid")
			.required("Email is required")
			.matches(emailRegex, "Email should be valid"),
		refParty: yup.string()
	});

	const handleUpdateContactDetail = async (formValues) => {
		//
	};

	const {
		handleSubmit,
		errors,
		values,
		resetForm,
		handleChange,
		setFieldValue,
		touched,
	} = useFormik({
		initialValues: initialData,
		enableReinitialize: true,
		validationSchema: updateContactDetailSchema,
		onSubmit: handleUpdateContactDetail,
	});

	useEffect(() => {
		if (props.isVisible) {
			const editData = props.isVisible;
			setFieldValue("contactName", editData.contactName);
			setFieldValue("mobileNo", editData.mobileNo);
			setFieldValue("emailId", editData.emailId);
			setFieldValue("refParty", editData.refParty);
			setIsActive(editData.isActive);
		} else {
			resetForm();
		}
	}, [props.isVisible])

	if (!props.isVisible) {
		return null;
	}

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
				<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
					<h1 className="text-l font-weight-[300]">Edit Contact Detail</h1>
					<div className="flex items-center text-sm"></div>
				</div>

				<div className="grid grid-cols-2 p-5 gap-2 md:grid-cols-3 max-h-[70vh] overflow-y-auto ">
					<div className="mt-2 md:col-span-3 ">Contact Details</div>
					<PrimaryInput
						name="contactName"
						label="Contact Name"
						placeholder="Enter"
						value={values?.contactName}
						required={true}
						onChange={handleChange}
						error={touched?.contactName && errors?.contactName && errors?.contactName}
					/>
					<PrimaryInput
						name="mobileNo"
						label="Mobile"
						placeholder="Enter"
						value={values?.mobileNo}
						required={true}
						onChange={handleChange}
						error={touched?.mobileNo && errors?.mobileNo && errors?.mobileNo}
					/>
					<PrimaryInput
						name="emailId"
						label="Contact Email Id"
						placeholder="Enter"
						value={values?.emailId}
						required={true}
						onChange={handleChange}
						error={touched?.emailId && errors?.emailId && errors?.emailId}
					/>
					<PrimaryInput
						name="refParty"
						label="Ref Party"
						placeholder="Enter"
						value={values?.refParty}
						required={false}
						onChange={handleChange}
						error={touched?.refParty && errors?.refParty && errors?.refParty}
					/>
					<CustomCheckBox2
						label={"Is Active"}
						state={isActive}
						setState={setIsActive}
					/>
				</div>

				<div className="flex justify-center gap-5">
					<div>
						<CustomButton1
							label={"Update"}
							className="text-white bg-first"
							onClick={handleSubmit}
						/>
					</div>
					<div>
						<CustomButton1
							label={"Cancel"}
							variant="outlined"
							className="text-first"
							onClick={props.onCancel}
						/>
					</div>
				</div>
			</div>
		</PopUp>
	);
}
