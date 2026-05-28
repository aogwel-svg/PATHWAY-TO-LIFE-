import HeroSection from "@/components/hero-section"
import RecentSermons from "@/components/recent-sermons"
import SermonSection from "@/components/sermon-section"
import VisitSection from "@/components/visit-section"
import AppSection from "@/components/app-section"

export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="min-h-screen">
        <HeroSection />
      </div>

      <div className="py-10 md:py-16">
        <SermonSection />
      </div>

      <div className="py-10 md:py-16">
        <RecentSermons />
      </div>

      <div className="py-10 md:py-20">
        <AppSection />
      </div>

      <div className="py-10 md:py-20">
        <VisitSection />
      </div>
    </main>
  )
}