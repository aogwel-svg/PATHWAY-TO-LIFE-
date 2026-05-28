"use client"

import Image from "next/image"
import { Cinzel, Cormorant_Garamond } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
})

const sermons = [
  {
    title: "THE BATTLE OF TWO CITIES - PART 2",
    preacher: "Pastor Philip Manje",
    date: "May 2026",
    image: "/images/sermon1.jpg",
    link: "https://www.youtube.com/live/GGrY4cQkD8M?si=UXP5FPsL-1tsk_30",
  },
  {
    title: "THE BATTLE OF TWO CITIES",
    preacher: "Pastor Philip Manje",
    date: "May 2026",
    image: "/images/sermon2.jpg",
    link: "https://www.youtube.com/live/zEzHyGwFfB4?si=KAnsZtGFtWsm-RzH",
  },
  {
    title: "THE PASSOVER OF THE LORD",
    preacher: "Pastor Philip Manje",
    date: "April 2026",
    image: "/images/sermon3.jpg",
    link: "https://www.youtube.com/live/DLTD6Yati1o?si=FPvSALKW39_oH808",
  },
]

export default function RecentSermons() {
  return (
    <section className="relative px-6 py-24 bg-white overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className={`${cinzel.className} text-3xl md:text-5xl font-bold text-black`}>
          RECENT SERMONS
        </h2>

        <p className={`${cormorant.className} mt-4 text-black/70 text-lg md:text-xl`}>
          Watch recent teachings and grow in faith
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {sermons.map((sermon, index) => (
          <a
            key={index}
            href={sermon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-black/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden h-64 w-full">

              <Image
                src={sermon.image}
                alt={sermon.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* BADGE */}
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow-lg z-10">
                SERMON
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h3 className={`${cinzel.className} text-xl font-bold text-black mb-3`}>
                {sermon.title}
              </h3>

              <p className={`${cormorant.className} text-black/70 text-lg`}>
                {sermon.preacher}
              </p>

              <p className="text-sm text-black/50 mt-2">
                {sermon.date}
              </p>

              {/* CTA */}
              <div className="mt-6 inline-flex items-center gap-2 text-yellow-700 font-medium group-hover:gap-4 transition-all">
                Watch Sermon →
              </div>

            </div>

          </a>
        ))}

      </div>

    </section>
  )
}