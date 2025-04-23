"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    alert("Thank you for your message. We will contact you soon!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="container mx-auto px-4 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-12 text-center">CONTACT US</h1>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-secondary focus:border-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-secondary focus:border-foreground"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-secondary border-secondary focus:border-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-secondary focus:border-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-secondary focus:border-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-none px-8 py-6 w-full md:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square md:aspect-auto md:h-[300px] mb-8">
              <Image
                src="/gambar_portfolio/contactustoni.svg"
                alt="Office Location"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-sm text-muted-foreground">Indonesia</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">+62 858 4202 7673</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">Kntdesaigninterior@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-1 text-muted-foreground" />
                <div>
                  <h3 className="font-medium mb-1">Working Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9AM - 6PM
                    <br />
                    Saturday: 10AM - 2PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">Social Media</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/febri.toni.33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Knt Desain</span>
                </a>
                <a
                  href="https://www.instagram.com/kntdesigninterior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Instagram className="w-5 h-5" />
                  <span>kntdesigninterior</span>
                </a>
              </div>
            </div>
          </div>
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
