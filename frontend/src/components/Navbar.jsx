import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the mobile menu toggle

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
          <h1 className="text-white text-2xl sm:text-4xl font-bold">Bangladeshi<span className="text-lime-200">Handicrafts</span></h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex items-center space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lime-200 px-3 py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-lime-400 px-3 py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
                }
              >
                Blog
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink
                  to="/profile"
                  className="flex items-center"
                >
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User Profile"
                    className="rounded-full w-10 h-10 border-2 border-white transition-transform transform hover:scale-105"
                  />
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `text-lime-400 px-3 py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
            <li>
              <ThemeToggle /> {/* Add the ThemeToggle component here */}
            </li>
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lime-200 px-3 py-2 rounded-md text-xl font-bold ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
                }
                end
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-lime-400 px-3 py-2 rounded-md text-xl font-bold ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
                }
                onClick={toggleMobileMenu}
              >
                Blog
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink
                  to="/profile"
                  className="flex items-center"
                  onClick={toggleMobileMenu}
                >
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User Profile"
                    className="rounded-full w-10 h-10 border-2 border-white transition-transform transform hover:scale-105"
                  />
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `text-lime-400 px-3 py-2 rounded-md text-xl font-bold ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
                  }
                  onClick={toggleMobileMenu}
                >
                  Login
                </NavLink>
              </li>
            )}
            <li>
              <ThemeToggle /> {/* Add the ThemeToggle component here */}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
