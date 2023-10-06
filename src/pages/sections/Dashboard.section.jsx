// CORE
import * as React from "react";
import moment from "moment";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import im1 from "../assets/1.1.png";
import im2 from "../assets/1.2.png";
import im11 from "../assets/2.1.png";
import im12 from "../assets/2.2.png";

import CustomButton1 from "../components/CustomButton1.component";

// ICONS
import { AiOutlineSearch } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import AdvanceDateRangePicker from "../components/AdvanceDateRangePicker";

const data = [
    { name: "New", visits: 25 },
    { name: "Follow up", visits: 38 },
    { name: "Closed", visits: 34 },
];

const COLORS = ["#F86624", "#43BCCD", "#F9C80E"];
const Bardata = [
    { name: "21/06/23", Visit: 4000, pv: 2400, amt: 2400 },
    { name: "21/06/23", Visit: 3000, pv: 1398, amt: 2210 },
    { name: "21/06/23", Visit: 2000, pv: 9800, amt: 2290 },
    { name: "21/06/23", Visit: 2780, pv: 3908, amt: 2000 },
    { name: "21/06/23", Visit: 1890, pv: 4800, amt: 2181 },
    { name: "21/06/23", Visit: 2390, pv: 3800, amt: 2500 },
    { name: "21/06/23", Visit: 6490 },
    { name: "21/06/23", Visit: 3490, pv: 4300, amt: 2100 },
    { name: "21/06/23", Visit: 1490 },
    { name: "21/06/23", Visit: 1190 },
];
function Dashboard() {
    const [date, setDate] = React.useState([new Date(moment().subtract(7, "days")), new Date()]);

    return (
        <section>
            <div className="max-h-screen overflow-y-auto hide-scrollbar  bg-white p-t-4 ">
                {/* DATE SELECTION */}
                <div className="pt-4  font-xl border-b-2">
                    <h1 className="text-xl text-fourth">Dashboard</h1>
                </div>

                

                <div className="flex p-4 mt-4 w-full border rounded">
                    <AdvanceDateRangePicker
                        date={date}
                        setDate={setDate}
                        handleClear={() => setDate([new Date(), new Date()])}
                    />
                </div>
                {/* <div className="flex flex-col lg:flex-row gap-3 p-4 mt-4 w-full bg-[] border rounded overflow-y-auto">
                    <div className="flex justify-center gap-3">
                        <div className="p-2 rounded-full bg-first">
                            <MdDateRange className="text-white icon h-5 w-5" />
                        </div>
                        <div className="flex items-center p-2 text-xs text-white rounded shadow bg-first">
                            <span className="pr-1">Start:</span>
                            <input type="date" className="bg-first w-24" />
                        </div>
                        <div className="flex items-center p-2 text-xs text-white rounded shadow bg-first">
                            <span className="pr-1">End:</span>
                            <input type="date" className="bg-first w-24" />
                        </div>
                    </div>
                    <div className="flex flex-col-2  gap-3">
                        <select
                            className="block w-full px-2 py-2 pr-4 text-white font-normal text-xs bg-first border rounded-md focus:outline-none"
                            name="dropdown"
                        >
                            <option value="Customer for a month">Today</option>
                            <option value="Customer for a month">Yesterday</option>
                            <option value="Customer for a month">Last 7 Days</option>
                            <option value="Customer for a month">Last 30 Days</option>
                            <option value="Customer for a month">This Month</option>
                            <option value="Customer for a month">Last Month</option>
                            <option value="Customer for a month">Custom Range</option>
                        </select>
                        <CustomButton1
                           
                            className=" bg-[#3D3D3D] grow max-w-[120px]"
                            icon={<BiReset />}
                        />

                        <div className="flex items-center gap-1 p-2 border rounded bg-bglyt">
                            <input
                                type="text"
                                className="w-full text-xs capitalize bg-transparent  max-w-[200px]"
                                placeholder="Search"
                            />
                            <AiOutlineSearch className="" />
                        </div>
                    </div>
                </div> */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-5">
                    <div className=" rounded-md  p-3 border-[1px] border-[#3D3D3D33] shadow-[1px 1px 1px 0px #3D3D3D29]">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                            <div className="flex bg-bglyt p-1 m-1  rounded-lg shadow-[0px 0px 4px 0px #00000040]">
                                <img src={im1} alt="" className="w-[45%] h-[50%] lg:w-[30%] lg:h-[60%]" />
                                <div className="justify-center items-center pt-[1rem] pl-[5px]">
                                    <p className="heading border-b-[1px] pb-2 border-black  text-fourth">78</p>
                                    <p className="text-first">Visit for a day</p>
                                </div>
                            </div>

                            <div className="flex bg-bglyt p-1 m-1 rounded-lg shadow-[0px 0px 4px 0px #00000040]">
                                <img src={im2} alt="" className="w-[45%] h-[50%] lg:w-[30%] lg:h-[60%]" />
                                <div className="justify-center items-center pt-[1rem] pl-[5px]">
                                    <h1 className="heading border-b-[1px] pb-2 text-fourth border-black">1200</h1>
                                    <p className="text-first"> Total New Visit Till date</p>
                                </div>
                            </div>

                            <div className="flex bg-bglyt p-2 m-2 rounded-lg shadow-[0px 0px 4px 0px #00000040]">
                                <img src={im11} alt="" className="w-[25%] h-[50%]" />
                                <div className="justify-center items-center pt-[1rem] pl-[1.5rem]">
                                    <h1 className="heading border-b-[1px] pb-2 text-fourth border-black">1000</h1>
                                    <p className="text-first">Total New Monthly Visit</p>
                                </div>
                            </div>

                            <div className="flex bg-bglyt p-2 m-2 rounded-lg shadow-[0px 0px 4px 0px #00000040]">
                                <img src={im12} alt="" className="w-[25%] h-[50%]" />
                                <div className="justify-center items-center pt-[1rem] pl-[1.5rem]">
                                    <h1 className="heading border-b-[1px] pb-2 text-fourth border-black">150</h1>
                                    <p className="text-first">Pending Follow up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center rounded-md  p-3 border-[1px] border-[#3D3D3D33] shadow-[1px 1px 1px 0px #3D3D3D29]">
                        <h2 className="chart-title flex justify-center">Visits Data Chart</h2>
                        <PieChart width={350} height={350}>
                            <Pie data={data} dataKey="visits" outerRadius={120} innerRadius={60} fill="green" label>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>

                <div className="pt-10 mt-5 rounded-md  p-1 border-[1px] border-[#3D3D3D33] shadow-[1px 1px 1px 0px #3D3D3D29] overflow-y-auto">
                    <p className="font-sm font-normal text-fourth p-4">Day wise Visit count</p>
                    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
                        <BarChart width={Math.min(900, window.innerWidth - 20)} height={300} data={Bardata}>
                            <CartesianGrid strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Visit" fill="#3D3D3D" />
                        </BarChart>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
