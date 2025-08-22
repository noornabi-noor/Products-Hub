// app/add-product/page.tsx
import ProductForm from "@/components/ProductForm";

export default function AddProductPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <ProductForm />
    </div>
  );
}