// CORE
import * as React from "react";
import { useState } from "react";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import PopUp from "../components/PopUp.componenet";
import CustomTextField2 from "../components/CustomTextField2.component";
import CustomSelect1 from "../components/CustomSelect1.component";
import CustomCheckBox2 from "../components/CustomCheckBox2.component";
import { Tab, TabContainer, TabContent } from "../components/Tab.component";

import { onlyIcon } from "../Admin.page";
import { setOnlyIcon } from "../Admin.page";

// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch, AiOutlineImport, AiOutlineClose, AiOutlineDownload } from "react-icons/ai";
import { BiCheck, BiCheckbox, BiCross, BiEdit } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import CustomDate from "../components/CustomDate.component";
import CustomDate1 from "../components/CustomDate1.component";
import CustomTextArea from "../components/CustomTextArea.component";

function ManageLeaves() {
    const [activeTab, setActiveTab] = useState(0);

    // TAB-1 : POPUPS
    let [popupPendingAdd, setPopupPendingAdd] = useState(false);
    let [popupSPendingEdit, setPopupSPendingEdit] = useState(false);
    let [checkboxPendingAdd, setCheckboxPendingAdd] = useState(false);
    let [checkboxSPendingEdit, setCheckboxSPendingEdit] = useState(false);

    // TAB-2 : POPUPS
    let [popupApproveAdd, setPopupApproveAdd] = useState(false);
    let [popupApproveEdit, setPopupApproveEdit] = useState(false);
    let [checkboxApproveAdd, setCheckboxApproveAdd] = useState(false);
    let [checkboxApproveEdit, setCheckboxApproveEdit] = useState(false);

    //
    let [popupRejectAdd, setPopupRejectAdd] = useState(false);
    let [popupRejectEdit, setPopupRejectEdit] = useState(false);
    let [checkboxRejectAdd, setCheckboxRejectAdd] = useState(false);
    let [checkboxRejectEdit, setCheckboxRejectEdit] = useState(false);

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Leave"} title2={"Leaves"} />

                <div className="  flex md:justify-start items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn"> CSV</button>
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>
                    <button className="smlbtn"> Column Visibility</button>

                    {/* <div className="flex items-center justify-between gap-1 px-2 py-2   ml-auto">
                        <CustomButton1
                            label={"Import Manage Leaves"}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                         <CustomButton1
                            label={"Sample Downlaod Manage Leaves "}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        />
                    </div> */}
                </div>

                <div className="px-2 lg:px-4 minbox">
                    {/* 18 TABS */}
                    <TabContainer showArrow={true}>
                        <Tab label="Pending" index={0} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Approve" index={1} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Reject" index={2} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </TabContainer>
                </div>
                {/* TAB 1 CONTENT : PRODUCT */}
                <TabContent index={0} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start   mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white  grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupPendingAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2   ml-auto border  rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <div className="mt-7 max-w-[100vw]   overflow-auto table-container">
                            <table className="w-full custom-table" border={1}>
                                <thead>
                                    <tr className="table-heading">
                                        <td className="">S.No.</td>
                                        <td>Action</td>
                                        <td>Start Date</td>
                                        <td>End Date</td>
                                        <td>Leave Type</td>
                                        <td>Remark</td>
                                        <td>Status</td>
                                        <td>Reason</td>
                                        <td>Employee Name</td>
                                        <td>Created By</td>
                                        <td>Created Date</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <div className="flex gap-0">
                                                {/* <CustomButton1
                                                    icon={<BiEdit />}
                                                    className="bg-sixt text-white grow min-w-[30px]"
                                                    onClick={() => setPopupSPendingEdit(true)}
                                                />
                                                <CustomButton1
                                                    icon={<BiCheck />}
                                                    className="bg-[#0f0] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                /> */}
                                                <CustomButton1
                                                    icon={<AiOutlineClose />}
                                                    className="bg-[#ff0000] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                />
                                                <CustomButton1
                                                    className=" bg-[green] text-white grow min-w-[30px]"
                                                    icon={<BiCheck />}
                                                />
                                            </div>
                                        </td>
                                        <td>12/12/2012</td>
                                        <td>12/12/2012 </td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Active</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <div className="flex">
                                                {/* <CustomButton1
                                                    icon={<BiEdit />}
                                                    className="bg-sixt text-white grow min-w-[30px]"
                                                    onClick={() => setPopupSPendingEdit(true)}
                                                />
                                                <CustomButton1
                                                    icon={<BiCheck />}
                                                    className="bg-[#0f0] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                /> */}
                                                <CustomButton1
                                                    icon={<AiOutlineClose />}
                                                    className="bg-[#ff0000] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                />
                                                <CustomButton1
                                                    className="bg-[green] text-white grow min-w-[30px]"
                                                    icon={<BiCheck />}
                                                />
                                            </div>
                                        </td>
                                        <td>12/12/2012</td>
                                        <td>12/12/2012 </td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Active</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem</td>
                                        <td>Lorem</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                    {/* POPUP 1 : ADD */}
                    {popupPendingAdd && (
                        <PopUp>
                            <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Add Leave</h1>
                                    <div className="flex items-center text-sm"></div>
                                </div>
                                <div className="p-4 mx-auto">
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                        <div>
                                            <CustomDate label="Start Date" />
                                        </div>
                                        <div>
                                            <CustomDate1 label="End Date" />
                                        </div>
                                        <div>
                                            <CustomSelect1 label="Leave type" />
                                        </div>
                                        <div>
                                            <CustomTextField2 label="Employee Name" placeholder="Enter" />
                                        </div>
                                        <div>
                                            <CustomTextArea label="Remark" placeholder="Enter" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div>
                                        <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                    </div>
                                    <div onClick={() => setPopupPendingAdd(false)}>
                                        <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    )}

                    {/* POPUP 2 : EDIT */}
                    {popupSPendingEdit && (
                        <PopUp>
                            <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Edit Leave </h1>
                                    <div className="flex items-center text-sm"></div>
                                </div>

                                <div className="p-4 mx-auto">
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                        <div>
                                            <CustomDate label="Start Date" />
                                        </div>
                                        <div>
                                            <CustomDate label="End Date" />
                                        </div>
                                        <div>
                                            <CustomTextField2 label="Employee Name" placeholder="Enter" />
                                        </div>
                                        <div>
                                            <CustomSelect1 label="Leave type" />
                                        </div>
                                        <div>
                                            <CustomTextArea label="Remark" placeholder="Enter" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div>
                                        <CustomButton1 label={"Update"} className="text-white bg-first" />
                                    </div>
                                    <div onClick={() => setPopupSPendingEdit(false)}>
                                        <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    )}
                </TabContent>

                <TabContent index={1} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            {/* <CustomButton1
                                label={"Add "}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupApproveAdd(true)}
                            /> */}

                            <div className="flex items-center justify-between gap-1 p-2 ml-auto border  rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <div className="mt-7 max-w-[100vw] overflow-auto table-container">
                            <table className="w-full custom-table" border={1}>
                                <thead>
                                    <tr className="table-heading">
                                        <td className="">S.No.</td>
                                        <td>Action</td>
                                        <td>Start Date</td>
                                        <td>End Date</td>
                                        <td>Leave Type</td>
                                        <td>Remark</td>
                                        <td>Status</td>
                                        <td>Reason</td>
                                        <td>Employee Name</td>
                                        <td>Created By</td>
                                        <td>Created Date</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <div>
                                                {/* <CustomButton1
                                                    icon={<BiEdit />}
                                                    className="bg-sixt text-white grow min-w-[30px]"
                                                    onClick={() => setPopupApproveEdit(true)}
                                                />
                                                <CustomButton1
                                                    icon={<BiCheck />}
                                                    className="bg-[#0f0] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                /> */}
                                                <CustomButton1
                                                    icon={<AiOutlineClose />}
                                                    className="bg-[#ff0000] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                />
                                            </div>
                                        </td>
                                        <td>12/12/2012</td>
                                        <td>12/12/2012 </td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>
                                            <div>
                                                <h2>Active</h2>
                                            </div>
                                        </td>
                                        <td>Lorem</td>
                                        <td>Lorem</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <div>
                                                {/* <CustomButton1
                                                    icon={<BiEdit />}
                                                    className="bg-sixt text-white grow min-w-[30px]"
                                                    onClick={() => setPopupApproveEdit(true)}
                                                />
                                                   <CustomButton1
                                                    icon={<BiCheck />}
                                                    className="bg-[#0f0] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                /> */}
                                                <CustomButton1
                                                    icon={<AiOutlineClose />}
                                                    className="bg-[#ff0000] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                />
                                                {/* <CustomButton1
                                                    className="bg-sixt text-white grow min-w-[30px]"
                                                    icon={<BsEyeFill />}
                                                /> */}
                                            </div>
                                        </td>
                                        <td>12/12/2012</td>
                                        <td>12/12/2012 </td>
                                        <td>Active</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem</td>
                                        <td>Lorem</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                    {/* POPUP 1 : ADD */}
                    {popupApproveAdd && (
                        <PopUp>
                            <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Add Approve Leave</h1>
                                    <div className="flex items-center text-sm"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 p-4">
                                    <div>
                                        <CustomDate label="Start Date" />
                                    </div>
                                    <div>
                                        <CustomDate label="End Date" />
                                    </div>
                                    <div>
                                        <CustomTextField2 label="Employee Name" placeholder="Enter" />
                                    </div>
                                    <div>
                                        <CustomSelect1 label="Leave type" />
                                    </div>
                                    <div>
                                        <CustomTextField2 label="Remark" placeholder="Enter" />
                                    </div>
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div>
                                        <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                    </div>
                                    <div onClick={() => setPopupApproveAdd(false)}>
                                        <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    )}

                    {/* POPUP 2 : EDIT */}
                    {popupApproveEdit && (
                        <PopUp>
                            <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Edit Approve Leave</h1>
                                    <div className="flex items-center text-sm"></div>
                                </div>
                                <div className="p-4 mx-auto">
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                        <div className=" ">
                                            <CustomDate label="Start Date" />
                                        </div>
                                        <div>
                                            <CustomDate label="End Date" />
                                        </div>
                                        <div className=" ">
                                            <CustomTextField2 label="Employee Name" placeholder="Enter" />
                                        </div>
                                        <div>
                                            <CustomSelect1 label="Leave type" />
                                        </div>
                                        <div>
                                            <CustomTextField2 label="Remark" placeholder="Enter" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-5">
                                    <div>
                                        <CustomButton1 label={"Update"} className="text-white bg-first" />
                                    </div>
                                    <div onClick={() => setPopupApproveEdit(false)}>
                                        <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    )}
                </TabContent>

                <TabContent index={2} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            {/* <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupRejectAdd(true)}
                            /> */}

                            <div className="flex items-center justify-between gap-1 p-2  ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <div className="mt-7 max-w-[100vw] overflow-auto table-container">
                            <table className="w-full custom-table" border={1}>
                                <thead>
                                    <tr className="table-heading">
                                        <td className="">S.No.</td>
                                        <td>Action</td>
                                        <td>Start Date</td>
                                        <td>End Date</td>
                                        <td>Leave Type</td>
                                        <td>Remark</td>
                                        <td>Status</td>
                                        <td>Reason</td>
                                        <td>Employee Name</td>
                                        <td>Created By</td>
                                        <td>Created Date</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <div>
                                                {/* <CustomButton1
                                                    icon={<BiEdit />}
                                                    className="bg-sixt text-white grow min-w-[30px]"
                                                    onClick={() => setPopupApproveEdit(true)}
                                                />
                                                <CustomButton1
                                                    icon={<BiCheck />}
                                                    className="bg-[#0f0] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                /> */}
                                                {/* <CustomButton1
                                                    icon={<AiOutlineClose />}
                                                    className="bg-[#ff0000] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                /> */}
                                                <CustomButton1
                                                    className="bg-[green] text-white grow min-w-[30px]"
                                                    icon={<BiCheck />}
                                                />
                                            </div>
                                        </td>
                                        <td>12/12/2012</td>
                                        <td>12/12/2012 </td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>
                                            <div>
                                                <h2>Active</h2>
                                            </div>
                                        </td>
                                        <td>Lorem</td>
                                        <td>Lorem</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <div>
                                                {/* <CustomButton1
                                                    icon={<BiEdit />}
                                                    className="bg-sixt text-white grow min-w-[30px]"
                                                    onClick={() => setPopupApproveEdit(true)}
                                                />
                                                   <CustomButton1
                                                    icon={<BiCheck />}
                                                    className="bg-[#0f0] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                /> */}
                                                {/* <CustomButton1
                                                    icon={<AiOutlineClose />}
                                                    className="bg-[#ff0000] text-white grow min-w-[30px]"
                                                    //onClick={() => setPopupSPendingEdit(true)}
                                                /> */}
                                                <CustomButton1
                                                    className="bg-[green] text-white grow min-w-[30px]"
                                                    icon={<BiCheck />}
                                                />
                                            </div>
                                        </td>
                                        <td>12/12/2012</td>
                                        <td>12/12/2012 </td>
                                        <td>Active</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem ipsum</td>
                                        <td>Lorem</td>
                                        <td>Lorem</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>

                    {/* POPUP 1 : ADD */}
                    {popupRejectAdd && (
                        <PopUp>
                            <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Add Rejected Leave</h1>
                                    <div className="flex items-center text-sm"></div>
                                </div>
                                <div className="p-4 mx-auto">
                                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                                        <div>
                                            <CustomDate label="Start Date" />
                                        </div>
                                        <div>
                                            <CustomDate label="End Date" />
                                        </div>
                                        <div>
                                            <CustomTextField2 label="Employee Name" placeholder="Enter" />
                                        </div>
                                        <div>
                                            <CustomSelect1 label="Leave type" />
                                        </div>
                                        <div>
                                            <CustomTextField2 label="Remark" placeholder="Enter" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div>
                                        <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                    </div>
                                    <div onClick={() => setPopupRejectAdd(false)}>
                                        <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                    </div>
                                </div>
                            </div>
                        </PopUp>
                    )}

                    {/* POPUP 2 : EDIT */}
                    {popupRejectEdit && (
                        <PopUp>
                            <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Edit Rejected Leave</h1>
                                    <div className="flex items-center text-sm"></div>
                                </div>

                                <div className="p-4 mx-auto">
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                        <div>
                                            <CustomDate label="Start Date" />
                                        </div>
                                        <div>
                                            <CustomDate label="End Date" />
                                        </div>
                                        <div>
                                            <CustomTextField2 label="Employee Name" placeholder="Enter" />
                                        </div>
                                        <div>
                                            <CustomSelect1 label="Leave type" />
                                        </div>
                                        <div>
                                            <CustomTextField2 label="Remark" placeholder="Enter" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div>
                                        <CustomButton1 label={"Update"} className="text-white bg-first" />
                                    </div>
                                    <div onClick={() => setPopupRejectEdit(false)}>
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

export default ManageLeaves;
