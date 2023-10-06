
import Icon1 from "../assets/1.svg"
import Icon2 from "../assets/22.svg"
import Icon3 from "../assets/3.svg"
import Icon4 from "../assets/4.svg"
import Icon5 from "../assets/5.svg"
import Icon6 from "../assets/6.svg"
import Icon8 from "../assets/8.svg"
import Icon9 from "../assets/9.svg"
import { AiOutlineSearch } from "react-icons/ai";

import { useRef, useMemo } from "react";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";

import { onlyIcon } from "../Admin.page";
import { setOnlyIcon } from "../Admin.page";

function NavTabs() {
    // FOR NAVIGATION TABS
    let currentTab = null;
    let tabRef = [];
    let subTabRef = [];

    function Tab(props) {
        // SUB TABS
        function SubTab(props) {
            const { pathname } = useLocation();
            subTabRef[props.index] = useRef();

            // SUB-TAB RETURN
            return (
                <div
                    className={`overflow-hidden transition-all duration-500`}
                    style={{ maxHeight: "0px" }}
                    ref={subTabRef[props.index]}
                >
                    {props.subTabs.map((subTab, index) => {
                        return (
                            <NavLink
                                key={index}
                                className={`flex items-center gap-3 py-2 press-1 pl-[50px] ${
                                    pathname.includes(subTab[1]) ? "bg-first text-white  rounded" : ""
                                }  `}
                                to={subTab[1]}
                            >
                                <span className="">{subTab[0]}</span>
                            </NavLink>
                        );
                    })}
                </div>
            );
        }

        tabRef[props.index] = useRef();

        // CLICK HANDLER
        function clickHandler() {
            if (!onlyIcon) {
                if (currentTab == props.index) {
                    currentTab = null;
                    subTabRef[props.index].current.style.maxHeight = "0px";
                    tabRef[props.index].current.style.backgroundColor = "transparent";
                    tabRef[props.index].current.style.color = "black"; // Change text color back to black
                } else {
                    if (currentTab !== null) {
                        subTabRef[currentTab].current.style.maxHeight = "0px";
                        tabRef[currentTab].current.style.backgroundColor = "transparent";
                        tabRef[currentTab].current.style.color = "black"; // Change text color back to black
                    }
        
                    currentTab = props.index;
        
                    if (!props.disabled) {
                        subTabRef[props.index].current.style.maxHeight = "1000px";
                    }
        
                    tabRef[props.index].current.style.backgroundColor = "#3D3D3D";
                    tabRef[props.index].current.style.color = "white"; // Set text color to white for active tab
                }
            } else {
                if (currentTab === null) {
                    currentTab = props.index;
                    tabRef[props.index].current.style.backgroundColor = "#3D3D3D";
                    tabRef[props.index].current.style.color = "white"; // Set text color to white for active tab
                } else {
                    tabRef[currentTab].current.style.backgroundColor = "transparent";
                    tabRef[currentTab].current.style.color = "black"; // Change text color back to black for the previous active tab
                    currentTab = props.index;
                    tabRef[props.index].current.style.backgroundColor = "#3D3D3D";
                    tabRef[props.index].current.style.color = "white"; // Set text color to white for active tab
                }
            }
        }
        
        
        // TAB RETURN
        return (
            <div className="overflow-hidden text-fourth">
                <NavLink
                    to={props.to ? props.to : props.subTabs[0][1]}
                    className={`flex items-center gap-3 py-2 my-1 rounded press-1 px-2 transition-all duration-500  overflow-hidden`}
                    ref={tabRef[props.index]}
                    onClick={clickHandler}
                >
                    <span className="min-w-[30px]">{props.icon}</span>
                    {onlyIcon ? null : <span className="">{props.title}</span>}
                </NavLink>
                {onlyIcon ? null : <SubTab subTabs={props.subTabs} index={props.index} />}
            </div>
        );
    }

    // NAVIGATION TABS RETURN
    return (
        <div className="overflow-auto rounded whitespace-nowrap">
            {/* SEARCH BOX */}
            <div className="flex items-center px-2 py-2 my-1 gap-4 border rounded bg-[#D7D7D8] ">
                <AiOutlineSearch className="icon min-w-[30px]" />
                {onlyIcon ? null : (
                    <input
                        type="search"
                        className="w-full bg-transparent shrink grow placeholder:text-fourth"
                        placeholder="Search"
                        name=""
                        id=""
                    />
                )}
            </div>

            <Tab
                index={0}
                icon={<img src={Icon1} className="icon text-inherit ring-first" alt="" />}
                title="DASHBOARD"
                subTabs={[
                    ["Dashboard", "dashboard"],
                    // Name , Link
                ]}
                disabled={true}
                to="dashboard"
            />
            <Tab
                index={1}
                icon={<img src={Icon2} className="icon text-inherit ring-first" alt="" />}
                title="ADMINISTRATOR"
                subTabs={[
                    ["Manage Blood Group", "manage-blood-group"],
                    ["Manage Items", "manage-items"],
                  //  ["Manage Ref Master", "manage-ref-master"],
                    ["Manage Customer Type", "manage-customer-type"],
                    ["Manage Leave Type", "manage-leave-type"],
                    ["Manage Profile", "manage-profile"],
                    ["Manage Attendance", "manage-attendance"],
                  
                    ["Manage Territory", "manage-territory"],
                   // ["Manage Visit Status", "manage-visit"],

                    // Name , Link
                ]}
            />

            <Tab
                index={3}
                icon={<img src={Icon3} className="icon text-inherit ring-first" alt="" />}
                title="CUSTOMER"
                subTabs={[
                    ["Customer", "customer"],

                    // Name , Link
                ]}
                disabled={true}
                to="customer"
            />
            <Tab
                index={2}
                icon={<img src={Icon4} className="icon text-inherit ring-first" alt="" />}
                title="MANAGE DESIGN"
                subTabs={[
                    ["Manage Design", "manage-design"],
                    // Name , Link
                ]}
                disabled={true}
                to="manage-design"
            />
            <Tab
                index={4}
                icon={<img src={Icon5} className="icon text-inherit ring-first" alt="" />}
                title="MANAGE LEAVES"
                subTabs={[
                    ["Add Leaves", "manage-leaves"],

                    // Name , Link
                ]}
                disabled={true}
                to="manage-leaves"
            />

            <Tab
                index={5}
                icon={<img src={Icon6} className="icon text-inherit ring-first" alt="" />}
                title="VISITS"
                subTabs={[
                    ["Visits", "visit"],
                    // Name , Link
                ]}
                disabled={true}
                to="visits"
            />
             <Tab
                index={6}
                icon={<img src={Icon8} className="icon text-inherit ring-first" alt="" />}
                title="NOTIFICATION"
                subTabs={[
                    ["Notification", "notification"],
                    // Name , Link
                ]}
                disabled={true}
                to="notification"
            />
              <Tab
                index={9}
                icon={<img src={Icon9} className="icon text-inherit ring-first" alt="" />}
                title="BROADCAST"
                subTabs={[
                    ["Manage Catalog" ,"manage-catalog"],
                    ["Manage Project","manage-project" ]
                    // Name , Link
                ]}
              
            />
        </div>
    );
}

export default NavTabs;
