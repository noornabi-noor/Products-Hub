// src/app/components/ProductsSection.jsx
import Link from "next/link";
import { DbConnect } from "@/lib/DbConnect";

export default async function ProductsSection() {
  const productsCollection = await DbConnect("products");
  const products = await productsCollection.find({}).toArray();

  const firstEightProducts = products.slice(0, 8);

  return (
    <div className=" px-4 py-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 mt-5 rounded-2xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">🌟 Product List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {firstEightProducts.map((product, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 shadow-lg hover:shadow-xl transition duration-300 bg-white/90 flex flex-col backdrop-blur-sm"
          >
            <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-2xl mb-4 bg-purple-100">
              <img
                src={product.img}
                alt={product.name}
                className="h-full object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
            <p className="text-gray-700 mb-4 line-clamp-2">{product.description}</p>

            <div className="mt-auto flex justify-between items-center">
              <span className="font-bold text-gray-900 text-lg">${product.price}</span>
              <Link
                href={`/products/${product._id}`}
                className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {products.length > 8 && (
        <div className="flex justify-center mt-10">
          <Link
            href="/products"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            See More Products
          </Link>
        </div>
      )}
    </div>
  );
}