import Image from "next/image";
import { tattoos } from "@/data/tattoos";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-black text-white py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Work
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {tattoos.map((tattoo) => (
          <div
            key={tattoo.id}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition duration-300"
          >
            {/* Tattoo Image */}
            <div className="relative h-72">
              <Image
                src={tattoo.imageUrl}
                alt={tattoo.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Tattoo Details */}
            <div className="p-5">
              <h3 className="text-2xl font-bold text-yellow-500">
                {tattoo.title}
              </h3>

              <p className="text-gray-300 mt-3">
                {tattoo.description}
              </p>

              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-yellow-400">
                  {tattoo.price}
                </span>

                <span className="text-sm text-gray-500">
                  {tattoo.category}
                </span>
              </div>

              {/* WhatsApp Booking Button */}
              <a
                href={`https://wa.me/254734508112?text=Hi%20Inffynks,%20I'm%20interested%20in%20the%20${encodeURIComponent(
                  tattoo.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-5 bg-yellow-500 text-black text-center py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Book This Design
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}