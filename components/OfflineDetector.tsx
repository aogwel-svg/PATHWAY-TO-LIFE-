"use client"

import { useEffect } from "react"

export default function OfflineDetector() {
  useEffect(() => {
    const handleOffline = () => {
      console.log("User offline")
    }

    const handleOnline = () => {
      console.log("User online")
    }

    window.addEventListener("offline", handleOffline)
    window.addEventListener("online", handleOnline)

    return () => {
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("online", handleOnline)
    }
  }, [])

  return null
}