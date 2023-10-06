// CORE
import * as React from "react";
import { useState } from "react";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import { Tab, TabContainer, TabContent } from "../components/Tab.component";
import Excel from "../assets/file-type-excel.svg";
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";

function RolePermission() {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
   
    return (
        <div className="flex flex-col h-full">
            <Title title1={"Manage Profile"} title2={"ADMINITSTRATOR"} />

            <div className="p-4 mt-5  rounded grow" style={{ border: "1px solid rgba(61, 61, 61, 0.30)" }}>
                <h1> Role Permission</h1>
                <div className="px-2  lg:px-4 minbox">
                    {/* 3 TABS */}
                    <TabContainer>
                        <Tab label="Website Application" index={0} activeTab={activeTab} setActiveTab={setActiveTab} />
                       {/* Reporting To is renamed to Role Heirarchy */}
                       
                        <Tab label="Mobile App Application" index={1} activeTab={activeTab} setActiveTab={setActiveTab} />
                        
                    </TabContainer>
                </div>
                <div className="  flex flex-row md:justify-between items-center flex-wrap justify-start gap-1 mt-5 md:flex-nowrap ">
                    <div className="mt-2 w-[80vw]  hide-scrollbar overflow-auto table-container ">
                        <table className="w-full custom-table" border={1}>
                            <thead>
                                <tr className="table-heading ">
                                    <td className="">S.No</td>
                                    <td>Permission Name</td>
                                    <td>View</td>
                                    <td>Add</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Lorem ipsum</td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Lorem ipsum</td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Lorem ipsum</td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Lorem ipsum</td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Lorem ipsum</td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <Checkbox></Checkbox>{" "}
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="flex justify-center gap-5 bg-[#F9FBFF] p-8">
                    <div>
                        <CustomButton1
                            label={"Back"}
                            className="text-white "
                            onClick={() => navigate("/admin/manage-profile")}
                        />
                    </div>
                    <div>
                        <CustomButton1
                            label={"Update"}
                            className=" text-white"
                            onClick={() => navigate("/admin/manage-profile")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RolePermission;
