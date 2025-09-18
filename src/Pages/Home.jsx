import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-white to-orange-50">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-orange-700">MySite</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A simple React + Tailwind starter page to get you going fast.
        </p>
        <NavLink
          to="/services"
          className="px-6 py-3 bg-orange-700 text-white font-medium rounded-lg shadow-md hover:bg-orange-800 transition duration-300"
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
