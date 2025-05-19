import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@example.com?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.description}`;
    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-[#F2F3F7] py-16 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#8F6D9A] via-[#7F97C7] to-[#A0BFD8] bg-clip-text text-transparent tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-medium">
            I'm always open to collaborations, questions, or just a friendly
            hello!
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl transition-shadow duration-300 hover:shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-indigo-800 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-lg p-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#7F97C7]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-indigo-800 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-lg p-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#7F97C7]"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-lg font-semibold text-indigo-800 mb-2"
              >
                Message
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Type your message here..."
                value={formData.description}
                onChange={handleChange}
                rows="5"
                required
                className="w-full border border-slate-300 rounded-lg p-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#7F97C7]"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[#8F6D9A] to-[#7F97C7] text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
