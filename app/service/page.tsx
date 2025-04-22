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
                src="/placeholder.svg?height=400&width=600"
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
                src="/placeholder.svg?height=400&width=600"
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
    </main>
  )
}
