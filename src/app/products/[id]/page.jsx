"use client";
// import Thumbnail from ".../components/Thumbnail"; // kommenteret ud, da funktionen er defineret i bunden
import { useParams } from "next/navigation"; // tilføjet useParams til at hente id fra URL
import { useEffect, useState } from "react";
import Image from "next/image";


export default function ProductPage() {
  const { id } = useParams(); // Hent produktdata baseret på id fra URL

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
      if (!id) return; // safety check

    async function loadProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setActiveImage(data.thumbnail);
    }

    loadProduct();
  }, [id]);

  // Hele din fetch er flyttet ind i useEffect ovenfor med async funktion

  if (!product) return <p>Loading…</p>; // Chat tilføjer det her, ved ikke om du vil have den med?

  return (
    <section>
      <section>
        <figure>
          <Image
            src={activeImage}
            alt={product.title}
            width={400}
            height={400}
          />
        </figure>

        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>DKK {product.price},-</p>
          <p>Category: {product.category}</p>
        </div>
      </section>

      <div>
        {product.images.map((imgSrc, index) => (
          <Thumbnail
            key={index}
            imgsrc={imgSrc}
            setActiveImage={setActiveImage}
            activeImage={activeImage}
          />
        ))}
      </div>
    </section>
  );
}

/* Thumbnail funktion er her stadig */
function Thumbnail({ imgsrc, setActiveImage, activeImage }) {
  const isActive = imgsrc === activeImage;

  return ( 
  <div onClick={() => 
    setActiveImage(imgsrc)}> 
    <Image 
    src={imgsrc} 
    alt="" 
    width={100} 
    height={100} 
    /> 
    </div> );
}
