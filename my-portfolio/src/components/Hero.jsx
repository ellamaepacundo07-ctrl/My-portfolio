import React from "react";
import profileImage from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-image">
        <img src={profileImage} alt="Ella Pacundo" />
      </div>
      <div className="hero-text">
        <h1>Hej.</h1>
        <h1>It's her.</h1>
        <p>
          Portraits to empower women. Headshots and personal branding photography by Ella Pacundo.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </section>
  );
}
