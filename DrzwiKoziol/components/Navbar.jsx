import React, { useState } from "react";
import { Search, Heart, Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode
    ? "bg-gray-900 text-white shadow-lg border-gray-700"
    : "bg-white text-gray-900 shadow-sm border-gray-200";

  return (
    <nav className={`${themeClasses} border-b transition-colors duration-200 lg:pl-26 sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-26 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 lg:pr-20">
            <div className="w-16 h-16 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center">
             <img src='RGB/JPG/1FAVICON1.jpg' className="text-white font-bold text-sm"/>
            </div>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-900 hover:text-gray-700"
              } px-3 py-2 text-sm font-semibold transition-colors`}
            >
              Strona główna
            </a>
            <a
              href="#"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-900 hover:text-gray-700"
              } px-3 py-2 text-sm font-semibold transition-colors`}
            >
              Oferta
            </a>
            <a
              href="#"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-900 hover:text-gray-700"
              } px-3 py-2 text-sm font-semibold transition-colors`}
            >
              Realizacje
            </a>
            <a
              href="#"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-900 hover:text-gray-700"
              } px-3 py-2 text-sm font-semibold transition-colors`}
            >
              O nas
            </a>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search - Hidden on small screens */}
            <div className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                  className={`h-4 w-4 ${
                    isDarkMode ? "text-gray-400" : "text-gray-400"
                  }`}
                />
              </div>
              <input
                type="text"
                placeholder="Wyszukaj"
                className={`block w-full pl-10 pr-3 py-2 border rounded-2xl leading-5 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-600 text-white focus:placeholder-gray-300"
                    : "bg-white border-gray-300 text-gray-900 focus:placeholder-gray-400"
                }`}
              />
            </div>

            {/* Wishlist */}
            <button
              className={`p-2 rounded-full transition-colors ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              }`}
            >
              <Heart className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              }`}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 border-t ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <a
                href="#"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Strona główna
              </a>
              <a
                href="#"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Oferta
              </a>
              <a
                href="#"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Realizacje
              </a>
              <a
                href="#"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                O nas
              </a>

              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search
                      className={`h-4 w-4 ${
                        isDarkMode ? "text-gray-400" : "text-gray-400"
                      }`}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Wyszukaj"
                    className={`block w-full pl-10 pr-3 py-2 border rounded-2xl leading-5 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-600 text-white focus:placeholder-gray-300"
                        : "bg-white border-gray-300 text-gray-900 focus:placeholder-gray-400"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;