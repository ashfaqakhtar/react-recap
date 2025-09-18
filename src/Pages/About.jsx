import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-white to-gray-50">
      <div className="text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span className="text-orange-700">Us</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We are passionate about building modern web experiences with React and Tailwind CSS.  
          Our goal is to deliver fast, clean, and responsive designs that users love.
        </p>
      </div>
    </div>
  );
}

export default About;
