import React from "react";
import styles from "./hireMe.module.css";

const HireMe = () => {
  return (
    <div className={`${styles.hire} section-p relative`}>
      <div className="container mx-auto">
        <div
          className={`${styles.hire_content} flex flex-col justify-center items-center`}
        >
          <h2 className="section_title">Hire Me!</h2>
          <p>
            Passionate front-end developer graduated from the ITI scholarship
            program,. Experienced in HTML, CSS, JavaScript, exploring React,
            Angular. Quick learner, problem solver, constantly improving skills.
            Eager to collaborate, create amazing web experiences. Seeking a
            position where I can utilize my skills to create visually appealing
            and user-friendly web experiences.
          </p>
          <a
            href="#contact"
            className="flex justify-center items-center uppercase"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
