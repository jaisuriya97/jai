import React,{useEffect} from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Education() {
    const education = [
        {
            course: "B.E Computer Science",
            institution: "Rajalakshmi Engineering College",
            location: "Chennai",
            date: "2020-2024",
        },
        {
            course: "Higher Secondary Certificate",
            institution: "Mount Park Higher Secondary School",
            location: "Kallakurichi",
            date: "2019-2020",
        },
        {
            course: "Secondary School Leaving Certificate",
            institution: "Saraswathi Vidyalaya Matriculation Higher Secondary School",
            location: "Vellore",
            date: "2017-2018",
        }
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".edu",
                start: "top 80%",
                end: "bottom 50%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(".edu", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.6
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    return (
        <div className='edu'>
            <div className='flex flex-col mt-20' style={{ fontFamily: "Poppins" }}>
                <h1 className='m-0 p-0 lg:text-8xl text-5xl dark:text-white text-black' style={{ fontWeight: 700,lineHeight: '1' }}>
                    EDUCATIONAL<br />
                    <span className='text-[#353334] m-0 p-0'>HISTORY</span>
                </h1>
            </div>
            <div className='flex flex-col gap-10 mt-10' style={{ fontFamily: "Poppins" }}>
                {
                    education.map((edu, index) => (
                        <a key={index} href='#'  className='flex justify-between transition-colors duration-300 ease-in-out dark:hover:bg-[#1C1A19] hover:shadow-lg  p-4 rounded-xl group border-2 dark:border-0'>
                            <div className='flex gap-5 items-center'>
                                <div className='flex flex-col gap-3'>
                                    <h1 className='text-2xl font-semibold dark:text-white text-black '>{edu.course}</h1>
                                    <p className='text-[#998F8F] text-lg'>{edu.institution}
                                        <br /> {edu.location}
                                        <br /> {edu.date}</p>
                                </div>
                            </div>
                            <div className='transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-6px] group-hover:translate-x-[10px]'>
                                <FiArrowUpRight className='text-[#FF6B00] text-2xl' />
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default Education;
