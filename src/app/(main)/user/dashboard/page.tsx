"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import React from "react";
import { get } from "@/lib/api-bridge";

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
}

export default function UserDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJpZFVzZXIiOiJjbWJxNmg0bzQwMDAwdWNwOHoxM2tzeDRvIiwibmFtZSI6IkFkbWluIDEiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJTVVBFUl9BRE1JTiJ9.FMyP5AGn_lAm5UpQ-jLs4BK2qfAak8GDonLT4yq7jC8";
      const response = await get("/products/", token);

      if (!response.status) {
        throw new Error(response.message || "Failed to fetch products");
      } else {
        console.log("Products fetched successfully:", response.data);
        setProducts(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="w-full flex items-center justify-center">
        <Image
          src={"/BannerAds.png"}
          alt="Banner Ads"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mt-24"
        />
      </section>
      <section className="w-full flex flex-col items-center mx-8 my-12">
        <h1 className="text-start font-bold text-2xl">Produk Rekomendasi</h1>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {/* Contoh produk rekomendasi */}
          {products.map((product) => (
            <div
              key={product.id}
              className="w-60 h-80 bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <Image
                src={product.image || "/placeholder-product.jpg"}
                alt={product.name}
                width={150}
                height={150}
                className="mb-4"
              />
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
