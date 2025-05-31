import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-6">

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
</div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-400 text-base leading-relaxed">
           I am a dedicated <strong>Panchayat Secretary</strong> committed to driving meaningful change at the grassroots level.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-base text-gray-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400 text-base">Email: richasingh@example.com</p>
          <p className="text-gray-400 text-base">Phone: +91 98765 43210</p>
          <div className="flex justify-center md:justify-start gap-5 mt-5 text-3xl text-gray-400">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="mailto:richasingh@example.com" className="hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Richa Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

