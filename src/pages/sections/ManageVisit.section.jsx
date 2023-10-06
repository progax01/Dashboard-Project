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

// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch, AiOutlineDownload, AiOutlineImport } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Excel from "../assets/file-type-excel.svg";
import { BiEdit } from "react-icons/bi";

function ManageVisit() {
    const [activeTab, setActiveTab] = useState(0);

    // TAB-1 : POPUPS
    let [popupManageVisitAdd, setPopupManageVisitAdd] = useState(false);
    let [popupManageVisitEdit, setPopupManageVisitEdit] = useState(false);
    let [checkboxManageVisitAdd, setCheckboxManageVisitAdd] = useState(true);
    let [checkboxManageVisitEdit, setCheckboxManageVisitEdit] = useState(false);

    return (
        <div className="flex flex-col h-full">
            <div className="p-6 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Visit Status"} title2={"Administration"} />
                <div className="  flex md:justify-between items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>

                    <div className="flex flex-wrap items-center justify-between gap-1 px-2 py-2   ml-auto">
                        <CustomButton1
                            label={"Import"}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                         <CustomButton1
                            label={"Sample Downlaod  "}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        />
                    </div>
                </div>
                <div className="p-2 mt-2 bg-white rounded grow">
                    {/* TAB 1 CONTENT : Visit Status */}
                    <TabContent index={0} activeTab={activeTab}>
                        {/* 4 BUTTONS + TABLE */}
                        <div className="px-2 lg:px-4">
                            {/* 4 BUTTONS */}
                            <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                                <CustomButton1
                                    label={"Add "}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                    onClick={() => setPopupManageVisitAdd(true)}
                                />

                                <div className="flex items-center justify-between gap-1 px-2  ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                    <input
                                        type="text"
                                        className="w-[120px] grow capitalize bg-transparent "
                                        placeholder="Search"
                                    />
                                    <AiOutlineSearch className="min-w-[20px]" />
                                </div>
                            </div>

                            {/* TABLE */}
                            <div className="mt-7 max-w-[100vw] hide-scrollbar overflow-auto table-container">
                                <table className="w-full custom-table" border={1}>
                                    <thead>
                                        <tr className="table-heading">
                                            <td className="">S.No.</td>
                                            <td>Visit Status</td>
                                            <td>Status</td>
                                            <td>Created By </td>
                                            <td>Created Date</td>
                                            <td>Action</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>

                                            <td>Visit Status -1</td>
                                            <td>
                                                <div>
                                                    <h2>Active</h2>
                                                </div>
                                            </td>
                                            <td>Admin</td>
                                            <td>10/08/2023</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                      
                                                        className="bg-sixt text-white grow max-w-[120px]"
                                                        icon={<BiEdit />}
                                                        onClick={() => setPopupManageVisitEdit(true)}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>

                                            <td>Visit Status-2</td>
                                            <td>
                                                <div>
                                                    <h2>Active</h2>
                                                </div>
                                            </td>
                                            <td>Admin</td>
                                            <td>10/08/2023</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                      
                                                        icon={<BiEdit />}
                                                        className="bg-sixt text-white grow max-w-[120px]"
                                                        onClick={() => setPopupManageVisitEdit(true)}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        {/* POPUP 1 : add */}
                        {popupManageVisitAdd && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-l font-weight-[300]">Add Visit Status</h1>
                                        <div className="flex items-center text-sm">
                                
                                        </div>
                                    </div>

                                    <div className="p-2 mx-auto">
                                        <table className="max-w-full popup-table ">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <CustomTextField2
                                                            label={"Visit Status"}
                                                            placeholder={"Enter"}
                                                        ></CustomTextField2>
                                                    </td>
                                                    <td>
                                                        <CustomCheckBox2
                                                            label={"Status"}
                                                            state={checkboxManageVisitAdd}
                                                            setState={setCheckboxManageVisitAdd}
                                                        ></CustomCheckBox2>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupManageVisitAdd(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}

                        {/* POPUP 2 : EDIT */}
                        {popupManageVisitEdit && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-l font-weight-[300]">Edit Visit Status</h1>
                                        <div className="flex items-center text-sm">
                                            
                                        </div>
                                    </div>
                                    <div className="p-5 mx-auto popup-table">
                                        <table className="max-w-full">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <CustomTextField2
                                                            label={"Visit Status"}
                                                            placeholder={"Enter"}
                                                        ></CustomTextField2>
                                                    </td>
                                                    <td>
                                                        <CustomCheckBox2
                                                            label={"Status"}
                                                            state={checkboxManageVisitEdit}
                                                            setState={setCheckboxManageVisitEdit}
                                                        ></CustomCheckBox2>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Update"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupManageVisitEdit(false)}>
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

export default ManageVisit;
