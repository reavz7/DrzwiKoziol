"use client"
import { Download, ExternalLink, FileText, Star } from "lucide-react"

function Oferta() {
  const katalogi = [
    {
      id: 1,
      nazwa: "Drzwi Kozioł Zewnętrzne",
      firma: "Kozioł",
      opis: "Premium katalog drzwi zewnętrznych - najwyższa jakość i nowoczesny design. Nasza flagowa oferta z szerokim wyborem stylów i wykończeń.",
      obrazUrl: "/drzwi-kozio--zewn-trzne-catalog-cover-premium-wood.jpg",
      pdfUrl: "/Drzwi Kozioł Zewnętrzne.pdf",
      polecane: true,
      highlights: ["Drzwi premium", "Nowoczesny design", "Wysokie parametry", "Szeroki wybór"],
    },
    {
      id: 2,
      nazwa: "Barański Premium Zewnętrzne 2025",
      firma: "Barański",
      opis: "Katalog drzwi zewnętrznych premium z najnowszymi trendami na 2025 rok. Eleganckie rozwiązania dla wymagających klientów.",
      obrazUrl: "/bara-ski-premium-exterior-doors-catalog-2025-moder.jpg",
      pdfUrl: "/Barański Drzwi - Katalog Drzwi Zewnętrznych Premium 2025 - edycja 1 - 2025.04.22.pdf",
      polecane: false,
      highlights: ["Edycja 2025", "Trendy premium", "Nowoczesne wzory", "Wysokiej jakości"],
    },
    {
      id: 3,
      nazwa: "Barański Premium Wewnętrzne 2025",
      firma: "Barański",
      opis: "Kompletny katalog drzwi wewnętrznych premium. Eleganckie rozwiązania do każdego wnętrza z najwyższej jakości materiałów.",
      obrazUrl: "/bara-ski-premium-interior-doors-catalog-elegant-wo.jpg",
      pdfUrl: "/Katalog Baranski Premium wewnetrzne 2025_05_20 wer6 (1).pdf",
      polecane: false,
      highlights: ["Drzwi wewnętrzne", "Premium quality", "Różne style", "Najnowsza wersja"],
    },
    {
      id: 4,
      nazwa: "OPTIMO 2025",
      firma: "Optimo",
      opis: "Nowoczesne rozwiązania drzwiowe OPTIMO. Funkcjonalność i design w jednym - idealne dla współczesnych wnętrz.",
      obrazUrl: "/optimo-doors-catalog-2025-modern-functional-design.jpg",
      pdfUrl: "/Katalog OPTIMO 2025_02_12 wer4 (2).pdf",
      polecane: false,
      highlights: ["Nowoczesny design", "Funkcjonalność", "Katalog 2025", "Współczesne wnętrza"],
    },
    {
      id: 5,
      nazwa: "SMART 2025",
      firma: "Smart",
      opis: "Inteligentne rozwiązania drzwiowe SMART. Nowoczesne technologie i elegancki design dla wymagających użytkowników.",
      obrazUrl: "/smart-doors-catalog-2025-intelligent-modern-techno.jpg",
      pdfUrl: "/Katalog SMART - 2025_04_15 wer7.pdf",
      polecane: false,
      highlights: ["Smart technology", "Inteligentne rozwiązania", "Nowoczesność", "Wysokie standardy"],
    },
    {
      id: 6,
      nazwa: "Admar",
      firma: "Admar",
      opis: "Tradycyjne rzemiosło spotyka nowoczesność. Katalog Admar prezentuje klasyczne rozwiązania w nowoczesnym wydaniu.",
      obrazUrl: "/admar-doors-catalog-traditional-craftsmanship-mode.jpg",
      pdfUrl: "/admar.pdf",
      polecane: false,
      highlights: ["Tradycyjne rzemiosło", "Klasyczne wzory", "Sprawdzona jakość", "Nowoczesne wykończenia"],
    },
  ]

  const handleDownload = (pdfUrl, nazwaProduktu) => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = pdfUrl.split("/").pop()
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nagłówek */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nasza <span className="text-gray-700">oferta</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Katalogi naszych partnerskich firm z pełną ofertą produktów. Pobierz katalogi PDF z pełną specyfikacją i
            cenami.
          </p>
        </div>

        {/* Siatka katalogów */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {katalogi.map((katalog) => (
            <div
              key={katalog.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                katalog.polecane ? "ring-4 ring-yellow-400 transform scale-105" : ""
              }`}
            >
              {/* Nagłówek karty */}
              <div className="relative">
                <img
                  src={katalog.obrazUrl || "/placeholder.svg"}
                  alt={`Katalog ${katalog.nazwa}`}
                  className="w-full h-48 object-cover"
                />
                {katalog.polecane && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star size={16} className="mr-1" />
                    POLECANE
                  </div>
                )}
              </div>

              {/* Nagłówek karty */}
              <div className={`px-6 py-4 ${katalog.polecane ? "bg-yellow-50" : "bg-gray-900"}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className={`text-sm font-semibold ${katalog.polecane ? "text-gray-600" : "text-white opacity-75"}`}
                    >
                      {katalog.firma}
                    </h3>
                    <h2 className={`text-xl font-bold ${katalog.polecane ? "text-gray-900" : "text-white"}`}>
                      {katalog.nazwa}
                    </h2>
                  </div>
                  <FileText className={`${katalog.polecane ? "text-gray-700" : "text-white opacity-75"}`} size={24} />
                </div>
              </div>

              {/* Zawartość karty */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{katalog.opis}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">Główne cechy:</h3>
                  <ul className="space-y-1">
                    {katalog.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span
                          className={`w-2 h-2 rounded-full mr-2 ${katalog.polecane ? "bg-yellow-400" : "bg-gray-700"}`}
                        ></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Przycisk pobierania */}
                <button
                  onClick={() => handleDownload(katalog.pdfUrl, katalog.nazwa)}
                  className={`w-full font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 ${
                    katalog.polecane
                      ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Potrzebujesz więcej informacji?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nasze katalogi zawierają pełne specyfikacje techniczne, wymiary, kolory i ceny. Jeśli masz pytania lub
              potrzebujesz indywidualnej wyceny, skontaktuj się z nami.
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Oferta
