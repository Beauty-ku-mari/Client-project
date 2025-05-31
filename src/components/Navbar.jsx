import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3 ml-18">
          <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
            <img
              src="/public/assets/image1.jpg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-bold">RICHA SINGH</span>
        </div>

        {/* Desktop Menu aligned to right */}
        <div className="hidden md:flex justify-end flex-1 pr-14">
          <ul className="flex space-x-6 font-medium">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#education" className="hover:text-gray-300">Educational Details</a></li>
            <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 px-6 font-medium bg-black">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#education" className="hover:text-gray-300">Educational Details</a></li>
          <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
