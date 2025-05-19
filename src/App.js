import React from "react";
import About from "./components/about";
import Navbar from "./components/Navbar";
import Skill from "./components/skill"; // Ensure correct file casing
import Project from "./components/project"; // Imported but not used
import Contact from "./components/contact";
import Footer from "./components/footer";
export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
