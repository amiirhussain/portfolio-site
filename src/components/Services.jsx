import React from "react";
import { FaDesktop, FaMobile, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/services.css";

const Services = () => {
  return (
    <div id="services">
      <motion.div
        className="section--header"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 10, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h1 className="section--heading">Services</h1>
        <span className="section--slogan">What I will do for you</span>
      </motion.div>
      <section>
        <div className="service-container">
          <ServiceBox
            title="Web Development"
            description="We create responsive and user-friendly websites."
            icon={<FaDesktop />}
          />
          <ServiceBox
            title="Creative Design"
            description="We build interactive and creative web design."
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
