import Image from "next/image"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="container mx-auto px-4 py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-6 text-center">OUR SERVICES</h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">Transforming Spaces, Elevating Lifestyles</p>
        <p className="text-center max-w-3xl mx-auto mb-16">
          At KNT Design Interior, we offer a full spectrum of interior design services tailored to meet your vision,
          lifestyle, and budget. Whether you're refreshing a single room or redesigning an entire space, our team
          delivers creativity, functionality, and timeless elegance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="flex flex-col">
            <div className="relative w-full aspect-video overflow-hidden mb-6">
              <Image
                src="/gambar_portfolio/residential.jpg"
                alt="Residential Design"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-light mb-4">🏠 RESIDENTIAL DESIGN</h2>
            <p className="mb-6">
              We bring homes to life with customized interiors that reflect your personality and enhance your everyday
              living. From cozy apartments to spacious villas—every detail matters.
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Complete home design and renovation</li>
              <li>Kitchen and bathroom remodeling</li>
              <li>Custom furniture and built-ins</li>
              <li>Color consultation and material selection</li>
              <li>Lighting design and implementation</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="relative w-full aspect-video overflow-hidden mb-6">
              <Image
                src="/gambar_portfolio/commercial.jpg"
                alt="Commercial Design"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-light mb-4">🏢 COMMERCIAL DESIGN</h2>
            <p className="mb-6">
              Make a lasting impression with thoughtfully designed workspaces, retail stores, and hospitality venues
              that balance aesthetics with purpose.
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Office and workspace planning</li>
              <li>Retail and hospitality design</li>
              <li>Brand integration and visual identity</li>
              <li>Ergonomic workspace solutions</li>
              <li>Sustainable commercial environments</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-secondary p-8 rounded-sm">
            <h3 className="text-xl font-light mb-4">📐 SPACE PLANNING & LAYOUT OPTIMIZATION</h3>
            <p>
              Maximize the potential of your space with smart, efficient layouts tailored for beauty and function.
              Perfect for new builds or reimagining existing spaces.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-sm">
            <h3 className="text-xl font-light mb-4">🎨 COLOR & MATERIAL CONSULTATION</h3>
            <p>
              Not sure where to start? We help you select the perfect color schemes, textures, and finishes to tie your
              space together beautifully.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-sm">
            <h3 className="text-xl font-light mb-4">🛋️ FURNITURE & DECOR STYLING</h3>
            <p>
              From timeless staples to unique statement pieces, we handpick furnishings and accessories that complement
              your design goals.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-sm">
            <h3 className="text-xl font-light mb-4">🖥️ 3D RENDERING & VISUALIZATION</h3>
            <p>
              See it before it's real. Our photorealistic renderings let you preview your future space with precision
              and confidence.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-sm">
            <h3 className="text-xl font-light mb-4">🛠️ RENOVATION & REMODELING CONSULTATION</h3>
            <p>
              Partnering with contractors, we guide material selection, spatial changes, and functional upgrades to
              ensure your remodel runs smoothly and stays stylish.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-sm">
            <h3 className="text-xl font-light mb-4">🧰 CUSTOM BUILT-INS & MILLWORK DESIGN</h3>
            <p>
              We design bespoke cabinetry, shelving, and built-ins that blend seamlessly into your space—both beautiful
              and practical.
            </p>
          </div>
        </div>

        <div className="bg-secondary p-8 md:p-12 rounded-sm">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-center">CONSULTATION PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl mb-2">DISCOVERY</h3>
              <p>Initial meeting to understand your vision, needs, and budget</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl mb-2">CONCEPT</h3>
              <p>Development of design concepts and preliminary space planning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl mb-2">DESIGN</h3>
              <p>Detailed design development including materials, furnishings, and finishes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl mb-2">EXECUTION</h3>
              <p>Project management, installation, and final styling</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none px-8 py-6"
              >
                Schedule a Consultation
              </Button>
            </Link>
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
