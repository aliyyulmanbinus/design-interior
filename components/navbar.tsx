"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-6",
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8 flex-1">
            <Link href="/about" className="text-sm font-medium hover:text-gray-300 transition-colors">
              ABOUT US
            </Link>
            <Link href="/service" className="text-sm font-medium hover:text-gray-300 transition-colors">
              SERVICE
            </Link>
          </div>

          <div className="md:flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-knt-circle.svg?height=150&width=150&text=KNT+Design"
                alt="KNT Design Interior"
                width={150}
                height={150}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            <Link href="/project" className="text-sm font-medium hover:text-gray-300 transition-colors">
              PROJECT
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gray-300 transition-colors">
              CONTACT
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu and theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className={cn("h-20 md:h-24")}></div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button className="absolute top-6 right-4 text-foreground" onClick={() => setIsMenuOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center gap-8">
          <Link
            href="/about"
            className="text-xl font-medium hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            href="/service"
            className="text-xl font-medium hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            SERVICE
          </Link>
          <Link
            href="/project"
            className="text-xl font-medium hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            PROJECT
          </Link>
          <Link
            href="/contact"
            className="text-xl font-medium hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </>
  )
}
