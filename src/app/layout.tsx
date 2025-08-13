// app/layout.tsx
import type { Metadata } from "next"
import Footer from "./components/Footer"
import Header from "./components/Header"
import PageWrapper from "./components/pageWrapper"
import { Zen_Tokyo_Zoo, Inter } from "next/font/google"
import "./globals.css"
import { ReactNode } from "react"

// Fonts from Google
const zenTokyoZoo = Zen_Tokyo_Zoo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-tokyo-zoo",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "WORKOWNIX",
  description: "Elegant and responsive site by Aatfa",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${zenTokyoZoo.variable} ${inter.variable} antialiased dark`}
    >
      <body className="bg-black text-white font-sans">
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  )
}
