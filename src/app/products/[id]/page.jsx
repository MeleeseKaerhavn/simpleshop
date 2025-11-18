"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Kurv from "../../components/Kurv";
import ReviewSection from "@/app/components/Reviewsection";
import Thumbnail from "@/app/components/Thumbnail";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setActiveImage(data.thumbnail);
    }

    if (id) loadProduct();
  }, [id]);

  if (!product) return <p className="p-10">Loading…</p>;

  return (
    <main className="max-w-6xl mx-auto px-10 py-10 space-y-12">
      
      <div>
        <Link
          href="/products"
          className="text-sm font-medium text-black underline-offset-2 hover:underline"
        >
          &lt; Tilbage
        </Link>
      </div>

 
      <section className="flex flex-wrap gap-12 items-start">
        
        <div className="flex-1">
          <div className="flex gap-10 items-start">
           
            <div>
              <figure className="w-[340px] h-[340px] border-4 rounded-xl p-4 flex items-center justify-center bg-white">
                <Image
                  src={activeImage}
                  alt={product.title}
                  width={340}
                  height={340}
                  className="object-contain w-full h-full"
                />
              </figure>

              
              <div className="mt-4 flex gap-4">
                {product.images.map((imgSrc, index) => (
                  <Thumbnail
                    key={index}
                    imgsrc={imgSrc}
                    setActiveImage={setActiveImage}
                    activeImage={activeImage}
                  />
                ))}
              </div>
            </div>

           
            <div className="space-y-3 mt-2">
              <h1 className="text-3xl font-bold text-black">
                {product.title}
              </h1>
              <p className="text-gray-600 max-w-xs text-sm leading-relaxed">
                {product.description}
              </p>
              <p className="text-xl font-semibold text-black">
                DKK {product.price},-
              </p>
              <p className="text-xs text-gray-500">
                Category: {product.category}
              </p>
            </div>
          </div>
        </div>

       
        <aside className="w-72">
          <Kurv />
        </aside>
      </section>

      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full border border-black" />
        <span className="flex-1 h-px bg-black" />
        <span className="w-3 h-3 rounded-full border border-black" />
      </div>

   
<section className="pb-10">
  <ReviewSection reviews={product.reviews} rating={product.rating} />
</section>

    </main>
  );
}

