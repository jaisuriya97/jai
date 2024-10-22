import React, { useEffect, useState } from 'react';
import ProjectsCards from './ProjectsCards';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Projects() {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location.pathname);
    const [projects, setProjects] = useState([
        {
            src: "/assets/image.png",
            title: "Gallery",
            desc: "A Simple Image Gallery",
            link: "https://dribble-clone2-0.vercel.app/"
        },
        {
            src: "/assets/Laravel-blog.png",
            title: "Laravel Blog",
            desc: "A Simple Blog Application",
            link: "https://github.com/jaisuriya97/Laravel_blogApp"
        },
        {
            src: "/assets/todo_juno.png",
            title: "Todo App",
            desc: "A Todo using Blockchains",
            link: "https://5rhf7-eqaaa-aaaal-aczua-cai.icp0.io/"
        },
        {
            src:"/assets/helum.png",
            title:"Helum",
            desc:"A E-commerce website",
            link:"https://github.com/jaisuriya97/Full-Stack-Ecommerce"
        },
        {
            src:'/assets/germini_ai.png',
            title:'Gemini AI',
            desc:'A Gemini API website',
            link:'https://gemini-ai-pro.vercel.app/'
        }
    ]);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".animat",
                start: "top 80%",
                end: "bottom 50%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(".animat", {
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
        <div className='animat'>
            <div className='flex flex-col lg:mt-20 mt-2' style={{ fontFamily: "Poppins" }}>
                <h1 className='m-0 p-0 lg:text-8xl text-5xl dark:text-white text-black' style={{ fontWeight: 700, lineHeight: '1' }}>
                    RECENT<br />
                    <span className='text-[#353334] m-0 p-0'>PROJECTS</span>
                </h1>
            </div>
            <div className='flex flex-col gap-5 mt-10'>
                {
                    projects.slice(0,currentLocation === '/projects' ? 5:3).map((project, index) => (
                        <ProjectsCards
                            key={index}
                            src={project.src}
                            title={project.title}
                            desc={project.desc}
                            link={project.link}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;
