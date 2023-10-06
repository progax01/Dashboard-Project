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
import { BsEyeFill } from "react-icons/bs";

function DesignMaster() {
    const [activeTab, setActiveTab] = useState(0);

    // TAB-1 : POPUPS
    let [popupDesignAdd, setPopupDesignAdd] = useState(false);
    let [popupDesignEdit, setPopupDesignEdit] = useState(false);
    let [checkboxDesignAdd, setCheckboxDesignAdd] = useState(true);
    let [checkboxDesignEdit, setCheckboxDesignEdit] = useState(false);

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Design Master"} title2={"Administration"} />

                <div className="  flex flex-row md:justify-between items-center flex-wrap justify-start gap-1 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn"> CSV</button>
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>
                    <button className="smlbtn"> Column Visibility</button>

                    <div className="flex flex-wrap items-center justify-between gap-1  ml-auto">
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
                                    label={"Add "}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                    onClick={() => setPopupDesignAdd(true)}
                                />

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
                            <div className="mt-7 max-w-[88vw]  overflow-auto table-container">
                                <table className="w-full custom-table" border={1}>
                                    <thead>
                                        <tr className="table-heading">
                                            <td className="">S.No</td>
                                            <td>Action</td>
                                            <td>Status</td>
                                            <td>Product </td>
                                            <td>Brand</td>
                                            <td>Size</td>
                                            <td>Category</td>
                                            <td>Series</td>
                                            <td>Design Type</td>
                                            <td>Design Name</td>

                                            <td>Base Design Name</td>
                                            <td>Design Code</td>
                                            <td>Image</td>
                                            <td>Current Stock Status</td>
                                            <td>Created By</td>
                                            <td>Created Date</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        icon={<AiTwotoneEdit />}
                                                        className="bg-sixt text-white grow min-w-[30px]"
                                                        onClick={() => setPopupDesignEdit(true)}
                                                    />
                                                    <CustomButton1
                                                        className="bg-sixt text-white grow min-w-[30px]"
                                                        icon={<BsEyeFill />}
                                                    />
                                                </div>
                                            </td>
                                            <td>Active</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum dolor sit </td>
                                            <td>Lorem ipsum dolor sit </td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        icon={<AiTwotoneEdit />}
                                                        className="bg-sixt text-white grow min-w-[30px]"
                                                        onClick={() => setPopupDesignEdit(true)}
                                                    />
                                                    <CustomButton1
                                                        className="bg-sixt text-white grow min-w-[30px]"
                                                        icon={<BsEyeFill />}
                                                    />
                                                </div>
                                            </td>
                                            <td>Active</td>
                                            <td>1122334455</td>
                                            <td>Lorem ipsum dolor sit amet </td>
                                            <td>Lorem ipsum dolor sit amet </td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
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
                        {popupDesignAdd && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-xl font-weight-[300]">Add Design Master</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Product"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Brand"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Size"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Category"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Series"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Design Type"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Design Name"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Base Design Name"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Design Code"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

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
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Current Stock Status"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupDesignAdd(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}

                        {/* POPUP 2 : EDIT */}
                        {popupDesignEdit && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-xl font-weight-[300]">Edit Design Master</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Product"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Brand"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Size"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Category"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Series"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Design Type"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Design Name"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Base Design Name"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Design Code"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Current Stock Status"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
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
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Update"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupDesignEdit(false)}>
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

export default DesignMaster;
