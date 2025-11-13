const SearchBar = () => {
    return ( 
    <div className="flex w-full max-w-sm rounded-2xl border-2 border-green-500 overflow-hidden">
  <input
    type="text"
    placeholder="Søg i alle produkter"
    className="flex-1 px-4 py-1 placeholder:text-gray-500"
  />

  <button className="bg-green-500 text-white px-4 py-2 font-semibold hover:bg-green-600">
    Søg
  </button>
</div>
);
}
 
export default SearchBar;