// // app/add-product/page.tsx
// import ProductForm from "@/components/ProductForm";

// export default function AddProductPage() {
//   return (
//     <div className="min-h-screen p-8 bg-gray-50">
//       <ProductForm />
//     </div>
//   );
// }


"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import ProductForm from "@/components/ProductForm";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("Please login to add products");
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold">Checking authentication...</p>
      </div>
    );
  }

  return <ProductForm />;
}