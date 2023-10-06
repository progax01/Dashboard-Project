// CORE
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import PopUp from "../components/PopUp.componenet";
import CustomTextField2 from "../components/CustomTextField2.component";
import CustomSelect1 from "../components/CustomSelect1.component";
import CustomCheckBox2 from "../components/CustomCheckBox2.component";
import { TabContent } from "../components/Tab.component";

// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineImport } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import CustomDate from "../components/CustomDate.component";
import { AddVisitPopUp, VisitTable } from "./visit";
import { getVisitsList } from "../../redux/apis";

function Visits() {
	const dispatch = useDispatch();
	const loadingVisits = useSelector(state => state.visit.loadingVisits);
    const [activeTab] = useState(0);

    // TAB-1 : POPUPS
    let [popupVisitsAdd, setPopupVisitsAdd] = useState(false);
    let [popupVisitsEdit, setPopupVisitsEdit] = useState(false);
    let [activeStatus, setActiveStatus] = useState(true);

	useEffect(() => {
		dispatch(getVisitsList());
	}, [])

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Visits"} title2={"Administration"} />

                <div className=" flex md:justify-between items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn"> CSV</button>
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>
                    <button className="smlbtn"> Column Visibility</button>

                    <div className="flex  items-center justify-between gap-1 px-2 py-2  ml-auto">
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

                <div className="p-2 mt-2 bg-white rounded grow">
                    {/* TAB 1 CONTENT : PRODUCT */}
                    <TabContent index={0} activeTab={activeTab}>
                        {/* 4 BUTTONS + TABLE */}
                        <div className="px-2 lg:px-4">
                            {/* 4 BUTTONS */}
                            <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                                <CustomButton1
                                    label={"Add"}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                    onClick={() => setPopupVisitsAdd(true)}
									disabled={loadingVisits}
                                />

                                <div className="flex items-center justify-between gap-1 px-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                    <input
                                        type="text"
                                        className="w-[120px] grow capitalize bg-transparent "
                                        placeholder="Search"
                                    />
                                    <AiOutlineSearch className="min-w-[20px]" />
                                </div>
                            </div>

                            {/* TABLE */}
                            <VisitTable />
                        </div>

                        {/* POPUP 1 : ADD */}
                        <AddVisitPopUp
							isVisible={popupVisitsAdd}
							onCancel={() => setPopupVisitsAdd(false)}
						/>
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default Visits;
