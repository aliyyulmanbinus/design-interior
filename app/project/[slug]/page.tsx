"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Sample project details with multiple images
const projectsData = {
  apartemen_1br: {
    title: "MODERN APARTMENT DESIGN",
    location: "Jakarta, Indonesia",
    description:
      "Contemporary one-bedroom apartment with minimalist design and smart storage solutions. This project focused on maximizing space efficiency while maintaining an open, airy feel. Custom furniture pieces were designed to fit the exact dimensions of the space, and a neutral color palette with strategic accent colors creates visual interest without overwhelming the compact layout.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Apartment+1BR+Living",
      "/placeholder.svg?height=800&width=1200&text=Apartment+1BR+Kitchen",
      "/placeholder.svg?height=800&width=1200&text=Apartment+1BR+Bedroom",
      "/placeholder.svg?height=800&width=1200&text=Apartment+1BR+Bathroom",
      "/placeholder.svg?height=800&width=1200&text=Apartment+1BR+Study",
    ],
    client: "Private Client",
    year: "2023",
    services: ["Space Planning", "Custom Furniture Design", "Material Selection", "Lighting Design"],
  },
  meeting_room: {
    title: "EXECUTIVE MEETING ROOM",
    location: "Jakarta, Indonesia",
    description:
      "Sophisticated meeting space designed for productivity and impression. This corporate meeting room balances functionality with aesthetic appeal, featuring state-of-the-art technology seamlessly integrated into the elegant design. Acoustic considerations were paramount, with sound-absorbing materials incorporated throughout to ensure privacy and clarity during important discussions.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Meeting+Room+Main",
      "/placeholder.svg?height=800&width=1200&text=Meeting+Room+Detail",
      "/placeholder.svg?height=800&width=1200&text=Meeting+Room+Technology",
      "/placeholder.svg?height=800&width=1200&text=Meeting+Room+Seating",
    ],
    client: "Corporate Client",
    year: "2023",
    services: ["Space Planning", "Acoustic Design", "Technology Integration", "Furniture Selection"],
  },
  mr_hartono: {
    title: "LUXURY RESIDENCE",
    location: "Bandung, Indonesia",
    description:
      "Custom luxury home with bespoke furniture and elegant finishes. This residence exemplifies sophisticated living, with carefully curated materials and custom-designed elements throughout. The design balances grandeur with comfort, creating spaces that are both impressive and inviting. Particular attention was paid to the flow between rooms, ensuring a cohesive experience throughout the home.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Mr.+Hartono+Living",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Hartono+Dining",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Hartono+Master",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Hartono+Kitchen",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Hartono+Study",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Hartono+Garden",
    ],
    client: "Mr. Hartono",
    year: "2023",
    services: ["Full Interior Design", "Custom Furniture", "Material Selection", "Art Curation"],
  },
  // Additional projects would be defined here
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData[slug]

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // If project doesn't exist, return 404
  if (!project) {
    notFound()
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="container mx-auto px-4 py-12 md:py-24">
        <Link href="/project" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative aspect-[4/3] w-full mb-4">
              <Image
                src={project.images[activeImageIndex] || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative w-20 h-20 flex-shrink-0 ${activeImageIndex === index ? "ring-2 ring-white" : "opacity-70"}`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Lightbox Gallery */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
              {project.images.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <button className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl bg-black border-zinc-800">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-light mb-2">{project.title}</h1>
            <p className="text-gray-300 mb-6">{project.location}</p>

            <div className="prose prose-invert max-w-none mb-8">
              <p>{project.description}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Client</h3>
                <p>{project.client}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Year</h3>
                <p>{project.year}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Services</h3>
                <ul className="list-disc list-inside">
                  {project.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-6 w-full">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
