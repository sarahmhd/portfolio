import AboutMe from "../components/aboutMe/AboutMe";
import Banner from "../components/banner/Banner";
import ContactMe from "../components/contactMe/ContactMe";
import Footer from "../components/footer/Footer";
import HireMe from "../components/hireMe/HireMe";
import Projects from "../components/projects/Projects";
import React from "react";
import Resume from "../components/resume/Resume";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <HireMe />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
