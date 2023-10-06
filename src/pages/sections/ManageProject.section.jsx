// CORE
import * as React from "react";
import { useState } from "react";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import PopUp from "../components/PopUp.componenet";
import CustomTextField2 from "../components/CustomTextField2.component";
import CustomSelect1 from "../components/CustomSelect1.component";
import CustomSelect2 from "../components/CustomSelect2.component";
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
import { BiEdit } from "react-icons/bi";
import CustomTextArea from "../components/CustomTextArea.component";

function ManageProject() {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const [imageName, setImageName] = useState("");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageName(file.name);
            setSelectedImage(file);
        } else {
            setImageName("");
            setSelectedImage("Prifile ");
        }
    };
    // TAB-1 : POPUPS
    let [popupManageProjectAdd, setPopupManageProjectAdd] = useState(false);
    let [popupManageProjectEdit, setPopupManageProjectEdit] = useState(false);
    let [popupManageProjectView, setPopupManageProjectView] = useState(false);
    let [checkboxManageProjectAdd, setCheckboxManageProjectAdd] = useState(true);
    let [checkboxManageProjectEdit, setCheckboxManageProjectEdit] = useState(false);

    let [checkboxRelatedAdd, setCheckboxRelatedAdd] = useState(false);
    let [popupRelatedProjectAdd, setPopupRelatedProjectAdd] = useState(false);
    let [popupRelatedView, setPopupRelatedView] = useState(false);
    let [popupRelatedEdit, setPopupRelatedEdit] = useState(false);
    return (
        <div className="flex flex-col h-full">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Project"} title2={"BROADCAST"} />

                <div className="  flex flex-row md:justify-start items-center flex-wrap justify-start gap-1 mt-5 md:flex-nowrap minbox">
                    <button className="smlbtn"> CSV</button>
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>

                    {/* <div className="flex flex-wrap items-center justify-between gap-1  ml-auto">
                        <CustomButton1
                            label={"Import Broadcast "}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                        <CustomButton1
                            label={"Sample Download Broadcast"}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        />
                    </div> */}
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
                                    onClick={() => setPopupManageProjectAdd(true)}
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
                            <div className="mt-7 max-w-[88vw]  overflow-auto table-container">
                                <table className="w-full custom-table" border={1}>
                                    <thead>
                                        <tr className="table-heading">
                                            <td className="">S.No</td>
                                            <td>Action</td>
                                            <td>Proejct Name </td>
                                            <td>Project Description</td>
                                            <td>Status</td>

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
                                                        onClick={() => setPopupManageProjectEdit(true)}
                                                    />
                                                    <CustomButton1
                                                        className="bg-eye text-white grow min-w-[30px]"
                                                        icon={<BsEyeFill />}
                                                        onClick={() => setPopupManageProjectView(true)}
                                                    />
                                                </div>
                                            </td>
                                            <td>Active</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum dolor sit </td>
                                            <td>Lorem ipsum dolor sit </td>
                                            <td>Lorem ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        icon={<AiTwotoneEdit />}
                                                        className="bg-sixt text-white grow min-w-[30px]"
                                                        onClick={() => setPopupManageProjectEdit(true)}
                                                    />
                                                    <CustomButton1
                                                        className="bg-eye text-white grow min-w-[30px]"
                                                        icon={<BsEyeFill />}
                                                        onClick={() => setPopupManageProjectView(true)}
                                                    />
                                                </div>
                                            </td>
                                            <td>Active</td>
                                            <td>1122334455</td>
                                            <td>Lorem ipsum dolor sit amet </td>
                                            <td>Lorem ipsum dolor sit amet </td>
                                            <td>Lorem ipsum</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="bg-[#F5F5F5] p-5 mt-8">
                            <h1>Related List</h1>
                            <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                                <CustomButton1
                                    label={"Add "}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                    onClick={() => setPopupRelatedProjectAdd(true)}
                                />

                                <div className="flex items-center justify-between gap-1 p-2 ml-auto border rounded text-white bg-[#1C4584] shrink grow md:grow-0">
                                    <input
                                        //type="text"
                                        className="w-[120px] grow capitalize bg-transparent text-white"
                                        placeholder="Search"
                                    />
                                    <AiOutlineSearch className="min-w-[20px]" />
                                </div>
                            </div>
                            <div className="mt-7 max-w-[100vw]  overflow-auto table-container bg-white">
                                <table className="w-full custom-table" border={1}>
                                    <thead>
                                        <tr className="table-heading bg-white">
                                            <td className="">S.No</td>
                                            <td>Status</td>
                                            <td>Action</td>
                                            <td>Path </td>
                                            <td>Video </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Lorem ipsum</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        className="bg-sixt text-white grow min-w-[30px]"
                                                        icon={<BiEdit />}
                                                        onClick={() => setPopupRelatedEdit(true)}
                                                    />
                                                    <CustomButton1
                                                        className="bg-eye text-white grow min-w-[30px]"
                                                        icon={<BsEyeFill />}
                                                        onClick={() => setPopupRelatedView(true)}
                                                    />
                                                </div>
                                            </td>
                                            <td>Lorem ipsum</td>

                                            <td>Video.mp4</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Lorem ipsum</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        className="bg-sixt text-white grow min-w-[30px]"
                                                        icon={<BiEdit />}
                                                        onClick={() => setPopupRelatedEdit(true)}
                                                    />
                                                    <CustomButton1
                                                        className="bg-eye text-white grow min-w-[30px]"
                                                        icon={<BsEyeFill />}
                                                        onClick={() => setPopupRelatedView(true)}
                                                    />
                                                </div>
                                            </td>
                                            <td>Lorem ipsum</td>

                                            <td>Video.mp4</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        {/* POPUP 1 : ADD */}
                        {popupManageProjectAdd && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-xl font-weight-[300]">Add Manage Project </h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Project Name "}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="">
                                                <CustomTextArea label={"Project Description"} placeholder={"Enter"} />
                                            </div>

                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Videos
                                                </label>
                                                <div className="flex items-center gap-2 pt-1">
                                                    <label
                                                        htmlFor="image-upload"
                                                        className="cursor-pointer text-xs bg-first text-white p-2 rounded-md"
                                                    >
                                                        Upload
                                                    </label>
                                                    {imageName && (
                                                        <p className="flex items-center text-xs ">{imageName}</p>
                                                    )}
                                                    <input
                                                        type="file]-upload"
                                                        className="hidden"
                                                        onChange={handleImageChange}
                                                    />

                                                    {selectedImage && (
                                                        <img
                                                            src={URL.createObjectURL(selectedImage)}
                                                            alt="Profile Photo"
                                                            className=" w-16 h-16 rounded-full border border-[#3D3D3D66]"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxManageProjectAdd}
                                                    setState={setCheckboxManageProjectAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupManageProjectAdd(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}

                        {/* POPUP 2 : EDIT */}
                        {popupManageProjectEdit && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-xl font-weight-[300]">Edit Manage Project </h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Project Name "}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="">
                                                <CustomTextArea label={"Project Description"} placeholder={"Enter"} />
                                            </div>

                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Videos
                                                </label>
                                                <div className="flex items-center gap-2 pt-1">
                                                    <label
                                                        htmlFor="image-upload"
                                                        className="cursor-pointer text-xs bg-first text-white p-2 rounded-md"
                                                    >
                                                        Upload
                                                    </label>
                                                    {imageName && (
                                                        <p className="flex items-center text-xs ">{imageName}</p>
                                                    )}
                                                    <input
                                                        type="file"
                                                        id="image-upload"
                                                        className="hidden"
                                                        onChange={handleImageChange}
                                                    />

                                                    {selectedImage && (
                                                        <img
                                                            src={URL.createObjectURL(selectedImage)}
                                                            alt="Profile Photo"
                                                            className=" w-16 h-16 rounded-full border border-[#3D3D3D66]"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxManageProjectAdd}
                                                    setState={setCheckboxManageProjectAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Update"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupManageProjectEdit(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}

                        {popupManageProjectView && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-xl font-weight-[300]">View ManageProject </h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Project Name "}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="">
                                                <CustomTextArea label={"Project Description"} placeholder={"Enter"} />
                                            </div>

                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Videos
                                                </label>
                                                <div className="flex items-center gap-2 pt-1">
                                                    <label
                                                        htmlFor="image-upload"
                                                        className="cursor-pointer text-xs bg-first text-white p-2 rounded-md"
                                                    >
                                                        Attachment
                                                    </label>
                                                    {imageName && (
                                                        <p className="flex items-center text-xs ">{imageName}</p>
                                                    )}
                                                    <input
                                                        type="file"
                                                        id="image-upload"
                                                        className="hidden"
                                                        onChange={handleImageChange}
                                                    />

                                                    {selectedImage && (
                                                        <img
                                                            src={URL.createObjectURL(selectedImage)}
                                                            alt="Profile Photo"
                                                            className=" w-16 h-16 rounded-full border border-[#3D3D3D66]"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxManageProjectAdd}
                                                    setState={setCheckboxManageProjectAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div onClick={() => setPopupManageProjectView(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}
                        {popupRelatedProjectAdd && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-2 text-white justify-between rounded-t-lg">
                                        <h1 className=" font-weight-[400]">Add Related List</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Path"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Video Upload
                                                </label>
                                                <div className="flex items-center gap-2">
                                                    <label
                                                        htmlFor="image-upload"
                                                        className="cursor-pointer text-xs bg-sixt text-white p-2 rounded-md"
                                                    >
                                                        Upload
                                                    </label>
                                                    {imageName && (
                                                        <p className="flex items-center text-xs ">{imageName}</p>
                                                    )}
                                                    <input
                                                        type="file"
                                                        id="image-upload"
                                                        className="hidden"
                                                        onChange={handleImageChange}
                                                    />
                                                    <div
                                                        className={`flex w-16 h-16 rounded-full border border-[#3D3D3D66] ${
                                                            selectedImage ? "hidden" : ""
                                                        }`}
                                                    >
                                                        <span className="text-[#3D3D3D66] flex items-center justify-center w-full h-full">
                                                            No Upload
                                                        </span>
                                                    </div>
                                                    {selectedImage && (
                                                        <img
                                                            src={URL.createObjectURL(selectedImage)}
                                                            alt="Profile"
                                                            className="w-16 h-16 rounded-full border border-[#3D3D3D66]"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxRelatedAdd}
                                                    setState={setCheckboxRelatedAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Update"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupRelatedProjectAdd(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}
                        {popupRelatedEdit && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-2 text-white justify-between rounded-t-lg">
                                        <h1 className=" font-weight-[400]">Edit Related List</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Path"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Video Upload
                                                </label>
                                                <div className="flex items-center gap-2">
                                                    <label
                                                        htmlFor="image-upload"
                                                        className="cursor-pointer text-xs bg-sixt text-white p-2 rounded-md"
                                                    >
                                                        Upload
                                                    </label>
                                                    {imageName && (
                                                        <p className="flex items-center text-xs ">{imageName}</p>
                                                    )}
                                                    <input
                                                        type="file"
                                                        id="image-upload"
                                                        className="hidden"
                                                        onChange={handleImageChange}
                                                    />
                                                    <div
                                                        className={`flex w-16 h-16 rounded-full border border-[#3D3D3D66] ${
                                                            selectedImage ? "hidden" : ""
                                                        }`}
                                                    >
                                                        <span className="text-[#3D3D3D66] flex items-center justify-center w-full h-full">
                                                            No Upload
                                                        </span>
                                                    </div>
                                                    {selectedImage && (
                                                        <img
                                                            src={URL.createObjectURL(selectedImage)}
                                                            alt="Profile"
                                                            className="w-16 h-16 rounded-full border border-[#3D3D3D66]"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxRelatedAdd}
                                                    setState={setCheckboxRelatedAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Update"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupRelatedEdit(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}

                        {popupRelatedView && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-2 text-white justify-between rounded-t-lg">
                                        <h1 className=" font-weight-[400]">View Related List</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Path "}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Image Upload
                                                </label>
                                                <div className="flex items-center gap-2 pt-1">
                                                    <label
                                                        htmlFor="image-upload"
                                                        className="cursor-pointer text-xs bg-sixt text-white p-2 rounded-md"
                                                    >
                                                        Attachment
                                                    </label>
                                                    {imageName && (
                                                        <p className="flex items-center text-xs ">{imageName}</p>
                                                    )}
                                                    <input
                                                        type="file"
                                                        id="image-upload"
                                                        className="hidden"
                                                        onChange={handleImageChange}
                                                    />

                                                    {selectedImage && (
                                                        <img
                                                            src={URL.createObjectURL(selectedImage)}
                                                            alt="Profile Photo"
                                                            className=" w-16 h-16 rounded-full border border-[#3D3D3D66]"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxRelatedAdd}
                                                    setState={setCheckboxRelatedAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-5">
                                        <div onClick={() => setPopupRelatedView(false)}>
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

export default ManageProject;
