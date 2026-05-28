"use client"

import { Cinzel, Cormorant_Garamond } from "next/font/google"
import { sermons } from "@/content/sermons"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
})

export default function SermonSection() {
  const sermon = sermons[0]

  return (
    <section className="relative py-24 px-6 bg-white">

      {/* SECTION TITLE */}
      <div className="text-center mb-12">
        <h2 className={`${cinzel.className} text-3xl md:text-5xl font-bold text-black`}>
          FEATURED TEACHING
        </h2>

        <p className={`${cormorant.className} mt-4 text-black/70 text-lg md:text-xl`}>
          A message to strengthen your faith and realign your purpose
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* VIDEO */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10">
          <div className="aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src={sermon.videoUrl}
              title="Sermon Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* CONTENT */}
        <div>

          <h3 className={`${cinzel.className} text-2xl md:text-3xl font-bold text-black`}>
            {sermon.title}
          </h3>

          <p className={`${cormorant.className} mt-4 text-black/70 text-lg leading-relaxed`}>
            {sermon.description}
          </p>

          {/* KEY POINTS */}
          <div className="mt-6 space-y-3 text-black/80">
            {sermon.points.map((point, i) => (
              <p key={i}>• {point}</p>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <a
              href={sermon.videoUrl.replace("/embed/", "/watch?v=")}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cormorant.className} px-6 py-3 rounded-full bg-yellow-500 text-black font-medium hover:bg-yellow-600 transition text-center`}
            >
              WATCH FULL SERMON
            </a>

            <a
              href={sermon.notesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cormorant.className} px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition text-center`}
            >
              DOWNLOAD NOTES
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}