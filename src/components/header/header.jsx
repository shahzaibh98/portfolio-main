import React, { useEffect } from "react";
import "./header.css";

import { BsFiletypePdf } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";

import ME from "../../assets/20.svg";
import RE from "../../assets/21.svg";
import NX from "../../assets/22.svg";

import scrollreveal from "scrollreveal";
import resumePdf from "../../assets/Shahzaib Hassan - Resume.pdf";

const Header = () => {
  useEffect(() => {
    const nx = scrollreveal({
      origin: "top",
      distance: "100px",
      duration: 2000,
      reset: true,
    });
    nx.reveal(`.nx`);

    const re = scrollreveal({
      origin: "bottom",
      distance: "100px",
      duration: 1500,
      reset: true,
    });
    re.reveal(`.re`);

    const me = scrollreveal({
      origin: "top",
      distance: "100px",
      duration: 2500,
      reset: true,
    });
    me.reveal(`.me`);

    const tit = scrollreveal({
      origin: "left",
      distance: "100px",
      duration: 500,
      reset: true,
    });
    tit.reveal(`.tit`);

    const sub = scrollreveal({
      origin: "right",
      distance: "100px",
      duration: 1500,
      reset: true,
    });
    sub.reveal(`.sub`);

    const description = scrollreveal({
      origin: "left",
      distance: "100px",
      duration: 2500,
      reset: true,
    });
    description.reveal(`.description`);

    const social_links = scrollreveal({
      origin: "top",
      distance: "100px",
      duration: 2000,
      reset: true,
    });
    social_links.reveal(`.social_links`);

    const SD = scrollreveal({
      origin: "bottom",
      distance: "100px",
      duration: 1500,
      reset: true,
    });
    SD.reveal(`.SD`);
  }, []);

  return (
    <header id="header" className="header section">
      <section className="header_container">
        <div className="esta">
          <img src={RE} alt="re" className="re" />
        </div>

        <div className="esta my_content">
          <h2 className="title tit">Hi, i'm Shahzaib Hassan</h2>
          <h2 className="title sub">Software Engineer</h2>
          <h4 className="description">
            Deep level experience in web designing & development knowledge.
          </h4>
        </div>

        <div className="esta social_links">
          <a
            href="https://www.linkedin.com/in/shahzaib-hassan-929207180/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <SlSocialLinkedin />
          </a>
          <a
            href="https://github.com/shahzaib1010hassan"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <VscGithubAlt />
          </a>

          <a href={resumePdf} className="icon" download>
            <BsFiletypePdf />
          </a>
        </div>

        <div className="esta">
          <img src={ME} alt="me" className="me" width={500} height={200} />
        </div>

        <div className="esta SD">
          <h2 className="scroll_title">Scroll Down</h2>
          <a href="#footer" className="SI">
            <div className="scroll-down"></div>
          </a>
        </div>

        <div className="esta">
          <img src={NX} alt="nx" className="nx" />
        </div>
      </section>
    </header>
  );
};

export default Header;
