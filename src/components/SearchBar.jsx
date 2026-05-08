export default function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="border p-4 rounded bg-pink-50">
      <input type="text" placeholder="Search Projects" value={searchTerm} 
      onChange={(e)=>setSearchTerm(e.target.value)
      }
      />
    </div>
  );
}