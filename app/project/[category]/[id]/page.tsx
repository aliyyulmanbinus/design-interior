"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { ArrowLeft } from "lucide-react"
import ImageCarousel from "@/components/image-carousel"

// Define TypeScript interfaces for our project data structure
interface ProjectDetails {
  title: string
  location: string
  description: string
  images: string[]
}

// Define the structure of our project data
interface ProjectsDataType {
  [category: string]: {
    [id: string]: ProjectDetails
  }
}

// Sample project details with multiple images
const projectsData: ProjectsDataType = {
  apartemen_1br: {
    "1": {
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
    },
    "9": {
      title: "STUDIO APARTMENT",
      location: "Jakarta, Indonesia",
      description:
        "Efficient studio apartment with multi-functional furniture. This compact space was designed to maximize functionality without sacrificing style. Every element serves multiple purposes, from the custom-built storage solutions to the transformable furniture pieces. The design emphasizes clean lines and a cohesive color scheme to create a sense of spaciousness and harmony.",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Studio+Apartment+Main",
        "/placeholder.svg?height=800&width=1200&text=Studio+Apartment+Kitchen",
        "/placeholder.svg?height=800&width=1200&text=Studio+Apartment+Bathroom",
        "/placeholder.svg?height=800&width=1200&text=Studio+Apartment+Storage",
        "/placeholder.svg?height=800&width=1200&text=Studio+Apartment+Detail",
      ],
    },
  },
  meeting_room: {
    "2": {
      title: "EXECUTIVE MEETING ROOM",
      location: "Jakarta, Indonesia",
      description:
        "Sophisticated meeting space designed for productivity and impression. This corporate meeting room balances functionality with aesthetic appeal, featuring state-of-the-art technology seamlessly integrated into the elegant design. Acoustic considerations were paramount, with sound-absorbing materials incorporated throughout to ensure privacy and clarity during important discussions.",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Meeting+Room+Main",
        "/placeholder.svg?height=800&width=1200&text=Meeting+Room+Detail",
        "/placeholder.svg?height=800&width=1200&text=Meeting+Room+Technology",
        "/placeholder.svg?height=800&width=1200&text=Meeting+Room+Seating",
        "/placeholder.svg?height=800&width=1200&text=Meeting+Room+Overview",
      ],
    },
    "10": {
      title: "CONFERENCE CENTER",
      location: "Jakarta, Indonesia",
      description:
        "Large-scale meeting facility with state-of-the-art technology. This conference center was designed to accommodate various meeting formats, from intimate discussions to large presentations. The space features flexible seating arrangements, integrated audiovisual systems, and carefully considered acoustics. Materials were selected for their durability and aesthetic appeal, creating an environment that is both functional and impressive.",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Conference+Center+Main",
        "/placeholder.svg?height=800&width=1200&text=Conference+Center+Seating",
        "/placeholder.svg?height=800&width=1200&text=Conference+Center+Technology",
        "/placeholder.svg?height=800&width=1200&text=Conference+Center+Detail",
        "/placeholder.svg?height=800&width=1200&text=Conference+Center+Overview",
      ],
    },
  },
  mr_hartono: {
    "3": {
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
      ],
    },
    "11": {
      title: "PENTHOUSE SUITE",
      location: "Jakarta, Indonesia",
      description:
        "Luxury penthouse with panoramic views and custom details. This high-end residence takes full advantage of its elevated position with floor-to-ceiling windows that frame spectacular city views. The interior design complements rather than competes with these views, featuring a sophisticated palette of materials and textures. Custom furniture pieces were designed specifically for the space, ensuring perfect proportions and functionality.",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Penthouse+Living",
        "/placeholder.svg?height=800&width=1200&text=Penthouse+Dining",
        "/placeholder.svg?height=800&width=1200&text=Penthouse+Master",
        "/placeholder.svg?height=800&width=1200&text=Penthouse+Kitchen",
        "/placeholder.svg?height=800&width=1200&text=Penthouse+Terrace",
      ],
    },
  },
  mr_rangga: {
    "4": {
      title: "CONTEMPORARY VILLA",
      location: "Bali, Indonesia",
      description:
        "Modern villa with open-concept living and natural materials. This Bali villa embraces indoor-outdoor living with sliding glass walls that open to lush gardens and a private pool. The interior features a carefully curated mix of contemporary furniture and traditional Indonesian elements, creating a space that feels both current and connected to its location. Natural materials like teak, rattan, and local stone add warmth and authenticity.",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Mr.+Rangga+Living",
        "/placeholder.svg?height=800&width=1200&text=Mr.+Rangga+Outdoor",
        "/placeholder.svg?height=800&width=1200&text=Mr.+Rangga+Bedroom",
        "/placeholder.svg?height=800&width=1200&text=Mr.+Rangga+Kitchen",
        "/placeholder.svg?height=800&width=1200&text=Mr.+Rangga+Pool",
      ],
    },
    "12": {
      title: "BEACH HOUSE",
      location: "Bali, Indonesia",
      description:
        "Coastal retreat with indoor-outdoor living spaces. This beachfront property celebrates its stunning location with a design that blurs the boundaries between inside and outside. Natural materials and a palette inspired by the surrounding landscape create a serene atmosphere that complements the coastal setting. Durable, weather-resistant finishes ensure the space will maintain its beauty despite the challenging seaside environment.",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Beach+House+Main",
        "/placeholder.svg?height=800&width=1200&text=Beach+House+Deck",
        "/placeholder.svg?height=800&width=1200&text=Beach+House+Bedroom",
        "/placeholder.svg?height=800&width=1200&text=Beach+House+Kitchen",
        "/placeholder.svg?height=800&width=1200&text=Beach+House+View",
      ],
    },
  },
  mr_wisnu: {
    "5": {
      title: "MINIMALIST HOME",
      location: "Surabaya, Indonesia",
      description:
        "Clean, minimalist residence with thoughtful space planning. This home embodies the principle that less is more, with carefully considered details and a restrained material palette. The design focuses on quality over quantity, with each element serving both a functional and aesthetic purpose. Strategic lighting highlights architectural features and creates atmosphere, while built-in storage maintains the clean, uncluttered aesthetic.",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Mr.+Wisnu+Living",
        "/placeholder.svg?height=800&width=1200&text=Mr.+Wisnu+Dining",
        "/placeholder.svg?height=800&width=1200&text=Mr.+Wisnu+Bedroom",
        "/placeholder.svg?height=800&width=1200&text=Mr.+Wisnu+Study",
        "/placeholder.svg?height=800&width=1200&text=Mr.+Wisnu+Detail",
      ],
    },
  },
  mrs_lidya: {
    "6": {
      title: "ELEGANT TOWNHOUSE",
      location: "Jakarta, Indonesia",
      description:
        "Sophisticated townhouse with custom millwork and designer furnishings. This urban residence balances classic and contemporary elements to create a timeless interior. Custom built-ins maximize the available space while adding architectural interest. The color palette is sophisticated and restrained, with carefully selected accent pieces adding personality and visual interest. Luxurious textiles and finishes elevate the space, creating an atmosphere of refined comfort.",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Living",
        "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Dining",
        "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Master",
        "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Kitchen",
        "/placeholder.svg?height=800&width=1200&text=Mrs.+Lidya+Powder",
      ],
    },
  },
  mrs_nike: {
    "7": {
      title: "URBAN LOFT",
      location: "Jakarta, Indonesia",
      description:
        "Industrial-inspired loft with high ceilings and custom built-ins. This converted loft space celebrates its industrial heritage with exposed brick, concrete surfaces, and steel details. These raw elements are balanced with warm woods, plush textiles, and carefully selected furnishings to create a space that feels both edgy and comfortable. Custom storage solutions were designed to take advantage of the generous ceiling height while maintaining the open feel of the space.",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Mrs.+Nike+Living",
        "/placeholder.svg?height=800&width=1200&text=Mrs.+Nike+Kitchen",
        "/placeholder.svg?height=800&width=1200&text=Mrs.+Nike+Bedroom",
        "/placeholder.svg?height=800&width=1200&text=Mrs.+Nike+Bathroom",
        "/placeholder.svg?height=800&width=1200&text=Mrs.+Nike+Office",
      ],
    },
  },
  office_bca: {
    "8": {
      title: "CORPORATE HEADQUARTERS",
      location: "Jakarta, Indonesia",
      description:
        "Modern office space designed for collaboration and brand representation. This corporate headquarters was designed to reflect the company's forward-thinking culture and facilitate different work styles. The layout includes a variety of spaces, from focused work areas to collaborative zones and formal meeting rooms. Brand colors and values are subtly incorporated throughout the design, creating an environment that reinforces company identity while providing an inspiring place to work.",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Office+BCA+Reception",
        "/placeholder.svg?height=800&width=1200&text=Office+BCA+Workspace",
        "/placeholder.svg?height=800&width=1200&text=Office+BCA+Meeting",
        "/placeholder.svg?height=800&width=1200&text=Office+BCA+Lounge",
        "/placeholder.svg?height=800&width=1200&text=Office+BCA+Executive",
      ],
    },
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const category = params.category as string
  const id = params.id as string

  // Get project data - now TypeScript knows this is valid
  const projectData = projectsData[category]?.[id]

  // If project doesn't exist, show a message
  if (!projectData) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-light mb-6">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link href="/project" className="inline-flex items-center text-foreground hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="container mx-auto px-4 py-12 md:py-24">
        <Link href="/project" className="inline-flex items-center text-gray-300 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Image Carousel */}
        <ImageCarousel images={projectData.images} />

        {/* Project Details */}
        <div className="max-w-3xl mx-auto mt-12">
          <h1 className="text-3xl md:text-4xl font-light mb-4">{projectData.title}</h1>
          <p className="text-gray-300 mb-6">{projectData.location}</p>
          <div className="prose prose-invert max-w-none">
            <p>{projectData.description}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
