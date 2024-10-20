import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".abt",
                start: "top 70%",
                end: "bottom 50%",
                toggleActions: "play none none ",

            }
        });

        tl.fromTo(".abt", {
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
        <div className='abt' style={{ fontFamily: "Poppins" }}>
            <div className='flex flex-col'>
                <h1 className='m-0 p-0 lg:text-8xl text-6xl  dark:text-white text-black' style={{ fontWeight: 700, lineHeight: '1' }}>
                    ABOUT<br />
                    <span className='text-[#353334]  m-0 p-0'>ME</span>
                </h1>
                <h3 className='dark:text-white text-[#353334] text-3xl mt-3 font-semibold'>Hi, I'm Jai</h3>
                <p className='text-lg text-[#998F8F]' style={{ margin: '1rem 0' }}>
                    As a passionate developer with a solid
                    grasp of technical concepts, I'm eager
                    to advance my career in IT through
                    software and web development. My
                    teamwork skills and commitment to
                    staying current with industry trends
                    enable me to  deliver innovative solution
                </p>          </div>
        </div>
    )
}

export default About