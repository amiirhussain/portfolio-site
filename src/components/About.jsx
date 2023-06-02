import React from "react";
import "../styles/about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <motion.div
        className="section--header"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 10, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h1 className="section--heading">About</h1>
        <span className="section--slogan">WHO AM I</span>
      </motion.div>

      <div className="about-text">
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Over 2 years of experience as a Frontend Web Developer, possessing a
          strong grasp of both designing and development aspects. My expertise
          lies in crafting dynamic websites, starting from UI design all the way
          to implementation. I am proficient in utilizing HTML5, CSS3,
          Bootstrap, JavaScript, and React.js to bring these websites to life.
          My focus is on creating web designs that are both visually appealing
          and functional, incorporating effective web page layouts, color
          schemes, and responsive designs.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
