"use client"

import { Cinzel, Cormorant_Garamond } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
})

export default function VisitSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-yellow-50/30 to-white">

      {/* SECTION TITLE */}
      <div className="text-center mb-12">
        <h2 className={`${cinzel.className} text-3xl md:text-5xl font-bold text-black`}>
          PLAN YOUR VISIT
        </h2>
        <p className={`${cormorant.className} mt-4 text-black/70 text-lg md:text-xl`}>
          We’d love to welcome you home this Sunday
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* CARD 1 - SERVICE TIMES */}
        <div className="bg-white border border-black/10 rounded-2xl shadow-xl p-6">
          <h3 className={`${cinzel.className} text-xl font-bold text-black mb-4`}>
            Service Times
          </h3>

          <div className={`${cormorant.className} space-y-2 text-black/80`}>
            <p><strong>Sunday:</strong> 10:00 AM – Main Service</p>
            <p><strong>Wednesday:</strong> 9:00 PM – Midweek Service</p>
            <p><strong>Friday:</strong> 9:00 PM – Prayer Service</p>
          </div>
        </div>

        {/* CARD 2 - LOCATION */}
        <div className="bg-white border border-black/10 rounded-2xl shadow-xl p-6">
          <h3 className={`${cinzel.className} text-xl font-bold text-black mb-4`}>
            Location
          </h3>

          <p className={`${cormorant.className} text-black/70 leading-relaxed`}>
            Pathway To Life New Wine Church welcomes you in a space of worship,
            teaching, and spiritual growth. Join us and experience community and presence.
          </p>

          <a
            href="https://maps.app.goo.gl/RR8rDUaSeuRY7MG96"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-yellow-700 underline hover:text-yellow-600 transition"
          >
            Open in Google Maps →
          </a>
        </div>

        {/* CARD 3 - WHAT TO EXPECT */}
        <div className="bg-white border border-black/10 rounded-2xl shadow-xl p-6">
          <h3 className={`${cinzel.className} text-xl font-bold text-black mb-4`}>
            What to Expect
          </h3>

          <div className={`${cormorant.className} space-y-2 text-black/80`}>
            <p>• Warm, welcoming community</p>
            <p>• Powerful worship experience</p>
            <p>• Practical, Bible-based teaching</p>
            <p>• Prayer and ministry time</p>
          </div>
        </div>

      </div>

      {/* CTA SECTION */}
      <div className="text-center mt-16">
        <a
          href="https://maps.app.goo.gl/RR8rDUaSeuRY7MG96"
          target="_blank"
          rel="noopener noreferrer"
          className={`${cormorant.className} inline-block px-10 py-4 rounded-full bg-yellow-500 text-black font-medium text-lg shadow-xl hover:bg-yellow-600 transition`}
        >
          JOIN US THIS SUNDAY
        </a>

        <p className="mt-4 text-black/60 text-sm">
          You are welcome just as you are
        </p>
      </div>

    </section>
  )
}