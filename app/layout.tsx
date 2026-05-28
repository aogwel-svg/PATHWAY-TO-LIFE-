import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import OfflineDetector from "./components/OfflineDetector"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Pathway To Life Church",
  description:
    "A digital ministry platform for worship, sermons, and spiritual growth.",
  manifest: "/manifest.json",
  themeColor: "#facc15",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* 🌐 Offline detection system */}
        <OfflineDetector />

        {/* 📦 App content */}
        {children}
      </body>
    </html>
  )
}