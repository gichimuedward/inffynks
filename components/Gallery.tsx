"use client";

import Image from "next/image";
import { useState } from "react";
import { tattoos } from "@/data/tattoos";

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="gallery" className="bg-black text-white py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">
        Our Work
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {tattoos.map((tattoo) => (
          <div
            key={tattoo.id}
            onClick={() => setSelected(tattoo)}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-500 cursor-pointer transition"
          >

            <div className="relative h-72">
              <Image
                src={tattoo.imageUrl}
                alt={tattoo.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-2xl font-bold text-yellow-500">
                {tattoo.title}
              </h3>

              <p className="text-gray-300 mt-3">
                {tattoo.description}
              </p>

              <div className="mt-4 flex justify-between">
                <span className="text-yellow-400 font-bold">
                  {tattoo.price}
                </span>

                <span className="text-gray-500 text-sm">
                  {tattoo.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">

          <div className="bg-zinc-900 max-w-lg w-full rounded-xl overflow-hidden border border-zinc-700">

            <div className="relative h-80">
              <Image
                src={selected.imageUrl}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">

              <h2 className="text-2xl font-bold text-yellow-500">
                {selected.title}
              </h2>

              <p className="text-gray-300 mt-3">
                {selected.description}
              </p>

              <div className="mt-4 flex justify-between">
                <span className="text-yellow-400 font-bold">
                  {selected.price}
                </span>

                <span className="text-gray-500">
                  {selected.category}
                </span>
              </div>

              <div className="flex gap-3 mt-6">

                <a
                  href={`https://wa.me/254734508112?text=Hi%20Inffynks,%20I'm%20interested%20in%20${encodeURIComponent(selected.title)}`}
                  target="_blank"
                  className="flex-1 bg-yellow-500 text-black py-2 rounded-lg text-center font-bold"
                >
                  Book
                </a>

                <button
                  onClick={() => setSelected(null)}
                  className="flex-1 border border-white py-2 rounded-lg"
                >
                  Close
                </button>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}