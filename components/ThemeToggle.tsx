"use client"

import { useTheme } from "components/ThemeProvider"

export function ThemeToggle() {
  const { theme, toggleTheme, ready } = useTheme()
  const isLight = theme === "light"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface-muted/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted transition hover:bg-surface-muted hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-60"
      aria-pressed={isLight}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      disabled={!ready}
    >
      <span className="inline-flex size-4 items-center justify-center text-accent">
        {isLight ? (
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v-2M12 21.5v-2M19.5 12h2M2.5 12h2M17.48 6.52l1.42-1.42M5.1 18.9l1.42-1.42M17.48 17.48l1.42 1.42M5.1 5.1l1.42 1.42"
            />
            <circle cx="12" cy="12" r="4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 15.5A8.5 8.5 0 0 1 8.5 4 7 7 0 0 0 12 20a8.48 8.48 0 0 0 8-4.5Z"
            />
          </svg>
        )}
      </span>
      <span>{isLight ? "Light" : "Dark"} mode</span>
    </button>
  )
}