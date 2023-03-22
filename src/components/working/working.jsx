import React, { useState, useEffect } from "react";
import "./working.css";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";

import { GoTools } from "react-icons/go";
import { FaLink } from "react-icons/fa";
import scrollreveal from "scrollreveal";
import { motion } from "framer-motion";
import { card } from "../anima/animation";
import { useScroll } from "../anima/useScroll";

const Working = () => {
  const [element, controls] = useScroll();
  const [projects, setProjects] = useState([]);
  const projCollectionRef = collection(db, "jobDetails");
  useEffect(() => {
    const getProjects = async () => {
      const q = projCollectionRef;
      const data = await getDocs(q);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProjects();
  }, []);

  console.log("Projects :=>", projects);

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
        </div>
      </div>
    </section>
  );
};

export default Working;
