import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
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
import './App.css'

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

const ProjectsPage = ()=>{
  return (
    <div className='flex flex-col justify-center items-center text-white w-full  px-4 lg:px-20'>
      <Navbar />
      <div className='flex flex-col xl:flex-row items-center xl:items-start md:items-center lg:items-center mt-20 gap-20 w-full justify-center relative' >
        <Herocard />
        <div className="max-w-[700px]">
        <Projects />
        <Contact /> 
        </div>
      </div>
      <DarkModeSwitch />  
      <Footer />
    </div>
  )
}
const ExperiencePage = ()=>{
return (
  <div className='flex flex-col justify-center items-center text-white w-full  px-4 lg:px-20'>
    <Navbar />
    <div className='flex flex-col xl:flex-row items-center xl:items-start md:items-center lg:items-center mt-20 gap-20 w-full justify-center relative'>
      <Herocard />
      <div className="max-w-[700px]">
        <Experience />
        <Contact />
      </div>
    </div>
    <DarkModeSwitch />  
    <Footer />
  </div>
)
}
const AboutPage = ()=>{
  return (
    <div className='flex flex-col justify-center items-center text-white w-full  px-4 lg:px-20'>
      <Navbar />
      <div className='flex flex-col xl:flex-row items-center xl:items-start md:items-center lg:items-center mt-20 gap-20 w-full justify-center relative'>
        <Herocard />
        <div className="max-w-[700px]">
          <About />
          <Education />
          <Skill />
          <Contact />
        </div>
      </div>
      <DarkModeSwitch />  
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
