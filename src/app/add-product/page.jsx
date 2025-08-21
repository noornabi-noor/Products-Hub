// app/add-product/page.tsx
import ProductForm from "@/components/ProductForm";

export default function AddProductPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Add a New Product</h1>
      <ProductForm />
    </div>
  );
}