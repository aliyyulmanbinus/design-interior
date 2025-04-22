"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
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
                src="/placeholder.svg?height=600&width=800&text=Map"
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
                  href="https://www.facebook.com/Knt-Desain"
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
    </main>
  )
}
