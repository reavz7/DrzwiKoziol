"use client"

function Oferta() {
  const katalogi = [
    {
      id: 1,
      nazwa: "Drzwi Kozioł Zewnętrzne",
      firma: "Kozioł",
      obrazUrl: "/modern-door-design.jpg",
      pdfUrl: "Drzwi Kozioł Zewnętrzne.pdf",
    },
    {
      id: 2,
      nazwa: "Barański Premium Zewnętrzne 2025",
      firma: "Barański",
      obrazUrl: "/premium-exterior-doors.jpg",
      pdfUrl: "/Barański Drzwi - Katalog Drzwi Zewnętrznych Premium 2025 - edycja 1 - 2025.04.22.pdf",
    },
    {
      id: 3,
      nazwa: "Barański Premium Wewnętrzne 2025",
      firma: "Barański",
      obrazUrl: "pdf_photos/baranski_premium.jpg",
      pdfUrl: "/Katalog Baranski Premium wewnetrzne 2025_05_20 wer6 (1).pdf",
    },
    {
      id: 4,
      nazwa: "OPTIMO 2025",
      firma: "Optimo",
      obrazUrl: "/modern-functional-doors.jpg",
      pdfUrl: "/Katalog OPTIMO 2025_02_12 wer4 (2).pdf",
    },
    {
      id: 5,
      nazwa: "SMART 2025",
      firma: "Smart",
      obrazUrl: "/smart-technology-doors.jpg",
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
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Subtle purple gradient overlays */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(76, 29, 149, 0.1) 0%, transparent 50%)
            `,
          }}
        />

        {/* Animated purple orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(76, 29, 149, 0.3) 0%, transparent 70%)",
            filter: "blur(50px)",
            animationDelay: "2s",
            animation: "pulse 6s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
            Nasza <span className="text-violet-400">oferta</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
            Katalogi naszych partnerskich firm z pełną ofertą produktów. Pobierz katalogi PDF z pełną specyfikacją i
            cenami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {katalogi.map((katalog) => (
            <div
              key={katalog.id}
              className="group relative cursor-pointer"
              onClick={() => handleViewCatalog(katalog.pdfUrl)}
            >
              <div
                className="relative backdrop-blur-xl rounded-3xl  h-140 flex items-center justify-between p-8 flex-col transition-all duration-700 hover:backdrop-blur-2xl border border-white/10"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.05) 0%, 
                      rgba(139, 92, 246, 0.03) 30%,
                      rgba(255, 255, 255, 0.02) 70%,
                      rgba(76, 29, 149, 0.05) 100%
                    )
                  `,
                  backdropFilter: "blur(20px) saturate(180%)",
                  boxShadow: `
                    0 8px 32px rgba(139, 92, 246, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    inset 0 -1px 0 rgba(139, 92, 246, 0.1),
                    0 0 0 1px rgba(255, 255, 255, 0.05)
                  `,
                }}
              >
                <div
                  className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl rounded-tr-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background: "linear-gradient(135deg, rgba(139, 92, 246, 0.6) 0%, rgba(76, 29, 149, 0.3) 100%)",
                  }}
                />

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white tracking-tight font-sans">{katalog.firma}</h3>
                </div>

                {/* Image with enhanced glass overlay */}
                <div className="mb-8 overflow-hidden rounded-2xl relative">
                  <img
                    src={katalog.obrazUrl || "/placeholder.svg?height=192&width=384&query=modern door design"}
                    alt={`Katalog ${katalog.firma}`}
                    className="w-90 h-90 group-hover:scale-110 transition-transform duration-700 object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
                      backdropFilter: "blur(2px)",
                    }}
                  />
                </div>

                <div className="text-center">
                  <div
                    className="relative inline-flex items-center justify-center px-4 py-2 text-md font-semibold text-white rounded-full transition-all duration-500 hover:scale-105 font-sans"
                    style={{
                      background: `
                        linear-gradient(135deg, 
                          rgba(255, 255, 255, 0.1) 0%, 
                          rgba(139, 92, 246, 0.1) 50%,
                          rgba(255, 255, 255, 0.05) 100%
                        )
                      `,
                      backdropFilter: "blur(15px) saturate(180%)",
                      border: "1px solid rgba(139, 92, 246, 0.3)",
                      boxShadow: `
                        0 4px 16px rgba(139, 92, 246, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 rgba(139, 92, 246, 0.1)
                      `,
                    }}
                  >
                    <span className="relative z-10">Zobacz katalog PDF</span>

                    {/* Enhanced hover glass effect */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                      style={{  
                        background:
                          "linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
                        backdropFilter: "blur(10px)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans">Potrzebujesz więcej informacji?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-sans">
              Nasze katalogi zawierają pełne specyfikacje techniczne, wymiary, kolory i ceny. Jeśli masz pytania lub
              potrzebujesz indywidualnej wyceny, skontaktuj się z nami.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:scale-105 font-sans"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(139, 92, 246, 0.8) 0%, 
                    rgba(76, 29, 149, 0.9) 100%
                  )
                `,
                backdropFilter: "blur(20px)",
                color: "white",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
              }}
            >
              Skontaktuj się z nami
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              className="inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:scale-105 font-sans"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.1) 0%, 
                    rgba(139, 92, 246, 0.05) 100%
                  )
                `,
                backdropFilter: "blur(20px)",
                color: "white",
                border: "2px solid rgba(139, 92, 246, 0.3)",
                boxShadow: "0 8px 32px rgba(139, 92, 246, 0.1)",
              }}
            >
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
