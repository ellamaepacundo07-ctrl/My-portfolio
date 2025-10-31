import React from "react";

function Projects() {
  const projectData = [
    {
      title: "Project One",
      description: "Library.",
    },
    {
      title: "Project Two",
      description: "A React web app for house inventory.",
    },
    {
      title: "Project Three",
      description: "A responsive portfolio website built with HTML/CSS/JS.",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
