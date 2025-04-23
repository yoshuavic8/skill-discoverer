import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ClientOnly from "@/components/client-only"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Skill Discoverer - Temukan Bakat Tersembunyi Anda",
  description: "Aplikasi interaktif untuk menemukan skill yang mungkin belum Anda sadari sepenuhnya",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClientOnly>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  )
}
