import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppButton from "@/components/whatsapp-button" // Added import for WhatsApp button

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "kurniainteriorstudio",
  description: "Interior design studio specializing in sophisticated urban living spaces",
    // generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-knt.png" type="image/png" />
        <title>Kurnia Interior Studio</title>
        <meta name="description" content="Interior design studio specializing in sophisticated urban living spaces" />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">{children}
          {children}
          <WhatsAppButton /> {/* Added WhatsApp button component */}
        </ThemeProvider>
      </body>
    </html>
  )
}
