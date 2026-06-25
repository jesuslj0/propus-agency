"use client"

import { useEffect } from "react"

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (!("serviceWorker" in navigator)) return

    // En desarrollo el SW cachea chunks que cambian con cada recompilación,
    // provocando módulos rancios. Lo desactivamos y limpiamos cualquier registro previo.
    if (process.env.NODE_ENV !== "production") {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister())
      })
      return
    }

    const register = () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .catch((err) => console.error("Error al registrar el Service Worker:", err))
    }

    // Registramos cuando la página ha terminado de cargar para no competir con recursos críticos.
    if (document.readyState === "complete") {
      register()
    } else {
      window.addEventListener("load", register, { once: true })
    }
  }, [])

  return null
}
