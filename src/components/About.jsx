import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about">
      <div className="section--header">
        <h1 className="section--heading">About</h1>
        <span className="section--slogan">WHO AM I</span>
      </div>

      <div className="about-text">
        <p>
          Over 2 years of experience as a Frontend Web Developer, possessing a
          strong grasp of both designing and development aspects. My expertise
          lies in crafting dynamic websites, starting from UI design all the way
          to implementation. I am proficient in utilizing HTML5, CSS3,
          Bootstrap, JavaScript, and React.js to bring these websites to life.
          My focus is on creating web designs that are both visually appealing
          and functional, incorporating effective web page layouts, color
          schemes, and responsive designs.
        </p>
      </div>
    </section>
  );
};

export default About;
