import React from "react";
import styles from "./skills.module.css";

const skillsData = [
  {
    id: 1,
    title: "html",
    progress: "85",
  },
  {
    id: 2,
    title: "css",
    progress: "85",
  },
  {
    id: 3,
    title: "JavaScript",
    progress: "75",
  },
  {
    id: 4,
    title: "Bootstrap",
    progress: "80",
  },
  {
    id: 5,
    title: "Tailwind",
    progress: "70",
  },
  {
    id: 6,
    title: "SASS",
    progress: "70",
  },
  {
    id: 7,
    title: "React js",
    progress: "80",
  },
  {
    id: 8,
    title: "mui",
    progress: "65",
  },
];

const Skills = () => {
  return (
    <div className={`${styles.skills} section-p`}>
      <div className="container mx-auto">
        <div
          className={`${styles.skills_content} flex flex-col justify-center items-center`}
        >
          <h2 className="section_title">Skills</h2>
          <div
            className={`${styles.content} ${styles.progress_circle} grid grid-cols-12 justify-center gap-10`}
          >
            {skillsData.map((skill) => (
              <div
                className={`${styles.progress} col-span-12 sm:col-span-6  md:col-span-4 lg:col-span-3 mx-auto`}
                key={skill.id}
              >
                <span
                  className={`${styles.title} ${styles.timer} flex flex-col justify-center items-center`}
                  data-from="0"
                  data-to="85"
                  data-speed="1800"
                >
                  <span className={`${styles.skill_val}`}>
                    {skill.title} <br /> <span>{skill.progress}%</span>
                  </span>
                </span>
                <div className={styles.overlay}></div>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
