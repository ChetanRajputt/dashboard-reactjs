import React from 'react';
import { FaUserTie } from "react-icons/fa"; 
import { MdFeedback } from "react-icons/md"; 
import { AiOutlineSchedule } from "react-icons/ai"; 
import { BiTimeFive } from "react-icons/bi"; 
import { RiFileList3Line } from "react-icons/ri"; 
import { AiOutlineProject } from "react-icons/ai"; 
import { FaMoneyCheckAlt } from "react-icons/fa"; 
import { IoSettingsOutline } from "react-icons/io5"; 

const Employee = () => {
    return (
        <div>
            <ul className='flex text-[12px] font-bold gap-3 flex-col p-4 w-full items-center'>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <FaUserTie size={20} /> Profile
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <MdFeedback size={20} /> Feedback
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <AiOutlineSchedule size={20} /> Leaves
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <BiTimeFive size={20} /> Attendance
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <RiFileList3Line size={20} /> Daily Timesheet
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <AiOutlineProject size={20} /> Projects
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <FaMoneyCheckAlt size={20} /> Reimbursements
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <IoSettingsOutline size={20} /> Settings
                </li>
            </ul>
        </div>
    );
}

export default Employee;
