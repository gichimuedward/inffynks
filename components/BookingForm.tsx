"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    type: "Tattoo",
    idea: "",
    date: "",
  });

  const phoneNumber = "254734508112";

  const sendWhatsApp = () => {
    const message = `
New Booking Request:
Name: ${form.name}
Type: ${form.type}
Idea: ${form.idea}
Preferred Date: ${form.date}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Book Your Session</h2>

      <div className="max-w-md mx-auto flex flex-col gap-4">
        
        <input
          placeholder="Your Name"
          className="p-3 bg-black border border-gray-700 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <select
          className="p-3 bg-black border border-gray-700 rounded"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option>Tattoo</option>
          <option>Piercing</option>
        </select>

        <textarea
          placeholder="Describe your idea"
          className="p-3 bg-black border border-gray-700 rounded"
          onChange={(e) => setForm({ ...form, idea: e.target.value })}
        />

        <input
          type="date"
          className="p-3 bg-black border border-gray-700 rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <button
          onClick={sendWhatsApp}
          className="bg-green-500 py-3 rounded font-bold"
        >
          Send Booking to WhatsApp
        </button>
      </div>
    </section>
  );
}