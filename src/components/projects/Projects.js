import React, { useState } from "react";

import Card from "../projectCard/projectCard";
import project1 from "../../assets/images/project1.jpg";
import project10 from "../../assets/images/project10.jpg";
import project11 from "../../assets/images/project11.jpg";
import project12 from "../../assets/images/project12.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";
import project4 from "../../assets/images/project4.jpg";
import project5 from "../../assets/images/project5.jpg";
import project6 from "../../assets/images/project6.jpg";
import project7 from "../../assets/images/project7.jpg";
import project8 from "../../assets/images/project8.jpg";
import project9 from "../../assets/images/project8.jpg";
import styles from "./projects.module.css";

const projectsData = [
  {
    id: 1,
    title: "bizland",
    repo: "https://github.com/sarahmhd/Bootstrap-bizland",
    demo: "https://bootstrap-bizland.vercel.app/",
    image: project1,
    category: "html/css",
  },
  {
    id: 2,
    title: "Movies App",
    repo: "https://github.com/sarahmhd/Movie-App-Project",
    demo: "https://movie-app-project-tan.vercel.app/",
    image: project2,
    category: "angular",
  },
  {
    id: 3,
    title: "jk developers",
    repo: "https://github.com/sarahmhd/freelance-task",
    demo: "https://freelance-task-4j8r.vercel.app/",
    image: project3,
    category: "react",
  },
  {
    id: 4,
    title: "Quiz App",
    repo: "https://github.com/sarahmhd/QuizApp",
    demo: "https://sarahmhd.github.io/QuizApp/",
    image: project4,
    category: "javascript",
  },
  {
    id: 5,
    title: "book store",
    repo: "https://github.com/sarahmhd/book_store",
    demo: "https://sarahmhd.github.io/book_store/",
    image: project5,
    category: "javascript",
  },
  {
    id: 6,
    title: "CRUD",
    repo: "https://github.com/sarahmhd/CRUD2",
    demo: "https://sarahmhd.github.io/CRUD2/",
    image: project6,
    category: "javascript",
  },
  {
    id: 7,
    title: "kasper",
    repo: "https://github.com/sarahmhd/Girls-Task-2",
    demo: "https://sarahmhd.github.io/Girls-Task-2/",
    image: project7,
    category: "html/css",
  },
  {
    id: 8,
    title: "dashboard",
    repo: "https://github.com/sarahmhd/Girls-Task-4",
    demo: "https://sarahmhd.github.io/Girls-Task-4/",
    image: project8,
    category: "html/css",
  },
  {
    id: 9,
    title: "time zone",
    repo: "https://github.com/sarahmhd/Week6-Task1ABD",
    demo: "https://sarahmhd.github.io/Week6-Task1ABD/",
    image: project9,
    category: "html/css",
  },
  {
    id: 10,
    title: "imagine",
    repo: "https://github.com/sarahmhd/Week5-Task1ABD",
    demo: "https://sarahmhd.github.io/Week5-Task1ABD/",
    image: project10,
    category: "html/css",
  },
  {
    id: 11,
    title: "bakery",
    repo: "https://github.com/sarahmhd/Week4-Task1ABD",
    demo: "https://sarahmhd.github.io/Week4-Task1ABD/",
    image: project11,
    category: "html/css",
  },
  {
    id: 12,
    title: "responsive",
    repo: "https://github.com/sarahmhd/Girls-Task-3-",
    demo: "https://sarahmhd.github.io/Girls-Task-3-/",
    image: project12,
    category: "html/css",
  },
];

const Projects = () => {
  const [tabs, setTabs] = useState("all");

  return (
    <div className={`${styles.projects} section-p relative`}>
      <div className="container mx-auto">
        <div
          className={`${styles.projects_content} flex flex-col justify-center items-center`}
        >
          <div className={`overlay absolute`}></div>

          <h2 className="section_title">projects</h2>
          <div className={`${styles.tabs_btns} flex gap-3`}>
            <button className="btn" onClick={() => setTabs("all")}>
              All
            </button>
            <button className="btn" onClick={() => setTabs("html/css")}>
              Html / css
            </button>
            <button className="btn" onClick={() => setTabs("javascript")}>
              javascript
            </button>
            <button className="btn" onClick={() => setTabs("react")}>
              React
            </button>
          </div>
          <div
            className={`${styles.content} grid grid-cols-12 justify-center gap-10`}
          >
            {tabs === "all"
              ? projectsData.map((project) => (
                  <Card key={project.id} project={project} />
                ))
              : projectsData
                  .filter((project) => project.category === tabs)
                  .map((project) => (
                    <Card key={project.id} project={project} />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
