import React, { useState, useEffect } from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('contact-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const doorImages = [
    {
      src: "/kolarz1.png",
      alt: "Eleganckie drzwi wewnętrzne w jasnym korytarzu"
    },
    {
      src: "/kolarz2.png", 
      alt: "Nowoczesne drzwi wejściowe z drewna"
    },
    {
      src: "/kolarz3.png",
      alt: "Stylowe drzwi zewnętrzne w kolorze zielonym"
    },
    {
      src: "/kolarz4.png",
      alt: "Minimalistyczne białe drzwi wewnętrzne"
    }
  ];

  return (
    <section 
      id="contact-section"
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Images */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative h-146 rounded-2xl overflow-hidden shadow-2xl">
                {doorImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentImageIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>  
                ))}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">⭐</span>
                </div>
              </div>

              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {doorImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Pokaż zdjęcie ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Skontaktuj się z nami
                </span>
                <div className="mt-2 h-0.5 w-12 bg-gray-900"></div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Zapraszamy
                <br />
                <span className="text-gray-600">do kontaktu</span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Jeśli szukasz drzwi na wymiar, skontaktuj się z nami. Nasz zespół specjalistów pomoże Ci wybrać najlepsze rozwiązania, które spełnią Twoje oczekiwania.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Zapraszamy do kontaktu telefonicznego lub mailowego 
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a 
                href="tel:+48123456789"
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Zadzwoń do nas</p>
                  <p className="text-lg font-semibold text-gray-900">+48 123 456 789</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-gray-900 transition-colors duration-300" />
              </a>

              <a 
                href="mailto:kontakt@drzwikoziol.pl"
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Napisz do nas</p>
                  <p className="text-lg font-semibold text-gray-900">kontakt@drzwikoziol.pl</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-gray-900 transition-colors duration-300" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                Dowiedz się więcej
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Kontakt - Drzwi Kozioł",
          "description": "Skontaktuj się z Drzwi Kozioł - specjalistami od drzwi drewnianych na wymiar. Oferujemy pomiar, doradztwo i profesjonalny montaż.",
          "provider": {
            "@type": "Organization",
            "name": "Drzwi Kozioł",
            "telephone": "+48123456789",
            "email": "kontakt@drzwikoziol.pl"
          }
        })}
      </script>
    </section>
  );
};

export default ContactSection;