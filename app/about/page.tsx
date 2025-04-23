import Image from "next/image"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-8">ABOUT US</h1>
            <div className="prose prose-invert dark:prose-invert max-w-none">
              <h2 className="text-2xl font-light mb-4">KNT Design Interior</h2>
              <p className="text-lg mb-6">
                Established in 2023, KNT Design Interior is a dynamic interior design company dedicated to creating
                spaces that truly reflect the identity and lifestyle of each client. We specialize in providing tailored
                interior design solutions for both residential and commercial environments—where comfort, functionality,
                and style go hand in hand.
              </p>
              <p className="text-lg mb-6">
                Our services are crafted to align with your vision and budget, whether you're designing your dream home
                or refining a business space. From thoughtful space planning and efficient layout optimization to
                curated color palettes and material selections, we ensure every detail works together harmoniously.
              </p>
              <p className="text-lg mb-6">
                We also offer professional consultation on furniture arrangement and décor styling, helping you choose
                pieces that elevate your space and meet your aesthetic goals. With advanced 3D visualization services,
                we let you preview your design before implementation—bringing ideas to life with clarity and confidence.
              </p>
              <p className="text-lg mb-6">
                In renovation and remodeling projects, KNT Design Interior collaborates closely with contractors,
                offering expert guidance on spatial changes and material selection to ensure a smooth and cohesive
                process from start to finish.
              </p>
              <p className="text-lg mb-6">
                At KNT Design Interior, we believe great design is not just about how a space looks—but how it feels to
                live and work in it.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <Image
                src="/logo-knt-circle.svg?height=800&width=800"
                alt="KNT Design Interior Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-8">OUR VISION</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-sm">
              <h3 className="text-xl mb-4">COMFORT</h3>
              <p>
                We create spaces that prioritize comfort and livability, ensuring that your environment supports your
                daily life and activities.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-sm">
              <h3 className="text-xl mb-4">FUNCTIONALITY</h3>
              <p>
                Our designs balance beauty with purpose, creating spaces that work efficiently for your specific needs
                and lifestyle.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-sm">
              <h3 className="text-xl mb-4">STYLE</h3>
              <p>
                We infuse each project with timeless elegance and personalized style that authentically reflects your
                identity and taste.
              </p>
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
