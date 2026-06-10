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

      <div className="grid md:grid-cols-3 gap-6">

        {tattoos.map((tattoo) => (
          <div
            key={tattoo.id}
            onClick={() => setSelected(tattoo)}
            className="cursor-pointer bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition"
          >

            <div className="relative h-72">
              <Image
                src={tattoo.imageUrl}
                alt={tattoo.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold text-yellow-400">
                {tattoo.title}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                {tattoo.category}
              </p>

              <p className="text-yellow-500 font-bold mt-2">
                {tattoo.price}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelected(null)}
        >

          <div
            className="bg-zinc-900 max-w-xl w-full rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="relative h-96">
              <Image
                src={selected.imageUrl}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">

              <h3 className="text-2xl font-bold text-yellow-500">
                {selected.title}
              </h3>

              <p className="text-gray-300 mt-2">
                {selected.description}
              </p>

              <p className="text-yellow-400 mt-3 font-bold">
                {selected.price}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="mt-5 w-full bg-yellow-500 text-black py-2 rounded-lg font-bold"
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}