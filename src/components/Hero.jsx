// src/components/Hero.jsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white min-h-[80vh] flex items-center rounded-2xl">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side (Text) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Discover Amazing <span className="text-yellow-300">Products</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Browse our curated list of products, view details, and manage them
            easily with your personal dashboard.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/products"
              className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
            >
              🛒 Explore Products
            </a>
            <a
              href="/login"
              className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-lg shadow-md hover:bg-white/30 transition"
            >
              🔑 Login
            </a>
          </div>
        </div>

        {/* Right side (Image / Illustration) */}
        <motion.img
          src="https://i.ibb.co.com/yB6fGmSP/cart.jpg"
          alt="Shopping Illustration"
          className="w-80 md:w-[420px] drop-shadow-2xl rounded-2xl"
          animate={{ y: [0, -20, 0] }} // floating effect
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
