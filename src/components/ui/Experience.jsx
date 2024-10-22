import React ,{useEffect}from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Experience() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".exp",
                start: "top 80%",
                end: "bottom 50%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(".exp", {
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
    <div className='exp'>
          <div className='flex flex-col lg:mt-20 mt-2' style={{ fontFamily: "Poppins" }}>
              <h1 className='m-0 p-0 lg:text-8xl text-5xl  dark:text-white text-black' style={{ fontWeight: 700, lineHeight: '1' }}>
                  GAINED<br />
                  <span className='text-[#353334] m-0 p-0'>EXPERIENCE</span>
              </h1>
          </div>
          <div className='flex flex-col s gap-10 mt-10' style={{ fontFamily: "Poppins" }}>
              <a href='https://whirldatascience.com/' target="_blank" className='flex  justify-between transition-colors duration-300 ease-in-out dark:hover:bg-[#1C1A19] hover:shadow-lg  p-4 rounded-xl group border-2 dark:border-0'>
                  <div className='flex gap-5 items-center'>
                      <div className='flex flex-col gap-3'>
                          <h1 className='text-2xl font-semibold dark:text-white text-black'>Solution Trainee - Intern</h1>
                          <p className='text-[#998F8F] text-md' style={{wordBreak:"break-word",wordWrap:"break-word"}}>
                              As a Solution Trainee at Whirldata, I developed responsive  user interfaces for ThinkRisk using Laravel, React, and  TypeScript,   integrating them with backend systems.   This role enhanced my skills in modern br front-end  technologies and client-focused solutions.</p>
                          <p className='text-[#998F8F]'>March 2024 - Present</p>
                      </div>
                  </div>
                  <div className='transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-6px] group-hover:translate-x-[10px]'>
                      <FiArrowUpRight className='text-[#FF6B00] text-2xl' />
                  </div>
              </a>
          </div>
    </div>
  )
}

export default Experience