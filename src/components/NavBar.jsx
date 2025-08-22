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
        <Link href={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link href={"/add-product"}>Add Product</Link>
      </li>
      <li>
        <a
          href="https://github.com/noornabi-noor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 border border-indigo-500 px-3 py-1 rounded hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
        >
          Join as Developer
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            className="btn"
            onClick={() => signIn("credentials", { callbackUrl: "/products" })}
          >
            Login
          </button>
        ) : (
          <button
            className="btn"
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
