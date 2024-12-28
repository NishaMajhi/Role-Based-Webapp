"use client";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    // Here you can implement the actual submission logic
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-100 text-gray-900 py-12 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Contact Us Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold text-indigo-700">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Have any questions or just want to say hello? Reach out to us and
            we'll get back to you as soon as we can.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-800"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-800"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={5}
                required
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
            Other Ways to Reach Me
          </h2>
          <p className="text-lg text-gray-700">
            If you prefer to get in touch via other channels, you can also find
            me on the following platforms:
          </p>

          <div className="flex justify-center mt-6 space-x-6 text-2xl text-indigo-600">
            <a
              href="https://github.com/nishamajhi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nishamajhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/nishamajhi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-700 transition-all duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
