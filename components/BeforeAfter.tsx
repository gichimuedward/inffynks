import Image from "next/image";

const comparisons = [
  {
    id: 1,
    before: "/images/before/1-before.jpg",
    after: "/images/before/1-after.jpg",
    title: "Cover-up Transformation",
  },
  {
    id: 2,
    before: "/images/before/2-before.jpg",
    after: "/images/before/2-after.jpg",
    title: "Custom Arm Piece",
  },
  {
    id: 3,
    before: "/images/before/3-before.jpg",
    after: "/images/before/3-after.jpg",
    title: "Fine Line Work",
  },
];

export default function BeforeAfter() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">

      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
        Before & After
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {comparisons.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"
          >

            <h3 className="text-center text-yellow-400 font-bold p-3">
              {item.title}
            </h3>

            {/* BEFORE */}
            <div className="relative h-56 border-b border-zinc-800">
              <Image
                src={item.before}
                alt="before"
                fill
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-black/70 text-xs px-2 py-1 rounded">
                Before
              </span>
            </div>

            {/* AFTER */}
            <div className="relative h-56">
              <Image
                src={item.after}
                alt="after"
                fill
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded">
                After
              </span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}