import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      <Navbar />
      <Hero />

      <Services />
      <Pricing />

      <Gallery />

      {/* BOOKING SECTION ONLY */}
      <section
        id="contact"
        className="py-20 px-6 text-center bg-zinc-950"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
          Book Your Tattoo Session
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Talk directly with the artist on WhatsApp and get your design started instantly.
        </p>

        <a
          href="https://wa.me/254734508112"
          className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
        >
          Book on WhatsApp
        </a>
      </section>

      <WhatsAppButton />

    </main>
  );
}