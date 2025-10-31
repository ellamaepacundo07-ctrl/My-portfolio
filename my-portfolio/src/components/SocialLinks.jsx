import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://linkedin.com/in/ellamaepacundo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/ellamaepacundo07-ctrl"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:ellamaepacundo07@gmail.com"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialLinks;
