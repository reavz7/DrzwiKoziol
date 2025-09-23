"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, Menu, X, FileText } from "lucide-react"

const katalogi = [
  {
    id: 1,
    nazwa: "Drzwi Kozioł Zewnętrzne",
    firma: "Kozioł",
    obrazUrl: "pdf_photos/koziol_logo.png",
    pdfUrl: "Drzwi Kozioł Zewnętrzne.pdf",
  },
  {
    id: 2,
    nazwa: "Barański Premium Zewnętrzne 2025",
    firma: "Barański",
    obrazUrl: "pdf_photos/baranski_premium.jpg",
    pdfUrl: "/Barański Drzwi - Katalog Drzwi Zewnętrznych Premium 2025 - edycja 1 - 2025.04.22.pdf",
  },
  {
    id: 3,
    nazwa: "Barański Premium Wewnętrzne 2025",
    firma: "Barański",
    obrazUrl: "pdf_photos/baranski_wewnetrzne.png",
    pdfUrl: "/Katalog Baranski Premium wewnetrzne 2025_05_20 wer6 (1).pdf",
  },
  {
    id: 4,
    nazwa: "OPTIMO 2025",
    firma: "Barański",
    obrazUrl: "pdf_photos/optimo.png",
    pdfUrl: "/Katalog OPTIMO 2025_02_12 wer4 (2).pdf",
  },
  {
    id: 5,
    nazwa: "SMART 2025",
    firma: "Barański",
    obrazUrl: "pdf_photos/smart.png",
    pdfUrl: "/Katalog SMART - 2025_04_15 wer7.pdf",
  },
  {
    id: 6,
    nazwa: "Admar drzwi",
    firma: "Admar",
    obrazUrl: "pdf_photos/admar-pages.jpg",
    pdfUrl: "/admar.pdf",
  },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const searchRef = useRef(null)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => location.pathname === path

  const filteredKatalogi = katalogi.filter(
    (katalog) =>
      katalog.nazwa.toLowerCase().includes(searchQuery.toLowerCase()) ||
      katalog.firma.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    setShowDropdown(value.length > 0 || isSearchFocused)
  }

  const handleSearchFocus = () => {
    setIsSearchFocused(true)
    setShowDropdown(true)
  }

  const handleSearchBlur = () => {
    // Delay hiding dropdown to allow clicking on items
    setTimeout(() => {
      setIsSearchFocused(false)
      if (searchQuery.length === 0) {
        setShowDropdown(false)
      }
    }, 200)
  }

  const handleCatalogSelect = (katalog) => {
    window.open(katalog.pdfUrl, "_blank")
    setSearchQuery("")
    setShowDropdown(false)
    setIsSearchFocused(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false)
        setIsSearchFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
                  isActive("/kontakt")
                    ? "text-yellow-600 bg-yellow-50 rounded-lg"
                    : "text-gray-900 hover:text-yellow-600"
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
            <div className="relative hidden sm:block" ref={searchRef}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Wyszukaj katalogi..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                className="block w-full pl-10 pr-3 py-2 border rounded-2xl leading-5 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors bg-white border-gray-300 text-gray-900 focus:placeholder-gray-400"
              />

              {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50"
                >
                  {searchQuery.length === 0 ? (
                    <div className="p-4">
                      <p className="text-sm text-gray-500 mb-3">Dostępne katalogi:</p>
                      {katalogi.map((katalog) => (
                        <div
                          key={katalog.id}
                          onClick={() => handleCatalogSelect(katalog)}
                          className="flex items-center p-3 hover:bg-gray-50 cursor-pointer rounded-md transition-colors"
                        >
                          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <FileText className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{katalog.nazwa}</p>
                            <p className="text-xs text-gray-500">{katalog.firma}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : filteredKatalogi.length > 0 ? (
                    <div className="p-2">
                      {filteredKatalogi.map((katalog) => (
                        <div
                          key={katalog.id}
                          onClick={() => handleCatalogSelect(katalog)}
                          className="flex items-center p-3 hover:bg-gray-50 cursor-pointer rounded-md transition-colors"
                        >
                          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <FileText className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{katalog.nazwa}</p>
                            <p className="text-xs text-gray-500">{katalog.firma}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center">
                      <p className="text-sm text-gray-500">Nie znaleziono katalogów</p>
                    </div>
                  )}
                </div>
              )}
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
                to="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive("/kontakt")
                    ? "text-yellow-600 bg-yellow-50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Kontakt
              </Link>

              <div className="px-3 py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Wyszukaj katalogi..."
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
