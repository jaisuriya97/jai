import React, { useEffect, useState } from 'react';
import steak from "../../assets/steak.svg";
import { FiLayers, FiArrowRight, FiLayout } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Home() {
    const initialStreak = 190; 
    const initialDate = new Date("2024-10-21"); 

    const [streak, setStreak] = useState(initialStreak);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const now = new Date();
        const timeDiff = now - initialDate; 
        const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); 

        const currentStreak = initialStreak + daysPassed; 
        setStreak(currentStreak); 
        localStorage.setItem('streak', currentStreak);
        localStorage.setItem('lastUpdated', now.toISOString());
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".home",
                start: "top 80%",
                end: "bottom 50%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(".home", {
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

    const handleToggleText = () => {
        setShowText(!showText);
    };

    return (
        <div className='flex flex-col gap-10 w-full home' style={{ fontFamily: "Poppins" }}>
            <div className='flex flex-col'>
                <h1 className='m-0 p-0 lg:text-9xl text-6xl dark:text-white text-black' style={{ fontWeight: 700, lineHeight: '1' }}>
                    SOFTWARE<br />
                    <span className='text-[#353334]  m-0 p-0'>ENGINEER</span>
                </h1>
                <p className='text-lg text-[#998F8F]'>Passionate about creating intuitive and engaging <br /> user experiences. Specialize in transforming ideas <br /> into beautifully crafted products.</p>
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <div className='flex items-center' onClick={handleToggleText}>
                    <h3 className='text-6xl flex items-center cursor-pointer dark:text-white text-black' style={{ fontFamily: "Poppins", fontWeight: 700 }}>
                        {streak}
                        <img src={steak} alt="steak" style={{ marginLeft: '10px', height: '1em', width: '1em' }} />
                    </h3>
                </div>
                <div className={`dropdown-content ${showText ? 'show' : ''} rounded-xl`} style={{ border: "solid 2px #353334", backgroundColor: "#151312" }}>
                    <div className='bg-[#151312] text-white p-4 rounded-lg shadow-md'>
                        <h4 className='font-semibold mb-2 text-lg'>My Duolingo Journey</h4>
                        <p className='text-md'>
                            Every day, I dedicate time to mastering a new language. My {streak}-day streak on Duolingo isn't just about learning
                            Japanese—it's a reflection of my drive to grow, adapt, and embrace new challenges consistently. Whether it's languages,
                            skills, or creativity, I strive to keep the streak going, one step at a time.
                        </p>
                    </div>
                </div>
                <p className='text-base text-[#998F8F]'>A Journey in Japanese Mastery 🇯🇵</p>
            </div>
            <div className='flex flex-col sm:flex-row justify-between gap-4 w-full'>
                <Link to='/experience' className='w-full bg-[#F56D38] h-60 rounded-xl bg-hero-pattern bg-center flex flex-col gap-5 pt-[20px] px-[20px] pb-[22px]'>
                    <h1 className='text-4xl'>
                        <FiLayers />
                    </h1>
                    <h1 className='text-4xl' style={{ fontFamily: "Poppins", fontWeight: 500 }}>LARAVEL, TYPE SCRIPT</h1>
                    <div className='w-full flex justify-end'>
                        <button className='bg-transparent p-2 border border-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#F56D38]'><FiArrowRight /></button>
                    </div>
                </Link>
                <Link to='/projects' className='w-full sm:w-2/3 bg-[#C4FE41] h-60 rounded-xl bg-footer-texture bg-center flex flex-col gap-5 pt-[20px] px-[20px] pb-[22px] text-black'>
                    <h1 className='text-4xl'>
                        <FiLayout />
                    </h1>
                    <h1 className='text-4xl' style={{ fontFamily: "Poppins", fontWeight: 500 }}>REACT JS, FIGMA, FLASK</h1>
                    <div className='w-full flex justify-end'>
                        <button className='bg-transparent p-2 border border-black rounded-lg transition-colors duration-300 ease-in-out hover:bg-black hover:text-[#C4FE41]'>
                            <FiArrowRight />
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
