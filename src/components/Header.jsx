import React from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header({ adminName }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("adminData");
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <h1 className="text-xl font-bold text-gray-700 tracking-wide">
        DASHBOARD ADMIN
      </h1>

      <div className="flex items-center gap-5">
        <div className="text-right">
          <p className="text-sm text-gray-500">Welcome </p>
          <h2 className="text-lg font-semibold text-indigo-700">
            {adminName || "YOHANNES AFFANDY"}
          </h2>
        </div>

        <button
          onClick={handleLogout}
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
