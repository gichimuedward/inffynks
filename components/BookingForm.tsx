"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("Tattoo");
  const [subService, setSubService] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const phoneNumber = "254734508112";

  const tattooOptions = [
    "Small Tattoo (From 1,500 KES)",
    "Medium Tattoo (From 3,000 KES)",
    "Large Tattoo (From 5,000 KES)",
    "Custom Design (Quote Required)",
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
    if (!name || !subService || !message) {
      alert("Please complete all fields");
      return;
    }

    setLoading(true);

    const text = `
🔥 INFFYNKS BOOKING REQUEST

Name: ${name}
Service: ${service}
Option: ${subService}

Details:
${message}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // UX feedback
    setTimeout(() => {
      setSent(true);
      setLoading(false);

      // reset form
      setName("");
      setService("Tattoo");
      setSubService("");
      setMessage("");
    }, 800);
  };

  if (sent) {
    return (
      <div className="bg-zinc-900 p-8 rounded-xl text-center max-w-xl mx-auto">
        <h3 className="text-2xl font-bold text-yellow-500">
          Request Sent ✔
        </h3>

        <p className="text-gray-300 mt-3">
          We’ve opened WhatsApp for you. Please send the message to complete your booking.
        </p>

        <button
          onClick={() => setSent(false)}
          className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-xl max-w-xl mx-auto w-full">

      <h3 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
        Book Your Session
      </h3>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 mb-3 bg-black border border-gray-700 text-white rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="w-full p-3 mb-3 bg-black border border-gray-700 text-white rounded"
        value={service}
        onChange={(e) => {
          setService(e.target.value);
          setSubService("");
        }}
      >
        <option value="Tattoo">Tattoo</option>
        <option value="Piercing">Piercing</option>
      </select>

      {service === "Tattoo" && (
        <select
          className="w-full p-3 mb-3 bg-black border border-gray-700 text-white rounded"
          value={subService}
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
          className="w-full p-3 mb-3 bg-black border border-gray-700 text-white rounded"
          value={subService}
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

      <textarea
        placeholder="Describe your idea (placement, style, size...)"
        className="w-full p-3 mb-4 bg-black border border-gray-700 text-white rounded"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendToWhatsApp}
        disabled={loading}
        className="w-full bg-yellow-500 text-black py-3 font-bold rounded-lg hover:bg-yellow-400 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Booking Request"}
      </button>

    </div>
  );
}