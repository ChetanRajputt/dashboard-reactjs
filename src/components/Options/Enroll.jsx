import React from 'react';
import { AiOutlineHome } from "react-icons/ai"; 
import { FaUserGraduate } from "react-icons/fa"; 
import { RiTeamLine } from "react-icons/ri"; 
import { MdOutlineAssignment } from "react-icons/md"; 
import { IoIosStats } from "react-icons/io"; 
import { BsFillJournalBookmarkFill } from "react-icons/bs"; 
import { TbReportAnalytics } from "react-icons/tb"; 
import { IoSettingsOutline } from "react-icons/io5";

const Enroll = () => {
    return (
        <div>
            <ul className='flex text-[12px] font-bold gap-3 flex-col p-4 w-full items-center'>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <AiOutlineHome size={20} /> Home
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <FaUserGraduate size={20} /> Enroll
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <RiTeamLine size={20} /> Team
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <MdOutlineAssignment size={20} /> Assignments
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <IoIosStats size={20} /> Analytics
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <BsFillJournalBookmarkFill size={20} /> Journal
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <TbReportAnalytics size={20} /> Reports
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <IoSettingsOutline size={20} /> Settings
                </li>
            </ul>
        </div>
    );
}

export default Enroll;
