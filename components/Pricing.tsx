export default function Pricing() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
        Pricing Guide
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h3 className="text-xl font-bold text-yellow-400">Small Tattoos</h3>
          <p className="text-gray-400 mt-2">From 1,500 KES</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h3 className="text-xl font-bold text-yellow-400">Medium Tattoos</h3>
          <p className="text-gray-400 mt-2">From 3,000 KES</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h3 className="text-xl font-bold text-yellow-400">Custom Pieces</h3>
          <p className="text-gray-400 mt-2">Quote on consultation</p>
        </div>

      </div>
    </section>
  );
}