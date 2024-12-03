// Navbar.js
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling to detect when navbar should change style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-200 text-black shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          ShopMate
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Shop", "About", "Contact", "Login"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`transition ${
                  isScrolled ? "hover:text-gray-600" : "hover:text-gray-300"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Search and Dropdown */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className={`rounded-md py-1 px-3 transition border ${
                isScrolled ? "border-gray-400 text-black" : "border-transparent"
              }`}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <i
                className={`fas fa-search ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              ></i>
            </span>
          </div>

          {/* Dropdown Menu */}
          <div className="relative group">
            <button className="relative focus:outline-none">
              <i
                className={`fas fa-bars ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              ></i>
            </button>
            <ul className="absolute right-0 hidden group-hover:block bg-white text-gray-800 shadow-lg rounded-md py-2 w-40">
              {["Profile", "Orders", "Settings", "Logout"].map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
