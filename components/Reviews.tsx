export default function Reviews() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p className="text-gray-300">
            “Clean work, very professional. My tattoo healed perfectly.”
          </p>
          <h4 className="mt-4 text-yellow-500 font-bold">— Brian K.</h4>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p className="text-gray-300">
            “Best tattoo artist in town. Highly recommend Inffynks.”
          </p>
          <h4 className="mt-4 text-yellow-500 font-bold">— Sarah W.</h4>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p className="text-gray-300">
            “Very hygienic piercing process and great service.”
          </p>
          <h4 className="mt-4 text-yellow-500 font-bold">— Jay M.</h4>
        </div>

      </div>
    </section>
  );
}