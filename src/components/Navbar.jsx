import { useState } from "react";
import { Search, PlusCircle, SlidersHorizontal } from "lucide-react";

function Navbar({ onSearch, onTabChange, activeTab }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) onSearch(value);
  };

  return (
    <div className="bg-white shadow-sm border-b">
      {/* Top section: tabs + add button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-6 py-3 gap-3 md:gap-0">
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => onTabChange("bank")}
            className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-semibold ${
              activeTab === "bank"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Bank
          </button>
          <button
            onClick={() => onTabChange("developer")}
            className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-semibold ${
              activeTab === "developer"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Developer
          </button>
        </div>

        {/* Add Product */}
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 self-start md:self-auto">
          <PlusCircle size={18} />
          <span className="hidden md:inline">Tambah Produk</span>
        </button>
      </div>

      {/* Bottom section: search + sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-6 py-3 bg-gray-50 border-t gap-3 md:gap-0">
        {/* Search */}
        <div className="flex items-center gap-3 w-full md:w-1/2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Cari produk bank..."
            value={searchValue}
            onChange={handleSearch}
            className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sort */}
        <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 w-full md:w-auto justify-center md:justify-start">
          <SlidersHorizontal size={16} />
          <span>Sort</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
