"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-6">Login</h1>

      <button
        onClick={() => signIn("google")}
        className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Login with Google
      </button>
    </div>
  );
}