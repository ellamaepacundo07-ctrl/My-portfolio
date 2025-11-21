import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Information from "./components/Information";
import SocialLinks from "./components/SocialLinks";
import "./App.css";

export default function App() {
  // 🔥 Fade-in on scroll animation
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Information />
      <SocialLinks />
    </div>
  );
}
