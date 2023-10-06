// CORE
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import PopUp from "../components/PopUp.componenet";
import CustomTextField2 from "../components/CustomTextField2.component";
import CustomCheckBox2 from "../components/CustomCheckBox2.component";
import { TabContent } from "../components/Tab.component";

// ICONSbg-white
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineImport } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { getBloodGroupList } from "../../redux/apis";
import { AddBloodGrpupPopUp, BloodGroupsTable } from "./manage-blood-group";

function ManageBloodGroup() {
    const dispatch = useDispatch();
    const [activeTab] = useState(0);

    // TAB-1 : POPUPS
    let [popupManageBloodGroupAdd, setPopupManageBloodGroupAdd] = useState(false);
    let [popupManageBloodGroupEdit, setPopupManageBloodGroupEdit] = useState(false);
    let [checkboxManageBloodGroupAdd, setCheckboxManageBloodGroupAdd] = useState(true);

    useEffect(() => {
        dispatch(getBloodGroupList());
    }, []);

    return (
        <div className="flex flex-col h-full p-2">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Blood Group"} title2={"ADMINISTRATOR"} />

                <div className="  flex md:justify-between items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap p-2">
                    <button className="smlbtn">CSV</button>
                    <button className="smlbtn">Excel</button>
                    <button className="smlbtn">PDF</button>
                    <button className="smlbtn">Print</button>
                    <button className="smlbtn">Column visibility</button>

                    <div className="flex flex-wrap items-center justify-between gap-1 text-xs ml-auto">
                        <CustomButton1
                            label={"Import "}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                        <CustomButton1
                            label={"Sample Download "}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        />
                    </div>
                </div>

                <div className=" bg-white rounded grow">
                    {/* TAB 1 CONTENT : PRODUCT */}
                    <TabContent index={0} activeTab={activeTab}>
                        {/* 4 BUTTONS + TABLE */}
                        <div className="px-2 lg:px-4">
                            {/* 4 BUTTONS */}
                            <div className="flex flex-row flex-wrap justify-start gap-2  p-4 mt-5 md:flex-nowrap minbox">
                            <CustomButton1
                                    label={"Add "}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 "
                                    onClick={() => setPopupManageBloodGroupAdd(true)}
                                />  

                                  <div className="flex items-center justify-between gap-1 px-2  ml-auto text-[rgba(0, 0, 0, 0.50)] boreder rounded bg-white shrink grow md:grow-0">
                                    <input
                                        type="text"
                                        className="w-[80px] grow capitalize bg-transparent placeholder:text-sm"
                                        placeholder="Search"
                                    />
                                    <AiOutlineSearch className="min-w-[20px]" />
                                </div>
                            </div>

                            {/* TABLE */}
                            <BloodGroupsTable />
                        </div>

                        {/* POPUP 1 : ADD */}
                        <AddBloodGrpupPopUp
                            isVisible={popupManageBloodGroupAdd}
                            onCancel={() => setPopupManageBloodGroupAdd(false)}
                        />

                        {/* POPUP 2 : EDIT */}
                        {popupManageBloodGroupEdit && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-2 text-white justify-between rounded-t-lg">
                                        <h1 className=" font-weight-[400]">Edit Blood Group</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Blood Group"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxManageBloodGroupAdd}
                                                    setState={setCheckboxManageBloodGroupAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Update"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupManageBloodGroupEdit(false)}>
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

export default ManageBloodGroup;
