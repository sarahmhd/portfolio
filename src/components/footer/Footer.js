import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.footer} p-3 text-center`}>
      <div className="container mx-auto">
        <div className={styles.footer_content}>
          <p>
            Designed by <span className="uppercase ">sarah mohammed</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
