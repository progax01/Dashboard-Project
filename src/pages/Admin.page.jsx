// CORE
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/NavBar.component";
import NavTabs from "./components/NavTabs.components";
import Dashboard from "./sections/Dashboard.section";
import ManageProfile from "./sections/ManageProfile.section";
import ManageLeave from "./sections/ManageLeave.section";
import ManageCustomerType from "./sections/ManageCustomerType.section";
import ManageItems from "./sections/ManageItems.section";
import ManageTerritory from "./sections/ManageTerritory.section";
import DesignMaster from "./sections/DesignMaster.section";
import Customer from "./sections/Customer.section";

import ManageLeaves from "./sections/ManageLeaves.section";
import SalesOrdeer from "./sections/Visits.section";

//import ManageRefMaster from "./sections/ManageRefMaster.section";
import ManageDesign from "./sections/ManageDesign.section";

import Visits from "./sections/Visits.section";
import Notification from "./sections/Notification.section";
import CustomerView from "./sections/CustomerView";
import VisitView from "./sections/VisitView";
import RolePermission from "./sections/RolePermission.section";
import ManageBloodGroup from "./sections/ManageBloodGroup";
import ManageCatalog from "./sections/ManageCatalog.section";
import ManageDetails from "./sections/ManageProject.section";
import ManageVisit from "./sections/ManageVisit.section";
import ManageAttendanceSection from "./sections/ManageAttendance.section";
import ManageProject from "./sections/ManageProject.section";

let [onlyIcon, setOnlyIcon] = [false, null];

function Admin() {
    [onlyIcon, setOnlyIcon] = useState(true);

    return (
        <section className="flex flex-col h-screen p-2 bg-white">
            {/* NAVIGATION BAR */}
            <section>
                <Navbar />
            </section>

            {/* ASIDE TABS + DYNAMIC SECTIONS  */}
            <section className="flex gap-4 grow ">
                {/* ASIDE */}
                <div
                    className={` bg-white ${
                        onlyIcon ? " w-[70px] min-w-[70px] " : " w-[50px] min-w-[280px] "
                    } p-3 hidden lg:block rounded mt-2 overflow-x-hidden border border-[#3D3D3D66]
                    overflow-auto  transition-all`}
                >
                    <NavTabs />
                </div>

                {/* DYNAMIC SECTIONS */}
                <div className="mt-2  rounded grow overflow-hidden ">
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="manage-profile" element={<ManageProfile />} />
                        <Route path="role-permission" element={<RolePermission />} />
                        <Route path="manage-attendance" element={<ManageAttendanceSection />} />
                        <Route path="manage-leave-type" element={<ManageLeave />} />
                        {/* <Route path="manage-ref-master" element={<ManageRefMaster />} /> */}
                        <Route path="manage-customer-type" element={<ManageCustomerType />} />
                        <Route path="manage-items" element={<ManageItems />} />
                        <Route path="manage-design" element={<ManageDesign />} />
                        <Route path="manage-territory" element={<ManageTerritory />} />
                        <Route path="manage-blood-group" element={<ManageBloodGroup />} />

                        <Route path="customer" element={<Customer />} />
						<Route path="customer/:id" element={<CustomerView />} />
						<Route path="customer-view/:id" element={<CustomerView />} />

                        <Route path="design-master" element={<DesignMaster />} />
                        <Route path="manage-leaves" element={<ManageLeaves />} />
                        <Route path="manage-visit" element={<ManageVisit />} />
                        <Route path="visits" element={<Visits />} />
                        <Route path="visit-view" element={<VisitView />} />
                        <Route path="notification" element={<Notification />} />
                        <Route path="manage-catalog" element={<ManageCatalog />} />
                        <Route path="manage-project" element={<ManageProject/>} />
                    </Routes>
                </div>
            </section>
        </section>
    );
}

export default Admin;
export { onlyIcon, setOnlyIcon };
