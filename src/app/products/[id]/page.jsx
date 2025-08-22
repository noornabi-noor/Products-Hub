"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Product Image */}
        <img
          src={product.img}
          alt={product.name}
          className="w-64 h-64 object-contain rounded-2xl shadow-lg"
        />

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-yellow-500 text-2xl font-semibold">${product.price.toFixed(2)}</p>
          
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition cursor-pointer"
            >
              ← Back
            </button>
            <button
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
