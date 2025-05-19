import React from "react";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-900 tracking-tight">
            Hi, I'm Khushbu 👋
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
          <h2>
            {" "}
            <b>I am a B.Tech Computer Science student.</b>
          </h2>
          <p className="text-xl text-slate-600 mt-4 font-medium">
            <marquee>
              {" "}
              Hi, I'm a passionate about exploring technology and building
              innovative solutions.
            </marquee>
          </p>
        </div>

        {/* Profile image */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8F6D9A] via-[#7F97C7] to-[#A0BFD8] rounded-full blur-lg opacity-20"></div>
          <img
            src="https://ik.imagekit.io/cyp9fvhf5/khushu3.png?updatedAt=1747687910252" // Add your image URL here
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional background */}
        <div className="bg-white shadow-md p-6 rounded-md text-center max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-[#4A3D55]">
            Student
          </h1>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105">
            <p className="text-lg text-gray-600">
              I began my journey as a B.Tech student with a strong passion for
              software development and problem-solving. I'm currently refining
              my skills through hands-on projects and continuous learning.
            </p>
            <p className="text-lg text-gray-600">
              Through hands-on practice and consistent effort, I’ve grown
              confident in using technology to solve real problems. I’m eager to
              keep growing and contribute wherever I can.
              <p>
                <b>
                  "Live happy, do all good, learn, fall, and be happy again."
                </b>
              </p>
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
              Full Stack Enthusiast{" "}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Currently in my fourth semester of B.Tech CSE, I’m deeply focused
              on building real-world skills in full stack development. From
              crafting clean UIs to working with backend logic, I enjoy creating
              user-centric applications using modern tools like HTML, CSS,
              JavaScript, and React.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
              Focused Learning Journey
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              My academic and self-learning path is all about building
              consistency.I manage my academics while consistently working on
              coding projects and refining my problem-solving skills through
              regular practice. I’m preparing actively for upcoming internships
              to put my skills into action.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
              Vision Ahead
            </h2>

            <p className="text-lg text-gray-600 mt-4">
              I aspire to become a capable full stack developer and eventually
              an entrepreneur. My goal is to gain experience through
              internships, contribute to impactful projects, and one day lead
              tech-driven solutions that help people and solve real-world
              problems.
            </p>
          </div>
        </div>

        {/* Professional Interests */}
        <div className="bg-white p-8 shadow-lg md-16">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4">
            Beyond the Code
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto ">
            <div className="space-y-3">
              <h3 className="text-2xl text-[#4A3D58] font-semibold">
                Open Source Explorer
              </h3>
              <p className="text-lg text-gray-600">
                I'm gradually exploring open source contributions to understand
                collaborative coding practices and get exposure to real project
                structures. It’s helping me learn how teams work and how
                scalable applications are built.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl text-[#4A3D58] font-semibold">
                Hackathon Participant
              </h3>
              <p className="text-lg text-gray-600">
                Though I’ve just started exploring hackathons, I’m excited to
                participate more and experience the fast-paced environment where
                creativity and coding come together to solve problems.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-[#4A3D58] font-semibold">
                Active Community Member
              </h3>
              <p className="text-lg text-gray-600">
                I stay connected with the tech world through LinkedIn
                communities and platforms like CodeChef and LeetCode. These
                resources keep me motivated, expose me to valuable
                opportunities, and allow me to learn directly from others in the
                field.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl text-[#4A3D58] font-semibold">
                Self-driven Project Builder
              </h3>
              <p className="text-lg text-gray-600">
                I often build small projects to apply what I learn — whether
                it’s practicing frontend layouts or working with APIs. These
                hands-on experiences help me strengthen core concepts and try
                out new technologies freely.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl text-[#4A3D58] font-semibold">
                Content and Documentation Creation
              </h3>
              <p className="text-lg text-gray-600">
                I'm a member of Salaah - The Mentor community. I actively work
                in the content department to create caption posts, scripts, etc.
              </p>
            </div>
            <div>
              {/* New Section for Poetry Writing */}
              <h3 className="text-2xl text-[#4A3D58] font-semibold mt-6">
                Poetry Writing
              </h3>
              <p className="text-lg text-gray-600 mt-4">
                I am also a passionate writer of poetry, expressing emotions and
                stories through words and verses.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#8F6D9A] py-12 via-[#7F97C7] to-[#A0BFD8] py-12 px-5 text-white rounded-xl text-center">
          <h3 className="text-2xl text-white font-semibold mb-5">
            Continuous Learning
          </h3>
          <p className="text-xl text-white mx-auto mb-5">
            As a second-year student, I am dedicated to continuously expanding
            my knowledge by exploring emerging technologies and sharpening my
            problem-solving abilities. I thrive on hands-on projects, engaging
            online courses, and collaborating with fellow tech enthusiasts to
            deepen my understanding and grow my skills.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-indigo-700 border border-indigo-300 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 hover:text-white hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
