import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React from "react";
import avatar from "../../assets/images/avatar2.jpg";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div
      className={`${styles.banner} relative flex justify-center items-center`}
    >
      <div className="container mx-auto">
        <div
          className={`${styles.banner_content} flex flex-col justify-center items-center`}
        >
          <div className={`overlay absolute`}></div>
          <div className={`${styles.img} `}>
            <img src={avatar} alt="avatar" />
          </div>
          <h1 className="capitalize relative">sarah mohammed</h1>
          <span>front end web developer</span>
          <ul className="list-none flex">
            <li className={styles.twitter}>
              <a
                href="https://twitter.com/Sarah_7521"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className={styles.facebook}>
              <a
                href="https://www.facebook.com/profile.php?id=100024339199645"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className={styles.linked}>
              <a
                href="https://www.linkedin.com/in/sara-mohamed-648160154/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className={styles.github}>
              <a
                href="https://github.com/sarahmhd"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
