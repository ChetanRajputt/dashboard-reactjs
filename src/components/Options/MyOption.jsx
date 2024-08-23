import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BiUserCheck } from "react-icons/bi";
import {IoSettingsOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { BiUserX } from "react-icons/bi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { PiUserSquareBold } from "react-icons/pi";
import { TbPictureInPictureTop } from "react-icons/tb";

const MyOption = () => {
    return (
        <div>
        <ul className='flex text-[12px]  font-bold gap-3 flex-col p-4 w-full items-center'>
            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'><RxDashboard size={20} />Dashboard </li>
            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'><VscFeedback size={20} />Feedbacks</li>
            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'><BiUserX size={20} />Leaves </li>
            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'><BiUserCheck size={20} />Attendance</li>
            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'><LiaBusinessTimeSolid size={20} />Daily Timesheet
            </li>
            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'><PiUserSquareBold size={20} />Work Log
            </li>
            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'><TbPictureInPictureTop />Reimbursements</li>
            <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'><IoSettingsOutline size={20} />Settings</li>
        </ul>
        </div>
    )
}

export default MyOption
