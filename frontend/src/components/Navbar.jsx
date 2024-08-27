import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
          <h1 className="text-white text-2xl sm:text-4xl font-bold">
            Bangladeshi
            <span className="text-lime-200 text-2xl sm:text-4xl font-bold">Handicrafts</span>
          </h1>
        </div>
        <ul className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0 w-full sm:w-auto justify-around sm:justify-end">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lime-200 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
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
                `text-lime-400 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
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
                  className="rounded-full w-8 h-8 sm:w-10 sm:h-10 border-2 border-white transition-transform transform hover:scale-105"
                />
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-lime-400 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-lg sm:text-xl font-bold ${isActive ? 'bg-blue-800' : 'hover:bg-blue-700'}`
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
    </nav>
  );
};

export default Navbar;
