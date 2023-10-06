import * as React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
import { AiOutlineSearch, AiOutlineDownload,  AiOutlineImport } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Excel from "../assets/file-type-excel.svg";
import { BiEdit } from "react-icons/bi";

function VisitView() {
    const [activeTab, setActiveTab] = useState(0);

    const [selectedDate, setSelectedDate] = useState(null);

    // TAB-1 : POPUPS
    let [popupCustomerTypeAdd, setPopupCustomerTypeAdd] = useState(false);
    let [popupCustomerTypeEdit, setPopupCustomerTypeEdit] = useState(false);
    let [checkboxCustomerTypeAdd, setCheckboxCustomerTypeAdd] = useState(true);
    let [checkboxCustomerTypeEdit, setCheckboxCustomerTypeEdit] = useState(false);

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"View Visit"} title2={"Manage Visit"} />
                <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                    <label htmlFor="datePicker" className="text-sm font-medium">
                        Select Date
                    </label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        showWeekNumbers
                        dateFormat="dd MMMM yyyy"
                        className="border rounded px-2 py-1"
                    />
                    <label htmlFor="datePicker" className="text-sm font-medium">
    Select Employee
  </label>
                    <CustomSelect1
                        lable="Select"
                        className="bg-first text-white shrink grow md:grow-0 max-w-[50%]"

                        // onClick={() => setPopupCustomerTypeAdd(true)}
                    />

                    {/* <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto text-white rounded bg-first shrink grow md:grow-0">
                        <input
                            type="text"
                            className="w-[120px] grow capitalize bg-transparent placeholder:text-white"
                            placeholder="Search"
                        />
                        <AiOutlineSearch className="min-w-[20px]" />
                    </div> */}
                </div>
                <div className="  flex md:justify-between items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap p-4 minbox">
                    <button className="smlbtn"> CSV</button>
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>
                    <button className="smlbtn"> Column Visibility </button>

                    <div className="flex flex-wrap items-center justify-between gap-1  ml-auto">
                        {/* <CustomButton1
                            label={"Import "}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                        <CustomButton1
                            label={"Download"}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        /> */}
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
                                    // onClick={() => setPopupCustomerTypeAdd(true)}
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
                            <div className="mt-7 max-w-[100vw] overflow-auto table-container">
                                <table className="w-full custom-table" border={1}>
                                    <thead>
                                        <tr className="table-heading">
                                            <td className="">S.No</td>
                                            <td>Visit No</td>
                                            <td>Visit Date</td>
                                            <td>Employee Role</td>

                                            <td>Employee Name</td>
                                            <td>Customer Type</td>
                                            <td>Customer Name</td>
                                            <td>Sate</td>
                                            <td>Region</td>
                                            <td>District</td>
                                            <td>Area</td>
                                            <td>Contact Person</td>
                                            <td>Contact No.</td>
                                            <td>Next Action Date</td>

                                            <td>Latitude</td>
                                            <td>Longitude</td>
                                            <td>Address</td>
                                            <td>Remark</td>
                                            <td>Created Date</td>
                                            <td>Created By</td>
                                            <td>Modified Date</td>
                                            <td>Modified By</td>
                                            <td>Action</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        
                                                        className="bg-sixt text-white grow max-w-[120px]"
                                                        icon={<BiEdit />}
                                                        // onClick={() => setPopupCustomerTypeEdit(true)}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>

                                            <td>type-2</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>Lorem</td>
                                            <td>
                                                <div>
                                                    <h2>Active</h2>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        
                                                        icon={<BiEdit />}
                                                        className="bg-sixt text-white grow max-w-[120px]"
                                                        // onClick={() => setPopupCustomerTypeEdit(true)}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                        {/* POPUP 1 : ADD */}
                        {popupCustomerTypeAdd && (
                            <PopUp>
                                <div className="pb-10 bg-white rounded-lg">
                                    <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                                        <h1 className="text-xl font-weight-[300]">Add Customer Type</h1>
                                        <div className="flex items-center text-sm">
                                         
                                        </div>
                                    </div>

                                    <div className="p-2 mx-auto">
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
                                                            state={checkboxCustomerTypeAdd}
                                                            // setState={setCheckboxCustomerTypeAdd}
                                                        ></CustomCheckBox2>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="flex justify-center gap-5">
                                        <div>
                                            <CustomButton1 label={"Submit"} className="text-white bg-first" />
                                        </div>
                                        {/* <div onClick={() => setPopupCustomerTypeAdd(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div> */}
                                    </div>
                                </div>
                            </PopUp>
                        )}

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
                                        {/* <div onClick={() => setPopupCustomerTypeEdit(false)}>
                                            <CustomButton1 label={"Cancel"} variant="outlined" className="text-first" />
                                        </div> */}
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

export default VisitView;
