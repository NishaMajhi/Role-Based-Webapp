"use client";

import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-blue-100 text-gray-900 min-h-screen flex flex-col justify-between py-12 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold leading-tight text-indigo-700">
            Hello, I&apos;m <span className="text-blue-600">Nisha Majhi</span>
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            I&apos;m a Software Engineer with 2.5+ years of experience,
            passionate about building impactful software.
          </p>
        </div>

        {/* Animated SVG Background */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,213.3C672,192,768,128,864,101.3C960,75,1056,85,1152,128C1248,171,1344,235,1392,277.3C1440,320,1440,320,1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Education Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10 relative z-10">
          <h2 className="text-3xl font-semibold text-indigo-700">Education</h2>
          <ul className="list-inside list-disc mt-4 text-lg text-gray-800">
            <li>
              <strong>10th Grade:</strong> 87%
            </li>
            <li>
              <strong>12th Grade:</strong> 78%
            </li>
            <li>
              <strong>B.Tech:</strong> 8.2 CGPA from Graphic Era University,
              Dehradun
            </li>
          </ul>
        </div>

        {/* Professional Journey Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10 relative z-10">
          <h2 className="text-3xl font-semibold text-indigo-700">
            Professional Journey
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            I am currently working as a Software Engineer specializing in
            full-stack development. With expertise in JavaScript, React,
            Node.js, and more, I build scalable and efficient applications.
            <br /> <br />I am constantly learning and adapting to new
            technologies and frameworks to ensure I stay ahead in this
            ever-evolving field.
          </p>
        </div>

        {/* Hobbies & Interests Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10 relative z-10">
          <h2 className="text-3xl font-semibold text-indigo-700">
            Hobbies & Interests
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Outside of work, I enjoy listening to music, reading books, and
            exploring new ideas. Whether it&apos;s diving into the latest tech
            trends or enjoying a good novel, I believe in continuously expanding
            my horizons.
            <br /> <br />
            Music helps me relax, while reading enhances my creativity.
            Traveling and discovering new cultures also enrich my understanding
            of the world.
          </p>
        </div>

        {/* Something More Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10 relative z-10">
          <h2 className="text-3xl font-semibold text-indigo-700">
            Something More
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            As a passionate problem solver, I love tackling complex challenges.
            I&apos;m always looking for new ways to optimize processes and build
            solutions that make a real-world impact.
            <br /> <br />
            Whether it&apos;s contributing to open-source projects or
            collaborating with a team, I am always up for new opportunities that
            help me grow as a developer and individual.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="mailto:nishamajhi0@gmail.com"
            className="px-8 py-3 text-lg font-semibold text-blue-900 bg-yellow-200 rounded-full shadow-lg transition-all hover:bg-yellow-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
