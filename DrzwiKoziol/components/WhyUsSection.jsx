import React, { useState, useEffect, useRef } from 'react';
import { Settings, Ruler, Users, Lightbulb } from 'lucide-react';

const WhyUsSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const advantages = [
    {
      number: "01",
      title: "Drzwi drewniane na wymiar",
      description: "Drzwi Kozioł specjalizuje się w produkcji drzwi drewnianych o nietypowych wymiarach. Zrealizujemy każdy projekt, nawet najbardziej wymagający. Dzięki wieloletniemu doświadczeniu i nowoczesnym technologiom STWORZYMY DRZWI, które będą nie tylko funkcjonalne, ale również piękne i trwałe.",
      icon: <Settings className="w-12 h-12" />,
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
    },
    {
      number: "02", 
      title: "Pomiar i doradztwo",
      description: "Ceniąc Twój czas, oferujemy usługę pomiaru. Nasz fachowiec przyjedzie do Ciebie w umówionym wcześniej terminie, wykona wszystkie niezbędne pomiary i doradzi, jakie drzwi będą najbardziej funkcjonalne. Dzięki temu zaoszczędzisz czas i unikniesz konieczności samodzielnego mierzenia.",
      icon: <Ruler className="w-12 h-12" />,
      imageUrl: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop"
    },
    {
      number: "03",
      title: "Profesjonalny montaż", 
      description: "Nasza doświadczona ekipa montażowa to zespół profesjonalistów, którzy sprawnie poradzą sobie z każdym, nawet najbardziej skomplikowanym montażem stolarki. Dzięki wieloletniemu doświadczeniu doskonale znamy specyfikę różnych materiałów i rozwiązań, co pozwala nam na szybkie i skuteczne reagowanie na ewentualne trudności.",
      icon: <Users className="w-12 h-12" />,
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
    },
    {
      number: "04",
      title: "Indywidualny projekt",
      description: "Szukasz drzwi, które idealnie wpiszą się w Twoje wnętrze? Z nami masz taką możliwość. Nie ograniczamy się do standardowych wzorów oraz kolorów. Jesteśmy w stanie stworzyć drzwi według Twojego indywidualnego projektu. Twoja wizja, nasze wykonanie.",
      icon: <Lightbulb className="w-12 h-12" />,
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dlaczego <span className="text-gray-700">akurat my</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cztery kluczowe powody, dla których klienci wybierają Drzwi Kozioł
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="space-y-32">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              data-index={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
                visibleItems.has(index.toString()) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Content - Left for odd, Right for even */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mr-4">
                    <div className="text-gray-700">
                      {advantage.icon}
                    </div>
                  </div>
                  <span className="text-6xl font-bold text-gray-100">
                    {advantage.number}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {advantage.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              {/* Image - Right for odd, Left for even */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                    <img
                      src={advantage.imageUrl}
                      alt={advantage.title}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Poznaj naszą ofertę
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;