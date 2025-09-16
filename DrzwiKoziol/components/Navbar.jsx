"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white text-gray-900 shadow-sm border-gray-200 border-b transition-colors duration-200 sticky top-0 z-[9999]">
       <div className="flex items-center justify-center">
        <img src="RGB/JPG/1LOGO CZERN1.jpg" className="h-10 w-auto mb-0 pb-0" alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center justify-center p-4 lg:px-22">
            <Link to="/" className="w-16 h-16 lg:w-16 lg:h-16 bg-black rounded-full flex items-center justify-center">
              <img src="RGB/JPG/1FAVICON1.jpg" className="text-white font-bold" alt="Logo" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 group ${
                  isActive("/") ? "text-yellow-600 bg-yellow-50 rounded-lg" : "text-gray-900 hover:text-yellow-600"
                }`}
              >
                Strona główna
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-600 transition-all duration-300 transform -translate-x-1/2 ${
                    isActive("/") ? "w-0" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                to="/oferta"
                className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 group ${
                  isActive("/oferta")
                    ? "text-yellow-600 bg-yellow-50 rounded-lg"
                    : "text-gray-900 hover:text-yellow-600"
                }`}
              >
                Oferta
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-600 transition-all duration-300 transform -translate-x-1/2 ${
                    isActive("/oferta") ? "w-0" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                to="/realizacje"
                className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 group ${
                  isActive("/realizacje")
                    ? "text-yellow-600 bg-yellow-50 rounded-lg"
                    : "text-gray-900 hover:text-yellow-600"
                }`}
              >
                Realizacje
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-600 transition-all duration-300 transform -translate-x-1/2 ${
                    isActive("/realizacje") ? "w-0" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <Link
                to="/kontakt"
                className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 group ${
                  isActive("/kontakt") ? "text-yellow-600 bg-yellow-50 rounded-lg" : "text-gray-900 hover:text-yellow-600"
                }`}
              >
                Kontakt
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-600 transition-all duration-300 transform -translate-x-1/2 ${
                    isActive("/kontakt") ? "w-0" : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center justify-center space-x-2 lg:space-x-1">
            {/* Search - Hidden on small screens */}
            <div className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Wyszukaj"
                className="block w-full pl-10 pr-3 py-2 border rounded-2xl leading-5 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors bg-white border-gray-300 text-gray-900 focus:placeholder-gray-400"
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md transition-colors text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive("/") ? "text-yellow-600 bg-yellow-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Strona główna
              </Link>
              <Link
                to="/oferta"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive("/oferta")
                    ? "text-yellow-600 bg-yellow-50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Oferta
              </Link>
              <Link
                to="/realizacje"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive("/realizacje")
                    ? "text-yellow-600 bg-yellow-50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Realizacje
              </Link>
              <Link
                to="/o-nas"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive("/o-nas")
                    ? "text-yellow-600 bg-yellow-50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                O nas
              </Link>

              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Wyszukaj"
                    className="block w-full pl-10 pr-3 py-2 border rounded-2xl leading-5 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors bg-white border-gray-300 text-gray-900 focus:placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
