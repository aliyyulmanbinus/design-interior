"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

// Define project categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "apartemen_1br", name: "Apartemen 1BR" },
  { id: "meeting_room", name: "Meeting Room" },
  { id: "mr_hartono", name: "Mr. Hartono" },
  { id: "mr_rangga", name: "Mr. Rangga" },
  { id: "mr_wisnu", name: "Mr. Wisnu" },
  { id: "mrs_lidya", name: "Mrs. Lidya" },
  { id: "mrs_nike", name: "Mrs. Nike" },
  { id: "office_bca", name: "Office BCA" },
]

// Sample projects data with categories
const projects = [
  {
    id: 1,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-02-23-18-22-11.png",
    category: "apartemen_1br",
  },
  {
    id: 2,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-02-23-18-23-08.png",
    category: "apartemen_1br",
  },
  {
    id: 3,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-26-52.png",
    category: "apartemen_1br",
  },
  {
    id: 4,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-27-05.png",
    category: "apartemen_1br",
  },
  {
    id: 5,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-28-43.png",
    category: "apartemen_1br",
  },
  {
    id: 6,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-28-56.png",
    category: "apartemen_1br",
  },
  {
    id: 7,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-33-09.png",
    category: "apartemen_1br",
  },
  {
    id: 8,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-33-33.png",
    category: "apartemen_1br",
  },
  {
    id: 9,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-33-52.png",
    category: "apartemen_1br",
  },
  {
    id: 10,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-34-03.png",
    category: "apartemen_1br",
  },
  {
    id: 11,
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description: "Contemporary one-bedroom apartment with minimalist design and smart storage solutions.",
    image: "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-34-15.png",
    category: "apartemen_1br",
  },
  {
    id: 12,
    title: "EXECUTIVE MEETING ROOM",
    location: "Jakarta, Indonesia",
    description: "Sophisticated meeting space designed for productivity and impression.",
    image: "/gambar_portfolio/meeting_room/Enscape_2025-01-22-23-42-53.png",
    category: "meeting_room",
  },
  {
    id: 13,
    title: "EXECUTIVE MEETING ROOM",
    location: "Jakarta, Indonesia",
    description: "Sophisticated meeting space designed for productivity and impression.",
    image: "/gambar_portfolio/meeting_room/Enscape_2025-01-22-23-43-52.png",
    category: "meeting_room",
  },
  {
    id: 14,
    title: "EXECUTIVE MEETING ROOM",
    location: "Jakarta, Indonesia",
    description: "Sophisticated meeting space designed for productivity and impression.",
    image: "/gambar_portfolio/meeting_room/Enscape_2025-01-22-23-44-07.png",
    category: "meeting_room",
  },
  {
    id: 15,
    title: "EXECUTIVE MEETING ROOM",
    location: "Jakarta, Indonesia",
    description: "Sophisticated meeting space designed for productivity and impression.",
    image: "/gambar_portfolio/meeting_room/Enscape_2025-01-22-23-44-57.png",
    category: "meeting_room",
  },
  {
    id: 16,
    title: "LUXURY RESIDENCE",
    location: "Bandung, Indonesia",
    description: "Custom luxury home with bespoke furniture and elegant finishes.",
    image: "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-12-31.png",
    category: "mr_hartono",
  },
  {
    id: 17,
    title: "LUXURY RESIDENCE",
    location: "Bandung, Indonesia",
    description: "Custom luxury home with bespoke furniture and elegant finishes.",
    image: "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-13-00.png",
    category: "mr_hartono",
  },
  {
    id: 18,
    title: "LUXURY RESIDENCE",
    location: "Bandung, Indonesia",
    description: "Custom luxury home with bespoke furniture and elegant finishes.",
    image: "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-14-08.png",
    category: "mr_hartono",
  },
  {
    id: 19,
    title: "LUXURY RESIDENCE",
    location: "Bandung, Indonesia",
    description: "Custom luxury home with bespoke furniture and elegant finishes.",
    image: "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-14-30.png",
    category: "mr_hartono",
  },
  {
    id: 20,
    title: "LUXURY RESIDENCE",
    location: "Bandung, Indonesia",
    description: "Custom luxury home with bespoke furniture and elegant finishes.",
    image: "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-14-57.png",
    category: "mr_hartono",
  },
  {
    id: 21,
    title: "LUXURY RESIDENCE",
    location: "Bandung, Indonesia",
    description: "Custom luxury home with bespoke furniture and elegant finishes.",
    image: "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-15-57.png",
    category: "mr_hartono",
  },
  {
    id: 22,
    title: "LUXURY RESIDENCE",
    location: "Bandung, Indonesia",
    description: "Custom luxury home with bespoke furniture and elegant finishes.",
    image: "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-17-21.png",
    category: "mr_hartono",
  },
  {
    id: 23,
    title: "CONTEMPORARY VILLA",
    location: "Bali, Indonesia",
    description: "Modern villa with open-concept living and natural materials.",
    image: "/gambar_portfolio/mr_rangga/Enscape_2021-01-08-08-54-18.png",
    category: "mr_rangga",
  },
  {
    id: 24,
    title: "CONTEMPORARY VILLA",
    location: "Bali, Indonesia",
    description: "Modern villa with open-concept living and natural materials.",
    image: "/gambar_portfolio/mr_rangga/Enscape_2021-01-08-09-07-40.png",
    category: "mr_rangga",
  },
  {
    id: 25,
    title: "CONTEMPORARY VILLA",
    location: "Bali, Indonesia",
    description: "Modern villa with open-concept living and natural materials.",
    image: "/gambar_portfolio/mr_rangga/Enscape_2021-01-08-09-10-23.png",
    category: "mr_rangga",
  },
  {
    id: 26,
    title: "CONTEMPORARY VILLA",
    location: "Bali, Indonesia",
    description: "Modern villa with open-concept living and natural materials.",
    image: "/gambar_portfolio/mr_rangga/Enscape_2021-01-08-09-17-02.png",
    category: "mr_rangga",
  },
  {
    id: 27,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-01-22-09-36-16.png",
    category: "mr_wisnu",
  },
  {
    id: 28,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-01-22-09-38-48.png",
    category: "mr_wisnu",
  },
  {
    id: 29,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-01-22-10-44-48.png",
    category: "mr_wisnu",
  },
  {
    id: 30,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-01-22-10-47-37.png",
    category: "mr_wisnu",
  },
  {
    id: 31,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-01-22-13-20-14.png",
    category: "mr_wisnu",
  },
  {
    id: 32,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-30-04.png",
    category: "mr_wisnu",
  },
  {
    id: 33,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-43-23.png",
    category: "mr_wisnu",
  },
  {
    id: 34,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-43-45.png",
    category: "mr_wisnu",
  },
  {
    id: 35,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-47-26.png",
    category: "mr_wisnu",
  },
  {
    id: 36,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-47-57.png",
    category: "mr_wisnu",
  },
  {
    id: 37,
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description: "Clean, minimalist residence with thoughtful space planning.",
    image: "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-53-45.png",
    category: "mr_wisnu",
  },
  {
    id: 38,
    title: "ELEGANT TOWNHOUSE",
    location: "Jakarta, Indonesia",
    description: "Sophisticated townhouse with custom millwork and designer furnishings.",
    image: "/gambar_portfolio/mrs_lidya/5.png",
    category: "mrs_lidya",
  },
  {
    id: 39,
    title: "URBAN LOFT",
    location: "Jakarta, Indonesia",
    description: "Industrial-inspired loft with high ceilings and custom built-ins.",
    image: "/gambar_portfolio/mrs_nike/Enscape_2025-01-08-21-04-55.png",
    category: "mrs_nike",
  },
  {
    id: 40,
    title: "URBAN LOFT",
    location: "Jakarta, Indonesia",
    description: "Industrial-inspired loft with high ceilings and custom built-ins.",
    image: "/gambar_portfolio/mrs_nike/Enscape_2025-01-21-23-05-00.png",
    category: "mrs_nike",
  },
  {
    id: 41,
    title: "URBAN LOFT",
    location: "Jakarta, Indonesia",
    description: "Industrial-inspired loft with high ceilings and custom built-ins.",
    image: "/gambar_portfolio/mrs_nike/Enscape_2025-01-21-23-07-16.png",
    category: "mrs_nike",
  },
  {
    id: 42,
    title: "URBAN LOFT",
    location: "Jakarta, Indonesia",
    description: "Industrial-inspired loft with high ceilings and custom built-ins.",
    image: "/gambar_portfolio/mrs_nike/Enscape_2025-01-21-23-12-47.png",
    category: "mrs_nike",
  },
  {
    id: 43,
    title: "CORPORATE HEADQUARTERS",
    location: "Jakarta, Indonesia",
    description: "Modern office space designed for collaboration and brand representation.",
    image: "/gambar_portfolio/office_bca/Enscape_2022-06-22-15-39-14.png",
    category: "office_bca",
  },
  {
    id: 44,
    title: "CORPORATE HEADQUARTERS",
    location: "Jakarta, Indonesia",
    description: "Modern office space designed for collaboration and brand representation.",
    image: "/gambar_portfolio/office_bca/Enscape_2022-06-22-15-57-54.png",
    category: "office_bca",
  },
  {
    id: 45,
    title: "CORPORATE HEADQUARTERS",
    location: "Jakarta, Indonesia",
    description: "Modern office space designed for collaboration and brand representation.",
    image: "/gambar_portfolio/office_bca/Enscape_2022-06-22-16-00-09.png",
    category: "office_bca",
  },
  {
    id: 46,
    title: "CORPORATE HEADQUARTERS",
    location: "Jakarta, Indonesia",
    description: "Modern office space designed for collaboration and brand representation.",
    image: "/gambar_portfolio/office_bca/Enscape_2022-06-22-16-00-51.png",
    category: "office_bca",
  },
  {
    id: 47,
    title: "CORPORATE HEADQUARTERS",
    location: "Jakarta, Indonesia",
    description: "Modern office space designed for collaboration and brand representation.",
    image: "/gambar_portfolio/office_bca/Enscape_2022-06-22-16-01-48.png",
    category: "office_bca",
  },
  {
    id: 48,
    title: "CORPORATE HEADQUARTERS",
    location: "Jakarta, Indonesia",
    description: "Modern office space designed for collaboration and brand representation.",
    image: "/gambar_portfolio/office_bca/Enscape_2022-06-22-16-02-44.png",
    category: "office_bca",
  },
  {
    id: 49,
    title: "CORPORATE HEADQUARTERS",
    location: "Jakarta, Indonesia",
    description: "Modern office space designed for collaboration and brand representation.",
    image: "/gambar_portfolio/office_bca/Enscape_2022-06-22-16-06-40.png",
    category: "office_bca",
  },
]

