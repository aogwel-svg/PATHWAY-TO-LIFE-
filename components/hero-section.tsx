"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Cinzel, Cormorant_Garamond } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
})

export default function HeroSection() {
  const [open, setOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white py-16"
      style={{
        opacity: Math.max(1 - scrollY / 3000, 0),
      }}
    >

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `scale(${1 + scrollY * 0.0002})`,
          filter: `blur(${scrollY * 0.01}px)`,
        }}
      >
        <Image
          src="/images/heaven-bg.png"
          alt="Heavenly Background"
          fill
          priority
          className="object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/20 via-white/40 to-white/80" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* BACKGROUND LOGO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] z-10">
        <Image
          src="/images/church-logo.png"
          alt="Watermark Logo"
          width={500}
          height={500}
          className="w-[500px] max-w-full object-contain"
        />
      </div>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-yellow-100 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* MAIN CONTENT */}
      <div
        className="relative z-20 flex flex-col items-center animate-[fadeIn_1.5s_ease-out]"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
        }}
      >

        {/* LOGO */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-yellow-200 blur-3xl opacity-30 rounded-full scale-150" />

          <Image
            src="/images/church-logo.png"
            alt="Pathway To Life New Wine Church"
            width={128}
            height={128}
            className="relative w-32 md:w-40 object-contain drop-shadow-xl"
          />
        </div>

        {/* TITLE */}
        <h1 className={`${cinzel.className} text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight`}>
          PATHWAY TO LIFE
        </h1>

        <h2 className={`${cinzel.className} text-lg md:text-2xl tracking-[0.4em] text-yellow-700 mt-3`}>
          NEW WINE CHURCH
        </h2>

        {/* SUBTEXT */}
        <p className={`${cormorant.className} mt-6 max-w-2xl text-black/80 text-xl md:text-2xl leading-relaxed tracking-wide`}>
          A place of worship, transformation, purpose, and the presence of God.
        </p>

        {/* SCRIPTURE */}
        <p className={`${cormorant.className} mt-4 italic text-yellow-800/80 text-sm md:text-base`}>
          “Where the Spirit of the Lord is, there is freedom.”
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-5 mt-10">

          <button
            onClick={() => setOpen(!open)}
            className={`${cormorant.className} px-8 py-4 rounded-full bg-yellow-500 text-black text-lg md:text-xl font-medium tracking-wide shadow-2xl hover:scale-105 hover:bg-yellow-600 transition-all duration-300 flex items-center gap-3`}
          >
            SERVICE TIMES
            <span className={`transition-all duration-500 ${open ? "rotate-180 scale-110" : ""}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <a
            href="https://maps.app.goo.gl/RR8rDUaSeuRY7MG96"
            target="_blank"
            rel="noopener noreferrer"
            className={`${cormorant.className} px-8 py-4 rounded-full border border-black text-black bg-yellow-500 text-lg md:text-xl font-medium tracking-wide hover:bg-yellow-600 transition-all duration-300`}
          >
            VISIT US
          </a>

        </div>

        {/* SCROLL HINT */}
        <div className="mt-10 text-xs tracking-widest text-black/60 animate-bounce">
          SCROLL FOR MORE
        </div>

        {/* LIVE STATUS */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className={`${cormorant.className} text-red-600 font-medium animate-pulse tracking-wide`}>
            🔴 LIVE SUNDAYS 10AM
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-5 mt-6 z-30">

          <a
            href="https://facebook.com/PamelaOgwel"
            className="w-12 h-12 rounded-full border border-black/10 bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
              <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.03 3.66 9.19 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.9h-2.33V22c4.78-.74 8.44-4.9 8.44-9.93z"/>
            </svg>
          </a>

          <a
            href="https://youtube.com/@Pathwaytolife9770"
            className="w-12 h-12 rounded-full border border-black/10 bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
              <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16 5 12 5 12 5s-4 0-6.9.1c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.2 6.6.2 6.6.2s4 0 6.9-.1c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.8 15.3V8.7l6.3 3.3-6.3 3.3z"/>
            </svg>
          </a>

        </div>

        {/* ZOOM LINK */}
        <a
          href="https://zoom.us/j/YOUR_MEETING_ID"
          target="_blank"
          rel="noopener noreferrer"
          className={`${cormorant.className} mt-4 text-blue-700 text-sm md:text-base underline hover:text-blue-500 transition`}
        >
          Join us on Zoom: Wednesday 9 PM & Friday 9 PM
        </a>

        {/* DROPDOWN */}
        <div
          className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-md border border-black/10 rounded-xl px-6 py-4 shadow-xl w-fit mx-auto text-left">
            <p className="text-black/80 text-sm"><strong>Sunday:</strong> 10:00 AM – Main Service</p>
            <p className="text-black/80 text-sm"><strong>Wednesday:</strong> 9:00 PM – Midweek Service</p>
            <p className="text-black/80 text-sm"><strong>Friday:</strong> 9:00 PM – Prayer Service</p>
          </div>
        </div>

      </div>
    </section>
  )
}