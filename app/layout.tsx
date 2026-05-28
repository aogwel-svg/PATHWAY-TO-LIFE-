import HeroSection from "@/components/hero-section"
import SermonSection from "@/components/sermon-section"
import RecentSermons from "@/components/recent-sermons"
import VisitSection from "@/components/visit-section"

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* HERO */}
      <HeroSection />

      {/* SERMON HIGHLIGHT / FEATURE */}
      <section className="w-full">
        <SermonSection />
      </section>

      {/* RECENT SERMONS */}
      <section className="w-full">
        <RecentSermons />
      </section>

      {/* VISIT / CALL TO ACTION */}
      <section className="w-full">
        <VisitSection />
      </section>
    </main>
  )
}