import React, { useEffect } from "react";
import "./education.css";

import { BsCalendar2Check } from "react-icons/bs";
import { FcGraduationCap } from "react-icons/fc";

import scrollreveal from "scrollreveal";

const Education = () => {
  useEffect(() => {
    const education = scrollreveal({
      origin: "bottom",
      distance: "50px",
      duration: 2000,
      reset: true,
    });
    education.reveal(`#education`);

    const education_title = scrollreveal({
      origin: "right",
      distance: "50px",
      duration: 2000,
      reset: true,
    });
    education_title.reveal(`.education_title`);

    const education_subtitle = scrollreveal({
      origin: "left",
      distance: "50px",
      duration: 2000,
      reset: true,
    });
    education_subtitle.reveal(`.education_subtitle`);

    const edication_calendar = scrollreveal({
      origin: "right",
      distance: "50px",
      duration: 2000,
      reset: true,
    });
    edication_calendar.reveal(`.edication_calendar`);
  }, []);

  return (
    <section id="education" className="education">
      <h2 className="edu_title">Education</h2>
      <h5 className="edu_subtitle">My Personal Journey</h5>

      <div className="container education_container">
        <div className="edication_content">
          <div className="edu_tab">
            <i>
              <FcGraduationCap className="edu_icon" />
            </i>
          </div>

          <div className="edication_data">
            <div>
              <h3 className="education_title">Software Engineer</h3>
              <span className="education_subtitle">
                COMSATS Univeristy Islamabad
              </span>
              <div className="edication_calendar">
                <BsCalendar2Check size={18} />
                <span className="education_date">
                  September 2018 - July 2022
                </span>
              </div>
            </div>

            <div>
              <span className="edication_rounder"></span>
              <span className="education_line"></span>
            </div>
          </div>

          <div className="edication_data">
            <div></div>
            <div>
              <span className="edication_rounder"></span>
              <span className="education_line"></span>
            </div>
            <div>
              <h3 className="education_title">HSSC</h3>
              <span className="education_subtitle">
                Punjab Group of College
              </span>
              <div className="edication_calendar">
                <BsCalendar2Check size={18} />
                <span className="education_date">August 2016 - May 2018</span>
              </div>
            </div>
          </div>

          <div className="edication_data">
            <div>
              <h3 className="education_title">SSC</h3>
              <span className="education_subtitle">
                Nishat Boy's High School
              </span>
              <div className="edication_calendar">
                <BsCalendar2Check size={18} />
                <span className="education_date">March 2014 - April 2016</span>
              </div>
            </div>

            <div>
              <span className="edication_rounder"></span>
              {/* <span className="education_line"></span> */}
            </div>
          </div>

          {/* <div className="edication_data">
            <div></div>

            <div>
              <span className="edication_rounder"></span>
            </div>

            <div>
              <h3 className="education_title">Online Courses</h3>
              <span className="education_subtitle">independent study</span>
              <div className="edication_calendar">
                <BsCalendar2Check />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
