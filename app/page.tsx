import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SLIDESHOW */}
      <Hero />

      {/* GALLERY */}
      <Gallery />

      {/* BOOKING SECTION */}
      <section
        id="contact"
        className="py-20 px-6 text-center bg-zinc-950"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
          Book Your Tattoo Session
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Professional tattoos, piercings, and custom artwork.
          Contact us directly on WhatsApp to book your session instantly.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/254734508112"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            Book on WhatsApp
          </a>

          <a
            href="#gallery"
            className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Gallery
          </a>

        </div>

        <p className="text-gray-600 mt-6 text-xs">
          Tattoos • Piercings • Custom Designs
        </p>
      </section>

      {/* FLOATING WHATSAPP */}
      <WhatsAppButton />

    </main>
  );
}