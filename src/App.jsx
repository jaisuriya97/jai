import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Herocard from "./components/Herocard";
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Projects from "./components/ui/Projects";
import Contact from "./components/ui/Contact";
import Experience from "./components/ui/Experience";
import Education from "./components/ui/Education";
import Skill from "./components/ui/Skill";
import DarkModeSwitch from "./components/ui/DarkModeSwitch";
import About from "./components/ui/About";
import ScrollToTop from "./ScrollToTop";
import './App.css';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white w-full px-4 lg:px-20'>
      <Navbar />
      <div className='flex flex-col xl:flex-row items-center xl:items-start md:items-center lg:items-center mt-20 gap-20 w-full justify-center relative'>
        <Herocard />
        <MainContent />
      </div>
      <DarkModeSwitch />
      <Footer />
    </div>
  );
};

const MainPage = ({ Component }) => {
  const isMobile = useIsMobile();
  const location = useLocation();

  return (
    <div className='flex flex-col justify-center items-center text-white w-full px-4 lg:px-20'>
      <Navbar />
      <div className='flex flex-col xl:flex-row items-center xl:items-start md:items-center lg:items-center mt-20 gap-20 w-full justify-center relative'>
        {!isMobile || location.pathname === '/' ? <Herocard /> : null}
        <div className="max-w-[700px]">
          <Component />
          <Contact />
        </div>
      </div>
      <DarkModeSwitch />
      <Footer />
    </div>
  );
};

const ProjectsPage = () => <MainPage Component={Projects} />;
const ExperiencePage = () => <MainPage Component={Experience} />;
const AboutPage = () => (
  <MainPage Component={() => (
    <>
      <About />
      <Education />
      <Skill />
    </>
  )} />
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
