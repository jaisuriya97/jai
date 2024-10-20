import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiFolder, FiBriefcase } from "react-icons/fi";
import { IoMdContact } from 'react-icons/io';

function Navbar() {
    const navIcons = [<FiHome />, <FiFolder />, <FiBriefcase />, <IoMdContact />];
    const location = useLocation();

    return (
        <div className='flex mt-5 rounded-xl dark:bg-[#1D1B19] dark:text-white text-gray-800 bg-gray-100'>
            {
                navIcons.map((icon, index) => {
                    const path = `/${index === 0 ? '' : index === 1 ? 'projects' : index === 2 ? 'experience' : 'about'}`;
                    const isActive = location.pathname === path;
                    return (
                        <Link
                            key={index}
                            to={path}
                            className={`flex text-[20px] justify-center items-center p-4 cursor-pointer ${isActive ? 'text-orange-500' : ''}`}
                        >
                            {icon}
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default Navbar;
