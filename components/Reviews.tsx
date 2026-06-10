"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function Reviews() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReviews(data);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <section className="bg-black py-20 px-6 text-white">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-10">
        Customer Reviews
      </h2>

      {/* LOADING STATE */}
      {loading && (
        <p className="text-center text-gray-400">
          Loading reviews...
        </p>
      )}

      {/* EMPTY STATE */}
      {!loading && reviews.length === 0 && (
        <p className="text-center text-gray-500">
          No reviews yet. Be the first to leave one ⭐
        </p>
      )}

      {/* REVIEWS GRID */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-zinc-900 p-5 rounded-xl border border-zinc-800"
          >

            {/* STARS */}
            <div className="text-yellow-400 text-lg">
              {"★".repeat(r.rating || 5)}
              {"☆".repeat(5 - (r.rating || 5))}
            </div>

            {/* COMMENT */}
            <p className="text-gray-300 mt-3">
              {r.comment}
            </p>

            {/* NAME */}
            <h4 className="mt-4 text-yellow-500 font-bold">
              — {r.name}
            </h4>

          </div>
        ))}

      </div>
    </section>
  );
}