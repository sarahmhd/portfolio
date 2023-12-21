import React from "react";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div
      className={`${styles.services} section-p relative flex justify-center items-center`}
    >
      <div className="container mx-auto">
        <div
          className={`${styles.services_content} flex flex-col justify-center items-center`}
        >
          <h2 className="section_title">My Services</h2>
          <div
            className={`${styles.content} grid grid-cols-12 justify-between`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
