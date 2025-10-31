import React from "react";
import "./App.css";
import profileImage from "./assets/profile.jpg"; 

function App() {
  return (
    <div className="hero-container">
      {/* Left side - image */}
      <div className="hero-image">
        <img src={heroImage} alt="Portrait" />
      </div>

      {/* Right side - text content */}
      <div className="hero-text">
        <h1>Hej.</h1>
        <h1>It's her.</h1>
        <p>
          Portraits to empower women. This is my mission.
          <br />
          Headshots and personal branding photography by Ella Pacundo.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
}

export default App;