export default function ProjectPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="container mx-auto px-4 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-12 text-center">OUR PROJECTS</h1>

        {/* Category Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 min-w-max md:justify-center pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 text-sm md:text-base whitespace-nowrap transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-foreground text-background font-medium"
                    : "bg-secondary text-foreground hover:bg-accent",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-lg font-medium">View Project</span>
                  </div>
                </div>
                <h2 className="text-xl font-light mb-1">{project.title}</h2>
                <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                <p className="text-sm">{project.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-light mb-2">No projects found in this category</h3>
            <p className="text-muted-foreground">Please check back later or select another category.</p>
          </div>
        )}

        {/* <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-6">FEATURED CLIENTS</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`/placeholder.svg?height=64&width=128&text=Client${i}`}
                  alt={`Client ${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div> */}
      </section>
      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo-knt-circle.svg?height=40&width=150&text=KNT+Design"
                alt="KNT Design Interior"
                width={150}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-muted-foreground mb-4">
                Creating sophisticated urban living spaces that inspire and comfort.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="text-sm text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/project" className="text-sm text-muted-foreground hover:text-foreground">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <address className="not-italic">
                <p className="text-sm text-muted-foreground mb-2">Indonesia</p>
                <p className="text-sm text-muted-foreground mb-2">+62 858 4202 7673</p>
                <p className="text-sm text-muted-foreground">Kntdesigninterior@gmail.com</p>
              </address>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/febri.toni.33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 5.0163 3.6769 9.1673 8.4375 9.877V15.4688h-2.5391v-2.5938h2.5391v-1.9766c0-2.5062 1.4922-3.8946 3.7773-3.8946 1.0941 0 2.2383.1954 2.2383.1954v2.4609h-1.2617c-1.2438 0-1.6328.7734-1.6328 1.5625v1.6524h2.7734l-.4434 2.5938h-2.33v6.4082C18.3231 21.1673 22 17.0163 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/kntdesigninterior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2C4.8505 2 2.5 4.3505 2.5 7.25v9.5C2.5 19.6495 4.8505 22 7.75 22h8.5c2.8995 0 5.25-2.3505 5.25-5.25v-9.5C21.5 4.3505 19.1495 2 16.25 2h-8.5zm0 1.5h8.5c2.0702 0 3.75 1.6798 3.75 3.75v9.5c0 2.0702-1.6798 3.75-3.75 3.75h-8.5c-2.0702 0-3.75-1.6798-3.75-3.75v-9.5c0-2.0702 1.6798-3.75 3.75-3.75zm8.75 2.25a.75.75 0 1 0 0 1.5h.008a.75.75 0 0 0 0-1.5h-.008zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KNT Design Interior. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
