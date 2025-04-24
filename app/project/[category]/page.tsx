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
    title: "APARTEMEN 1BR (ONE BEDROOM)",
    location: "Jakarta, Indonesia",
    description:
      "Contemporary one-bedroom apartment with minimalist design and smart storage solutions. This project focused on maximizing space efficiency while maintaining an open, airy feel. Custom furniture pieces were designed to fit the exact dimensions of the space, and a neutral color palette with strategic accent colors creates visual interest without overwhelming the compact layout.",
    images: [
      "/gambar_portfolio/apartemen_1br/Enscape_2025-02-23-18-22-11.png",
      "/gambar_portfolio/apartemen_1br/Enscape_2025-02-23-18-23-08.png",
      "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-26-52.png",
      "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-27-05.png",
      "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-28-43.png",
      "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-28-56.png",
      "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-33-09.png",
      "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-33-33.png",
      "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-33-52.png",
      "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-34-03.png",
      "/gambar_portfolio/apartemen_1br/Enscape_2025-04-08-22-34-15.png",
    ],
    client: "Private Client",
    year: "2023",
    services: ["Space Planning", "Custom Furniture Design", "Material Selection", "Lighting Design"],
  },
  meeting_room: {
    title: "MEETING ROOM",
    location: "Jakarta, Indonesia",
    description:
      "Sophisticated meeting space designed for productivity and impression. This corporate meeting room balances functionality with aesthetic appeal, featuring state-of-the-art technology seamlessly integrated into the elegant design. Acoustic considerations were paramount, with sound-absorbing materials incorporated throughout to ensure privacy and clarity during important discussions.",
    images: [
      "/gambar_portfolio/meeting_room/Enscape_2025-01-22-23-42-53.png",
      "/gambar_portfolio/meeting_room/Enscape_2025-01-22-23-43-52.png",
      "/gambar_portfolio/meeting_room/Enscape_2025-01-22-23-44-07.png",
      "/gambar_portfolio/meeting_room/Enscape_2025-01-22-23-44-57.png",
    ],
    client: "Corporate Client",
    year: "2023",
    services: ["Space Planning", "Acoustic Design", "Technology Integration", "Furniture Selection"],
  },
  mr_hartono: {
    title: "MR. HARTONO",
    location: "Bandung, Indonesia",
    description:
      "Custom luxury home with bespoke furniture and elegant finishes. This residence exemplifies sophisticated living, with carefully curated materials and custom-designed elements throughout. The design balances grandeur with comfort, creating spaces that are both impressive and inviting. Particular attention was paid to the flow between rooms, ensuring a cohesive experience throughout the home.",
    images: [
      "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-12-31.png",
      "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-13-00.png",
      "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-14-08.png",
      "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-14-30.png",
      "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-14-57.png",
      "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-15-57.png",
      "/gambar_portfolio/mr_hartono/Enscape_2022-02-04-17-17-21.png",
    ],
    client: "Mr. Hartono",
    year: "2023",
    services: ["Full Interior Design", "Custom Furniture", "Material Selection", "Art Curation"],
  },
  mr_rangga: {
    title: "MR. RANGGA",
    location: "Bali, Indonesia",
    description:
      "Modern villa with open-concept living and natural materials. This Bali villa embraces indoor-outdoor living with sliding glass walls that open to lush gardens and a private pool. The interior features a carefully curated mix of contemporary furniture and traditional Indonesian elements, creating a space that feels both current and connected to its location.",
    images: [
      "/gambar_portfolio/mr_rangga/Enscape_2021-01-08-08-54-18.png",
      "/gambar_portfolio/mr_rangga/Enscape_2021-01-08-09-07-40.png",
      "/gambar_portfolio/mr_rangga/Enscape_2021-01-08-09-10-23.png",
      "/gambar_portfolio/mr_rangga/Enscape_2021-01-08-09-17-02.png",
    ],
    client: "Mr. Rangga",
    year: "2022",
    services: ["Full Interior Design", "Landscape Integration", "Custom Furniture", "Lighting Design"],
  },
  mr_wisnu: {
    title: "MR. WISNU",
    location: "Surabaya, Indonesia",
    description:
      "Clean, minimalist residence with thoughtful space planning. This home embodies the principle that less is more, with carefully considered details and a restrained material palette. The design focuses on quality over quantity, with each element serving both a functional and aesthetic purpose.",
    images: [
      "/gambar_portfolio/mr_wisnu/Enscape_2022-01-22-09-36-16.png",
      "/gambar_portfolio/mr_wisnu/Enscape_2022-01-22-09-38-48.png",
      "/gambar_portfolio/mr_wisnu/Enscape_2022-01-22-10-44-48.png",
      "/gambar_portfolio/mr_wisnu/Enscape_2022-01-22-10-47-37.png",
      "/gambar_portfolio/mr_wisnu/Enscape_2022-01-22-13-20-14.png",
      "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-30-04.png",
      "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-43-23.png",
      "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-43-45.png",
      "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-47-26.png",
      "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-47-57.png",
      "/gambar_portfolio/mr_wisnu/Enscape_2022-02-11-16-53-45.png",
    ],
    client: "Mr. Wisnu",
    year: "2023",
    services: ["Space Planning", "Minimalist Design", "Storage Solutions", "Material Selection"],
  },
  mrs_lidya: {
    title: "MRS. LIDYA",
    location: "Jakarta, Indonesia",
    description:
      "Sophisticated townhouse with custom millwork and designer furnishings. This urban residence balances classic and contemporary elements to create a timeless interior. Custom built-ins maximize the available space while adding architectural interest.",
    images: [
      "/gambar_portfolio/mrs_lidya/5.png",
      // "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Dining",
      // "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Master",
      // "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Kitchen",
      // "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Powder",
    ],
    client: "Mrs. Lidya",
    year: "2022",
    services: ["Interior Design", "Custom Millwork", "Furniture Selection", "Art Curation"],
  },
  mrs_nike: {
    title: "MRS. NIKE",
    location: "Jakarta, Indonesia",
    description:
      "Inspired by traditional Japanese design, this interior emphasizes balance, nature, and intentional living. Natural wood tones, tatami textures, and sliding shoji screens evoke a serene atmosphere. With an open layout and minimal decor, the space invites mindfulness and calm—an ideal retreat from the chaos of daily life.",
    images: [
      "/gambar_portfolio/mrs_nike/Enscape_2025-01-08-21-04-55.png",
      "/gambar_portfolio/mrs_nike/Enscape_2025-01-21-23-05-00.png",
      "/gambar_portfolio/mrs_nike/Enscape_2025-01-21-23-07-16.png",
      "/gambar_portfolio/mrs_nike/Enscape_2025-01-21-23-12-47.png",
    ],
    client: "Mrs. Nike",
    year: "2023",
    services: ["Loft Conversion", "Industrial Design", "Custom Storage", "Lighting Design"],
  },
  office_bca: {
    title: "OFFICE BCA",
    location: "Jakarta, Indonesia",
    description:
      "Modern office space designed for collaboration and brand representation. This corporate headquarters was designed to reflect the company's forward-thinking culture and facilitate different work styles. The layout includes a variety of spaces, from focused work areas to collaborative zones and formal meeting rooms.",
    images: [
      "/gambar_portfolio/office_bca/Enscape_2022-06-22-15-39-14.png",
      "/gambar_portfolio/office_bca/Enscape_2022-06-22-15-57-54.png",
      "/gambar_portfolio/office_bca/Enscape_2022-06-22-16-00-09.png",
      "/gambar_portfolio/office_bca/Enscape_2022-06-22-16-00-51.png",
      "/gambar_portfolio/office_bca/Enscape_2022-06-22-16-01-48.png",
      "/gambar_portfolio/office_bca/Enscape_2022-06-22-16-02-44.png",
      "/gambar_portfolio/office_bca/Enscape_2022-06-22-16-06-40.png",
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
