const SearchBar = () => {
    return ( 
    <div className="flex w-full max-w-sm rounded-full border-2 border-black overflow-hidden">
  <input
    type="text"
    placeholder="Søg i alle produkter"
    className="flex-1 px-4 py-1 placeholder:text-gray-500"
  />

  <button className="px-4 py-2 font-semibold border-1 rounded-r-full border-black bg-white hover:bg-black hover:text-white transition">
    Søg
  </button>
</div>
);
}
 
export default SearchBar;