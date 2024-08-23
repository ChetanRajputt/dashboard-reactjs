import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RiLogoutCircleRLine, RiUserSettingsLine } from "react-icons/ri";
import { LuUserCircle2 } from "react-icons/lu";

const ProfileDropdown = ({ isSidebarOpen }) => {
    return (
        <>
            <div className="relative hidden lg:block group">
                <div className="flex items-center cursor-pointer">
                    <img
                        src="user.jpg"
                        alt="profile"
                        className="rounded-full border-2 border-black w-8 h-8 lg:w-10 lg:h-10"
                    />
                    <div className="hidden lg:block lg:ml-5">
                        <FaAngleDown size={25} />
                    </div>
                </div>

                <div className="hidden group-hover:block border text-sm absolute right-0 mt-2 w-44 bg-white shadow rounded-md py-2">
                    <div className="flex items-center ml-3 gap-3">
                        <img
                            src="user.jpg"
                            alt="profile"
                            className="rounded-full border-2 border-black w-8 h-8"
                        />
                        <div>
                            <h4 className="text-sm font-medium">John Doe</h4>
                            <p className="text-xs text-gray-500">UI/UX Designer</p>
                        </div>
                    </div>
                    <div className="font-semibold">
                        <a
                            href="#profile"
                            className="m-2 flex items-center gap-3 px-4 py-1 text-gray-800 hover:bg-gray-100"
                        >
                            <LuUserCircle2 size={20} /> Profile
                        </a>
                        <a
                            href="#account-settings"
                            className="m-2 flex items-center gap-3 pl-4 py-1 text-gray-800 hover:bg-gray-100"
                        >
                            <RiUserSettingsLine size={20} /> Account Setting
                        </a>
                        <a
                            href="#logout"
                            className="m-2 flex items-center gap-3 px-4 py-1 text-red-600 hover:bg-gray-100"
                        >
                            <RiLogoutCircleRLine size={20} className='text-red-500' />  Logout
                        </a>
                    </div>
                </div>
            </div>
            {
                !isSidebarOpen &&
                <div className="relative lg:hidden block group">
                    <div className="flex items-center cursor-pointer">
                        <img
                            src="user.jpg"
                            alt="profile"
                            className="rounded-full border-2 border-black w-8 h-8 lg:w-10 lg:h-10"
                        />
                        <div className="ml-5">
                            <FaAngleDown size={25} />
                        </div>
                    </div>

                    <div className="hidden group-hover:block border text-sm absolute right-0 mt-2 w-44 bg-white shadow rounded-md py-2">
                        <div className="flex items-center ml-3 gap-3">
                            <img
                                src="user.jpg"
                                alt="profile"
                                className="rounded-full border-2 border-black w-8 h-8"
                            />
                            <div>
                                <h4 className="text-sm font-medium">John Doe</h4>
                                <p className="text-xs text-gray-500">UI/UX Designer</p>
                            </div>
                        </div>
                        <div className="font-semibold">
                            <a
                                href="#profile"
                                className="m-2 flex items-center gap-3 px-4 py-1 text-gray-800 hover:bg-gray-100"
                            >
                                <LuUserCircle2 size={20} /> Profile
                            </a>
                            <a
                                href="#account-settings"
                                className="m-2 flex items-center gap-3 pl-4 py-1 text-gray-800 hover:bg-gray-100"
                            >
                                <RiUserSettingsLine size={20} /> Account Setting
                            </a>
                            <a
                                href="#logout"
                                className="m-2 flex items-center gap-3 px-4 py-1 text-red-600 hover:bg-gray-100"
                            >
                                <RiLogoutCircleRLine size={20} className='text-red-500' />  Logout
                            </a>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ProfileDropdown;
