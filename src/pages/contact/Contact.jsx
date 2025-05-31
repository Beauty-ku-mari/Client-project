
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
< >
 <section className="bg-[#1a1a1a] text-white  py-12 px-6" id="contact" >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-4">
            I'd love to hear from you! Whether you have a question, or just want to connect.
          </p>
          <p className="text-gray-400"><strong>Email:</strong> richasingh@example.com</p>
          <p className="text-gray-400"><strong>Phone:</strong> +91 98765 43210</p>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Your Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-800 hover:bg-purple-700 text-white py-3 px-6 rounded-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

</>
  
  );
};

export default Contact;
