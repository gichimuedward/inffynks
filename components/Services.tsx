export default function Services() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-gray-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold">Tattoos</h3>
          <p>Custom designs and professional tattoo work.</p>
        </div>

        <div className="border border-gray-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold">Piercings</h3>
          <p>Safe and hygienic piercing services.</p>
        </div>

        <div className="border border-gray-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold">Custom Artwork</h3>
          <p>Unique artwork designed for your vision.</p>
        </div>
      </div>
    </section>
  );
}