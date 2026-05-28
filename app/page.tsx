import HeroSection from "@/components/hero-section"
import RecentSermons from "@/components/recent-sermons"
import SermonSection from "@/components/sermon-section"
import VisitSection from "@/components/visit-section"
import AppSection from "@/components/app-section"

export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
      <div className="min-h-screen">
        <HeroSection />
      </div>

      {/* FEATURED SERMON */}
      <div className="py-10 md:py-16">
        <SermonSection />
      </div>

      {/* RECENT SERMONS */}
      <div className="py-10 md:py-16">
        <RecentSermons />
      </div>

      {/* APP SECTION */}
      <div className="py-10 md:py-20">
        <AppSection />
      </div>

      {/* VISIT SECTION */}
      <div className="py-10 md:py-20">
        <VisitSection />
      </div>

    </main>
  )
}