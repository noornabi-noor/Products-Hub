"use client";
import React, { useEffect } from "react";
import ProductsHubLogo from "./ProductsHubLogo";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const NavBar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      toast.success("Login Successful 🎉");
      router.push("/products");
    }
  }, [session, router]);

  const navItems = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About Us</Link>
      </li>
      <li>
        <Link href={"/products"}>All Products</Link>
      </li>
      <li>
        <Link href={"/add-product"}>Add Product</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-200 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href={"/"}>
          <ProductsHubLogo />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end">
        {!session ? (
          <button
            className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition cursor-pointer"
            onClick={() => signIn("credentials", { callbackUrl: "/products" })}
          >
            Login
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition cursor-pointer"
            onClick={() => {
              signOut({ callbackUrl: "/" });
              toast.success("Logged out ✅");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
