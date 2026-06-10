import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      <Navbar />
      <Hero />

      <Services />
      <Pricing />

      <Gallery />

      {/* BOOKING FORM */}
      <section id="contact" className="py-20 px-6 bg-zinc-950">
        <BookingForm />
      </section>

      <WhatsAppButton />

    </main>
  );
}