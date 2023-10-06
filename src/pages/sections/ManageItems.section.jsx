// CORE
import React, { useState } from "react";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import { Tab, TabContainer, TabContent } from "../components/Tab.component";

// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDownload, AiOutlineSearch } from "react-icons/ai";
import { AiOutlineImport } from "react-icons/ai";
import useAdministrator from "../../hooks/administrator";
import { AddProductPopUp, ProductsTable } from "./manage-items/product";
import { AddBrandPopUp, BrandsTable } from "./manage-items/brand";
import { SizesTable, AddSizePopUp } from "./manage-items/size";
import { AddDesignTypePopUp, DesignTypesTable } from "./manage-items/design-type";
import { SeriesTable, AddSeriesPopUp } from "./manage-items/series";
import { BaseDesignTable, AddBaseDesignPopUp } from "./manage-items/base-design";
import { CollectionTable } from "./manage-items/collection/CollectionTable";
import { AddCollectionPopUp } from "./manage-items/collection/AddCollectionPopUp";
import { CategoryTable, AddCategoryPopUp } from "./manage-items/category";

function ManageItems() {
    useAdministrator(); // Load data with api requests
    const [activeTab, setActiveTab] = useState(2);

    let [popupItemAdd, setPopupItemAdd] = useState(false);
    let [popupItemStatusAdd, setPopupItemStatusAdd] = useState(false);
    let [popupGradeAdd, setPopupGradeAdd] = useState(false);
    let [popupSeriesAdd, setPopupSeriesAdd] = useState(false);
    let [popupFinishAdd, setPopupFinishAdd] = useState(false);
    let [popupConceptAdd, setPopupConceptAdd] = useState(false);
    let [popupPunchNameAdd, setPopupPunchNameAdd] = useState(false);
    let [popupCategoryAdd, setPopupCategoryAdd] = useState(false);

    const tablabel = { 2: "Collection", 7: "Category", 3: "Size", 5: "Series", 6: "Design Name" };
    
    return (
        <div className="flex flex-col h-full  p-2">
            <div className="p-4 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Item Master"} title2={"Administration"} />

                <div className=" flex items-center md:justify-between flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap p-4 minbox">
                    <button className="smlbtn"> Excel</button>
                    <button className="smlbtn"> PDF</button>
                    <button className="smlbtn"> Print</button>

                    <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto">
                        <CustomButton1
                            label={"Import " + tablabel[activeTab]}
                            icon={<AiOutlineImport />}
                            className=" bg-sixt text-white grow "
                        />
                        <CustomButton1
                            label={"Sample Download " + tablabel[activeTab]}
                            icon={<AiOutlineDownload />}
                            className=" bg-sixt text-white grow "
                        />
                    </div>
                </div>

                <div className="px-2 lg:px-4 minbox border-b-0">
                    <TabContainer showArrow={true}>
                        {/* <Tab label="Product" index={0} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Brand" index={1} activeTab={activeTab} setActiveTab={setActiveTab} /> */}
                        <Tab label="Collection" index={2} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Category" index={7} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Size" index={3} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Series" index={5} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Design Name" index={6} activeTab={activeTab} setActiveTab={setActiveTab} />
                        {/* <Tab label="Design Type" index={4} activeTab={activeTab} setActiveTab={setActiveTab} /> */}
                    </TabContainer>
                </div>

                <TabContent index={0} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div>
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2  md:flex-nowrap mt-4">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupItemAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto text-white rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <ProductsTable />
                    </div>

                    {/* POPUP 1 : ADD */}
                    <AddProductPopUp isVisible={popupItemAdd} onCancel={() => setPopupItemAdd(false)} />
                </TabContent>

                <TabContent index={1} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className=" text-white bg-sixt shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupItemStatusAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto text-white rounded bg-first shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <BrandsTable />
                    </div>

                    {/* POPUP 1 : ADD */}
                    <AddBrandPopUp isVisible={popupItemStatusAdd} onCancel={() => setPopupItemStatusAdd(false)} />
                </TabContent>

                <TabContent index={2} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupGradeAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 p-1 ml-auto  rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <CollectionTable />
                    </div>

                    {/* POPUP 1 : ADD */}
                    <AddCollectionPopUp isVisible={popupGradeAdd} onCancel={() => setPopupGradeAdd(false)} />
                </TabContent>

                <TabContent index={3} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add  "}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupSeriesAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto  rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <SizesTable />
                    </div>

                    {/* POPUP 1 : ADD */}
                    <AddSizePopUp isVisible={popupSeriesAdd} onCancel={() => setPopupSeriesAdd(false)} />
                </TabContent>

                <TabContent index={4} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupFinishAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <DesignTypesTable />
                    </div>

                    {/* POPUP 1 : ADD */}
                    <AddDesignTypePopUp isVisible={popupFinishAdd} onCancel={() => setPopupFinishAdd(false)} />
                </TabContent>

                <TabContent index={5} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupConceptAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <SeriesTable />
                    </div>

                    {/* POPUP 1 : ADD */}
                    <AddSeriesPopUp isVisible={popupConceptAdd} onCancel={() => setPopupConceptAdd(false)} />
                </TabContent>

                <TabContent index={6} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupPunchNameAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <BaseDesignTable />
                    </div>

                    {/* POPUP 1 : ADD */}
                    <AddBaseDesignPopUp isVisible={popupPunchNameAdd} onCancel={() => setPopupPunchNameAdd(false)} />
                </TabContent>
                <TabContent index={7} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupCategoryAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                <input
                                    type="text"
                                    className="w-[120px] grow capitalize bg-transparent  "
                                    placeholder="Search"
                                />
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <CategoryTable />
                    </div>

                    {/* POPUP 1 : ADD */}
                    <AddCategoryPopUp isVisible={popupCategoryAdd} onCancel={() => setPopupCategoryAdd(false)} />
                </TabContent>
            </div>
        </div>
    );
}

export default ManageItems;
