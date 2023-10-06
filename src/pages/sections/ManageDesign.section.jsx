// CORE
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
import { AiOutlineDownload, AiOutlineSearch } from "react-icons/ai";
import { AiOutlineImport } from "react-icons/ai";
import { AddDesignPopUp, DesignsTable } from "./manage-design";
import { getDesignesList } from "../../redux/apis";

function ManageDesign() {
    const dispatch = useDispatch();
    const [activeTab] = useState(0);
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
    let [popupDesignAdd, setPopupDesignAdd] = useState(false);
    let [popupDesignEdit, setPopupDesignEdit] = useState(false);
    let [popupDesignView, setPopupDesignView] = useState(false);
    let [checkboxDesignAdd, setCheckboxDesignAdd] = useState(true);

    useEffect(() => {
        dispatch(getDesignesList());
    }, []);

    return (
        <div className="flex flex-col h-full p-2">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Design Master"} title2={"Administration"} />

                <div className="  flex md:justify-between items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap p-4 minbox">
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>

                    <div className="flex flex-wrap items-center justify-between gap-1 px-2 py-2   ml-auto">
                        <CustomButton1
                            label={"Import   "}
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

                                <div className="flex items-center justify-between gap-1 px-2   ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                    <input
                                        type="text"
                                        className="w-[120px] grow capitalize bg-transparent "
                                        placeholder="Search"
                                    />
                                    <AiOutlineSearch className="min-w-[20px]" />
                                </div>
                            </div>

                            {/* TABLE */}
                            <DesignsTable />
                        </div>

                        {/* POPUP 1 : ADD */}
                        <AddDesignPopUp isVisible={popupDesignAdd} onCancel={() => setPopupDesignAdd(false)} />

                        {/* POPUP 2 : EDIT */}
                        {popupDesignEdit && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-xl font-weight-[300]">Edit Design </h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-4 mx-auto">
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                            <div className="py-2">
                                                <CustomTextField2 label={"Design Code"} placeholder="Enter" />
                                            </div>
                                            <div className="py-2">
                                                <CustomTextField2 label={"Sub Design Code"} placeholder="Enter" />
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"Collection Name"}></CustomSelect1>
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"Size in MM"}></CustomSelect1>
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"Series"}></CustomSelect1>
                                            </div>

                                            <div className="py-2">
                                                <CustomSelect1
                                                    label={"Design Name"}
                                                    placeholder={"Enter"}
                                                />
                                            </div>
                                            <div className="flex flex-col items-start justify-center py-2 ">
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
                                            <div className="py-2">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxDesignAdd}
                                                    setState={setCheckboxDesignAdd}
                                                ></CustomCheckBox2>
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

                        {/* POPUP 3 : View */}
                        {popupDesignView && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-xl font-weight-[300]">View Design Master</h1>
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-4 mx-auto">
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                            <div className="py-2">
                                                <CustomSelect1 label={"Collection"}></CustomSelect1>
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"Size"}></CustomSelect1>
                                            </div>
                                            <div className="py-2">
                                                <CustomSelect1 label={"Series"}></CustomSelect1>
                                            </div>

                                            <div className="py-2">
                                                <CustomTextField2
                                                    label={"Design Name"}
                                                    placeholder={"Enter"}
                                                ></CustomTextField2>
                                            </div>

                                            <div className="py-2">
                                                <CustomCheckBox2
                                                    label={"Is Active"}
                                                    state={checkboxDesignAdd}
                                                    setState={setCheckboxDesignAdd}
                                                ></CustomCheckBox2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div onClick={() => setPopupDesignView(false)}>
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

export default ManageDesign;
