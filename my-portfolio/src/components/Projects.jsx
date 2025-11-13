import React from "react";

const projects = [
  { title: "Project One", description: "Library." },
  { title: "Project Two", description: "React web app for house inventory." },
  { title: "Project Three", description: "Responsive portfolio website with HTML/CSS/JS." },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <div className="project" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
