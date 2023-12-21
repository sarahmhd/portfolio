import { FaFirefoxBrowser } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { GrPerformance } from "react-icons/gr";
import { MdBarChart } from "react-icons/md";
import React from "react";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div className={`${styles.services} section-p relative`}>
      <div className="container mx-auto">
        <div
          className={`${styles.services_content} flex flex-col justify-center items-center`}
        >
          <div className={`overlay absolute`}></div>
          <h2 className="section_title">My Services</h2>
          <div
            className={`${styles.content} grid grid-cols-12 justify-between`}
          >
            <div
              className={`${styles.service} col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-5`}
            >
              <div className={`${styles.icon}`}>
                <MdBarChart />
              </div>
              <h3>Web Development</h3>
              <p>
                Design and development of responsive and user-friendly websites.
                Integration of front-end components with back-end systems.
              </p>
            </div>
            <div
              className={`${styles.service} col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-5`}
            >
              <div className={`${styles.icon}`}>
                <GrPerformance />
              </div>
              <h3>Performance Optimization</h3>
              <p>
                websites.Improving website and application performance.
                Implementing best practices for faster loading times
              </p>
            </div>
            <div
              className={`${styles.service} col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-5`}
            >
              <div className={`${styles.icon}`}>
                <FaMobileScreenButton />
              </div>
              <h3>Responsive Web Design</h3>
              <p>
                Ensuring websites work well on various devices and screen sizes.
                Implementing responsive design principles
              </p>
            </div>
            <div
              className={`${styles.service} col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-5`}
            >
              <div className={`${styles.icon}`}>
                <FaFirefoxBrowser />
              </div>
              <h3>Cross-Browser Compatibility</h3>
              <p>
                Ensuring websites work consistently across different browsers.
                Handling browser-specific issues and optimizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
