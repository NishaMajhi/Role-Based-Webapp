import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-blue-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-200">
              About Me
            </h3>
            <p className="text-lg text-gray-300">
              I’m a passionate software engineer who loves to build scalable and
              efficient applications. Let’s connect and collaborate on exciting
              projects.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-200">
              Quick Links
            </h3>
            <ul className="text-lg space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-300 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-indigo-300 transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-indigo-300 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-indigo-300 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-200">
              Follow Me
            </h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a
                href="https://github.com/nishamajhi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-300 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nishamajhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-300 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/nishamajhi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-300 transition-all duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Nisha Majhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
