"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("Tattoo");
  const [subService, setSubService] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "254734508112";

  const tattooOptions = [
    "Small Tattoo (From 1,500 KES)",
    "Medium Tattoo (From 3,000 KES)",
    "Custom Tattoo (Quote Required)",
    "Sleeve / Full Piece (Quote Required)",
  ];

  const piercingOptions = [
    "Ear Lobe - 500 KES",
    "Helix - 800 KES",
    "Nose Piercing - 1,000 KES",
    "Eyebrow - 1,200 KES",
    "Lip Piercing - 1,200 KES",
    "Belly Piercing - 1,500 KES",
  ];

  const sendToWhatsApp = () => {
    if (!name || !message || !subService) {
      alert("Please fill all fields");
      return;
    }

    const text = `
🔥 NEW BOOKING REQUEST

Name: ${name}
Service: ${service}
Option: ${subService}

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

      {/* NAME */}
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 mb-3 bg-black border border-gray-700 text-white"
        onChange={(e) => setName(e.target.value)}
      />

      {/* SERVICE TYPE */}
      <select
        className="w-full p-3 mb-3 bg-black border border-gray-700 text-white"
        onChange={(e) => {
          setService(e.target.value);
          setSubService("");
        }}
      >
        <option value="Tattoo">Tattoo</option>
        <option value="Piercing">Piercing</option>
      </select>

      {/* SUB OPTIONS (DYNAMIC DROPDOWN) */}
      {service === "Tattoo" && (
        <select
          className="w-full p-3 mb-3 bg-black border border-gray-700 text-white"
          onChange={(e) => setSubService(e.target.value)}
        >
          <option value="">Select Tattoo Type</option>
          {tattooOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {service === "Piercing" && (
        <select
          className="w-full p-3 mb-3 bg-black border border-gray-700 text-white"
          onChange={(e) => setSubService(e.target.value)}
        >
          <option value="">Select Piercing Type</option>
          {piercingOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {/* DESCRIPTION */}
      <textarea
        placeholder="Describe your idea (placement, style, size, etc.)"
        className="w-full p-3 mb-3 bg-black border border-gray-700 text-white"
        rows={4}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* SUBMIT */}
      <button
        onClick={sendToWhatsApp}
        className="w-full bg-yellow-500 text-black py-3 font-bold rounded-lg hover:bg-yellow-400 transition"
      >
        Send Booking Request
      </button>

    </div>
  );
}