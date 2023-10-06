// CORE
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import { TabContent } from "../components/Tab.component";

// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDownload, AiOutlineImport, AiOutlineSearch } from "react-icons/ai";
import { AddLeaveTypePopUp, LeaveTypesTable } from "./manage-leave-type";
import { getLeaveTypesList } from "../../redux/apis/leave-type";

function ManageLeave() {
	const dispatch = useDispatch();
    const [activeTab] = useState(0);

    // TAB-1 : POPUPS
    const [popupLeaveTypeAdd, setPopupLeaveTypeAdd] = useState(false);

	useEffect(() => {
		dispatch(getLeaveTypesList());
	}, []);

    return (
        <div className="flex flex-col h-full">
            <div className="p-6 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Leave Type"} title2={"Administration"} />
                <div className="  flex md:justify-between items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>

                    <div className="flex flex-wrap items-center justify-between gap-1 px-2    ml-auto">
                        <CustomButton1
                            label={"Import  "}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                         <CustomButton1
                            label={"Sample Downlaod   "}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        />
                    </div>
                </div>
                <div className="p-2 mt-2 bg-white rounded grow">
                    {/* TAB 1 CONTENT : leave type */}
                    <TabContent index={0} activeTab={activeTab}>
                        {/* 4 BUTTONS + TABLE */}
                        <div className="px-2 lg:px-4">
                            {/* 4 BUTTONS */}
                            <div className="flex flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap">
                                <CustomButton1
                                    label={"Add "}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                    onClick={() => setPopupLeaveTypeAdd(true)}
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
                            <LeaveTypesTable />
                        </div>

                        {/* POPUP 1 : add */}
                        <AddLeaveTypePopUp
							isVisible={popupLeaveTypeAdd}
							onCancel={() => setPopupLeaveTypeAdd(false)}
						/>
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default ManageLeave;
