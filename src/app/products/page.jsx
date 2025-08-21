"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  const truncate = (text, length = 80) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🛒 Explore Products
      </motion.h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-40 h-40 object-contain rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {truncate(product.description)}
              </p>
              <p className="text-yellow-500 font-bold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <a
                href={`/products/${product._id}`}
                className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
              >
                Details
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
