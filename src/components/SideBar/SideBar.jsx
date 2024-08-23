import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { HiOutlineBuildingStorefront, HiOutlineUserGroup } from "react-icons/hi2";
import { BiNotepad, BiTask } from "react-icons/bi";
import { TbUserDollar, TbCalendarUser, TbFileReport } from "react-icons/tb";
import { IoLayersOutline, IoSettingsOutline } from "react-icons/io5";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";
import MyOption from '../Options/MyOption';
import Employee from '../Options/Employee';
import SecondIcon from '../Options/SecondIcon';
import Attendance from '../Options/Attendance';
import Enroll from '../Options/Enroll';
import Expense from '../Options/Expense';
import { LiaBusinessTimeSolid } from 'react-icons/lia';
import Calendar from '../Options/Calendar';
import BusinessTime from '../Options/BusinessTime';
import { IoClose } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";


const menuItems = [
    { icon: <RxDashboard />, name: "Dashboard", key: "My Option" },
    { icon: <HiOutlineUserGroup />, name: "Employee", key: "Employee" },
    { icon: <BiNotepad />, name: "Attendance", key: "Attendance" },
    { icon: <BiTask />, name: "Enroll", key: "Enroll" },
    { icon: <TbUserDollar />, name: "Expense", key: "Expense" },
    { icon: <LiaBusinessTimeSolid />, name: "Business Time", key: "Business Time" },
    { icon: <TbCalendarUser />, name: "Calendar", key: "Calendar" },
    { icon: <HiOutlineBuildingStorefront />, name: "Other", key: "SecondIcon" },
];

const SideBar = ({isSidebarOpen,setIsSidebarOpen}) => {
    const [active, setActive] = useState("My Option");
    const [tooltip, setTooltip] = useState("");
    

    const handleClick = (key) => {
        setIsSidebarOpen(true);
        setActive(key)
    }

    const Tooltip = ({ text }) => (
        <span className="absolute left-full ml-4 transform -translate-y-1/2 top-1/2 whitespace-nowrap bg-black text-white text-xs py-2 px-3 rounded-md shadow-lg">
            {text}
            <span className="absolute w-3 h-3 bg-black left-[-5px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
        </span>
    );

    return (
        <aside className={` ${isSidebarOpen ? "w-auto" : "w-[67vw]"} lg:w-auto text-gray-800`}>

            <button className='fixed lg:hidden text-red-600 right-1 mr-0 border rounded-full shadow-2xl top-2  ' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {
                    !isSidebarOpen ? ""
                        : <IoClose size={30} />
                }
            </button>

            {/* first row */}
            <div className='flex lg:border-b-2 items-center'>
                <div className='border-r-2 shadow w-1/6'><img className="w-[60px]" src="logo.jpg" alt="" /></div>

                {
                    isSidebarOpen &&
                    <div className='lg:hidden block border-gray-300 w-full lg:w-[20vw] shadow  border-r-2 px-2 py-2'>
                        <div className='flex items-center gap-2 w-full border-gray-300 shadow border-2 rounded-lg pl-5 py-1'>
                        <IoSearchSharp />
                        <input className='outline-none border-none placeholder:font-semibold placeholder:text-black' type="text" placeholder='Search' />
                    </div>
                    </div>
                }
                <div className='hidden lg:block border-gray-300 w-full lg:w-[20vw] shadow  border-r-2 px-2 py-3'>
                    <div className='flex items-center gap-2 w-full border-gray-300 shadow border-2 rounded-lg pl-5 py-1'>
                        <IoSearchSharp />
                        <input className='outline-none border-none placeholder:font-semibold placeholder:text-black' type="text" placeholder='Search' />
                    </div>
                </div>
            </div>

            {/* second row */}
            <div className='flex w-full'>
                <div className='border-r-2  py-4 flex flex-col justify-between items-center h-[92vh] shadow w-1/6'>
                    <div>
                        <ul className='flex gap-4 flex-col w-full items-center'>
                            {menuItems.map((item) => (
                                <li
                                    key={item.key}
                                    onClick={() => handleClick(item.key)}
                                    onMouseEnter={() => setTooltip(item.name)}
                                    onMouseLeave={() => setTooltip('')}
                                    className={`relative cursor-pointer text-[22px]  p-1 rounded ${active === item.key ? "bg-gray-100 text-black   " : "text-gray-500"}`}
                                >
                                    {item.icon}
                                    {tooltip === item.name && <Tooltip text={item.name} />}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <button>
                            <RiLogoutCircleRLine size={20} className='text-red-500' />
                        </button>
                    </div>
                </div>

                {
                    isSidebarOpen &&
                    <div className='lg:hidden block w-full lg:w-[20vw] border-gray-300 shadow border-r-2'>
                        <div className='h-[42%] py-1 mb-1 w-full overflow-y-scroll' id='scrollBar'>
                            <div>
                                <h2 className='pl-4'>{active}</h2>
                                {active === "My Option" && <MyOption />}
                                {active === "Employee" && <Employee />}
                                {active === "Attendance" && <Attendance />}
                                {active === "Enroll" && <Enroll />}
                                {active === "Expense" && <Expense />}
                                {active === "Calendar" && <Calendar />}
                                {active === "Business Time" && <BusinessTime />}
                                {active === "SecondIcon" && <SecondIcon />}
                            </div>
                        </div>

                        <div className='border-t-2 border-gray-300'>
                            <ul className='flex gap-4 flex-col p-4 w-full items-center'>
                                <li className='w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2'><TbFileReport />Reports </li>
                                <li className='w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2'><GiExpense />My Expenses </li>
                                <li className='w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2'><FaHandHoldingDollar />Income </li>
                                <li className='w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2'><IoLayersOutline />Categories</li>
                                <li className='w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2'><IoSettingsOutline />Settings</li>
                            </ul>
                        </div>
                    </div>
                }

                <div className='hidden lg:block w-full lg:w-[20vw] border-gray-300 shadow border-r-2'>
                    <div className='h-[42%] py-1 mb-1 w-full overflow-y-scroll' id='scrollBar'>
                        <div>
                            <h2 className='pl-4 text-sm '>{active}</h2>
                            {active === "My Option" && <MyOption />}
                            {active === "Employee" && <Employee />}
                            {active === "Attendance" && <Attendance />}
                            {active === "Enroll" && <Enroll />}
                            {active === "Expense" && <Expense />}
                            {active === "Calendar" && <Calendar />}
                            {active === "Business Time" && <BusinessTime />}
                            {active === "SecondIcon" && <SecondIcon />}
                        </div>
                    </div>

                    <div className='border-t-2 border-gray-300'>
                        <ul className='flex text-[12px] font-bold gap-4 flex-col p-4 w-full items-center'>
                            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2'><TbFileReport size={20} />Reports </li>
                            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2'><GiExpense size={20} />My Expenses </li>
                            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2'><FaHandHoldingDollar size={20} />Income </li>
                            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2'><IoLayersOutline size={20} />Categories</li>
                            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2'><IoSettingsOutline size={20} />Settings</li>
                        </ul>
                    </div>
                </div>

            </div>
        </aside>
    );
}

export default SideBar;


