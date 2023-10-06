// CORE
import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import Title from "../components/Title.component";
import CustomButton1 from "../components/CustomButton1.component";
import { Tab, TabContainer, TabContent } from "../components/Tab.component";

// ICONS
import { IoMdAdd } from "react-icons/io";
import { AiOutlineSearch, AiOutlineImport, AiOutlineDownload } from "react-icons/ai";
import { AddStatePopUp, StatesTable } from "./manage-territory/states";
import { AddRegionPopUp, RegionsTable } from "./manage-territory/regions";
import { AddDistrictPopUp, DistrictsTable } from './manage-territory/districts';
import { AddAreaPopUp, AreasTable } from "./manage-territory/areas";
import { getAreasList, getDistricstList, getRegionsList, getStatesList } from "../../redux/apis";
import useDebounce from "../../hooks/useDebounce";

function ManageTerritory() {
	const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);
    const [searchKey, setSearchKey] = useState("");

    // TAB-1 : POPUPS
    const [popupStateAdd, setPopupStateAdd] = useState(false);

    // TAB-2 : POPUPS
    const [popupRegionAdd, setPopupRegionAdd] = useState(false);

    // TAB-3 : POPUPS
    let [popupDistrictAdd, setPopupDistrictAdd] = useState(false)

    // TAB-4 : POPUPS
    let [popupAreaAdd, setPopupAreaAdd] = useState(false);

	useEffect(() => {
		dispatch(getStatesList());
		dispatch(getRegionsList());
		dispatch(getDistricstList());
		dispatch(getAreasList());
	}, []);

	const handleSearch = useDebounce((term) => {
		// Perform search operation with the debounced term
		console.log('Searching for:', term);
		switch (activeTab) {
			case 0:
				dispatch(getStatesList({ stateName: term }));
				break;
			case 1:
				dispatch(getRegionsList({ regionName: term }));
				break;
			case 2:
				dispatch(getDistricstList({ districtName: term }));
				break;
			case 3:
				dispatch(getAreasList({ areaName: term }));
				break;
			default:
				break;
		}
	}, 300);

	const onSearch = (e) => {
		const { value } = e.target;
		setSearchKey(value);

		// Debounce the search callback
		handleSearch(value);
	};
const tablabel ={
0:"State",
1:"Region",
2: "District",
3: "Area",
};
    return (
        <div className="flex flex-col h-full">
            <div className="p-6 mt-2 bg-white rounded grow" style={{ border: "1px solid #3D3D3D66" }}>
                <Title title1={"Manage Territory"} title2={"Administration"} />

                <div className="  flex md:justify-between items-center flex-row flex-wrap justify-start gap-1 mt-5 md:flex-nowrap minbox">
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

                <div className="px-2 lg:px-4 minbox">
                    {/* 18 TABS */}
                    <TabContainer showArrow={true}>
                        <Tab label="State" index={0} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Region" index={1} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="District" index={2} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <Tab label="Area" index={3} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </TabContainer>
                </div>
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
                                onClick={() => setPopupStateAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
								<input
									value={searchKey}
									onChange={onSearch}
									type="text"
									className="w-[120px] grow capitalize bg-transparent  "
									placeholder="Search"
								/>
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <StatesTable />
                    </div>

                    {/* POPUP 1 : ADD */}
					<AddStatePopUp
						isVisible={popupStateAdd}
						onCancel={() => setPopupStateAdd(false)}
					/>
                </TabContent>

                <TabContent index={1} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupRegionAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
                                <input
									value={searchKey}
									onChange={onSearch}
									type="text"
									className="w-[120px] grow capitalize bg-transparent  "
									placeholder="Search"
								/>
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <RegionsTable />
                    </div>

                    {/* POPUP 1 : ADD */}
                    <AddRegionPopUp
						isVisible={popupRegionAdd}
						onCancel={() => setPopupRegionAdd(false)}
					/>
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
                                onClick={() => setPopupDistrictAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
								<input
									value={searchKey}
									onChange={onSearch}
									type="text"
									className="w-[120px] grow capitalize bg-transparent  "
									placeholder="Search"
								/>
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <DistrictsTable />
                    </div>

                    {/* POPUP 1 : ADD */}
					<AddDistrictPopUp
						isVisible={popupDistrictAdd}
						onCancel={() => setPopupDistrictAdd(false)}
					/>
                </TabContent>

                <TabContent index={3} activeTab={activeTab}>
                    {/* 4 BUTTONS + TABLE */}
                    <div className="px-2 lg:px-4">
                        {/* 4 BUTTONS */}
                        <div className="flex flex-row flex-wrap justify-start gap-2 mt-5 md:flex-nowrap">
                            <CustomButton1
                                label={"Add"}
                                icon={<IoMdAdd />}
                                className="bg-sixt text-white shrink grow md:grow-0 max-w-[50%]"
                                onClick={() => setPopupAreaAdd(true)}
                            />

                            <div className="flex items-center justify-between gap-1 px-2 py-2 ml-auto border rounded bg-bglyt shrink grow md:grow-0">
								<input
									value={searchKey}
									onChange={onSearch}
									type="text"
									className="w-[120px] grow capitalize bg-transparent  "
									placeholder="Search"
								/>
                                <AiOutlineSearch className="min-w-[20px]" />
                            </div>
                        </div>

                        {/* TABLE */}
                        <AreasTable />
                    </div>

                    {/* POPUP 1 : ADD */}
					<AddAreaPopUp
						isVisible={popupAreaAdd}
						onCancel={() => setPopupAreaAdd(false)}
					/>
                </TabContent>
            </div>
        </div>
    );
}

export default ManageTerritory;
