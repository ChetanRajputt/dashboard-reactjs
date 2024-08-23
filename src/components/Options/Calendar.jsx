import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { MdEventNote } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { IoMdPeople } from "react-icons/io";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { AiOutlineSetting } from "react-icons/ai";

const Calendar = () => {
    return (
        <div>
            <ul className='flex text-[12px] font-bold gap-3 flex-col p-4 w-full items-center'>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <FaCalendarAlt size={20} /> Calendar
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <MdEventNote size={20} /> Events
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <FiClock size={20} /> Reminders
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <BiTask size={20} /> Tasks
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <IoMdPeople size={20} /> Meetings
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <BsFillCalendarCheckFill size={20} /> Appointments
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <GiNotebook size={20} /> Notes
                </li>
                <li className='text-gray-600 hover:text-black w-full flex items-center gap-2 duration-300 cursor-pointer hover:bg-gray-200 rounded px-2 py-1'>
                    <AiOutlineSetting size={20} /> Settings
                </li>
            </ul>
        </div>
    );
}

export default Calendar;
