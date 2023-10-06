// CORE
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import PopUp from "../components/PopUp.componenet";
import CustomTextField2 from "../components/CustomTextField2.component";
import CustomSelect1 from "../components/CustomSelect1.component";
import CustomCheckBox2 from "../components/CustomCheckBox2.component";
import { Tab, TabContainer, TabContent } from "../components/Tab.component";

// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch, AiTwotoneEdit } from "react-icons/ai";
import { AddressDetails, ContactDetails, CustomerDetails } from "./customer-view";
import { useEffect } from "react";
import { getCustomerDetails } from "../../redux/apis";

function CustomerView() {
	const { id } = useParams();
	const location = useLocation();
	const isView = location.pathname.includes("customer-view")
	const navigate = useNavigate();
	const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);

    // TAB-2 : POPUPS
    let [popupContactAdd, setPopupContactAdd] = useState(false);
    let [popupContactEdit, setPopupContactEdit] = useState(false);
    let [checkboxContactAdd, setCheckboxContactAdd] = useState(false);

    //
    let [popupAddressAdd, setPopupAddressAdd] = useState(false);
    let [popupAddressEdit, setPopupAddressEdit] = useState(false);
    let [checkboxAddressAdd, setCheckboxAddressAdd] = useState(false);

	useEffect(() => {
		dispatch(getCustomerDetails({ id }));
	}, []);

	const handleNextTab = () => {
        setActiveTab(activeTab + 1); // Move to the next tab
    };

    const handleBackTab = () => {
        setActiveTab(activeTab - 1 ); // Move to the next tab
    };

	const onCancel = () => {
		navigate(-1);
	};

    return (
        <div className="flex flex-col h-full">
            <div className="p-6 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={isView ? "View Customer" : "Edit Customer"} title2={"Customer"} />

                {/* <div className="  flex items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn"> CSV</button>
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>
                    <button className="smlbtn"> Column Visibility</button> */}

                {/* <div className="flex items-center justify-between gap-1 1 px-2 py-2   ml-auto">
                        <CustomButton1
                            label={"Import "}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                        <CustomButton1
                            label={"Download"}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        />
                    </div>
                    </div> */}

                <div className="px-2 lg:px-4 minbox">
                    {/* 18 TABS */}
                    <TabContainer showArrow={true}>
                        <Tab label="Customer Detail" index={0} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Contact Detail" index={1} activeTab={activeTab} setActiveTab={setActiveTab} />

                        <Tab label="Address Detail" index={2} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </TabContainer>
                </div>

                {/* TAB 1 CONTENT : PRODUCT */}
                <TabContent index={0} activeTab={activeTab}>
                    <CustomerDetails
						onCancel={onCancel}
						handleNextTab={handleNextTab}
						isView={isView}
					/>
                </TabContent>

                <TabContent index={1} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <ContactDetails
						handleBackTab={handleBackTab}
						handleNextTab={handleNextTab}
						isView={isView}
					/>

                    {/* POPUP 1 : ADD */}
                    {popupContactAdd && (
                        <PopUp>
                            <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Add Contact</h1>
                                    <div className="flex items-center text-sm"></div>
                                </div>

                                <div className="grid grid-cols-2 p-5 gap-2 md:grid-cols-3 max-h-[70vh] overflow-y-auto ">
                                    <div className="mt-2 md:col-span-3 ">Contact Details</div>

                                    <CustomTextField2 label="Contact Name" placeholder="Enter" />
                                    <CustomTextField2 label="Mobile " placeholder="Enter" pattern="[0-9]{10}" />
                                    <CustomTextField2
                                        label="Alternate Mobile "
                                        placeholder="Enter"
                                        pattern="[0-9]{10}"
                                    />

                                    <CustomTextField2 label="Contact Email Id" placeholder="Enter" />
                                    <CustomTextField2 label="Alternate Contact Emailid" />
                                     
                                    <CustomCheckBox2 label={"Is Active"}
                                      state={checkboxContactAdd}
                                                    setState={setCheckboxContactAdd} />
                               
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div>
                                        <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                    </div>
                                    <div onClick={() => setPopupContactAdd(false)}>
                                        <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    )}

                    {/* POPUP 2 : EDIT */}
                    {popupContactEdit && (
                        <PopUp>
                            <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Edit Contact Detail </h1>
                                    <div className="flex items-center text-sm"></div>
                                </div>

                                <div className="grid grid-cols-2 p-5 gap-2 md:grid-cols-3 max-h-[70vh] overflow-y-auto ">
                                    <div className="mt-2 md:col-span-3 ">Contact Details</div>

                                    <CustomTextField2 label="Contact Name" placeholder="Enter" />
                                    <CustomTextField2 label="Mobile " placeholder="Enter" pattern="[0-9]{10}" />
                                    <CustomTextField2
                                        label="Alternate Mobile "
                                        placeholder="Enter"
                                        pattern="[0-9]{10}"
                                    />

                                    <CustomTextField2 label="Contact Email Id" placeholder="Enter" />
                                    <CustomTextField2 label="Alternate Contact Emailid" />
                                    <CustomCheckBox2 label={"Is Active"}
                                      state={checkboxContactAdd}
                                                    setState={setCheckboxContactAdd} />
                               
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div>
                                        <CustomButton1 label={"Update"} className="text-white bg-first" />
                                    </div>
                                    <div onClick={() => setPopupContactEdit(false)}>
                                        <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    )}
                </TabContent>

                <TabContent index={2} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <AddressDetails
						isView={isView}
						handleBackTab={handleBackTab}
					/>	

                    {/* POPUP 1 : ADD */}
                    {popupAddressAdd && (
                        <PopUp>
                            <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Add Address Detail</h1>
                                    <div className="flex items-center text-sm"></div>
                                </div>
                                <div className="p-4 mx-auto">
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                        <div className="mt-2 md:col-span-3 border-b-2">Address Details</div>

                                        <CustomTextField2 label="Address" placeholder="Enter" readOnly />

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

                                        <div className="py-2">
                                            <CustomCheckBox2
                                                label={"Is Active"}
                                                state={checkboxAddressAdd}
                                                setState={setCheckboxAddressAdd}
                                            ></CustomCheckBox2>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div>
                                        <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                    </div>
                                    <div onClick={() => setPopupAddressAdd(false)}>
                                        <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    )}

                    {/* POPUP 2 : EDIT */}
                    {popupAddressEdit && (
                        <PopUp>
                            <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Edit Address Detail</h1>
                                    <div className="flex items-center text-sm"></div>
                                </div>
                                <div className="p-4 mx-auto">
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                        <div className="mt-2 md:col-span-3 border-b-2">Address Details</div>

                                        <CustomTextField2 label="Address" placeholder="Enter" readOnly />

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

                                        <div className="py-2">
                                            <CustomCheckBox2
                                                label={"Status"}
                                                state={checkboxAddressAdd}
                                                setState={setCheckboxAddressAdd}
                                            ></CustomCheckBox2>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div>
                                        <CustomButton1 label={"Update"} className="text-white bg-first" />
                                    </div>
                                    <div onClick={() => setPopupAddressEdit(false)}>
                                        <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    )}
                </TabContent>
            </div>
        </div>
    );
}

export default CustomerView;
