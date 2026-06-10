export default function Services() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h3 className="text-xl font-bold text-yellow-400">
            Tattoos
          </h3>
          <p className="text-gray-400 mt-2">
            Custom black & color tattoos designed to fit your story and style.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h3 className="text-xl font-bold text-yellow-400">
            Piercings
          </h3>
          <p className="text-gray-400 mt-2">
            Safe, clean and professional piercing services.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h3 className="text-xl font-bold text-yellow-400">
            Custom Art
          </h3>
          <p className="text-gray-400 mt-2">
            Unique designs tailored to your idea before tattooing.
          </p>
        </div>

      </div>
    </section>
  );
}