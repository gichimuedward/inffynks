"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("Tattoo");
  const [message, setMessage] = useState("");

  const phoneNumber = "254734508112";

  const sendToWhatsApp = () => {
    if (!name || !message) {
      alert("Please fill in all fields");
      return;
    }

    const text = `
Hello Inffynks 👋

Name: ${name}
Service: ${service}

Details:
${message}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl max-w-xl mx-auto">

      <h3 className="text-xl font-bold text-yellow-500 mb-4">
        Book a Session
      </h3>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 mb-3 bg-black border border-gray-700 text-white"
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="w-full p-3 mb-3 bg-black border border-gray-700 text-white"
        onChange={(e) => setService(e.target.value)}
      >
        <option>Tattoo</option>
        <option>Piercing</option>
        <option>Custom Design</option>
      </select>

      <textarea
        placeholder="Describe your idea..."
        className="w-full p-3 mb-3 bg-black border border-gray-700 text-white"
        rows={4}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendToWhatsApp}
        className="w-full bg-yellow-500 text-black py-3 font-bold rounded-lg hover:bg-yellow-400 transition"
      >
        Send Booking Request
      </button>

    </div>
  );
}