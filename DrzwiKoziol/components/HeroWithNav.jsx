import React, { useState, useEffect } from 'react';
import { Search, Heart, User, Menu, X } from 'lucide-react';

const HeroWithNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Strona główna', href: '#', active: true },
    { label: 'Oferta', href: '#oferta' },
    { label: 'Realizacje', href: '#realizacje' },
    { label: 'O nas', href: '#o-nas' }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-green-400 to-yellow-400"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate, glow ${particle.duration * 2}s ease-in-out ${particle.delay}s infinite`
              }}
            />
          ))}
        </div>

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DK</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      item.active
                        ? 'text-gray-900 border-b-2 border-gray-900'
                        : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Wyszukaj"
                  className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                <User className="w-4 h-4" />
                <span className="text-sm">Konto</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    item.active
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-16">
        <div 
          className="text-center px-4 max-w-4xl mx-auto transform transition-transform duration-1000"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            DRZWI KOZIOŁ
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 leading-relaxed">
            Przekrocz próg,<br />
            odkryj nowe przestrzenie
          </p>

          {/* Component label */}
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Component
            </span>
          </div>

          {/* CTA Button */}
          <button className="group relative inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Przeglądaj ofertę</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Przewiń w dół</span>
          <div className="w-0.5 h-8 bg-white/40 animate-pulse"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
      `}</style>
    </div>
  );
};

export default HeroWithNav;