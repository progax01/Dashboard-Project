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


// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDownload, AiOutlineImport, AiOutlineSearch } from "react-icons/ai";
import { AddCustomerTypePopUp, CustomerTypesTable } from "./manage-customer-type";
import { getCustomerTypesList } from "../../redux/apis";

function ManageCustomerType() {
	const dispatch = useDispatch();
    const [activeTab] = useState(0);

    // TAB-1 : POPUPS
    let [popupCustomerTypeAdd, setPopupCustomerTypeAdd] = useState(false);
    let [popupCustomerTypeEdit, setPopupCustomerTypeEdit] = useState(false);
    let [checkboxCustomerTypeEdit, setCheckboxCustomerTypeEdit] = useState(false);

	useEffect(() => {
		dispatch(getCustomerTypesList());
	}, [])

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Customer Type"} title2={"Administration"} />

                <div className="  flex md:justify-between items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap p-4 minbox">
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>

                    <div className="flex flex-wrap items-center justify-between gap-1  ml-auto">
                        <CustomButton1
                            label={"Import  "}
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
                        <div className="px-2 lg:px-2 ">
                            {/* 4 BUTTONS */}
                            <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                                <CustomButton1
                                    label={"Add "}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                    onClick={() => setPopupCustomerTypeAdd(true)}
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
                            <CustomerTypesTable />
                        </div>

                        {/* POPUP 1 : ADD */}
                        <AddCustomerTypePopUp
							isVisible={popupCustomerTypeAdd}
							onCancel={() => setPopupCustomerTypeAdd(false)}
						/>

                        {/* POPUP 2 : EDIT */}
                        {popupCustomerTypeEdit && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-xl font-weight-[300]">Edit Customer Type</h1>
                                        <div className="flex items-center text-sm">
                                           
                                        </div>
                                    </div>
                                    <div className="p-5 mx-auto">
                                        <table className="max-w-full popup-table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <CustomTextField2
                                                            label={"Customer Type"}
                                                            placeholder={"Enter"}
                                                        ></CustomTextField2>
                                                    </td>
                                                    <td>
                                                        <CustomCheckBox2
                                                            label={"Status"}
                                                            state={checkboxCustomerTypeEdit}
                                                            setState={setCheckboxCustomerTypeEdit}
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
                                        <div onClick={() => setPopupCustomerTypeEdit(false)}>
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

export default ManageCustomerType;
