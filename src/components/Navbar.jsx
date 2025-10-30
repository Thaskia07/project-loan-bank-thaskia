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
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex gap-2">
          <button
            onClick={() => onTabChange("bank")}
            className={`px-4 py-2 rounded-md text-sm font-semibold ${
              activeTab === "bank"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Bank
          </button>
          <button
            onClick={() => onTabChange("developer")}
            className={`px-4 py-2 rounded-md text-sm font-semibold ${
              activeTab === "developer"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Developer
          </button>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          <PlusCircle size={18} />
          <span>Tambah Produk</span>
        </button>
      </div>

      <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-t">
        <div className="flex items-center gap-3 w-1/2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Cari produk bank..."
            value={searchValue}
            onChange={handleSearch}
            className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100">
          <SlidersHorizontal size={16} />
          <span>Sort</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
