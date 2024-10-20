import React,{useEffect} from 'react';
import reactIcon from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import laravel from "../../assets/laravel.svg";
import mysql from "../../assets/mysql.svg";
import github from "../../assets/github.svg";
import java from "../../assets/java.svg";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Skill() {
    const skills = [
        {
            title: 'React',
            icon: reactIcon,
            description: 'JavaScript Framework'
        },
        {
            title: 'Redux',
            icon: redux,
            description: 'State Management'
        },
        {
            title: 'Laravel',
            icon: laravel,
            description: 'PHP Framework'
        },
        {
            title: 'MySQL',
            icon: mysql,
            description: 'Database'
        },
        {
            title: 'GitHub',
            icon: github,
            description: 'Version Control'
        },
        {
            title: 'Core Java',
            icon: java,
            description: 'Programming Language'
        }
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skill",
                start: "top 80%",
                end: "bottom 50%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(".skill", {
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
        <div className='skill'>
            <div className='flex flex-col mt-20' style={{ fontFamily: "Poppins" }}>
                <h1 className='m-0 p-0 lg:text-8xl text-5xl  dark:text-white text-black' style={{ fontWeight: 700, lineHeight: '1' }}>
                    SKILLED<br />
                    <span className='text-[#353334] m-0 p-0'>WITH</span>
                </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 auto-rows-min mt-10 justify-start gap-3' style={{ fontFamily: "Poppins" }}>
                {skills.map((item, index) => (
                    <div key={index} className='flex gap-5 p-4 transition-colors duration-300 ease-in-out dark:hover:bg-[#1C1A19] hover:shadow-lg   rounded-xl  border-2 dark:border-0'>
                        <div className='w-[60px] h-[60px] bg-white p-1 rounded-xl'>
                            <img className='w-full h-full object-contain' src={item.icon} alt={item.title} />
                        </div>
                        <div className='flex flex-col items-start justify-center'>
                            <h3 className='text-xl sm:text-2xl font-semibold dark:text-white text-black'>{item.title}</h3>
                            <p className='text-[#998F8F] text-sm sm:text-md'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skill;
