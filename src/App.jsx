import { motion } from "framer-motion";
import React, { useState } from "react";
import { CiSun } from "react-icons/ci";
import { RiMoonFoggyLine } from "react-icons/ri";
import About from "./components/about/about";
import BackgroundAnimations from "./components/animation/animations";
import Contact from "./components/contact/contact";
import Cursor from "./components/cursor/cursor";
import Education from "./components/education/education";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Services from "./components/services/services";
import "./styles.css";

export const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="main app-container"
      data-theme={theme}
    >
      <BackgroundAnimations themeMode={theme} />
      {theme !== "dark" ? (
        <button className="fabDark" onClick={() => changeTheme()}>
          <CiSun size={36} />
        </button>
      ) : (
        <button className="fab" onClick={() => changeTheme()}>
          <RiMoonFoggyLine size={36} />
        </button>
      )}
      <Cursor />
      <Header />
      <Navbar />
      <About />
      <Education />
      <Services />
      <Projects />
      <Contact changeTheme={changeTheme} currentTheme={theme} />
      <Footer />
    </motion.div>
  );
};
