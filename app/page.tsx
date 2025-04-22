import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider leading-tight mb-8">
            KURNIA INTERIOR
            <br />
            STUDIO
          </h1>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none px-8 py-6"
            >
              Konsultasi Ruang
            </Button>
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[500px] aspect-square rounded-full overflow-hidden">
            <Image
              src="/logo-knt-circle.svg?height=800&width=800"
              alt="Sophisticated Interior Design"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-wider">FEATURED PROJECTS</h2>
            <Link href="/project" className="flex items-center gap-2 mt-4 md:mt-0 group">
              <span className="text-sm font-medium group-hover:underline">VIEW ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={`/gambar_portfolio/apartemen_1br/Enscape_2025-02-23-18-22-11.png`}
                    alt={`Featured Project ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-lg font-medium">View Details</span>
                  </div>
                </div>
                <h3 className="text-xl font-light mb-1">
                  {i === 1 ? "LUXURY APARTMENT" : i === 2 ? "MODERN VILLA" : "BOUTIQUE HOTEL"}
                </h3>
                <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center mb-6">OUR SERVICES</h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16">Transforming Spaces, Elevating Lifestyles</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "RESIDENTIAL",
                icon: "🏠",
                desc: "We bring homes to life with customized interiors that reflect your personality and enhance your everyday living.",
              },
              {
                title: "COMMERCIAL",
                icon: "🏢",
                desc: "Make a lasting impression with thoughtfully designed workspaces, retail stores, and hospitality venues.",
              },
              {
                title: "SPACE PLANNING",
                icon: "📐",
                desc: "Maximize the potential of your space with smart, efficient layouts tailored for beauty and function.",
              },
              {
                title: "3D VISUALIZATION",
                icon: "🖥️",
                desc: "See it before it's real. Our photorealistic renderings let you preview your future space with precision.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-secondary p-8 text-center group hover:bg-accent transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-light mb-4">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{service.desc}</p>
                <Link href="/service" className="inline-flex items-center gap-2 text-sm group-hover:underline">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center mb-16">CLIENT TESTIMONIALS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                quote:
                  "KNT Design Interior transformed our apartment into a sophisticated haven. Their attention to detail and understanding of our lifestyle needs was impressive.",
              },
              {
                name: "Michael Chen",
                role: "CEO, Tech Innovations",
                quote:
                  "Our office redesign by KNT Design Interior has significantly improved employee satisfaction and productivity. The space perfectly represents our brand values.",
              },
              {
                name: "Anita Wijaya",
                role: "Restaurant Owner",
                quote:
                  "The team at KNT Design Interior created a dining atmosphere that has become part of our restaurant's identity. Our customers love the ambiance as much as the food.",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-background p-8 relative">
                <div className="text-4xl text-muted absolute top-4 left-4">"</div>
                <p className="text-muted-foreground mb-8 relative z-10 pt-6">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-square rounded-full overflow-hidden">
                <Image
                  src="/logo-knt-circle.svg?height=800&width=800&text=About+Us"
                  alt="KNT Design Interior Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8">ABOUT KNT DESIGN INTERIOR</h2>
              <p className="text-lg mb-6">
                Established in 2023, KNT Design Interior is a dynamic interior design company dedicated to creating
                spaces that truly reflect the identity and lifestyle of each client. We specialize in providing tailored
                interior design solutions for both residential and commercial environments—where comfort, functionality,
                and style go hand in hand.
              </p>
              <p className="text-lg mb-8">
                Our services are crafted to align with your vision and budget, whether you're designing your dream home
                or refining a business space. From thoughtful space planning and efficient layout optimization to
                curated color palettes and material selections, we ensure every detail works together harmoniously.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none px-8 py-6"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-6">READY TO TRANSFORM YOUR SPACE?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let's collaborate to create a space that reflects your unique style and meets your functional needs. Contact
            us today to schedule a consultation.
          </p>
          <Link href="/contact">
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6">
              Contact Us
            </Button>
          </Link>
        </div>
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
                <p className="text-sm text-muted-foreground">Kntdesaigninterior@gmail.com</p>
              </address>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/Knt-Desain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  F
                </a>
                <a
                  href="https://www.instagram.com/kntdesigninterior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  I
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
