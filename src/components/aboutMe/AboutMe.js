import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React from "react";
import styles from "./aboutMe.module.css";

const AboutMe = () => {
  return (
    <div
      className={`${styles.about_me} section-p relative flex justify-center items-center`}
    >
      <div className="container mx-auto">
        <div
          className={`${styles.about_me_content} flex flex-col justify-center items-center`}
        >
          <h2 className="section_title">About Me</h2>
          <div
            className={`${styles.content} grid grid-cols-12 justify-between`}
          >
            <div
              className={`col-span-12 md:col-span-4 lg:col-span-4 mb-8 md:mb-0 lg:mb-0`}
            >
              <ul className="list-none flex flex-col gap-5">
                <li className="flex justify-between">
                  <span className="font-bold">Full Name:</span>
                  <span className="font-thin">sarah mohammed</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-bold">Phone:</span>
                  <span className="font-thin">
                    <a href="tel:+201063442817">01063442817</a>
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-bold">Email:</span>
                  <span className="font-thin lowercase">
                    <a href="mailto:+saraamhd2468@gmail.com">saraamhd2468@gmail.com</a>

                    
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-bold">Address:</span>
                  <span className="font-thin">tala / Egypt</span>
                </li>
              </ul>
            </div>
            <div
              className={`col-span-12 md:col-span-7 lg:col-span-7 ml-0 md:ml-20 lg:ml-20 flex flex-col gap-5`}
            >
              <h3>Hello There!</h3>
              <p>
                I am a skilled Front-End Developer with expertise in designing
                and creating visually appealing websites. My role involves not
                only writing and editing web page content but also regularly
                updating websites to ensure they remain engaging and up to date.
                Additionally, I possess a strong knowledge of coding languages,
                allowing me to develop innovative and efficient web
                applications.
              </p>
              <ul className={`list-none flex gap-2 ${styles.socials}`}>
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
      </div>
    </div>
  );
};

export default AboutMe;
