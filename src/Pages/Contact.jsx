import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-50 via-white to-orange-100">
      <div className="text-center px-6 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in <span className="text-orange-700">Touch</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Have questions or want to work with us? We’d love to hear from you.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-700 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-700 outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-700 outline-none"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-orange-700 text-white font-medium rounded-lg shadow-md hover:bg-orange-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
