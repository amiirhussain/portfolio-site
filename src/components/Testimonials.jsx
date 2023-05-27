import React from "react";
import "../styles/testimonials.css";
// import testImage from "../assets/logo.png";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "Sed aliquam, elit vel commodo malesuada, odio dolor finibus arcu, id congue diam elit et augue.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      testimonial:
        "Nulla luctus, odio ac efficitur interdum, mauris purus ullamcorper ipsum, non placerat risus tortor eu turpis.",
    },
  ];

  return (
    <div className="testimonials">
      <div className="section--header">
        <h1 className="section--heading">Testimonials</h1>
        <span className="section--slogan">What my clients say</span>
      </div>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img
              className="testimonial-image"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Testimonial"
            />
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
