import React from "react";
import resumePDF from "../assets/Ellamae_Pacundo_Resume.pdf";
import { FaPhone, FaEnvelope, FaGraduationCap, FaBriefcase, FaTools } from "react-icons/fa";

export default function Information() {
  return (
    <section id="information" className="information">
      <h2>About Me</h2>
      <div className="info-cards">

        <div className="info-card">
          <h3><FaPhone /> Contact</h3>
          <p>Ellamae Cantilado Pacundo</p>
          <p>Kitcharao, Agusan del Norte • 8609</p>
          <p>Email: <a href="mailto:ellamaepacundo07@gmail.com">ellamaepacundo07@gmail.com</a></p>
          <p>Phone: 0946-104-8881</p>
        </div>

        <div className="info-card">
          <h3><FaGraduationCap /> Education</h3>
          <ul>
            <li>Caraga Institute of Technology – Teacher Certificate (2025-2026)</li>
            <li>Northeastern Mindanao Colleges – BSIT (2021-2025), Associate Computer Tech (2021-2023)</li>
            <li>Kitcharao National High School – Senior High STEM (2019-2021), Junior High (2015-2019)</li>
          </ul>
        </div>

        <div className="info-card">
          <h3><FaBriefcase /> Experience</h3>
          <ul>
            <li>Front-End Developer Trainee – UI/UX, coding, version control</li>
            <li>Student Intern – Payroll & inventory management</li>
            <li>Data Entry Assistant – Resident data, health records</li>
            <li>Technical Support – Troubleshooting & minimizing downtime</li>
            <li>Graphic Designer – Posters & presentations</li>
            <li>Photographer – Event, portrait, product photography</li>
            <li>Affiliate Marketer & Online Seller – Product promotion & sales</li>
          </ul>
        </div>

        <div className="info-card">
          <h3><FaTools /> Skills</h3>
          <ul>
            <li>HTML, CSS, JavaScript, Python</li>
            <li>Technical Support & Troubleshooting</li>
            <li>Document Handling & Data Management</li>
            <li>Graphic Design & Office / Google Workspace</li>
            <li>Problem-Solving & Attention to Detail</li>
            <li>Teamwork & Time Management</li>
          </ul>
        </div>

      </div>

      <div className="information-download">
        <a href={resumePDF} download="Ellamae_Pacundo_Resume.pdf">
          <button className="download-btn">Download Resume</button>
        </a>
      </div>
    </section>
  );
}
