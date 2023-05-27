import React from "react";
import "../styles/projects.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import data from "../assets/data.json";

const Projects = () => {
  return (
    <div id="projects">
      <div className="section--header">
        <h1 className="section--heading">Projects</h1>
        <span className="section--slogan">Some of my recent work</span>
      </div>

      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt="" />
                <aside>
                  <h3 className="project--title">{i.title}</h3>
                  <p className="project--description">{i.description}</p>
                  <a className="project--btn" href={i.url} target={"blank"}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Projects;
