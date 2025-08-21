// src/app/components/ProductsSection.jsx
import Link from "next/link";
import { DbConnect } from "@/lib/DbConnect";

export default async function ProductsSection() {
  const productsCollection = await DbConnect("products");
  const products = await productsCollection.find({}).toArray();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
          >
            <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded mb-4">
              <img
                src={product.img}
                alt={product.name}
                className="h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">${product.price}</span>
              <Link
                href={`/products/${index}`}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}