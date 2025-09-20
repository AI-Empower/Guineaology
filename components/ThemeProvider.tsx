"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  ready: boolean
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = "guineaology.theme"

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return
  const root = document.documentElement
  root.dataset.theme = theme
  root.style.colorScheme = theme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const stored = window.localStorage.getItem(STORAGE_KEY)
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = stored === "light" || stored === "dark" ? (stored as Theme) : prefersDark ? "dark" : "light"

    setThemeState(initialTheme)
    applyTheme(initialTheme)
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready || typeof window === "undefined") return

    applyTheme(theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [ready, theme])

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme)
  }

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      ready,
    }),
    [ready, theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}
