import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      <Navbar />
      <Hero />

      <Gallery />

      {/* ⭐ THIS WAS MISSING */}
      <Reviews />

      <WhatsAppButton />

    </main>
  );
}