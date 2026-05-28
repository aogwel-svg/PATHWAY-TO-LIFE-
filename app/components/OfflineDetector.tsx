"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function OfflineDetector() {
  const router = useRouter()

  useEffect(() => {
    const goOffline = () => router.push("/offline")

    const handleOffline = () => goOffline()

    const handleOnline = () => {
      // optional: go back home when connection returns
      router.push("/")
    }

    window.addEventListener("offline", handleOffline)
    window.addEventListener("online", handleOnline)

    return () => {
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("online", handleOnline)
    }
  }, [router])

  return null
}