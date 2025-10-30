import React from "react";
import { LogOut, Menu } from "lucide-react";

function Header({ adminName, toggleSidebar }) {
  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200 px-4 md:px-6 py-3 shadow-sm">
      {/* Hamburger untuk mobile */}
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={toggleSidebar}>
          <Menu size={24} className="text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-700 tracking-wide">
          DASHBOARD
        </h1>
      </div>

      {/* Desktop */}
      <h1 className="hidden md:block text-xl font-bold text-gray-700 tracking-wide">
        DASHBOARD ADMIN
      </h1>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm text-gray-500">Welcome</p>
          <h2 className="text-lg font-semibold text-indigo-700">
            {adminName || "YOHANNES AFFANDY"}
          </h2>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("adminData");
            window.location.href = "/login";
          }}
          className="flex items-center gap-1.5 bg-red-500/90 text-white px-3 py-1.5 rounded-md 
                     hover:bg-red-600 active:scale-95 transition-all text-sm font-medium shadow-sm"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
