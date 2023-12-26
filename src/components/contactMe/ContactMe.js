import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React from "react";
import styles from "./contactMe.module.css";

const ContactMe = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    const emailBody = `Subject: ${subject}%0A%0AMessage from ${name} (${email}): ${message}`;

    const mailtoLink = `mailto:saraamhd2468@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className={`${styles.contact} section-p relative`}>
      <div className="container mx-auto">
        <div
          className={`${styles.contact_content} flex flex-col justify-center items-center`}
        >
          <div className={`overlay absolute`}></div>
          <h2 className="section_title">Contact Me</h2>
          <div
            className={`${styles.content} grid grid-cols-12 justify-between  gap-9 md:gap-12`}
          >
            <div
              className={`${styles.form} col-span-12 md:col-span-6 lg:col-span-6 justify-start order-2 md:order-1`}
            >
              <form
                onSubmit={handleFormSubmit}
                noValidate
                className={`${styles.form} form flex flex-col gap-6`}
              >
                <div className={`${styles.input_group} input-group`}>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Name"
                    className={`${styles.form_control} form-control`}
                  />
                </div>
                <div className={`${styles.input_group} input-group`}>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={`${styles.form_control} form-control`}
                  />
                </div>
                <div className={`${styles.input_group} input-group`}>
                  <input
                    required
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className={`${styles.form_control} form-control`}
                  />
                </div>
                <div className={`${styles.input_group} input-group`}>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className={`${styles.form_control} form-control`}
                    rows={6}
                    cols={12}
                  ></textarea>
                </div>
                <button type="submit">Send message</button>
              </form>
            </div>
            <div
              className={`${styles.info} col-span-12 md:col-span-6 lg:col-span-6 justify-start order-1 md:order-2`}
            >
              <ul className="list-none flex flex-col gap-8">
                <li className="flex flex-col gap-3">
                  <span className="font-bold">Phone:</span>
                  <span className="font-thin">
                    <a href="tel:+201063442817">01063442817</a>
                  </span>
                </li>
                <li className="flex flex-col gap-3">
                  <span className="font-bold">Email:</span>
                  <span className="font-thin lowercase">
                    <a href="mailto:+saraamhd2468@gmail.com">
                      saraamhd2468@gmail.com
                    </a>
                  </span>
                </li>
                <li className="flex flex-col gap-3">
                  <span className="font-bold">Follow Me:</span>
                  <ul className={`list-none flex gap-4 ${styles.socials}`}>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
