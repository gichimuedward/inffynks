"use client";

import Image from "next/image";

type Props = {
  open: boolean;
  image: string;
  title: string;
  description: string;
  price: string | number;
  category: string;
  onClose: () => void;
};

export default function ImageModal({
  open,
  image,
  title,
  description,
  price,
  category,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 max-w-xl w-full rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-80">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="p-5 text-white">
          <h2 className="text-2xl font-bold text-yellow-500">{title}</h2>

          <p className="text-gray-300 mt-2">{description}</p>

          <div className="flex justify-between mt-4">
            <span className="text-yellow-400 font-bold">
              {price} KES
            </span>

            <span className="text-gray-500">{category}</span>
          </div>

          <a
            href={`https://wa.me/254734508112?text=Hi%20I'm%20interested%20in%20${encodeURIComponent(
              title
            )}`}
            className="block mt-5 bg-yellow-500 text-black text-center py-2 rounded-lg font-bold"
          >
            Book This Design
          </a>
        </div>
      </div>
    </div>
  );
}