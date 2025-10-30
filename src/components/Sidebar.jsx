import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, FileText, Box, Banknote, Activity,
  HelpCircle, Clipboard, Megaphone, MessageSquare, ChevronDown, ChevronRight, X
} from "lucide-react";

function Sidebar({ setIsMobileOpen }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const menu = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", path: "/" },
    { icon: <Users size={18} />, label: "Contact", path: "/contact" },
    {
      icon: <FileText size={18} />,
      label: "Loan",
      sub: [
        { label: "Pilihan Produk Bank", path: "/pilihan-produk-bank" },
        { label: "Alamat", path: "/alamat" },
        { label: "Upload Dokumen", path: "/upload-dokumen" },
      ],
    },
    {
      icon: <Box size={18} />,
      label: "Product",
      sub: [
        { label: "Bank Product", path: "/product-bank" },
        { label: "Product", path: "/product" },
        { label: "Category Product", path: "/category-product" },
      ],
    },
    { icon: <Banknote size={18} />, label: "Bank", path: "/bank" },
    { icon: <Activity size={18} />, label: "Credit Scoring", path: "/credit-scoring" },
    { icon: <HelpCircle size={18} />, label: "FAQ’s", path: "/faqs" },
    { icon: <Clipboard size={18} />, label: "Pipeline", path: "/pipeline" },
    { icon: <Megaphone size={18} />, label: "Marketing Tools", path: "/marketing" },
    { icon: <MessageSquare size={18} />, label: "Whatsapp", path: "/whatsapp" },
  ];

  const toggleSubmenu = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <aside className="w-full h-full bg-white border-r border-gray-200 overflow-y-auto">
      {/* Header Sidebar */}
      <div className="flex items-center justify-between p-5 border-b">
        <div className="flex items-center gap-2">
          <div className="bg-cyan-700 text-white text-lg font-bold px-3 py-2 rounded">LM</div>
          <div>
            <h1 className="text-sm font-semibold text-gray-700">Loan Market</h1>
            <p className="text-xs text-gray-400">Admin Portal</p>
          </div>
        </div>
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden text-gray-600 hover:text-gray-800"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu List */}
      <ul className="mt-2">
        {menu.map((item, i) => (
          <li key={i}>
            {item.sub ? (
              <>
                <div
                  onClick={() => toggleSubmenu(item.label)}
                  className={`flex justify-between items-center px-5 py-2.5 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 cursor-pointer ${
                    openMenu === item.label ? "bg-cyan-50 text-cyan-600" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-500">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                  {openMenu === item.label ? (
                    <ChevronDown size={16} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
                  )}
                </div>

                {openMenu === item.label && (
                  <ul className="ml-10 mt-1 space-y-1">
                    {item.sub.map((subItem, j) => (
                      <li key={j}>
                        <Link
                          to={subItem.path}
                          className={`block py-2 text-sm rounded-md px-2 hover:text-cyan-600 ${
                            location.pathname === subItem.path
                              ? "text-cyan-600 font-medium"
                              : "text-gray-600"
                          }`}
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 px-5 py-2.5 hover:bg-cyan-50 hover:text-cyan-600 cursor-pointer ${
                  location.pathname === item.path
                    ? "text-cyan-600 bg-cyan-50 font-medium"
                    : "text-gray-700"
                }`}
              >
                <span className="text-cyan-500">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
