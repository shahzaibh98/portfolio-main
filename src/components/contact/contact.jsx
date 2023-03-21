import React from "react";
import "./contact.css";

import { GitlabLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

import { motion } from "framer-motion";
import { contact } from "../anima/animation";
import { useScroll } from "../anima/useScroll";

const Contact = ({ changeTheme, currentTheme }) => {
  const [element, controls] = useScroll();

  return (
    <section id="contact" className="contact">
      <h2 className="contact_title">Contact Me</h2>
      <h5 className="contact_subtitle">Get In Touch</h5>
      <motion.div
        className="contacts container grid"
        ref={element}
        variants={contact}
        animate={controls}
        transition={{ delay: 0.6, duration: 0.9, type: "tween" }}
      >
        <div className="con_card">
          <div className="con_content">
            <div className="front">
              <h3 className="con_title">Linkedin</h3>
              <p className="con_subtitle">Hover me !</p>
            </div>
            <div className="back">
              <p className="con_description">
                <a
                  href="https://www.linkedin.com/in/erkan-uz-lil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogo size={80} className="con_so_icon" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="con_card">
          <div className="con_content">
            <div className="front">
              <h3 className="con_title">Github</h3>
              <p className="con_subtitle">Hover me !</p>
            </div>
            <div className="back">
              <p className="con_description">
                <a
                  href="https://github.com/erkanuz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitlabLogo size={80} className="con_so_icon" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="con_card">
          <div className="con_content">
            <div className="front">
              <h3 className="con_title">Instagram</h3>
              <p className="con_subtitle">Hover me !</p>
            </div>
            <div className="back">
              <p className="con_description">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={80} className="con_so_icon" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
