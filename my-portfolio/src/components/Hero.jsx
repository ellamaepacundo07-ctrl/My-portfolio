import React from "react";
import profileImage from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero-container fade-in">
      <div className="hero-image">
        <img src={profileImage} alt="Ella Pacundo" />
      </div>

      <div className="hero-text">
        <h1>Hello, I'm Ella.</h1>
        <h2>Front-End Developer • Data Entry Assistant • Graphic Designer</h2>

        <p>
          I’m a detail-oriented and tech-driven professional specializing in
          front-end development, data encoding, digital design, and technical
          assistance. I love building clean, minimal, and functional digital
          experiences.
        </p>

        <button
          className="read-more"
          onClick={() =>
            document
              .getElementById("work")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore My Work
        </button>
      </div>
    </section>
  );
}
