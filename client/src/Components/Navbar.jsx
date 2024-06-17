import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">SPMS</Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`fixed top-0 right-0 h-full bg-gray-800 transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } w-4/5 lg:relative lg:w-auto lg:flex lg:items-center lg:transform-none`}
        >
          <div className="flex justify-end p-4 lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <ul className="text-white flex flex-col items-center mt-10 space-y-6 lg:mt-0 lg:flex-row lg:space-y-0 lg:space-x-4 lg:mr-4">
            <li className="hover:bg-gray-700 px-2 py-1 rounded">
              <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>
                Home
              </Link>
            </li>

            <li className="hover:bg-gray-700 px-2 py-1 rounded">
              <Link
                to="/login"
                className="hover:text-gray-400"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
