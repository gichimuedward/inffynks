"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">

      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="relative w-14 h-14">
            <Image
              src="/images/logo/logo.png"
              alt="Inffynks Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div>
            <h1 className="text-yellow-500 font-bold text-xl">
              INFFYNKS
            </h1>

            <p className="text-gray-400 text-xs">
              Tattoos & Piercings
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#gallery">Gallery</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Desktop Button */}
        <a
          href="https://wa.me/254734508112"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
        >
          Book Now
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 p-4 flex flex-col gap-4">
          <a href="#gallery">Gallery</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

          <a
            href="https://wa.me/254734508112"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black py-2 rounded-lg text-center font-semibold"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}