
import Image from "next/image";
import Card from "../components/Card";
import Kurv from "../components/Kurv";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="product-list">
        <SearchBar />
        <div className="flex justify-between">
      <section className="grid grid-cols-3 gap-1 ml-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <aside className="">
        <Kurv />
      </aside>
        </div>
    </div>
  );
}

