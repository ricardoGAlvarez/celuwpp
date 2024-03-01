"use client"
import Link from "next/link";
import Card from "@/components/(frontend)/Card";
import { useEffect, useState } from "react";

function Cards({ apiUrl }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/${apiUrl}`
        );
        const result = await res.json();
        console.log(result);
        setProductList(result); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  const topProducts = productList.slice(0, 6);

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-4/5">
        <h2 className="text-center text-4xl font-bold my-5">Los mas elegidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {topProducts.map((product) => (
            <div className="" key={product.id}>
              <Card
                productName={product.productName}
                category={product.category}
                precio={product.price}
                id={product.id}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center py-5">
          <Link href="/products" className="bg-orange-400 text-center text-white rounded-xl py-2 px-4 w-56 font-bold">
            VER MAS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
