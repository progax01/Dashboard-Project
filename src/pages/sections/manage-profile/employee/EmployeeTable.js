import React, { useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { AiOutlineSetting } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import CustomButton1 from "../../../components/CustomButton1.component";
import { BsEyeFill } from "react-icons/bs";
import {MdSupervisorAccount} from "react-icons/md"
export const EmployeeTable = () => {
    const navigate = useNavigate();
    const employees = useSelector((state) => state.profile.employees);
    const [editItem, setEditItem] = useState(false);

    return (
        <div className="mt-7 max-w-[100vw]  overflow-auto table-container">
            <table className="w-full custom-table" border={1}>
                <thead>
                    <tr className="table-heading">
                        <td className="">S.No.</td>
                        <td>Action</td>
                        <td>Manage Access</td>
                        <td>Employee Code</td>
                        <td>Employee Name</td>
                        <td>Email ID</td>
                        <td>Designation</td>
                        <td>Role</td>
                        <td>Manager Name</td>
                        <td>Created By</td>
                        <td>Created Date</td>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="gap-2">
                                    <CustomButton1
                                        className="bg-sixt text-white grow min-w-[30px]"
                                        icon={<BiEdit />}
                                        onClick={() => setEditItem(item)}
                                    />
                                    <CustomButton1
                                        className="bg-eye text-white grow min-w-[30px]"
                                        icon={<BsEyeFill />}
                                    />
									 <CustomButton1
                                        className="bg-[#1C4584] text-white grow min-w-[30px]"
                                        icon={<MdSupervisorAccount/>}
                                        onClick={() => navigate("/admin/manage-attendance")}
                                    />
                                </div>
                            </td>
                            <td>
								<CustomButton1
									className="bg-[#979799] text-white grow max-w-[30px]"
									icon={<AiOutlineSetting />}
									onClick={() => navigate("/admin/role-permission")}
								/>
							</td>
                            {/* <td>
                                <div>
                                    <CustomButton1 label={"Reset"} className="bg-sixt text-white grow min-w-[30px]" />
                                </div>
                            </td> */}
                            {/* <td>
								<h2>{item.isActive ? 'Active' : 'Inactive'}</h2>
							</td> */}
                            <td>{item.employeeCode}</td>
                            <td>{item.employeeName}</td>
                            <td>{item.emailId}</td>
                            <td>{item.roleName}</td>
                            <td>{item.reportingToName}</td>
                            <td>{item.creatorName}</td>
                            <td>{item.creatorName}</td>
							<td>{moment(item.createdOn).format("DD-MM-YYYY")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <EditRolePopUp
				isVisible={editItem}
				onCancel={() => setEditItem(false)}
			/> */}
        </div>
    );
};
