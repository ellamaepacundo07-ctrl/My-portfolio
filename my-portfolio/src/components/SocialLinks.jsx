import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section id="contact" className="social-links">
      <a href="https://linkedin.com/in/ellamaepacundo" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/ellamaepacundo07-ctrl" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="mailto:ellamaepacundo07@gmail.com"><FaEnvelope /></a>
    </section>
  );
}
