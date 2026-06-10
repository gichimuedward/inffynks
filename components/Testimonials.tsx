export default function Testimonials() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
        What Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <p className="text-gray-300">
            “Clean work and very professional. Best tattoo experience.”
          </p>
          <p className="text-yellow-400 mt-4">— Client A</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <p className="text-gray-300">
            “Exactly what I wanted. Highly recommended.”
          </p>
          <p className="text-yellow-400 mt-4">— Client B</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <p className="text-gray-300">
            “Very clean setup and amazing designs.”
          </p>
          <p className="text-yellow-400 mt-4">— Client C</p>
        </div>

      </div>
    </section>
  );
}