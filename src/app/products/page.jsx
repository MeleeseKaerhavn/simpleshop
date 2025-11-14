import Card from "../components/Card";
import Kurv from "../components/Kurv";
import SearchBar from "../components/SearchBar";
import Kategori from "../components/Kategori";

export default async function ProductsPage() {
  // Fetch products on the server
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  const products = data.products;

  return (
    <section className="flex justify-between">
      <div className="product-list w-300">
        <div className="flex justify-between mx-8 ml-12 mt-4">
          <Kategori />
          <SearchBar />
        </div>

        <section className="grid grid-cols-3 gap-4 ml-4 mt-6">
          {products.map((product) => (
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
