import React from "react";
import styles from "./resume.module.css";

const Resume = () => {
  return (
    <div className={`${styles.resume} section-p`}>
      <div className="container mx-auto">
        <div
          className={`${styles.resume_content} flex flex-col justify-center items-center`}
        >
          <h2 className="section_title">My Resume</h2>
          <div
            className={`${styles.content} grid grid-cols-12 justify-between relative`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
