import React, { useEffect } from 'react';
import curve from "../assets/download.svg";
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiArrowDown } from "react-icons/fi";
import curve2 from "../assets/curve2.svg";
import profile from "../assets/jai.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Herocard() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none ",
      }
    });

    tl.fromTo(".hero", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.6
    });
    const icons = gsap.utils.toArray(".icon");
    gsap.fromTo(icons, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".hero",
        start: "top 60%",
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleDownload = () => {
    gsap.to(".resume-button", {
      scale: 0.9,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        const link = document.createElement('a');
        link.href = '/assets/Jaisuriya_P_K.pdf'; 
        link.download = 'Jai_Suriya_Resume.pdf';
        link.click();
      }
    });
  };

  const handleArrowHover = () => {
    gsap.to(".arrow-icon", {
      y: 5,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <div className='hero 2xl:w-[344px] h-[640px] lg:max-w-[700px] md:max-w-[700px] dark:bg-white border-2 p-7 rounded-2xl xl:sticky xl:top-8 relative flex flex-col items-center justify-between overflow-hidden mt-10'>
      <div className='flex items-center flex-row flex-nowrap justify-center absolute top-[1px] w-[194px] h-[100px] left-0'>
        <img className='w-full h-full z-1' src={curve} alt="" />
      </div>
      <div className='flex items-center flex-row flex-nowrap justify-center absolute top-[330px] w-[250px] h-[166px] left-[-120px]'>
        <img className='w-full h-full' src={curve2} alt="" />
      </div>
      <div className='flex flex-col gap-[18px] items-center'>
        <div className='w-[240px] h-[284px] rounded-xl'>
          <img className='w-full h-full object-contain rounded bg-white block ml-auto mr-auto' src={profile} alt="" />
        </div>
        <h2 className='font-bold text-black text-5xl text-center' style={{ fontFamily: "Poppins", fontWeight: 700 }}>Jai Suriya</h2>
      </div>
      <button
        className='resume-button z-10 text-white p-2 mt-4 rounded-lg bg-[#F56D38] flex items-center gap-2'
        style={{ fontFamily: "Poppins" }}
        onClick={handleDownload}
        onMouseEnter={handleArrowHover}
        onMouseLeave={() => gsap.to(".arrow-icon", { y: 0, duration: 0.2 })} // Reset position
      >
        Resume <FiArrowDown className="arrow-icon" />
      </button>
      <div>
        <p className='text-black text-center text-base' style={{ fontFamily: "Poppins", fontWeight: 500, color: "rgb(106, 107, 110)" }}>
          A Software Engineer who has developed countless innovative solutions.
        </p>
        <div className='text-orange-500 flex py-5 text-2xl gap-6 items-center justify-center'>
          <a href="https://github.com/jaisuriya97" target='_blank' ><FiGithub /></a>
          <a href="https://www.linkedin.com/in/jaisuriya-p-k-7156a2236/" target='_blank'><FiLinkedin /></a>
          <a href onClick={() => { window.open('mailto:jaisuirya200297@gmail.com?subject=Subject&body=%20Give%20a%20👋') }} ><FiMail /></a>
          <a href="#" ><FiInstagram /></a>
        </div>
      </div>
    </div>
  );
}

export default Herocard;
