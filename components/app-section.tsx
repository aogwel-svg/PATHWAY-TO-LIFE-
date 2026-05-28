"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function AppSection() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener("beforeinstallprompt", handler)

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const installApp = async () => {
    if (!deferredPrompt) {
      alert(
        "Install not available yet. Use Chrome menu (⋮) → Install App or Add to Home Screen."
      )
      return
    }

    await deferredPrompt.prompt()

    const result = await deferredPrompt.userChoice

    if (result?.outcome === "accepted") {
      setDeferredPrompt(null)
    }
  }

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Download The Church App
        </h2>

        <p className="mt-4 text-black/70 text-lg md:text-xl">
          Install the app for sermons, live services, and spiritual growth.
        </p>

        {/* ALWAYS VISIBLE BUTTON */}
        <button
          onClick={installApp}
          className="mt-8 px-8 py-4 rounded-full bg-black text-white text-lg font-semibold shadow-xl hover:scale-105 transition-all"
        >
          Download Church App
        </button>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-14 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center">

            <div className="w-[260px] h-[520px] rounded-[40px] border border-black/20 shadow-2xl bg-black relative overflow-hidden">

              <div className="h-6 bg-black flex justify-center items-center">
                <div className="w-20 h-2 bg-white/20 rounded-full" />
              </div>

              <div className="p-4 flex flex-col items-center justify-center h-full bg-white">

                <Image
                  src="/images/church-logo.png"
                  alt="Church Logo"
                  width={96}
                  height={96}
                  className="object-contain mb-4"
                />

                <h3 className="text-lg font-bold text-black text-center">
                  Pathway To Life Church
                </h3>

                <p className="text-xs text-black/60 mt-2 text-center">
                  Worship • Sermons • Growth
                </p>

                <div className="mt-6 px-4 py-2 rounded-full bg-yellow-500 text-black text-xs font-medium">
                  LIVE SUNDAYS 10AM
                </div>

              </div>
            </div>

            <div className="mt-6">
              <Image
                src="/images/church-preview.jpg"
                alt="Church Preview"
                width={320}
                height={200}
                className="rounded-xl shadow-lg border border-black/10 object-cover"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="text-left space-y-8">

            <div className="p-6 rounded-2xl border border-black/10 shadow-md bg-white">

              <h3 className="text-xl font-semibold text-black">
                📱 Android / Desktop
              </h3>

              <p className="mt-4 text-black/70 text-sm leading-relaxed">
                1. Open this site in Chrome or Edge<br />
                2. Tap menu (⋮)<br />
                3. Click <b>Install App</b><br />
                4. Confirm installation
              </p>

              <div className="mt-4 text-green-600 text-sm font-medium">
                ✔ Full install supported
              </div>

            </div>

            <div className="p-6 rounded-2xl border border-black/10 shadow-md bg-white">

              <h3 className="text-xl font-semibold text-black">
                🍎 iPhone (Safari Only)
              </h3>

              <p className="mt-4 text-black/70 text-sm leading-relaxed">
                1. Open in Safari<br />
                2. Tap Share button<br />
                3. Select <b>Add to Home Screen</b><br />
                4. Confirm install
              </p>

              <div className="mt-4 text-yellow-600 text-sm font-medium">
                ⚠ Manual install required
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}