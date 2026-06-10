import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import BeforeAfter from "@/components/BeforeAfter";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      <Navbar />
      <Hero />

      <Gallery />

      {/* BEFORE & AFTER (TRUST BUILDER) */}
      <BeforeAfter />

      <Pricing />

      <section id="contact" className="py-20 px-6 bg-zinc-950">
        <BookingForm />
      </section>

    </main>
  );
}