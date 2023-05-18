import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './index.css'
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-violet-500 h-16 flex items-center justify-between px-6">
      <div className="text-white text-lg font-bold font-space">Tudu</div>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="block text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:block">
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-200 font-space">Home</Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-gray-200 font-space">Register</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-200 font-space">Login</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <>
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-violet-500 px-4 py-2 mb-7">
          <ul className="flex flex-col items-center space-y-4 ">
            <li>
            <Link to="/" className="text-white hover:text-gray-200 font-space">Home</Link>
            </li>
            <li>
            <Link to="/signup" className="text-white hover:text-gray-200 font-space">Register</Link>
            </li>
            <li>
            <Link to="/login" className="text-white hover:text-gray-200 font-space">Login</Link>
            </li>
          </ul>
        </div>
        
        </>
      )}
    </nav>
  );
};

export default Navbar;
