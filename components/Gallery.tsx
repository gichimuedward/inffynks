"use client";

import Image from "next/image";
import { useState } from "react";
import { tattoos } from "@/data/tattoos";
import ImageModal from "./ImageModal";

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="gallery" className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Work
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {tattoos.map((tattoo) => (
          <div
            key={tattoo.id}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer hover:border-yellow-500 transition"
            onClick={() => setSelected(tattoo)}
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
              <h3 className="text-xl font-bold text-yellow-500">
                {tattoo.title}
              </h3>

              <p className="text-gray-300 mt-2">
                {tattoo.description}
              </p>

              <div className="flex justify-between mt-4">
                <span className="text-yellow-400">
                  {tattoo.price}
                </span>

                <span className="text-gray-500">
                  {tattoo.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <ImageModal
        open={!!selected}
        image={selected?.imageUrl}
        title={selected?.title}
        description={selected?.description}
        price={selected?.price}
        category={selected?.category}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}