"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

type Tattoo = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
};

export default function AdminPage() {
  const [tattoos, setTattoos] = useState<Tattoo[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("tattoo");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadTattoos = async () => {
    const snapshot = await getDocs(collection(db, "tattoos"));

    const data = snapshot.docs.map((docSnap) => {
      const d = docSnap.data();
      return {
        id: docSnap.id,
        title: d.title || "",
        description: d.description || "",
        price: d.price || 0,
        category: d.category || "tattoo",
        imageUrl: d.imageUrl || "",
      };
    });

    setTattoos(data);
  };

  useEffect(() => {
    loadTattoos();
  }, []);

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("tattoo");
  };

  // ✅ SAFE UPLOAD (NO STORAGE - DEPLOY SAFE)
  const uploadTattoo = async () => {
    try {
      if (!title || !description || !price) {
        alert("Fill all fields");
        return;
      }

      setLoading(true);

      await addDoc(collection(db, "tattoos"), {
        title,
        description,
        price: Number(price),
        category,
        imageUrl: "", // TEMP: no upload yet
        createdAt: Date.now(),
      });

      alert("Uploaded successfully");

      clearForm();
      loadTattoos();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const updateTattoo = async () => {
    if (!editingId) return;

    await updateDoc(doc(db, "tattoos", editingId), {
      title,
      description,
      price: Number(price),
      category,
    });

    setEditingId(null);
    clearForm();
    loadTattoos();
  };

  const deleteTattoo = async (id: string) => {
    await deleteDoc(doc(db, "tattoos", id));
    loadTattoos();
  };

  const startEdit = (t: Tattoo) => {
    setEditingId(t.id);
    setTitle(t.title);
    setDescription(t.description);
    setPrice(String(t.price));
    setCategory(t.category);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-3xl font-bold text-yellow-500 mb-8">
        Inffynks Admin Panel
      </h1>

      {/* FORM */}
      <div className="max-w-xl flex flex-col gap-4 mb-10">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-3 bg-black border border-gray-700"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="p-3 bg-black border border-gray-700"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="number"
          className="p-3 bg-black border border-gray-700"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 bg-black border border-gray-700"
        >
          <option value="tattoo">Tattoo</option>
          <option value="piercing">Piercing</option>
        </select>

        <button
          disabled={loading}
          onClick={editingId ? updateTattoo : uploadTattoo}
          className="bg-yellow-500 text-black py-3 font-bold"
        >
          {loading
            ? "Loading..."
            : editingId
            ? "Update Tattoo"
            : "Upload Tattoo"}
        </button>

        {editingId && (
          <button
            onClick={() => {
              setEditingId(null);
              clearForm();
            }}
            className="bg-gray-700 py-2"
          >
            Cancel Edit
          </button>
        )}
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-4">

        {tattoos.map((t) => (
          <div key={t.id} className="border border-gray-800 p-3">

            {/* NO IMAGE YET (SAFE DEPLOY VERSION) */}
            <div className="h-40 bg-gray-900 flex items-center justify-center text-gray-500">
              No Image (will be added after deploy)
            </div>

            <h3 className="text-yellow-500 mt-2">{t.title}</h3>
            <p className="text-sm text-gray-400">{t.price} KES</p>

            <div className="flex gap-2 mt-3">

              <button
                onClick={() => startEdit(t)}
                className="bg-blue-500 px-3 py-1 text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => deleteTattoo(t.id)}
                className="bg-red-500 px-3 py-1 text-sm"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}