"use client"

import { useEffect } from "react"

function Realizacje() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="py-24 px-6 bg-white min-h-screen flex items-center">
      <div className="max-w-8xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-black mb-8 tracking-tight">Ostatnie Realizacje</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Zobacz nasze najnowsze prace i projekty na Instagramie
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-2xl p-12 mx-auto max-w-7xl border border-gray-200">
          <iframe
            src="https://cdn.lightwidget.com/widgets/9b836bfd40695ec28b2b7cbb3e1bf6e7.html"
            scrolling="no"
            allowTransparency="true"
            className="lightwidget-widget w-full rounded-xl"
            style={{
              width: "100%",
              border: 0,
              overflow: "hidden",
              minHeight: "600px",
            }}
            title="instagram-widget"
          />
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-700 mb-8 text-lg">Chcesz zobaczyć więcej? Śledź nas na Instagramie!</p>
          <a
            href="https://www.instagram.com/metalbudstolarka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-black hover:scale-105 text-lg"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Obserwuj nas
          </a>
        </div>
      </div>
    </section>
  )
}

export default Realizacje
