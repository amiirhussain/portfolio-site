import React from "react";
// import { motion } from "framer-motion";
// import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import { FaDesktop, FaMobile, FaCog } from "react-icons/fa";

import "../styles/services.css";

const Services = () => {
  return (
    <div id="services">
      <div className="section--header">
        <h1 className="section--heading">Services</h1>
        <span className="section--slogan">What I will do for you</span>
      </div>
      <section>
        <div className="service-container">
          <ServiceBox
            title="Web Development"
            description="We create responsive and user-friendly websites."
            icon={<FaDesktop />}
          />
          <ServiceBox
            title="Mobile App Development"
            description="We build native and cross-platform mobile applications."
            icon={<FaMobile />}
          />
          <ServiceBox
            title="Technical Support"
            description="We provide technical support for your software and hardware needs."
            icon={<FaCog />}
          />
        </div>
      </section>
    </div>
  );
};

const ServiceBox = ({ title, description, icon }) => {
  return (
    <div className="service-box">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default Services;
