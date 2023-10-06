import React, { useState } from "react";
import PopUp from "../../components/PopUp.componenet";
import CustomButton1 from "../../components/CustomButton1.component";
import CustomTextField2 from "../../components/CustomTextField2.component";
import CustomSelect1 from "../../components/CustomSelect1.component";
import CustomCheckBox2 from "../../components/CustomCheckBox2.component";

export const EditCustomerPopUp = (props) => {
    const [isActive, setIsActive] = useState(false);

	if (!props.isVisible) {
		return null;
	}

	return (
		<PopUp>
			<div className="pb-10 bg-white rounded-lg">
			<div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
				<h1 className="text-xl font-weight-[300]">Edit Customer</h1>
				<div className="flex items-center text-sm">
					
				</div>
			</div>
				<div className="grid grid-cols-2 p-5 gap-2 md:grid-cols-3 max-h-[70vh] overflow-y-auto ">
					<div className=" md:col-span-3 border-b-2 ">Company Details</div>
					<CustomTextField2 label="Company Name" placeholder="Enter" />
					<CustomTextField2 label="Landline " placeholder="Enter" />
					<CustomTextField2 label="Mobile " placeholder="Enter" pattern="[0-9]{10}" />
					<CustomTextField2 label="Email" placeholder="Enter" />
					<CustomSelect1 label="Customer Type" />
					<CustomTextField2 label="Special Remarks" placeholder="Enter" />
					<CustomSelect1 label="Employee Role" />
					<CustomSelect1 label="Employee Name" />

					<div className="mt-2 md:col-span-3 border-b-2">Contact Details</div>

					<CustomTextField2 label="Contact Name" placeholder="Enter" />
					<CustomTextField2 label="Mobile " placeholder="Enter" pattern="[0-9]{10}" />
					<CustomTextField2 label="Landline Number" placeholder="Enter" pattern="[0-9]{10}" />
					<CustomTextField2 label="Email Id" placeholder="Enter" />
					<CustomSelect1 label="Ref Party" />

					<div className="mt-2  md:col-span-3 border-b-2">Address Details</div>

					<CustomTextField2 label="Address" placeholder="Enter" />
				
					<CustomSelect1 label="State" />
					<CustomSelect1 label="Region" />
					<CustomSelect1 label="District" />
					<CustomSelect1 label="Area" />
					<CustomTextField2
						label="Pincode"
						placeholder="Enter"
						type="number"
						min="100000"
						max="999999"
					/>

					<CustomCheckBox2
						label="Is Active"
						state={isActive}
						setState={setIsActive}
					/>
				</div>

				<div className="flex justify-center gap-5">
					<div>
						<CustomButton1 label={"Update"} className="text-white bg-first" />
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
	)
};
