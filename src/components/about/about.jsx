import React, { useEffect } from "react";
import "./about.css";

import { CircleWavyCheck, DotsNine, IdentificationBadge } from "phosphor-react";

import { AiOutlineAndroid } from "react-icons/ai";
import { IoFingerPrintOutline } from "react-icons/io5";
import {
  SiFirebase,
  SiGithub,
  SiIos,
  SiNestjs,
  SiNodedotjs,
  SiReact,
  SiPersonio,
} from "react-icons/si";

import { TbBrandJavascript } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

import scrollreveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    const DotElement = scrollreveal({
      origin: "top",
      duration: 2000,
      reset: true,
    });
    DotElement.reveal(`.DotElement`);

    const about_content_title = scrollreveal({
      origin: "right",
      duration: 2000,
      reset: true,
    });
    about_content_title.reveal(`.about_content_title`);

    const about_content_description = scrollreveal({
      origin: "left",
      duration: 2000,
      reset: true,
    });
    about_content_description.reveal(`.about_content_description`);
  }, []);

  return (
    <section id="about" className="about section container">
      <div className="about_container">
        <h2 className="about_title">About Me</h2>
        <h5 className="about_subtitle">My Introduction</h5>
        <h2 className="line">
          -----------------------------------------------------------------------------------------------------------------
        </h2>

        <div className="all_about_content">
          <div className="about_child design">
            <h2 className="about_content_title">
              Web Development{" "}
              <i className="aicon">
                <SiReact size={32} /> <SiNodedotjs size={32} />{" "}
                <SiNestjs size={32} /> <SiGithub size={32} />{" "}
                <VscAzure size={32} />
              </i>
            </h2>
            <p className="about_content_description">
              I am a web developer experienced in JavaScript and TypeScript,
              with expertise in React and Nest JS. I have built various websites
              and applications using these technologies, showcasing my skills in
              state management, component architecture, data fetching, API
              development, database integration, server-side rendering,
              accessibility, performance optimization, and responsive design.
            </p>
          </div>
          <div className="about_child DotElement">
            <DotsNine size={80} />
          </div>
          <div className="about_child engineering">
            <h2 className="about_content_title">
              Mobile App{" "}
              <i className="aicon">
                <SiReact size={32} /> <AiOutlineAndroid size={32} />{" "}
                <SiIos size={32} /> <SiFirebase size={32} />{" "}
                <TbBrandJavascript size={32} />
              </i>
            </h2>
            <p className="about_content_description">
              I am a skilled mobile application developer with extensive
              experience using React Native to build responsive, high-quality
              applications for iOS and Android devices. My expertise includes
              user interface design, application architecture, data management,
              and quality assurance testing. I am dedicated to delivering
              exceptional mobile experiences that meet user expectations, and am
              always eager to explore new technologies and techniques in this
              exciting field.
            </p>
          </div>
          <div className="about_child personalty">
            <h2 className="about_content_title">
              Personality{" "}
              <i className="aicon">
                <SiPersonio size={32} /> <CircleWavyCheck size={32} />{" "}
                <IoFingerPrintOutline size={32} />{" "}
                <IdentificationBadge size={32} />
              </i>
            </h2>
            <p className="about_content_description">
              As a web developer, I approach my work with a keen attention to
              detail and a passion for planning and organization. I take pride
              in completing projects thoroughly and ensuring that every task is
              seen through to the end. In my spare time, I enjoy spending time
              with friends and exploring new places, as well as staying up to
              date with the latest trends and technologies in web development. I
              also have a passion for cricket, and enjoy playing the sport
              whenever I have the chance.
            </p>
          </div>
        </div>

        <h2 className="line">
          -----------------------------------------------------------------------------------------------------------------
        </h2>
      </div>
    </section>
  );
};

export default About;
