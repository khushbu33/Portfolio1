import React from "react";
import { ExternalLink } from "lucide-react";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Simple Calculator",
      description:
        "A responsive calculator web app that performs basic arithmetic operations with a clean, user-friendly interface. Built using HTML, CSS, and JavaScript, it supports both button and keyboard input for seamless interaction across devices.",
      link: "http://127.0.0.1:5501/CALCULATOR/cal.html",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Age Calculator",
      description:
        "An age calculator that calculates your age in years using a convenient calendar date picker. It offers a simple and accurate way to find your age based on your birthdate.",
      link: "http://127.0.0.1:5501/AgeCAL.html",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "MY Portfolio",
      description:
        "A basic personal portfolio website built with HTML and CSS, featuring my name, brief details, and a clean layout. It serves as a starting point for showcasing my growth in web development.",
      link: "http://127.0.0.1:5501/Portfolio.html",
      technologies: ["HTML", "CSS"],
    },
    {
      id: 4,
      title: "Customer Satisfactory Dashboard",
      description:
        "A Customer Satisfaction Dashboard created using SQL for data handling, Excel for preprocessing, and Power BI for interactive visualizations. NPM packages were utilized for managing dependencies and enhancing data integration workflows.",
      link: "https://www.linkedin.com/posts/khushbu-kumari-00476a295_salaahabrabesec-abesec-power-activity-7224058980124254209-XfBH?utm_source=share&utm_medium=member_android&rcm=ACoAAEd7TYQBdl1rHv8uc_syj4Dt43hIF-dGyH0",
      technologies: ["Excel", "SQL", "Power BI"],
    },
    {
      id: 5,
      title: "Website Of College Book Store",
      description:
        "A college bookstore website built using HTML, CSS, and JavaScript to display books with details and prices dynamically. It offers a responsive layout and interactive features for an enhanced user experience.",
      link: "http://127.0.0.1:5501/FRAME.html",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 6,
      title: "Glowing Bulb Control",
      description:
        "Click on any bulb below to toggle its glow ON or OFF. Watch the light come alive or go dark.",
      link: "http://127.0.0.1:5500/Khushbu/Bulb/Bulb.html",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-white to-[#E3E7F1] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            My Projects
          </h2>
          <p className="mt-5 text-xl text-gray-700 font-semibold max-w-xl mx-auto">
            A showcase of projects that highlight my skills and growth in
            development.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 border border-transparent hover:border-purple-600 p-8 flex flex-col justify-between"
              aria-label={`Project: ${project.title}`}
            >
              <div>
                <h3 className="text-2xl font-bold text-[#4A3D58] mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                  aria-label={`View project ${project.title} on new tab`}
                >
                  View Project
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
