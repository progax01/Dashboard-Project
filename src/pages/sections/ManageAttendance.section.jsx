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
import { DateRangePicker } from "react-date-range";
import { onlyIcon } from "../Admin.page";
import { setOnlyIcon } from "../Admin.page";

// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch, AiOutlineDownload, AiTwotoneEdit, AiOutlineImport, AiOutlineBackward } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Excel from "../assets/file-type-excel.svg";
import { BsEyeFill } from "react-icons/bs";
import DateRangeSelection from "../components/DateRangeSelection.component";
import CustomSelect2 from "../components/CustomSelect2.component";
import { BiReset } from "react-icons/bi";

function ManageAttendance() {
    const [activeTab, setActiveTab] = useState(0);

    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [selectedOption, setSelectedOption] = useState("month");
    const [selectedEmployee, setSelectedEmployee] = useState("");

    const handleDateChange = (ranges) => {
        setDateRange([ranges.selection]);
        setShowDropdown(false);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleEmployeeChange = (event) => {
        setSelectedEmployee(event.target.value);
    };

    const handleReset = () => {
        setDateRange([
            {
                startDate: new Date(),
                endDate: new Date(),
                key: "selection",
            },
        ]);
        setSelectedOption("month");
        setSelectedEmployee("");
    };

    const [showDropdown, setShowDropdown] = useState(false);

    // TAB-1 : POPUPS
    let [popupCustomerTypeAdd, setPopupCustomerTypeAdd] = useState(false);
    let [popupCustomerTypeEdit, setPopupCustomerTypeEdit] = useState(false);
    let [checkboxCustomerTypeAdd, setCheckboxCustomerTypeAdd] = useState(true);
    let [checkboxCustomerTypeEdit, setCheckboxCustomerTypeEdit] = useState(false);

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"View Attendance"} title2={"Manage Profile"} />

                <div className="  flex md:justify-start items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap p-4 minbox">
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>

                    {/* <div className="flex flex-wrap items-center justify-between gap-1  ml-auto">
                        <CustomButton1
                            label={"Import Manage Attendance "}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                        <CustomButton1
                            label={"Sample Downlaod Manage Attendance "}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        />
                    </div> */}
                </div>

                <div className="  bg-white rounded grow">
                    {/* TAB 1 CONTENT : PRODUCT */}
                    <TabContent index={0} activeTab={activeTab}>
                        {/* 4 BUTTONS + TABLE */}
                        <div className=" px-2 lg:px-2 ">
                            {/* 4 BUTTONS */}
                            <div className="">
                                {/* Buttons and Search */}
                                <div className="flex flex-wrap items-center justify-between minbox gap-2  ">
                                    {/* <CustomButton1
                                        label="Add"
                                        icon={<IoMdAdd />}
                                        className="bg-sixt text-white md:grow-0 max-w-[50%]"
                                        // onClick={() => setPopupCustomerTypeAdd(true)}
                                    /> */}
                                    <div className="p-4 ">
                                        <div className="flex gap-10 mb-4">
                                            <div className="flex items-center space-x-2">
                                                <label htmlFor="dateFilter"> </label>
                                                <select
                                                    id="dateFilter"
                                                    className="border rounded"
                                                    value={selectedOption}
                                                    onChange={handleOptionChange}
                                                >
                                                    <option value="">Date Range</option>
                                                    
                                                    <option value="month">Month</option>
                                                    <option value="week">Week</option>
                                                    <option value="range">Range</option>
                                                </select>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <label htmlFor="employeeFilter"></label>
                                                <select
                                                    id="employeeFilter"
                                                    className="border rounded"
                                                    value={selectedEmployee}
                                                    onChange={handleEmployeeChange}
                                                >
                                                    <option value="">All Employees</option>
                                                    <option value="employee1">Employee 1</option>
                                                    <option value="employee2">Employee 2</option>
                                                    <option value="employee3">Employee 3</option>
                                                </select>
                                            </div>

                                            <CustomButton1
                                                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                                onClick={handleReset}
                                                icon={<BiReset className="w-[30px]"/>}
                                            >
                                              
                                            </CustomButton1>
                                        </div>

                                       
                                    </div>

                                    <div className="flex items-center   p-2 border rounded bg-white md:grow-0">
                                        <input type="text" className="w-[120px] bg-transparent" placeholder="Search" />
                                        <AiOutlineSearch className="w-[20px]" />
                                    </div>
                                </div>
                            </div>

                            {/* TABLE */}
                            <div className="mt-7 max-w-[100vw] overflow-auto table-container">
                                <table className="w-full custom-table" border={1}>
                                    <thead>
                                        <tr className="table-heading">
                                            <td className="">S.No</td>
                                            <td>Action</td>
                                            <td>Employee Name</td>
                                            <td>Employee ID</td>
                                            <td>Latitude</td>
                                            <td>Longitude</td>
                                            <td>Battery Status</td>
                                            <td>Address</td>
                                            <td>Date</td>
                                           
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        className="bg-eye text-white grow max-w-[120px]"
                                                        icon={<BsEyeFill />}
                                                        //onClick={() => setPopupCustomerTypeEdit(true)}
                                                    />
                                                </div>
                                            </td>
                                            <td>Lorem</td>
                                            <td>Lorem</td> <td>Lorem</td>
                                            <td>Lorem</td> <td>Lorem</td>
                                            <td>Lorem</td>
                                           
                                            <td>Lorem</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div>
                                                    <CustomButton1
                                                        className="bg-eye text-white grow max-w-[120px]"
                                                        icon={<BsEyeFill />}
                                                        //onClick={() => setPopupCustomerTypeEdit(true)}
                                                    />
                                                </div>
                                            </td>
                                            <td>Lorem</td>
                                            <td>Lorem</td> <td>Lorem</td>
                                            <td>Lorem</td> <td>Lorem</td>
                                            <td>Lorem</td>
                                            
                                            <td>Lorem</td>
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
                                        <div className="flex items-center text-sm"></div>
                                    </div>

                                    <div className="p-2 mx-auto">
                                        <table className="max-w-full popup-table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <CustomTextField2
                                                            label={"Employee Name"}
                                                            placeholder={"Enter"}
                                                        ></CustomTextField2>
                                                    </td>
                                                    <td>
                                                        <CustomCheckBox2
                                                            label={"Is Active"}
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
                                        <div className="flex items-center text-sm"></div>
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

export default ManageAttendance;
