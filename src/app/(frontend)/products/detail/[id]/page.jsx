"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/(frontend)/(carrito)/ProductCard";
import { useEffect, useState } from "react";

function Page({ params }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/products/detail/${params.id}`
        );

        const result = await res.json();
        setProduct(result.product); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  if (!product) {
    return (
      <div className="mt-28">
        <Link href="/products" className="ms-10 flex gap-3">
          <ArrowLeft />
          <p>Atras</p>
        </Link>
        <div className="flex justify-center ">
          <p className="text-2xl">Product not found</p>
        </div>
      </div>
    );
  }
  return (
    <div className="p-4 mt-20  flex justify-center h-screen">
      <div className=" ">
        <Link href="/products" className="flex gap-3">
          <ArrowLeft />
          <p>Atras</p>
        </Link>
        <ProductCard
          key={product.id}
          product={product}
        />
      </div>
    </div>
  );
}

export default Page;