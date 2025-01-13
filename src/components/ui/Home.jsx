import React, { useEffect, useState } from "react";
import steak from "../../assets/steak.svg";
import { FiLayers, FiArrowRight, FiLayout } from "react-icons/fi";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import axios from "axios";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiLeetcode } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

function Home() {
  const [leetcodeData, setLeetcodeData] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    totalSubmissions: 0,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      const url = "https://alfa-leetcode-api.onrender.com/jai_sa/solved";

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          const data = response.data;

          // Extract problem counts and submissions
          const totalSolved = data.acSubmissionNum[0].count; // All
          const easySolved = data.acSubmissionNum[1].count; // Easy
          const mediumSolved = data.acSubmissionNum[2].count; // Medium
          const hardSolved = data.acSubmissionNum[3].count; // Hard
          const totalSubmissions = data.solvedProblem; // Total submissions

          setLeetcodeData({
            totalSolved,
            easySolved,
            mediumSolved,
            hardSolved,
            totalSubmissions,
          });
        } else {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching LeetCode data:", err);
      }
    };

    fetchLeetCodeData();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".home",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.6,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleToggleText = () => {
    setShowText(!showText);
  };

  return (
    <div
      className="flex flex-col gap-10 w-full home"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-col">
        <h1
          className="m-0 p-0 lg:text-9xl text-6xl dark:text-white text-black"
          style={{ fontWeight: 700, lineHeight: "1" }}
        >
          SOFTWARE
          <br />
          <span className="text-[#353334]  m-0 p-0">ENGINEER</span>
        </h1>
        <p className="text-lg text-[#998F8F] mt-2">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <a
        href="https://leetcode.com/u/jai_sa/"
        target="_blank"
        className="flex gap-2 justify-between items-start border-solid border-2 border-gray-300 dark:border-gray-600 p-5 rounded-xl transition-colors duration-300 ease-in-out dark:hover:bg-[#1C1A19] hover:shadow-xl  group   cursor-pointer"
      >
        <div>
          <h3
            className="text-4xl dark:text-white text-gray-700"
            style={{ fontFamily: "Poppins", fontWeight: 700 }}
          >
            <span className="text-[#F56D38]">LEETCODE </span>STATS
          </h3>
          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <div className="flex flex-col  gap-4">
              <h3
                className="text-8xl font-bold text-gray-800 dark:text-white"
                style={{
                  fontFamily: "Poppins",
                  display: "flex",
                  alignItems: "end",
                  gap: "15px",
                }}
              >
                {leetcodeData.totalSolved}
                <p
                  className="text-xl text-gray-600 dark:text-gray-300 font-medium"
                  style={{ fontFamily: "Poppins", marginBottom: "13px" }}
                >
                  <SiLeetcode className="text-4xl text-orange-400" /> Total
                  Problems Solved
                </p>
              </h3>
            </div>
          )}
        </div>
        <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-6px] dark:group-hover:translate-x-[10px]">
          <FiArrowUpRight className="text-[#F56D38] dark:text-[#C4FE41] text-2xl" />
        </div>
      </a>
      <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
        <Link
          to="/experience"
          className="w-full bg-[#F56D38] h-60 rounded-xl bg-hero-pattern bg-center flex flex-col gap-5 pt-[20px] px-[20px] pb-[22px]"
        >
          <h1 className="text-4xl">
            <FiLayers />
          </h1>
          <h1
            className="text-4xl"
            style={{ fontFamily: "Poppins", fontWeight: 500 }}
          >
            LARAVEL, TYPE SCRIPT
          </h1>
          <div className="w-full flex justify-end">
            <button className="bg-transparent p-2 border border-white rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#F56D38]">
              <FiArrowRight />
            </button>
          </div>
        </Link>
        <Link
          to="/projects"
          className="w-full sm:w-2/3 bg-[#C4FE41] h-60 rounded-xl bg-footer-texture bg-center flex flex-col gap-5 pt-[20px] px-[20px] pb-[22px] text-black"
        >
          <h1 className="text-4xl">
            <FiLayout />
          </h1>
          <h1
            className="text-4xl"
            style={{ fontFamily: "Poppins", fontWeight: 500 }}
          >
            REACT JS, FIGMA, FLASK
          </h1>
          <div className="w-full flex justify-end">
            <button className="bg-transparent p-2 border border-black rounded-lg transition-colors duration-300 ease-in-out hover:bg-black hover:text-[#C4FE41]">
              <FiArrowRight />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
