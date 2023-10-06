// Core
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import PopUp from "../components/PopUp.componenet";
import CustomTextField2 from "../components/CustomTextField2.component";
import CustomSelect1 from "../components/CustomSelect1.component";
import CustomCheckBox2 from "../components/CustomCheckBox2.component";
import { TabContent } from "../components/Tab.component";
import { AddCustomerPopUp, CustomersTable } from './customer';

// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch, AiOutlineImport, AiOutlineDownload } from "react-icons/ai";
import { getCustomersList } from "../../redux/apis";

function Customer() {
	const dispatch = useDispatch();
    
	const [activeTab, setActiveTab] = useState(0);
    let [popupManageCustomerAdd, setPopupManageCustomerAdd] = useState(false);
    let [popupCustomerView, setPopupCustomerView] = useState(false);
    let [checkboxManageCustomerIsActive, setCheckboxManageCustomerIsActive] = useState(false);

	useEffect(() => {
		dispatch(getCustomersList());
	}, []);

    return (
        <div className="flex flex-col h-full">
            <div className="p-6 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Customer"} title2={"Dashboard"} />
                <div className=" flex md:justify-between items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn">CSV</button>
                    <button className="smlbtn">Excel</button>
                    <button className="smlbtn">PDF</button>
                    <button className="smlbtn">Print</button>
                    <button className="smlbtn">Column Visibility</button>

                    <div className="flex flex-wrap items-center justify-between gap-1  px-2 py-2  ml-auto">
                        <CustomButton1
                            label={"Import  "}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                        <CustomButton1
                            label={" Sample Download"}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        />
                    </div>
                </div>
                <div className="p-2 mt-2 bg-white rounded grow">
                    {/* Tabs */}

                    {/* Tab Contents */}
                    <TabContent index={0} activeTab={activeTab}>
                        {/* 4 Buttons + Table */}
                        <div className="px-2 lg:px-4">
                            {/* 4 BUTTONS */}
                            <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                                <CustomButton1
                                    label={"Add  "}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                    onClick={() => setPopupManageCustomerAdd(true)}
                                />

                                <div className="flex items-center justify-between px-2  ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                    <input
                                        type="text"
                                        className="w-[120px] grow capitalize bg-transparent  "
                                        placeholder="Search"
                                    />
                                    <AiOutlineSearch className="min-w-[20px]" />
                                </div>
                            </div>

                            {/* TABLE */}
                            <CustomersTable />
                        </div>

                        {/* PopUp Box 1 : Add */}
						<AddCustomerPopUp
							isVisible={popupManageCustomerAdd}
							onCancel={() => setPopupManageCustomerAdd(false)}
						/>
                        {/* {popupManageCustomerAdd && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-xl font-weight-[300]">Add Customer</h1>
                                    <div className="flex items-center text-sm">
                                     
                                    </div>
                                </div>

                                    <div className="grid grid-cols-2 p-8 gap-2 md:grid-cols-3 max-h-[70vh] overflow-y-auto ">
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
                                            state={checkboxManageCustomerIsActive}
                                            setState={setCheckboxManageCustomerIsActive}
                                        />
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupManageCustomerAdd(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )} */}

                        {/* PopUp View */}
                        {popupCustomerView && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-xl font-weight-[300]">View Customer</h1>
                                    <div className="flex items-center text-sm">
                                       
                                    </div>
                                </div>
                                    <div className="grid grid-cols-2 p-5 gap-2 md:grid-cols-3 max-h-[70vh] overflow-y-auto ">
                                        <div className="md:col-span-3 border-b-2">Company Details</div>
                                        <CustomTextField2 label="Company Name" placeholder="Enter" readOnly />
                                        <CustomTextField2 label="Landline" placeholder="Enter" readOnly />
                                        <CustomTextField2
                                            label="Mobile"
                                            placeholder="Enter"
                                            pattern="[0-9]{10}"
                                            readOnly
                                        />
                                        <CustomTextField2 label="Email" placeholder="Enter" readOnly />
                                        <CustomSelect1 label="Customer Type" readOnly />
                                        <CustomTextField2 label="Special Remarks" placeholder="Enter" readOnly />
                                        <CustomSelect1 label="Employee Role" readOnly />
                                        <CustomSelect1 label="Employee Name" readOnly />

                                        <div className="mt-2 md:col-span-3 border-b-2">Contact Details</div>

                                        <CustomTextField2 label="Contact Name" placeholder="Enter" readOnly />
                                        <CustomTextField2
                                            label="Mobile"
                                            placeholder="Enter"
                                            pattern="[0-9]{10}"
                                            readOnly
                                        />
                                        <CustomTextField2 label="Landline" placeholder="Enter" readOnly />
                                        <CustomTextField2 label="Email Id" placeholder="Enter" readOnly />
                                        <CustomSelect1 label="Ref Party" readOnly />

                                        <div className="mt-2 md:col-span-3 border-b-2">Address Details</div>

                                        <CustomTextField2 label="Address" placeholder="Enter" readOnly />
                                        <CustomSelect1 label="City" readOnly />
                                        <CustomSelect1 label="State" readOnly />
                                        <CustomSelect1 label="Region" readOnly />
                                        <CustomSelect1 label="District" readOnly />
                                        <CustomSelect1 label="Area" readOnly />
                                        <CustomTextField2
                                            label="Pincode"
                                            placeholder="Enter"
                                            type="number"
                                            min="100000"
                                            max="999999"
                                            readOnly
                                        />

                                        <CustomCheckBox2
                                            label="Is Active"
                                            state={checkboxManageCustomerIsActive}
                                            setState={setCheckboxManageCustomerIsActive}
                                            readOnly
                                        />
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div onClick={() => setPopupCustomerView(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default Customer;
