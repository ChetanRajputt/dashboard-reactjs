import React from 'react';
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { BiCalendarX } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaMoneyCheckAlt } from "react-icons/fa";

const Expense = () => {
    return (
        <div>
            <ul className='flex text-[12px] font-bold gap-3 flex-col p-4 w-full items-center'>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <RiDashboardLine size={20} /> Dashboard
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <MdFeedback size={20} /> Feedbacks
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <BiCalendarX size={20} /> Leaves
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <AiOutlineUser size={20} /> Attendance
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <BsClockHistory size={20} /> Daily Timesheet
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <HiOutlineDocumentReport size={20} /> Work Log
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <FaMoneyCheckAlt size={20} /> Expenses
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <IoSettingsOutline size={20} /> Settings
                </li>
            </ul>
        </div>
    );
}

export default Expense;
