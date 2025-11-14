"use client";
import { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import Kurv from "../components/Kurv";
import SearchBar from "../components/SearchBar";
import Kategori from "../components/Kategori";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  // Fetch products on the client (once)
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=30")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Alle") return products;

    return products.filter(
      (p) =>
        p.category &&
        p.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [products, selectedCategory]);

  return (
    <section className="flex justify-between">
      <div className="product-list w-300">
        <div className="flex justify-between mx-8 ml-12 mt-4">
          <Kategori
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <SearchBar />
        </div>

        <section className="grid grid-cols-3 gap-4 ml-4 mt-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>
      </div>

      <aside className="m-8">
        <Kurv />
      </aside>
    </section>
  );
}
