export default function Pricing() {
  return (
    <section id="services" className="py-20 px-6 bg-black text-white">

      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
        Pricing
      </h2>

      {/* TATTOOS */}
      <div className="max-w-3xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-2">
          Tattoos
        </h3>

        <div className="space-y-3 text-gray-300">

          <div className="flex justify-between">
            <span>Small Tattoo</span>
            <span className="text-yellow-500">1,500 KES+</span>
          </div>

          <div className="flex justify-between">
            <span>Medium Tattoo</span>
            <span className="text-yellow-500">3,000 KES+</span>
          </div>

          <div className="flex justify-between">
            <span>Large Tattoo</span>
            <span className="text-yellow-500">5,000 KES+</span>
          </div>

          <div className="flex justify-between">
            <span>Custom / Sleeve</span>
            <span className="text-yellow-500">Quote</span>
          </div>

        </div>
      </div>

      {/* PIERCINGS */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-2">
          Piercings & Studs
        </h3>

        <div className="space-y-3 text-gray-300">

          <div className="flex justify-between">
            <span>Ear Lobe Piercing</span>
            <span className="text-yellow-500">500 KES</span>
          </div>

          <div className="flex justify-between">
            <span>Helix Piercing</span>
            <span className="text-yellow-500">800 KES</span>
          </div>

          <div className="flex justify-between">
            <span>Nose Piercing</span>
            <span className="text-yellow-500">1,000 KES</span>
          </div>

          <div className="flex justify-between">
            <span>Eyebrow / Lip Piercing</span>
            <span className="text-yellow-500">1,200 KES</span>
          </div>

          <div className="flex justify-between">
            <span>Belly Piercing</span>
            <span className="text-yellow-500">1,500 KES</span>
          </div>

          {/* STUDS */}
          <div className="mt-6 pt-4 border-t border-zinc-800">

            <h4 className="text-lg font-semibold text-white mb-3">
              Studs (Jewelry)
            </h4>

            <div className="space-y-2 text-gray-300">

              <div className="flex justify-between">
                <span>Basic Stud</span>
                <span className="text-yellow-500">300 KES</span>
              </div>

              <div className="flex justify-between">
                <span>Premium Steel Stud</span>
                <span className="text-yellow-500">500 KES</span>
              </div>

              <div className="flex justify-between">
                <span>Custom / Imported Stud</span>
                <span className="text-yellow-500">800+ KES</span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}