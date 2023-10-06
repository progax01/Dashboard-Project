// CORE
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
import { AiOutlineSearch, AiOutlineImport, AiOutlineDownload } from "react-icons/ai";
import CustomDate from "../components/CustomDate.component";
import { AddRolePopUp, RolesTable } from "./manage-profile/role";
import { getEmployeeList, getReportingToList, getRolesList } from "../../redux/apis";
import { AddReportingToPopUp, ReportingToTable } from "./manage-profile/reporting-to";
import { AddEmployeePopup, EmployeeTable } from "./manage-profile/employee";

function ManageProfile() {
    const [activeTab, setActiveTab] = useState(0);
	const dispatch = useDispatch();

    // TAB-1 : POPUPS
    let [popupRoleAdd, setPopupRoleAdd] = useState(false);

    // TAB-2 : POPUPS
    let [popupReportingToAdd, setPopupReportingToAdd] = useState(false);

    // TAB-3 : POPUPS
    let [popupEmployeeEdit, setPopupEmployeeEdit] = useState(false);
    let [popupEmployeeAdd, setPopupEmployeeAdd] = useState(false);
    let [popupEmployeeView, setPopupEmployeeView] = useState(false);
    let [checkboxEmployeeAdd, setCheckboxEmployeeAdd] = useState(true);
    let [checkboxWebUser, setCheckboxWebUser] = useState(false);
    let [checkboxMobileUser, setCheckboxMobileUser] = useState(false);

    const tablabel ={
        0: "Role",
        1: "Role Hierarchy",
        2: "Employee",
    } ;

	useEffect(() => {
		dispatch(getRolesList());
		dispatch(getReportingToList());
		dispatch(getEmployeeList());
	}, []);

    return (
        <div className="flex flex-col h-full">
            <div className="p-6 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Profile"} title2={"Administration"} />
                <div className="  flex md:justify-between items-center flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>

                    <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto">
                        <CustomButton1
                            label={"Import " + tablabel[activeTab]}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                        <CustomButton1
                           label={"Sample Download " + tablabel[activeTab]}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        />
                    </div>
                </div>

                <div className="px-2  lg:px-4 minbox">
                    {/* 3 TABS */}
                    <TabContainer>
                        <Tab label="Role" index={0} activeTab={activeTab} setActiveTab={setActiveTab} />
                       {/* Reporting To is renamed to Role Heirarchy */}
                       
                        <Tab label="Reporting Hierarchy" index={1} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Employee" index={2} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </TabContainer>
                </div>

                {/* TAB 1 CONTENT : ROLES */}
                <TabContent index={0} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupRoleAdd(true)}
                            />
                            {/* <CustomButton1
                                label={"Bulk Upload"}
                                icon={<IoMdAdd />}
                                className="bg-white text-fourth shrink grow md:grow-0 max-w-[50%]"
                            />
                            <CustomButton1
                                label={"Export to Excel"}
                                icon={<img src={Excel} />}
                                className="bg-white text-fourth shrink grow md:grow-0 max-w-[50%]"
                            /> */}
                            <div className="flex items-center justify-between gap-1 px-2  ml-auto border  rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <RolesTable />
                    </div>

                    {/* POPUP 1 : EDIT */}
                    <AddRolePopUp
						isVisible={popupRoleAdd}
						onCancel={() => setPopupRoleAdd(false)}
					/>
                </TabContent>

                {/* TAB 2 CONTENTS : ROLE HIERARCHY */}
                <TabContent index={1} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="text-white bg-sixt shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupReportingToAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <ReportingToTable />
                    </div>

                    {/* POPUP 1 : ADD */}
                    <AddReportingToPopUp
						isVisible={popupReportingToAdd}
						onCancel={() => setPopupReportingToAdd(false)}
					/>
                </TabContent>

                {/* TAB 3 CONTENTS : EMPLOYEE */}
                <TabContent index={2} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="text-white bg-sixt shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupEmployeeAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <EmployeeTable />
                    </div>

                    {/* POPUP 1 : ADD */}
					<AddEmployeePopup
						isVisible={popupEmployeeAdd}
						onCancel={() => setPopupEmployeeAdd(false) }
					/>

                    {/* POPUP 2 : EDIT */}
                    {popupEmployeeEdit && (
                        <PopUp>
                            <div className="bg-white min-w-[350px] pb-5 rounded-lg overflow-visible">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Edit Employee</h1>
                                    <div className="flex items-center text-sm">
                                      
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 p-5 gap-x-4 gap-y-3 md:grid-cols-3 max-h-[70vh] overflow-y-auto  ">
                                    <CustomTextField2 label="Employee Name" placeholder="Enter"></CustomTextField2>
                                    <CustomTextField2 label="Employee Code" placeholder="Enter"></CustomTextField2>
                                    <CustomTextField2 label="Mobile Number" placeholder="Enter"></CustomTextField2>
                                    <CustomTextField2 label="Email ID" placeholder="Enter"></CustomTextField2>
                                    <CustomSelect1 label="Role"></CustomSelect1>
                                    <CustomSelect1 label="Reporting To"></CustomSelect1>

                                    <CustomSelect1 label="State"></CustomSelect1>
                                    <CustomSelect1 label="City"></CustomSelect1>
                                    <CustomSelect1 label="Area"></CustomSelect1>
                                    <CustomTextField2 label="PinCode" placeholder="Enter"></CustomTextField2>
                                    <CustomSelect1 label="Zone"></CustomSelect1>
                                    <CustomDate label="Date of Birth" />
                                    <CustomDate label="Date of Joining" />
                                    <CustomTextField2
                                        label="Emergency Contact Number"
                                        placeholder="Enter"
                                    ></CustomTextField2>
                                    <CustomSelect1 label="Blood Group"></CustomSelect1>
                                    <CustomCheckBox2
                                        label="Is Web User"
                                        state={checkboxWebUser}
                                        setState={setCheckboxWebUser}
                                    ></CustomCheckBox2>
                                    <CustomCheckBox2
                                        label="Is Mobile User"
                                        state={checkboxMobileUser}
                                        setState={setCheckboxMobileUser}
                                    ></CustomCheckBox2>
                                    <CustomCheckBox2
                                        label="Status"
                                        state={checkboxEmployeeAdd}
                                        setState={setCheckboxEmployeeAdd}
                                    ></CustomCheckBox2>

                                    <div className="flex items-center justify-center gap-2">
                                        <label htmlFor="image-upload" className=" text-sm font-medium">
                                            Image Upload
                                        </label>
                                        <label
                                            htmlFor="image-upload"
                                            className="text-center cursor-pointer bg-first text-sm font-medium text-white px-4 py-2 rounded-md"
                                        >
                                            Attachment
                                        </label>
                                        <input type="file" id="image-upload" className="hidden" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-5 mt-5">
                                    <div>
                                        <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                    </div>
                                    <div>
                                        <CustomButton1
                                            label={"Cancel"}
                                            variant="outlined"
                                            className="text-first"
                                            onClick={() => setPopupEmployeeEdit(false)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    )}

                    {popupEmployeeView && (
                        <PopUp>
                            <div className="bg-white min-w-[350px] pb-5 rounded-lg overflow-visible">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">View Employee</h1>
                                   
                                     
                                </div>

                                <div className="grid grid-cols-2 gap-2 p-5 gap-x-4 gap-y-3 md:grid-cols-3 max-h-[70vh] overflow-y-auto  ">
                                    <CustomTextField2 label="Employee Name" placeholder="Enter"></CustomTextField2>
                                    <CustomTextField2 label="Employee Code" placeholder="Enter"></CustomTextField2>
                                    <CustomTextField2 label="Email ID" placeholder="Enter"></CustomTextField2>
                                    <CustomTextField2 label="Mobile Number" placeholder="Enter"></CustomTextField2>
                                    <CustomSelect1 label="Role"></CustomSelect1>
                                    <CustomSelect1 label="Reporting To"></CustomSelect1>

                                    <CustomSelect1 label="State"></CustomSelect1>
                                    <CustomSelect1 label="Region"></CustomSelect1>
                                    <CustomSelect1 label="District"></CustomSelect1>
                                    <CustomSelect1 label="Area"></CustomSelect1>
                                    <CustomTextField2 label="PinCode" placeholder="Enter"></CustomTextField2>
                                    <CustomTextField2 label="Date Of Birth" placeholder="Enter"></CustomTextField2>
                                    <CustomSelect1 label="Date of Joining"></CustomSelect1>
                                    <CustomTextField2
                                        label="Emergency Contact Number"
                                        placeholder="Enter"
                                    ></CustomTextField2>
                                    <CustomSelect1 label="Blood Group"></CustomSelect1>
                                    <CustomCheckBox2
                                        label="Is Web User"
                                        state={checkboxWebUser}
                                        setState={setCheckboxWebUser}
                                    ></CustomCheckBox2>
                                    <CustomCheckBox2
                                        label="Is Mobile User"
                                        state={checkboxMobileUser}
                                        setState={setCheckboxMobileUser}
                                    ></CustomCheckBox2>
                                    <CustomCheckBox2
                                        label="Status"
                                        state={checkboxEmployeeAdd}
                                        setState={setCheckboxEmployeeAdd}
                                    ></CustomCheckBox2>

                                    <div className="flex items-center justify-center gap-2">
                                        <label htmlFor="image-upload" className=" text-sm font-medium">
                                            Image Upload
                                        </label>
                                        <label
                                            htmlFor="image-upload"
                                            className="text-center cursor-pointer text-sm font-medium bg-first text-white px-4 py-2 rounded-md"
                                        >
                                            Attachment
                                        </label>
                                        <input type="file" id="image-upload" className="hidden" />
                                    </div>
                                </div>
                                <div className="flex justify-center gap-5 mt-5">
                                    <div>
                                        <CustomButton1
                                            label={"Cancel"}
                                            variant="outlined"
                                            className="text-first"
                                            onClick={() => setPopupEmployeeView(false)}
                                        />
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

export default ManageProfile;
