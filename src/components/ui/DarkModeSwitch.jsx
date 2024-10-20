import React ,{useState}from 'react'
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
function DarkModeSwitch() {
    const [dark, setDark] = React.useState(false);
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
  return (
      <div className='fixed bottom-5 right-5 bg-[#FF6B00] dark:bg-black dark:text-white p-2 rounded-full text-white cursor-pointer' onClick={() => darkModeHandler()}>
          {

              dark && <FiSun className='text-2xl'/>
          }
          {
              !dark && <FiMoon className='text-2xl' />
          }
    </div>
  )
}

export default DarkModeSwitch