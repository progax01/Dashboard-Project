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

// ICONSbg-white
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineImport } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Excel from "../assets/file-type-excel.svg";
import { BiEdit } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import CustomSelect2 from "../components/CustomSelect2.component";
import { FaTimes } from "react-icons/fa";
import CustomDate from "../components/CustomDate.component";

function ManageCatalog() {
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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };
    // TAB-1 : POPUPS
    let [popupManageCatalogAdd, setPopupManageCatalogAdd] = useState(false);
    let [popupManageCatalogEdit, setPopupManageCatalogEdit] = useState(false);
    let [popupManageCatalogView, setPopupManageCatalogView] = useState(false);
    let [checkboxManageCatalogAdd, setCheckboxManageCatalogAdd] = useState(true);

    let [checkboxRelatedAdd, setCheckboxRelatedAdd] = useState(false);
    let [popupRelatedCatalogAdd, setPopupRelatedCatalogAdd] = useState(false);
    let [popupRelatedView, setPopupRelatedView] = useState(false);
    let [popupRelatedEdit, setPopupRelatedEdit] = useState(false);
    return (
        <div className="flex flex-col h-full p-2">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Catalog"} title2={"BROADCAST"} />

                <div className="  flex md:justify-start items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap p-2">
                    <button className="smlbtn"> CSV</button>

                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>

                    {/* <div className="flex flex-wrap items-center justify-between gap-1 text-xs ml-auto">
                        <CustomButton1
                            label={"Impor Broadcast "}
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

                <div className=" bg-white rounded grow">
                    {/* TAB 1 CONTENT : PRODUCT */}
                    <TabContent index={0} activeTab={activeTab}>
                        {/* 4 BUTTONS + TABLE */}
                        <div className="px-2 lg:px-4">
                            {/* 4 BUTTONS */}
                            <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap minbox">
                                <CustomButton1
                                    label={"Add "}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                    onClick={() => setPopupManageCatalogAdd(true)}
                                />

                                <div className="flex items-center justify-between gap-1 px-2  ml-auto text-[rgba(0, 0, 0, 0.50)] boreder rounded bg-white shrink grow md:grow-0">
                                    <input
                                        type="text"
                                        className="w-[120px] grow capitalize bg-transparent placeholder:text-sm"
                                        placeholder="Search"
                                    />
                                    <AiOutlineSearch className="min-w-[20px]" />
                                </div>
                            </div>

                            {/* TABLE */}
                            <div className="mt-7 max-w-[100vw]  overflow-auto table-container">
                                <table className="w-full custom-table" border={1}>
                                    <thead>
                                        <tr className="table-heading">
                                            <td className="">S.No</td>
                                            <td>Action</td>
                                            <td>Launch Date </td>
                                            <td>Collection Name </td>
                                            <td>Catalog Upload</td>

                                            <td>Remarks</td>

                                            <td>Created By</td>

                                            <td>Created Date</td>

                                            <td>Status</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        className="bg-sixt text-white grow min-w-[30px]"
                                                        icon={<BiEdit />}
                                                        onClick={() => setPopupManageCatalogEdit(true)}
                                                    />
                                                    <CustomButton1
                                                        className="bg-eye text-white grow min-w-[30px]"
                                                        icon={<BsEyeFill />}
                                                        onClick={() => setPopupManageCatalogView(true)}
                                                    />
                                                </div>
                                            </td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        className="bg-sixt text-white grow min-w-[30px]"
                                                        icon={<BiEdit />}
                                                        onClick={() => setPopupManageCatalogEdit(true)}
                                                    />
                                                    <CustomButton1
                                                        className="bg-eye text-white grow min-w-[30px]"
                                                        icon={<BsEyeFill />}
                                                        onClick={() => setPopupManageCatalogView(true)}
                                                    />
                                                </div>
                                            </td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="bg-[#F5F5F5] p-5 mt-8">
                            <h1>Related List</h1>
                            <div className="flex flex-row flex-wrap justify-end gap-2 mt-5 md:flex-nowrap minbox">
                                <CustomButton1
                                    label={"Add "}
                                    icon={<IoMdAdd />}
                                    className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                    onClick={() => setPopupRelatedCatalogAdd(true)}
                                />

                                <div className="flex items-center justify-end gap-1 p-2  ml-auto text-white boreder rounded bg-[#1C4584] shrink grow md:grow-0">
                                    <input
                                        type="text"
                                        className="w-[120px] grow capitalize text-white bg-transparent placeholder:text-sm"
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
                                            <td>Design Code </td>
                                            <td>Sub Design Code </td>
                                            <td>Design Name</td>

                                            <td>Size</td>
                                            <td>Series</td>
                                            <td>Image</td>
                                            <td>Created By</td>

                                            <td>Created Date</td>
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
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
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
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                            <td>Lorem ipsum</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        {isModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="modal-overlay fixed inset-0 bg-gray-700 opacity-75"></div>
                                <div className="modal-container max-w-full mx-auto relative">
                                    <button
                                        className="absolute top-0 right-0 m-3 text-xl cursor-pointer"
                                        onClick={closeModal}
                                    >
                                        <FaTimes />
                                    </button>
                                    <div className="modal-content bg-white rounded-lg shadow-lg overflow-hidden">
                                        <img
                                            src={URL.createObjectURL(selectedImage)}
                                            alt="Profile Photo"
                                            className="modal-image max-w-full max-h-screen mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* POPUP 1 : ADD */}
                        {popupManageCatalogAdd && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-2 text-white justify-between rounded-t-lg">
                                        <h1 className="text-l font-weight-[400]">Add Catalog</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                            <div>
                                                <CustomDate label={"Launch Date"} />
                                            </div>

                                            <div>
                                                <CustomSelect2 label={"Collection Name "} />
                                            </div>

                                            <div className="">
                                                <CustomTextField2
                                                    label={"Remark "}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Image Upload
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
                                                            No Image
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
                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Catalog
                                                </label>
                                                <div className="flex items-center gap-2 pt-1">
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
                                                    state={checkboxManageCatalogAdd}
                                                    setState={setCheckboxManageCatalogAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupManageCatalogAdd(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}

                        {/* POPUP 2 : EDIT */}
                        {popupManageCatalogEdit && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-2 text-white justify-between rounded-t-lg">
                                        <h1 className=" font-weight-[400]">Edit Catelog</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                            <div>
                                                <CustomDate label={"Launch Date"} />
                                            </div>

                                            <div>
                                                <CustomSelect2 label={"Collection Name "} />
                                            </div>

                                            <div className="">
                                                <CustomTextField2
                                                    label={"Remark "}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Image Upload
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
                                                            No Image
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
                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Catalog
                                                </label>
                                                <div className="flex items-center gap-2 pt-1">
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
                                                    state={checkboxManageCatalogAdd}
                                                    setState={setCheckboxManageCatalogAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Update"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupManageCatalogEdit(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}

                        {popupManageCatalogView && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-2 text-white justify-between rounded-t-lg">
                                        <h1 className=" font-weight-[400]">View Catelog</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                            <div>
                                                <CustomDate label={"Launch Date"} />
                                            </div>

                                            <div>
                                                <CustomSelect2 label={"Collection Name "} />
                                            </div>

                                            <div className="">
                                                <CustomTextField2
                                                    label={"Remark "}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Image Upload
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
                                                            No Image
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
                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Catalog
                                                </label>
                                                <div className="flex items-center gap-2 pt-1">
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
                                                    state={checkboxManageCatalogAdd}
                                                    setState={setCheckboxManageCatalogAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-5">
                                        <div onClick={() => setPopupManageCatalogView(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div>
                                    </div>
                                </div>
                            </PopUp>
                        )}
                        {popupRelatedCatalogAdd && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-2 text-white justify-between rounded-t-lg">
                                        <h1 className=" font-weight-[400]">Add Related List</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-5 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Design Code "}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div>
                                                <CustomSelect2 label={"Sub Design Code "} />
                                            </div>
                                            <div>
                                                <CustomSelect2 label={"Design Name"} />
                                            </div>
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Size"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Image
                                                </label>
                                                <div className="flex items-center gap-2 pt-1">
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
                                        <div>
                                            <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                        </div>
                                        <div onClick={() => setPopupRelatedCatalogAdd(false)}>
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
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Design Code "}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div>
                                                <CustomSelect2 label={"Sub Design Code "} />
                                            </div>
                                            <div>
                                                <CustomSelect2 label={"Design Name"} />
                                            </div>
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Size"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Image
                                                </label>
                                                <div className="flex items-center gap-2 pt-1">
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
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Design Code "}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>
                                            <div>
                                                <CustomSelect2 label={"Sub Design Code "} />
                                            </div>
                                            <div>
                                                <CustomSelect2 label={"Design Name"} />
                                            </div>
                                            <div className="">
                                                <CustomTextField2
                                                    label={"Size"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="flex flex-col items-start justify-center  ">
                                                <label htmlFor="image-upload" className="text-xs font-small">
                                                    Image
                                                </label>
                                                <div className="flex items-center gap-2 pt-1">
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

export default ManageCatalog;
