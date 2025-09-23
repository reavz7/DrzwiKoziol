"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { Link } from "react-router-dom"

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    // Używamy loadSlim zamiast loadFull dla lepszej wydajności
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded", container)
  }, [])

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#FFFFFF",
            },
            links: {
              color: "#FFFFFF",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: .8,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Treść */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 pb-24">
        <h1 className="text-white text-4xl sm:text-8xl font-bold mb-4 drop-shadow-lg">DRZWI KOZIOŁ</h1>
        <p className="text-gray-300 text-lg sm:text-2xl mb-8 drop-shadow-md">
          Przekrocz próg,
          <br className="sm:hidden" /> odkryj nowe przestrzenie
        </p>
        <Link
          to="/oferta"
          className="bg-white cursor-pointer text-black font-medium px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 hover:scale-105 transform"
        >
          Przeglądaj ofertę
        </Link>
      </div>
    </div>
  )
}
