import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import me from "../assets/logo.png";
import "../styles/hero.css";

const Hero = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div id="hero">
      <section className="hero--section">
        <div className="hero--text">
          <motion.h1 {...animations.h1}>
            Hi There, <br /> I'm Amir Hussain
          </motion.h1>
          <Typewriter
            options={{
              strings: ["Developer", "Designer", "Content Creator"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typerwriterpara",
            }}
          />
        </div>
        <div className="hero--image">
          <motion.img
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            src={me}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
