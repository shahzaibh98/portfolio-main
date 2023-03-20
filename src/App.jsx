import React, { useState } from 'react'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Education from './components/education/education'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Projects from './components/projects/projects'
import Services from './components/services/services'

import Cursor from './components/cursor/cursor'

import { motion } from 'framer-motion'

export const App = () => {

  const[theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <motion.div initial="hidden" animate="show" className='main app-container' data-theme = {theme}>
      <Cursor/>
      <Header/>
      <Navbar/>
      <About/>
      <Education/>
      <Services/>
      <Projects/>
      <Contact changeTheme = {changeTheme} currentTheme = {theme}/>
      <Footer/>
    </motion.div>
  )
}