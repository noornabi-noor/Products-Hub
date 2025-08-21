import Image from "next/image";
import ProductsSection from "./components/ProductsSection";
import ProductForm from "@/components/ProductForm";
import Hero from "@/components/Hero";

export default function Home() {
  return (
  <>
    <Hero/>
    <ProductsSection />
  </>
);
}
