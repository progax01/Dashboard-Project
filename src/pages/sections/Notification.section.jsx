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
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineImport } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Excel from "../assets/file-type-excel.svg";

function Notification() {
    const [activeTab, setActiveTab] = useState(0);

    // TAB-1 : POPUPS
    let [popupNotificationAdd, setPopupNotificationAdd] = useState(false);
    let [popupNotificationEdit, setPopupNotificationEdit] = useState(false);
    let [checkboxNotificationAdd, setCheckboxNotificationAdd] = useState(true);
    let [checkboxNotificationEdit, setCheckboxNotificationEdit] = useState(false);

    return (
        <div className="flex flex-col h-full">
            <div className="p-6 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Notification"} title2={"Administration"} />

                <div className=" flex flex-row md:justify-between items-center flex-wrap justify-start gap-1 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn"> CSV</button>
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>
                    <button className="smlbtn"> Column Visibility</button>

                    <div className="flex flex-wrap items-center justify-between gap-1 px-2 py-2 ml-auto">
                        {/* <CustomButton1
                            label={"Import "}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                        <CustomButton1
                            label={"Download "}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        /> */}
                    </div>
                </div>

                <div className="p-2 mt-2 bg-white rounded grow">
                    {/* TAB 1 CONTENT : PRODUCT */}
                    <TabContent index={0} activeTab={activeTab}>
                        {/* 4 BUTTONS + TABLE */}
                        <div className="px-2 lg:px-4">
                            {/* 4 BUTTONS */}
                            <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                                {/* <CustomButton1
                                    label={"Add"}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                      onClick={() => setPopupNotificationAdd(true)}
                                /> */}

                                <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                    <input
                                        type="text"
                                        className="w-[120px] grow capitalize bg-transparent "
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
                                            <td className="">S.No</td>
                                            <td>Time Ago</td>
                                            <td>Notification</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>6 days ago & 2 hr ago</td>
                                            <td>
                                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem{" "}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>6 days ago & 2 hr ago</td>
                                            <td>
                                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem{" "}
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        {/* POPUP 1 : ADD */}
                        {popupNotificationAdd && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                    <h1 className="text-l font-weight-[300]">Add Notification</h1>
                                    <div className="flex items-center text-sm">
                                        <p>  </p>
                                    </div>
                                </div>

                                    <div className="p-2 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            

                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Notification"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="py-2">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxNotificationAdd}
                                                    setState={setCheckboxNotificationAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupNotificationAdd(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}

                        {/* POPUP 2 : EDIT */}
                        {popupNotificationEdit && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex justify-end ">
                                        <RxCross2
                                            onClick={() => setPopupNotificationEdit(false)}
                                            className="inline-block text-white p-1 rounded-full h-[25px] w-[25px] bg-first translate-x-[50%] translate-y-[-50%] press-3"
                                        />
                                    </div>

                                    <div>
                                    <h1 className="text-xl p-4 font-normal text-fourth border-first border-b-4 ">
                                        Manage Notification
                                    </h1>
                                    <h1 className="text-sm p-4 pb-0 text-fourth">Edit Notification</h1>
                                </div>

                                    <div className="p-5 mx-auto">
                                        <table className="max-w-full popup-table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <CustomTextField2
                                                            label={"Product Name"}
                                                            placeholder={"Enter"}
                                                        ></CustomTextField2>
                                                    </td>
                                                    <td>
                                                        <CustomCheckBox2
                                                            label={"Status"}
                                                            state={checkboxNotificationEdit}
                                                            setState={setCheckboxNotificationEdit}
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
                                        <div onClick={() => setPopupNotificationEdit(false)}>
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

export default Notification;
