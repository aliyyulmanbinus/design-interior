import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Interior Design Studio | Professional Interior Design Services",
  description:
    "Award-winning interior design studio specializing in creating beautiful, functional spaces that reflect your unique style and personality.",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Logo" />
            <span className="text-xl">INTERIOR</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:flex">
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Interior Design Hero"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Transforming Spaces Into Experiences
              </h1>
              <p className="mt-6 text-lg leading-8">
                Award-winning interior design studio specializing in creating beautiful, functional spaces that reflect
                your unique style and personality.
              </p>
              <div className="mt-10 flex gap-4">
                <Button asChild size="lg">
                  <Link href="#projects">View Our Work</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-background/20 hover:bg-background/30 text-white"
                >
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                  Explore our portfolio of carefully crafted interiors that blend aesthetics with functionality.
                </p>
              </div>
              <Button variant="ghost" className="mt-4 md:mt-0 group" asChild>
                <Link href="/projects" className="flex items-center gap-2">
                  View All Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Modern Minimalist Apartment"
                description="A clean, minimalist design for a city apartment that maximizes space and light."
                imageSrc="/placeholder.svg?height=600&width=800"
                category="Residential"
                href="/projects/modern-minimalist"
              />
              <ProjectCard
                title="Luxury Villa Renovation"
                description="Complete renovation of a luxury villa with custom furniture and premium finishes."
                imageSrc="/placeholder.svg?height=600&width=800"
                category="Residential"
                href="/projects/luxury-villa"
              />
              <ProjectCard
                title="Boutique Hotel Lobby"
                description="A welcoming yet sophisticated lobby design for a boutique hotel in the city center."
                imageSrc="/placeholder.svg?height=600&width=800"
                category="Commercial"
                href="/projects/boutique-hotel"
              />
              <ProjectCard
                title="Contemporary Office Space"
                description="A productive and inspiring workspace designed for a tech startup."
                imageSrc="/placeholder.svg?height=600&width=800"
                category="Commercial"
                href="/projects/office-space"
              />
              <ProjectCard
                title="Scandinavian-Inspired Home"
                description="A warm and cozy family home with Scandinavian design principles."
                imageSrc="/placeholder.svg?height=600&width=800"
                category="Residential"
                href="/projects/scandinavian-home"
              />
              <ProjectCard
                title="Restaurant Redesign"
                description="A complete redesign of a popular restaurant to enhance the dining experience."
                imageSrc="/placeholder.svg?height=600&width=800"
                category="Commercial"
                href="/projects/restaurant-redesign"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Interior Designer"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">About Our Studio</h2>
                <p className="text-lg mb-4">
                  Founded in 2010, our interior design studio has been transforming spaces into beautiful, functional
                  environments that reflect our clients' unique personalities and needs.
                </p>
                <p className="text-lg mb-4">
                  With a team of experienced designers and a network of skilled craftsmen, we handle projects of all
                  sizes, from single-room makeovers to complete home renovations and commercial spaces.
                </p>
                <p className="text-lg mb-8">
                  Our approach combines creativity with practicality, ensuring that every design is not only
                  aesthetically pleasing but also perfectly suited to your lifestyle or business requirements.
                </p>
                <Button asChild size="lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                    <path d="M12 12h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Residential Design</h3>
                <p className="text-muted-foreground mb-6">
                  Transform your home into a space that reflects your personality and meets your needs, from single
                  rooms to complete renovations.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services/residential">Learn More</Link>
                </Button>
              </div>
              <div className="bg-background p-8 rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7v10" />
                    <path d="M11 7v10" />
                    <path d="m15 7 2 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Commercial Design</h3>
                <p className="text-muted-foreground mb-6">
                  Create productive, inspiring workspaces and commercial environments that enhance your brand and
                  business operations.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services/commercial">Learn More</Link>
                </Button>
              </div>
              <div className="bg-background p-8 rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Furniture</h3>
                <p className="text-muted-foreground mb-6">
                  Design and create bespoke furniture pieces that perfectly fit your space and complement your interior
                  design.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services/furniture">Learn More</Link>
                </Button>
              </div>
              <div className="bg-background p-8 rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M2 12h20" />
                    <path d="M2 12v8a1 1 0 0 0 1 1h5" />
                    <path d="M22 12v8a1 1 0 0 1-1 1h-5" />
                    <path d="M12 2v20" />
                    <path d="M12 2h8a1 1 0 0 1 1 1v5" />
                    <path d="M12 2H4a1 1 0 0 0-1 1v5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Space Planning</h3>
                <p className="text-muted-foreground mb-6">
                  Optimize your layout for flow, functionality, and aesthetics with our expert space planning services.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services/space-planning">Learn More</Link>
                </Button>
              </div>
              <div className="bg-background p-8 rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Material Selection</h3>
                <p className="text-muted-foreground mb-6">
                  Choose the perfect materials, finishes, and color palettes to bring your design vision to life.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services/materials">Learn More</Link>
                </Button>
              </div>
              <div className="bg-background p-8 rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary h-6 w-6"
                  >
                    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
                    <path d="M10 19v-3.96V19Z" />
                    <path d="M7 19h6" />
                    <path d="M18 12V9" />
                    <path d="M18 23v-7" />
                    <path d="M22 16h-8" />
                    <path d="M22 12h-8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Project Management</h3>
                <p className="text-muted-foreground mb-6">
                  Let us handle every aspect of your design project, from concept to completion, ensuring a smooth and
                  stress-free experience.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/services/project-management">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-16">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Working with this design team was an absolute pleasure. They transformed our outdated living space into a modern, functional home that perfectly reflects our style."
                author="Sarah Johnson"
                role="Homeowner"
                avatarSrc="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="The attention to detail and creativity they brought to our office redesign was exceptional. Our team loves the new space, and it's made a real difference to our work environment."
                author="Michael Chen"
                role="CEO, Tech Startup"
                avatarSrc="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="From concept to completion, the process was seamless. They listened to our needs and delivered a beautiful, functional space that exceeded our expectations."
                author="Emma Rodriguez"
                role="Restaurant Owner"
                avatarSrc="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get in Touch</h2>
                <p className="text-lg mb-8">
                  Ready to transform your space? Contact us to discuss your project and schedule a consultation.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Visit Us</h3>
                      <p className="text-muted-foreground">123 Design Street, Creative District, City</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-muted-foreground">hello@interiordesign.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 font-semibold mb-4">
                <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Logo" />
                <span className="text-xl">INTERIOR</span>
              </Link>
              <p className="text-muted-foreground">
                Creating beautiful, functional spaces that reflect your unique style and personality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-foreground">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/residential" className="text-muted-foreground hover:text-foreground">
                    Residential Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial" className="text-muted-foreground hover:text-foreground">
                    Commercial Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/furniture" className="text-muted-foreground hover:text-foreground">
                    Custom Furniture
                  </Link>
                </li>
                <li>
                  <Link href="/services/project-management" className="text-muted-foreground hover:text-foreground">
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Interior Design Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

