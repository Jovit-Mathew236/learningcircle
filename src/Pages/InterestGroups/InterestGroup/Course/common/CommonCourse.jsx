import React, { useState, useEffect } from "react";
import Footer from "../../../../../Components/Footer/Footer";
import Navbar from "../../../../../Components/Navbar/Navbar";
import styles from "./CommonCourse.module.css";

import CommonData from "./common";
import { useParams } from "react-router-dom";

const CommonCourse = () => {
  const [course, setCourse] = useState();
  const { type, id } = useParams();

  useEffect(() => {
    if (type === "core") {
      setCourse(CommonData[0].core[id - 1]);
    } else if (type === "sub") {
      setCourse(CommonData[0].sub[id - 1]);
    } else if (type === "enablement") {
      setCourse(CommonData[0].enablement[id - 1]);
    } else {
      setCourse("Sorry!");
    }
  }, []);

  return (
    <>
      <Navbar />
      {course && (
        <div className={styles.main_container}>
          <div className={styles.first_view_container}>
            <div className={styles.first_view}>
              <div className={styles.fv_texts}>
                <p className={styles.fv_heading}>{course.name}</p>

                <p className={styles.fv_content}>{course.description}</p>
                <p className={styles.karma_header}>
                  On Course Completion {course.karma} Karma Points.
                </p>
                {course.link && (
                  <a
                    href={course.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className={styles.view_course}>View Course</button>
                  </a>
                )}
              </div>

              <div className={styles.fv_image}>
                <img
                  src='/assets/icourses/fvimg.gif'
                  alt='Group Learning'
                  className={styles.fv_img}
                />
              </div>
            </div>
            <div className={styles.second_view_container}>
              <div className={styles.second_view}>
                <div className={styles.sv_texts}>
                  <p className={styles.sv_heading}>
                    Once <span>Completed</span>
                  </p>
                  <p className={styles.sv_content}>
                    {course.inner_description}
                  </p>
                </div>
                <div className={styles.sample_container}>
                  {/* <p className={styles.sample_header}>Example Message</p> */}
                  <p className={styles.sample_message}>{course.example}</p>
                </div>
              </div>
            </div>

            <div className={styles.third_view_container}>
              <div className={styles.third_view}>
                <div className={styles.sample_container}>
                  <p className={styles.sv_heading}>
                    <span>Need </span> Help ?
                  </p>
                  <p className={styles.sample_message}>
                    If you are new to µLearn, do checkout
                    <a href='mulearn.org'>&nbsp;mulearn.org</a> and join us.{" "}
                    <a href='https://youtu.be/7Oj88zF2jY0'>Watch this video</a>{" "}
                    if you are confused with Discord Onboarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CommonCourse;
