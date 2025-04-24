"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Define TypeScript interfaces for our project data structure
interface ProjectDetail {
  title: string
  location: string
  description: string
  images: string[]
  client: string
  year: string
  services: string[]
}

interface ProjectsDataType {
  [category: string]: ProjectDetail
}

// Sample project details with multiple images
const projectsData: ProjectsDataType = {
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
  mr_rangga: {
    title: "CONTEMPORARY VILLA",
    location: "Bali, Indonesia",
    description:
      "Modern villa with open-concept living and natural materials. This Bali villa embraces indoor-outdoor living with sliding glass walls that open to lush gardens and a private pool. The interior features a carefully curated mix of contemporary furniture and traditional Indonesian elements, creating a space that feels both current and connected to its location.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Mr.+Rangga+Living",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Rangga+Outdoor",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Rangga+Bedroom",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Rangga+Kitchen",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Rangga+Pool",
    ],
    client: "Mr. Rangga",
    year: "2022",
    services: ["Full Interior Design", "Landscape Integration", "Custom Furniture", "Lighting Design"],
  },
  mr_wisnu: {
    title: "MINIMALIST HOME",
    location: "Surabaya, Indonesia",
    description:
      "Clean, minimalist residence with thoughtful space planning. This home embodies the principle that less is more, with carefully considered details and a restrained material palette. The design focuses on quality over quantity, with each element serving both a functional and aesthetic purpose.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Mr.+Wisnu+Living",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Wisnu+Dining",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Wisnu+Bedroom",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Wisnu+Study",
      "/placeholder.svg?height=800&width=1200&text=Mr.+Wisnu+Detail",
    ],
    client: "Mr. Wisnu",
    year: "2023",
    services: ["Space Planning", "Minimalist Design", "Storage Solutions", "Material Selection"],
  },
  mrs_lidya: {
    title: "ELEGANT TOWNHOUSE",
    location: "Jakarta, Indonesia",
    description:
      "Sophisticated townhouse with custom millwork and designer furnishings. This urban residence balances classic and contemporary elements to create a timeless interior. Custom built-ins maximize the available space while adding architectural interest.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Living",
      "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Dining",
      "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Master",
      "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Kitchen",
      "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Powder",
    ],
    client: "Mrs. Lidya",
    year: "2022",
    services: ["Interior Design", "Custom Millwork", "Furniture Selection", "Art Curation"],
  },
  mrs_nike: {
    title: "URBAN LOFT",
    location: "Jakarta, Indonesia",
    description:
      "Industrial-inspired loft with high ceilings and custom built-ins. This converted loft space celebrates its industrial heritage with exposed brick, concrete surfaces, and steel details. These raw elements are balanced with warm woods, plush textiles, and carefully selected furnishings.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Mrs.+Nike+Living",
      "/placeholder.svg?height=800&width=1200&text=Mrs.+Nike+Kitchen",
      "/placeholder.svg?height=800&width=1200&text=Mrs.+Nike+Bedroom",
      "/placeholder.svg?height=800&width=1200&text=Mrs.+Nike+Bathroom",
      "/placeholder.svg?height=800&width=1200&text=Mrs.+Nike+Office",
    ],
    client: "Mrs. Nike",
    year: "2023",
    services: ["Loft Conversion", "Industrial Design", "Custom Storage", "Lighting Design"],
  },
  office_bca: {
    title: "CORPORATE HEADQUARTERS",
    location: "Jakarta, Indonesia",
    description:
      "Modern office space designed for collaboration and brand representation. This corporate headquarters was designed to reflect the company's forward-thinking culture and facilitate different work styles. The layout includes a variety of spaces, from focused work areas to collaborative zones and formal meeting rooms.",
    images: [
      "/placeholder.svg?height=800&width=1200&text=Office+BCA+Reception",
      "/placeholder.svg?height=800&width=1200&text=Office+BCA+Workspace",
      "/placeholder.svg?height=800&width=1200&text=Office+BCA+Meeting",
      "/placeholder.svg?height=800&width=1200&text=Office+BCA+Lounge",
      "/placeholder.svg?height=800&width=1200&text=Office+BCA+Executive",
    ],
    client: "BCA",
    year: "2022",
    services: ["Corporate Design", "Space Planning", "Furniture Selection", "Brand Integration"],
  },
}

export default function CategoryDetailPage() {
  const params = useParams()
  const category = params.category as string
  const project = projectsData[category]

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
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="container mx-auto px-4 py-12 md:py-24">
        <Link href="/project" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/30 hover:bg-background/50 p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/30 hover:bg-background/50 p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {project.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative w-20 h-20 flex-shrink-0 ${activeImageIndex === index ? "ring-2 ring-foreground" : "opacity-70"}`}
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
              {project.images.map((image: string, index: number) => (
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
                  <DialogContent className="max-w-5xl bg-background border-border">
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
            <p className="text-muted-foreground mb-6">{project.location}</p>

            <div className="prose prose-invert dark:prose-invert max-w-none mb-8">
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
                  {project.services.map((service: string, index: number) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 w-full">
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
