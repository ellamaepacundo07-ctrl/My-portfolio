import React from "react";
import { FaCode, FaDatabase, FaPalette } from "react-icons/fa";

export default function Project() {
  const projects = [
    {
      title: "Digital Library System",
      category: "Front-End Development",
      icon: <FaCode />,
      description:
        "A searchable digital library designed to organize and streamline access to reading materials.",
      link: "https://drive.google.com/file/d/1xORtkC3QQUqgxZKVYmkBlFqMen6tRotA/view?usp=drive_link",
    },
    {
      title: "Home Inventory Management App",
      category: "Front-End Development",
      icon: <FaCode />,
      description:
        "A React-based web application for tracking household inventory with a user-friendly interface.",
      link: "https://drive.google.com/file/d/1okLtbdv5PUGy_L8e4SvvdeYsmfd280sr/view?usp=drive_link",
    },
    {
      title: "Data Entry & Record Management",
      category: "Data Entry",
      icon: <FaDatabase />,
      description:
        "Process resident data, health records, payroll documents, and inventory lists with accuracy and speed.",
      link: "#",
    },
    {
      title: "Graphic Design Collection",
      category: "Design / Creative",
      icon: <FaPalette />,
      description:
        "Created posters, social media graphics, and branded materials using Canva and Photoshop.",
      link: "#",
    },
    {
      title: "Photography Portfolio",
      category: "Photography",
      icon: <FaPalette />,
      description:
        "Portrait, event, and product photography used for branding and marketing purposes.",
      link: "#",
    },
  ];

  return (
    <section id="work" className="work-section">
      <h2 className="work-title">My Work</h2>

      <div className="project-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <span className="project-category">{p.category}</span>
            <p>{p.description}</p>

            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <button className="project-btn">View Sample</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
