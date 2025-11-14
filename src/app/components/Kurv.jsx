import Link from "next/link";

const Kurv = () => {
    return ( 
    <div className="max-w-xs rounded-xl border border-black bg-white p-4 space-y-4">
  <div className="space-y-2 text-sm">
    <div className="flex justify-between">
      <span>Produkt 1</span>
      <span>100,-</span>
    </div>
    <div className="flex justify-between">
      <span>Produkt 2</span>
      <span>100,-</span>
    </div>

    <div className="mt-2 border-t border-black pt-2 font-semibold">
      <div className="flex justify-between">
        <span>Total</span>
        <span>200,-</span>
      </div>
    </div>
  </div>

    <Link href="/payment">
  <button
    type="button"
    className="bg-white p-2 pr-6 pl-6 border-1 border-black hover:bg-black hover:text-white transition"
  >
    Gå til betaling
  </button>
</Link>
</div>
);
}
 
export default Kurv;