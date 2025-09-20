import "styles/tailwind.css"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import Script from "next/script"

import { SiteFooter } from "components/SiteFooter"
import { SiteHeader } from "components/SiteHeader"
import { ThemeProvider } from "components/ThemeProvider"

const body = Inter({ subsets: ["latin"], variable: "--font-body" })
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] })

const themeInitScript = `
(function () {
  const storageKey = 'guineaology.theme'
  try {
    const stored = window.localStorage.getItem(storageKey)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = stored === 'light' || stored === 'dark' ? stored : prefersDark ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  } catch (error) {
    document.documentElement.dataset.theme = 'light'
    document.documentElement.style.colorScheme = 'light'
  }
}());
`

const siteUrl = "https://guineapigcare.web.app"
const defaultDescription = "Interactive, evidence-backed guides for guinea pig guardians covering nutrition, habitat, health, enrichment, and adoption."
const defaultTitle = "Guinea Pig Care | Evidence-Based Guides for Guinea Pig Guardians"
const socialImage = `${siteUrl}/icon-512.png`

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Guinea Pig Care",
  url: siteUrl,
  logo: socialImage,
  description: defaultDescription,
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Guinea Pig Care",
  url: siteUrl,
  description: defaultDescription,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

const structuredData = JSON.stringify([organizationJsonLd, websiteJsonLd])

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Guinea Pig Care",
  title: {
    default: defaultTitle,
    template: "%s | Guinea Pig Care",
  },
  description: defaultDescription,
  keywords: [
    "guinea pig care",
    "cavy care",
    "guinea pig nutrition",
    "guinea pig habitat",
    "guinea pig health",
    "guinea pig enrichment",
    "adopting guinea pigs",
    "guinea pig guides",
  ],
  category: "Pets",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Guinea Pig Care",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: socialImage,
        width: 512,
        height: 512,
        alt: "Illustrated guinea pig wearing a graduation cap representing Guinea Pig Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [socialImage],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/icon-512.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  authors: [{ name: "Guineaology Team", url: siteUrl }],
  creator: "Guineaology Team",
  publisher: "Guineaology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`} data-theme="light" suppressHydrationWarning>
      <body className="min-h-screen bg-app text-primary antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Script id="site-structured-data" type="application/ld+json" strategy="beforeInteractive">
          {structuredData}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-surface focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-[0.35em] focus:text-heading"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 app-backdrop opacity-70" />
            <div className="absolute inset-0 app-backdrop-overlay" />
          </div>

          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}