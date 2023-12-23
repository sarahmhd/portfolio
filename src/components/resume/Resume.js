import React from "react";
import myResume from "../../assets/Sarah-Mohamed-Frontend_Engineer_CV.pdf";
import styles from "./resume.module.css";

const Resume = () => {
  return (
    <div className={`${styles.resume} section-p`}>
      <div className="container mx-auto">
        <div
          className={`${styles.resume_content} flex flex-col justify-center items-center`}
        >
          <h2 className="section_title">My Resume</h2>
          {/* <div
            className={`${styles.work_content} pt-10 flex flex-col justify-between relative`}
          >
            <div
              className={`${styles.work_box} relative col-span-6 flex flex-col gap-4 p-10`}
            >
              <div
                className={`${styles.before_icon} absolute flex justify-center items-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-briefcase"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </div>
              <h3>Senior Developer</h3>
              <span>Company Name - 2016 - Current</span>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div
              className={`${styles.work_box} relative col-span-6 flex flex-col gap-4 items-end p-10`}
            >
              <div
                className={`${styles.before_icon} absolute flex justify-center items-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-briefcase"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </div>
              <h3>Senior Developer</h3>
              <span>Company Name - 2016 - Current</span>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div> */}
          <div
            className={`${styles.work_content} ${styles.education} pt-10 flex flex-col justify-between relative`}
          >
            <div
              className={`${styles.work_box} relative col-span-6 flex flex-col gap-4 p-10`}
            >
              <div
                className={`${styles.before_icon} absolute flex justify-center items-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-school"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                </svg>
              </div>
              <h3>Bachelor's Degree</h3>
              <span>Menoufia University - 2016 - 2021</span>
              <p>
                Bachelor's degree from Faculty of Computers and Information
                Menoufia University (Computer Science).
              </p>
            </div>
            <div
              className={`${styles.work_box} relative col-span-6 flex flex-col gap-4 items-end p-10`}
            >
              <div
                className={`${styles.before_icon} absolute flex justify-center items-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-school"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                </svg>
              </div>
              <h3>ITI Scholarship Program</h3>
              <span>Information Technology Institute - 2023/07 – 2023/11</span>
              <p>
                Collaborated with a diverse team of developers on real-world
                software projects, applying agile methodologies and industry
                best practices. Developed proficiency in front end web
                development, working with technologies such as JavaScript and
                React JS. Skills Developed: HTML, CSS, JavaScript, Bootstrap,
                Agile Methodologies.
              </p>
            </div>
          </div>
          <a
            href={myResume}
            download="Sarah_Mohamed_CV"
            className={`${styles.resume_btn} btn mt-10 relative`}
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
