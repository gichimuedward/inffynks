"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="w-80 flex flex-col gap-4">

        <input
          placeholder="Email"
          className="p-3 bg-black border"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          className="p-3 bg-black border"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-yellow-500 text-black py-3 font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
}