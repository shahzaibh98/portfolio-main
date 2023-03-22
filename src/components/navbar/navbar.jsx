import React from "react";
import { AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { HiOutlineHome, HiOutlineOfficeBuilding } from "react-icons/hi";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="#header">
              <HiOutlineHome />
            </a>
          </li>
          <li>
            <a href="#about">
              <AiOutlineUser />
            </a>
          </li>
          <li>
            <a href="#education">
              <FaUniversity />
            </a>
          </li>
          <li>
            <a href="#working">
              <HiOutlineOfficeBuilding />
            </a>
          </li>
          <li>
            <a href="#projects">
              <AiOutlineFundProjectionScreen />
            </a>
          </li>
          <li>
            <a href="#contact">
              <BsPhone />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
