import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>ELLA PACUNDO</h1>
        <p>Frontend Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm a frontend developer trainee who loves turning designs into
          real, interactive websites. I'm comfortable working with React and
          JavaScript, and I really enjoy building clean, responsive interfaces
          that work well on any device.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project One</h3>
            <p>Library.</p>
          </div>
          <div className="project">
            <h3>Project Two</h3>
            <p>A React web app for house inventory.</p>
          </div>
          <div className="project">
            <h3>Project Three</h3>
            <p>A responsive portfolio website built with HTML/CSS/JS.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: ellamaepacundo07@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/ellamaepacundo</p>
      </section>
    </div>
  );
}

export default App;
