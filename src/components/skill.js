import { useState } from "react";

export default function Skill() {
  const [skill, setSkill] = useState("technical");

  const skills = {
    technical: [
      { name: "HTML, CSS", prof: 90, icon: "🧱" },
      { name: "JavaScript", prof: 70, icon: "✨" },
      { name: "React", prof: 65, icon: "⚛️" },
      { name: "Power BI", prof: 70, icon: "📊" },
      { name: "SQL / Databases", prof: 65, icon: "🗄️" },
    ],
    soft: [
      { name: "Leadership", prof: 80, icon: "👑" },
      { name: "Communication Skills", prof: 90, icon: "🗣️" },
      { name: "Time Management", prof: 80, icon: "⏳" },
      { name: "Problem Solving", prof: 75, icon: "🧩" },
      { name: "Teamwork", prof: 85, icon: "🤝" },
      { name: "Adaptability", prof: 80, icon: "🌿" },
      { name: "Critical Thinking", prof: 70, icon: "🧠" },
    ],
  };

  const getProfLabel = (prof) => {
    if (prof >= 90) return "Expert";
    if (prof > 75) return "Advanced";
    if (prof >= 60) return "Intermediate";
    return "Beginner";
  };

  const getProgressColor = (prof) => {
    if (prof >= 90) return "from-purple-600 to-purple-400";
    if (prof > 75) return "from-indigo-600 to-indigo-400";
    if (prof >= 60) return "from-blue-500 to-blue-300";
    return "from-gray-400 to-gray-300";
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-white to-[#e6ecff] py-24 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600 bg-clip-text text-transparent drop-shadow-md select-none">
            My Skills
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed tracking-wide">
            💻 As a passionate full stack developer in training, I’m sharpening
            my coding skills through projects and coursework. 🚀 Focused on
            building dynamic web apps using modern tools and technologies. 🎯
            Dedicated to continuous learning and creating real-world solutions
            that make an impact.
          </p>
        </header>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-8 mb-20">
          {["technical", "soft"].map((type) => (
            <button
              key={type}
              onClick={() => setSkill(type)}
              className={`px-10 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400
                ${
                  skill === type
                    ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white shadow-2xl hover:brightness-105"
                    : "bg-white text-gray-600 hover:text-indigo-600 hover:shadow-md"
                }`}
              aria-pressed={skill === type}
              aria-label={`Show ${
                type === "technical" ? "Technical" : "Soft"
              } Skills`}
            >
              {type === "technical" ? "Technical Skills" : "Soft Skills"}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills[skill].map(({ name, prof, icon }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-[0_8px_15px_rgba(99,102,241,0.1)] p-8 flex flex-col justify-between hover:shadow-[0_12px_25px_rgba(99,102,241,0.2)] transition-shadow duration-400"
              aria-label={`${name} skill proficiency`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">{icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 select-text">
                  {name}
                </h3>
              </div>
              <div
                className="relative w-full h-5 rounded-full bg-gray-200 overflow-hidden shadow-inner"
                role="progressbar"
                aria-valuenow={prof}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${name} proficiency level`}
              >
                <div
                  className={`absolute top-0 left-0 h-5 rounded-full bg-gradient-to-r ${getProgressColor(
                    prof
                  )} transition-all duration-700 ease-in-out`}
                  style={{ width: `${prof}%` }}
                />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-600 tracking-wide">
                Proficiency:{" "}
                <span className="font-semibold text-gray-800">
                  {getProfLabel(prof)}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
