"use client"

function Oferta() {
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
      nazwa: "Admar",
      firma: "Admar",
      obrazUrl: "pdf_photos/admar-pages.jpg",
      pdfUrl: "/admar.pdf",
    },
  ]

  const handleViewCatalog = (pdfUrl) => {
    window.open(pdfUrl, "_blank")
  }

  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">NASZA OFERTA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Odkryj katalogi naszych partnerskich firm. Przejrzyj dowolny katalog PDF
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {katalogi.map((katalog) => (
            <div key={katalog.id} className="group cursor-pointer" onClick={() => handleViewCatalog(katalog.pdfUrl)}>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={katalog.obrazUrl || "/placeholder.svg?height=300&width=400&query=modern door design"}
                    alt={`Katalog ${katalog.firma}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-black mb-2 tracking-tight">{katalog.firma}</h3>

                  <p className="text-gray-600 font-medium mb-4 leading-relaxed">{katalog.nazwa}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Katalog PDF</span>
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-black mb-4 tracking-tight">POTRZEBUJESZ WIĘCEJ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Nasze katalogi zawierają pełne specyfikacje, wymiary i ceny. Skontaktuj się z nami po indywidualną wycenę.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
              SKONTAKTUJ SIĘ
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button className="border-2 border-black text-black px-8 py-4 font-bold text-lg hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
              DARMOWY POMIAR
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
