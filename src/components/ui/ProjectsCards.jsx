import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

function ProjectsCards({ src, title, desc, link }) {
    return (
        <div>
            <div className='flex flex-col' style={{ fontFamily: "Poppins" }}>
                <a
                    href={link}
                    target="_blank"
                    className='flex justify-between transition-colors duration-300 ease-in-out dark:hover:bg-[#1C1A19] hover:shadow-lg p-4 rounded-xl group border-2 dark:border-0'
                >
                    <div className='flex gap-5 items-center'>
                        <div className='w-[130px] h-[130px] overflow-hidden'>
                            <img
                                src={src}
                                alt={title}
                                className='rounded-xl w-full h-full object-cover'
                            />
                        </div>
                        <div className='flex flex-col gap-1 justify-end'>
                            <h1 className='text-2xl font-semibold dark:text-white text-black'>{title}</h1>
                            <p className='text-[#998F8F]'>{desc}</p>
                        </div>
                    </div>
                    <div className='transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-6px] dark:group-hover:translate-x-[10px]'>
                        <FiArrowUpRight className='text-[#FF6B00] text-2xl' />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ProjectsCards;
