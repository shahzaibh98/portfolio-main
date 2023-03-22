import React, { useEffect, useState } from "react";
import "./working.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import scrollreveal from "scrollreveal";
import { useScroll } from "../anima/useScroll";

const Working = () => {
  const [element, controls] = useScroll();
  const [projects, setProjects] = useState([]);
  const projCollectionRef = collection(db, "jobDetails");
  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projCollectionRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProjects();
  }, []);

  useEffect(() => {
    const working = scrollreveal({
      origin: "bottom",
      distance: "50px",
      duration: 2000,
      reset: true,
    });
    working.reveal(`#working`);

    const education_title = scrollreveal({
      origin: "right",
      distance: "50px",
      duration: 2000,
      reset: true,
    });
    education_title.reveal(`.ag-courses_item`);

    const education_subtitle = scrollreveal({
      origin: "left",
      distance: "50px",
      duration: 2000,
      reset: true,
    });
    education_subtitle.reveal(`.ag-courses-item_title`);

    const edication_calendar = scrollreveal({
      origin: "right",
      distance: "50px",
      duration: 2000,
      reset: true,
    });
    edication_calendar.reveal(`.ag-courses-item_date-box`);
  }, []);

  return (
    <section id="working" className="working">
      <h2 className="edu_title">Career Experience</h2>
      <h5 className="edu_subtitle">My Job Experience</h5>
      <h2 className="line">
        -----------------------------------------------------------------------------------------------------------------
      </h2>
      <div class="ag-format-container">
        <div class="ag-courses_box">
          <motion.div
            className="pro_container grid"
            ref={element}
            variants={card}
            animate={controls}
            transition={{ delay: 0.6, duration: 0.9, type: "tween" }}
          >
            {projects.map((x) => {
              return (
                <div class="ag-courses_item">
                  <div class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">{x.jobTitle}</div>

                    <div class="ag-courses-item_date-box">
                      <span class=".ag-courses-item_company_name">
                        {x.companyName}
                      </span>
                      <span class="ag-courses-item_date">
                        {" ( " + x.jobTimePeriod + " )"}
                      </span>
                    </div>
                    {x.description.map((point) => {
                      return (
                        <p class="ag-courses-item_description">
                          <em>{point}</em>
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Working;
