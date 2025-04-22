import Image from "next/image"
import Navbar from "@/components/navbar"

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
                src="/placeholder.svg?height=800&width=800"
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
    </main>
  )
}
