import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Information from "./components/Information";
import SocialLinks from "./components/SocialLinks";
import "./App.css";

export default function App() {
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
