"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
  "/images/hero/hero4.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p === heroImages.length - 1 ? 0 : p + 1));
    }, 4500);

    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* SLIDESHOW BACKGROUND */}
      {heroImages.map((img, i) => (
        <Image
          key={img}
          src={img}
          alt="hero"
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            current === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* DARK OVERLAY (CINEMATIC LOOK) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        {/* LOGO */}
        <div className="relative w-36 h-36 mb-4">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* BRAND */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">
          INFFYNKS
        </h1>

        <p className="text-yellow-500 text-lg md:text-xl mt-2">
          Tattoos • Piercings • Custom Art
        </p>

        <p className="text-gray-300 max-w-xl mt-4 text-sm md:text-base">
          Premium body art crafted with precision, creativity, and detail.
        </p>

        {/* CLEAN INFO ONLY (NO BUTTONS) */}
        <p className="text-gray-400 mt-6 text-sm">
          Scroll down to explore designs and book your session below
        </p>

      </div>
    </section>
  );
}