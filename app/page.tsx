import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ReviewForm from "@/components/ReviewForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* GALLERY */}
      <Gallery />

      {/* ⭐ CUSTOMER REVIEWS (LIVE FROM FIREBASE) */}
      <Reviews />

      {/* 📱 REVIEW FORM (PHONE USERS SUBMIT HERE) */}
      <ReviewForm />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />

    </main>
  );
}