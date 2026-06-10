"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  const submitReview = async () => {
    if (!name || !comment) return;

    setLoading(true);

    await addDoc(collection(db, "reviews"), {
      name,
      comment,
      rating,
      createdAt: serverTimestamp(),
    });

    setName("");
    setComment("");
    setRating(5);

    setLoading(false);
    alert("Review submitted!");
  };

  return (
    <section className="bg-zinc-950 py-16 px-6 text-white">

      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
        Leave a Review
      </h2>

      <div className="max-w-md mx-auto flex flex-col gap-4">

        <input
          className="p-3 bg-zinc-900 rounded"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* ⭐ SIMPLE STAR SELECTOR */}
        <div className="flex gap-1 text-2xl cursor-pointer">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={star <= rating ? "text-yellow-400" : "text-gray-600"}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          className="p-3 bg-zinc-900 rounded"
          placeholder="Your experience"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          onClick={submitReview}
          disabled={loading}
          className="bg-yellow-500 text-black py-3 rounded font-bold"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>

      </div>
    </section>
  );
}