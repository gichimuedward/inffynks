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
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {heroImages.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Tattoo ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            currentImage === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <div className="relative w-32 h-32 md:w-52 md:h-52 mb-6">
          <Image
            src="/images/logo/logo.png"
            alt="Inffynks Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-white">
          INFFYNKS
        </h1>

        <h2 className="text-lg md:text-2xl text-yellow-500 mt-2">
          Tattoos & Piercings
        </h2>

        <p className="max-w-2xl mt-6 text-gray-200 text-base md:text-lg">
          Premium Tattoos, Professional Piercings,
          Custom Artwork & Unique Designs.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <a
            href="#gallery"
            className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            View Our Work
          </a>

          <a
            href="https://wa.me/254734508112"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}