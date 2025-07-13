import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';

function Oferta() {
  const katalogi = [
    {
      id: 1,
      nazwa: "Drzwi Zewnętrzne",
      opis: "Wysokiej jakości drzwi zewnętrzne z litego drewna. Dostępne w różnych stylach i wykończeniach, zapewniające doskonałą izolację termiczną i akustyczną.",
      ikona: "🚪",
      pdfUrl: "/katalogi/drzwi-zewnetrzne-drewniane.pdf",
      highlights: ["Litwood dąb, sosna, meranti", "Izolacja termiczna", "Różne wzory i kolory", "Okucia wysokiej jakości"]
    },
    {
      id: 2,
      nazwa: "Drzwi Wewnętrzne",
      opis: "Eleganckie drzwi wewnętrzne z naturalnego drewna. Szeroki wybór wzorów, od klasycznych po nowoczesne, dopasowane do każdego wnętrza.",
      ikona: "🏠",
      pdfUrl: "/katalogi/drzwi-wewnetrzne-drewniane.pdf",
      highlights: ["Różne gatunki drewna", "Wzory klasyczne i nowoczesne", "Możliwość lakierowania", "Różne wymiary standardowe"]
    },
    {
      id: 3,
      nazwa: "Akcesoria",
      opis: "Kompletny asortyment akcesoriów do drzwi i okien. Klamki, zamki, zawiasy, uszczelki i inne elementy potrzebne do montażu i wykończenia.",
      ikona: "🔧",
      pdfUrl: "/katalogi/akcesoria.pdf",
      highlights: ["Klamki i uchwyty", "Zamki i wkładki", "Zawiasy i okucia", "Uszczelki i listwy"]
    },
    {
      id: 4,
      nazwa: "Okna",
      opis: "Nowoczesne okna drewniane i drewniano-aluminiowe. Doskonałe parametry energetyczne, trwałość i estetyka w jednym produkcie.",
      ikona: "🪟",
      pdfUrl: "/katalogi/okna.pdf",
      highlights: ["Okna drewniane", "Systemy drewniano-aluminiowe", "Wysokie parametry energetyczne", "Różne systemy otwierania"]
    },
    {
      id: 5,
      nazwa: "Listwy Przypodłogowe",
      opis: "Listwy przypodłogowe z różnych gatunków drewna. Idealne wykończenie dla każdego pomieszczenia, dostępne w wielu profilach i wymiarach.",
      ikona: "📏",
      pdfUrl: "/katalogi/listwy-przypodlogowe.pdf",
      highlights: ["Różne gatunki drewna", "Wiele profili do wyboru", "Możliwość dopasowania koloru", "Różne wymiary"]
    },
    {
      id: 6,
      nazwa: "Indywidualne Projekty",
      opis: "Realizujemy indywidualne projekty dostosowane do Twoich potrzeb. Od projektu po wykonanie - kompleksowa obsługa nietypowych zamówień.",
      ikona: "✨",
      pdfUrl: "/katalogi/indywidualne-projekty.pdf",
      highlights: ["Projekty na zamówienie", "Doradztwo techniczne", "Nietypowe wymiary", "Kompleksowa realizacja"]
    }
  ];

  const handleDownload = (pdfUrl, nazwaProduktu) => {
    // W rzeczywistej aplikacji tutaj byłoby pobieranie PDF
    alert(`Pobieranie katalogu: ${nazwaProduktu}\nURL: ${pdfUrl}`);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nagłówek */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nasza <span className="text-gray-700">oferta</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompleksowa oferta produktów drewnianych najwyższej jakości. 
            Pobierz katalogi PDF z pełną specyfikacją i cenami.
          </p>
        </div>

        {/* Siatka katalogów */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {katalogi.map((katalog) => (
            <div key={katalog.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Nagłówek karty */}
              <div className="bg-gray-900 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{katalog.ikona}</span>
                    <h2 className="text-xl font-bold text-white">{katalog.nazwa}</h2>
                  </div>
                  <FileText className="text-white opacity-75" size={24} />
                </div>
              </div>

              {/* Zawartość karty */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {katalog.opis}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">Główne cechy:</h3>
                  <ul className="space-y-1">
                    {katalog.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Przycisk pobierania */}
                <button
                  onClick={() => handleDownload(katalog.pdfUrl, katalog.nazwa)}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Download size={20} />
                  <span>Pobierz katalog PDF</span>
                </button>

                {/* Dodatkowe informacje */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Format: PDF</span>
                    <span className="flex items-center space-x-1">
                      <ExternalLink size={14} />
                      <span>Katalog 2025</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Potrzebujesz więcej informacji?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nasze katalogi zawierają pełne specyfikacje techniczne, wymiary, kolory i ceny. 
              Jeśli masz pytania lub potrzebujesz indywidualnej wyceny, skontaktuj się z nami.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Skontaktuj się z nami
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Zamów darmowy pomiar
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Oferta;