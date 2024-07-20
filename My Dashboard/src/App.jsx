import { useContext, useEffect, useState } from 'react'
import './App.scss'
import { ThemeContext } from './Context/ThemeContext'
import { DARK_THEME, LIGHT_THEME } from './constants/themeConstants';
import{BrowserRouter as Router, Routes , Route} from "react-router-dom"
import MoonIcon from "./assets/icons/moon.svg"
import SunIcon from "./assets/icons/sun.svg"
import BaseLayout from './Layout/BaseLayout';
import { Dashboard , PageNotFound } from './Screens';


function App() {
  
  const{theme , toggleTheme} = useContext(ThemeContext);
  console.log(theme);
  
  //adding dark-mode class if the dark mode is set on to body tag 
  useEffect(() => {
    if(theme === DARK_THEME){
      document.body.classList.add("dark-mode");
    } else{
      document.body.classList.remove("dark-mode");
    }
  },[theme]);

  return (
    <>
    <Router>
      <Routes>
        <Route element = {<BaseLayout/>}>
         <Route path = "/" element = {<Dashboard/>}/>
         <Route path = "*" element = {<PageNotFound/>}/>
        </Route>
      </Routes>
      <button type='button' className='theme-toggle-btn' onClick={toggleTheme}>
        <img className='theme-icon' src={theme === LIGHT_THEME ?SunIcon:MoonIcon}/>
      </button>
    </Router>
     
    </>
  )
}

export default App
