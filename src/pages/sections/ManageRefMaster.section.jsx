// CORE
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import { TabContent } from "../components/Tab.component";


// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineImport } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { RefMasterTable, AddRefMasterPopUp } from "./manage-ref-master";
import { getReferencesList } from "../../redux/apis";
function ManageRefMaster() {
	const dispatch = useDispatch();
    const [activeTab] = useState(0);

    // TAB-1 : POPUPS
    let [popupProductAdd, setPopupProductAdd] = useState(false);

	useEffect(() => {
		dispatch(getReferencesList());
	}, [])

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Ref Master"} title2={"Administration"} />

                <div className=" flex md:justify-between items-center flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>

                    <div className="flex flex-wrap items-center justify-between gap-1 px-2 py-2 ml-auto">
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
                        <div className="px-0 lg:px-2">
                            {/* 4 BUTTONS */}
                            <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                                <CustomButton1
                                    label={"Add"}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                    onClick={() => setPopupProductAdd(true)}
                                />

                                <div className="flex items-center justify-between gap-1 px-2  ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                    <input
                                        type="text"
                                        className="w-[120px] grow capitalize bg-transparent  "
                                        placeholder="Search"
                                    />
                                    <AiOutlineSearch className="min-w-[20px]" />
                                </div>
                            </div>

                            {/* TABLE */}
                            <RefMasterTable />
                        </div>

                        {/* POPUP 1 : ADD */}
                        <AddRefMasterPopUp
							isVisible={popupProductAdd}
							onCancel={() => setPopupProductAdd(false)}
						/>
						{/* {popupProductAdd && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-l font-weight-[300]">Add Ref. Master</h1>
                                        <div className="flex items-center text-sm">
                                            <p> </p>
                                        </div>
                                    </div>

                                    <div className="p-8 mx-auto">
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                            <div className="py-2">
                                                <CustomTextField2 label={"Number is Unique no"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Ref. party (A/C Name)"}
                                                    placeholder={"Enter"}
                                                />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"Address"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"State"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"Region"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"District"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"Area"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"Pincode"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={" Phone (Landline)"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"Mobile"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"GST No."} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"PAN"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"Email"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxProductAdd}
                                                    setState={setCheckboxProductAdd}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupProductAdd(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )} */}

                        {/* POPUP 2 : EDIT */}
                        {/* {popupProductEdit && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-l font-weight-[300]">Edit Ref. Master</h1>
                                        <div className="flex items-center text-sm">
                                            <p> </p>
                                        </div>
                                    </div>

                                    <div className="p-8 mx-auto">
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                        <div className="py-2">
                                                <CustomTextField2 label={"Number is Unique no"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Ref. party (A/C Name)"}
                                                    placeholder={"Enter"}
                                                />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"Address"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"State"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"Region"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"District"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"Area"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"Pincode"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={" Phone (Landline)"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"Mobile"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"GST No."} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"PAN"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"Email"} placeholder={"Enter"} />
                                            </div>
                                            <div className="py-2">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxProductAdd}
                                                    setState={setCheckboxProductAdd}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Update"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupProductEdit(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )} */}
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default ManageRefMaster;
