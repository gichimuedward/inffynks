"use client";

import { useEffect, useState } from "react";
import { db, storage } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
  const [image, setImage] = useState<File | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadTattoos = async () => {
    const snapshot = await getDocs(collection(db, "tattoos"));

    const data = snapshot.docs.map((doc) => {
      const d = doc.data();
      return {
        id: doc.id,
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
    setImage(null);
  };

  // 🔥 UPLOAD FIXED
  const uploadTattoo = async () => {
    try {
      if (!title || !description || !price) {
        alert("Fill all fields");
        return;
      }

      if (!image) {
        alert("Select image");
        return;
      }

      setLoading(true);

      const imageRef = ref(storage, `tattoos/${Date.now()}-${image.name}`);

      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "tattoos"), {
        title,
        description,
        price: Number(price),
        category,
        imageUrl,
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
    setTitle(t.title || "");
    setDescription(t.description || "");
    setPrice(String(t.price || ""));
    setCategory(t.category || "tattoo");
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
          className="p-3 bg-black border"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="p-3 bg-black border"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="number"
          className="p-3 bg-black border"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 bg-black border"
        >
          <option value="tattoo">Tattoo</option>
          <option value="piercing">Piercing</option>
        </select>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="p-3 bg-black border"
        />

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

            {t.imageUrl ? (
              <img
                src={t.imageUrl}
                className="h-40 w-full object-cover"
              />
            ) : (
              <div className="h-40 bg-gray-900 flex items-center justify-center">
                No Image
              </div>
            )}

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