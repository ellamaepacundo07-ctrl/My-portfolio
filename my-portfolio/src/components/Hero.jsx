import React from "react";
import profileImage from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-image">
        <img src={profileImage} alt="Ella Pacundo" />
      </div>
      <div className="hero-text">
        <h1>Hello, I'm Ella.</h1>
        <h2>Front-End Developer • Data Entry Assistant • Graphic Design</h2>

        <p>
          I’m a tech-savvy, detail-oriented professional with experience in
          front-end development, technical support, data encoding, and digital
          design. I specialize in handling administrative tasks with accuracy
          and efficiency while supporting teams through reliable communication
          and organized workflow management.
        </p>

        <button
          className="read-more"
          onClick={() => {
            document
              .getElementById("work")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore My Work
        </button>
      </div>
    </section>
  );
}
