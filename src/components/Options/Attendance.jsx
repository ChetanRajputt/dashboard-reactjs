import React from 'react';
import { FaClipboardList } from "react-icons/fa";  
import { MdOutlineTimer } from "react-icons/md"; 
import { AiOutlineCalendar } from "react-icons/ai";  
import { GiCheckMark } from "react-icons/gi";  
import { FaUserCheck } from "react-icons/fa";  
import { IoIosStats } from "react-icons/io"; 
import { RiAlarmWarningLine } from "react-icons/ri"; 
import { IoSettingsOutline } from "react-icons/io5"; 

const Attendance = () => {
    return (
        <div>
            <ul className='flex text-[12px] font-bold gap-3 flex-col p-4 w-full items-center'>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <FaClipboardList size={20} /> Attendance List
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <MdOutlineTimer size={20} /> Clock In/Out
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <AiOutlineCalendar size={20} /> Attendance Calendar
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <GiCheckMark size={20} /> Approvals
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <FaUserCheck size={20} /> Employee Status
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <IoIosStats size={20} /> Attendance Reports
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <RiAlarmWarningLine size={20} /> Alerts
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <IoSettingsOutline size={20} /> Settings
                </li>
            </ul>
        </div>
    );
}

export default Attendance;
