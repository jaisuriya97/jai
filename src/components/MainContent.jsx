import React,{useEffect} from 'react'
import Home from "./ui/Home"
import Projects from './ui/Projects'
import Experience from './ui/Experience'
import Education from './ui/Education'
import Skill from './ui/Skill'
import Contact from './ui/Contact'


function MainContent() {


  
  return (
    <div className='flex flex-col gap-5 max-w-[700px]'>
      <Home />
      <Projects  />
        <Experience/>
        <Education/>
        <Skill/>
        <Contact/>
    </div>
  )
}

export default MainContent