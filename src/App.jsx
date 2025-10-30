import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductBank from "./pages/ProductBank";
import CategoryProduct from "./pages/CategoryProduct";
import BankDetail from "./pages/BankDetail";
import EditProductBank from "./pages/EditProductBank";
import PilihanProdukBank from "./pages/PilihanProdukBank";
import Alamat from "./pages/Alamat";
import UploadDokumen from "./pages/UploadDokumen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ready, setReady] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("adminData");
    if (!admin) {
      const defaultAdmin = {
        username: "admin",
        password: "adminloan2025",
        fullName: "Yohannes Affandy (Jojo)",
      };
      localStorage.setItem("adminData", JSON.stringify(defaultAdmin));
      console.log("✅ Default admin dibuat:", defaultAdmin);
    }

    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login onLogin={() => setIsLoggedIn(true)} />
            )
          }
        />

        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar desktop */}
                <div className="hidden md:block fixed inset-y-0 left-0 w-60 lg:w-64 bg-white shadow-md z-30">
                  <Sidebar />
                </div>

                {/* Sidebar mobile (drawer overlay) */}
                <div
                  className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
                    isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                />
                <div
                  className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
                    isMobileOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <Sidebar setIsMobileOpen={setIsMobileOpen} />
                </div>

                {/* Konten utama */}
                <div className="flex-1 flex flex-col md:ml-60 lg:ml-64 transition-all duration-300">
                  <Header toggleSidebar={() => setIsMobileOpen(!isMobileOpen)} />
                  <div className="p-4 flex-1 overflow-auto">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/product" element={<Product />} />
                      <Route path="/product-bank" element={<ProductBank />} />
                      <Route path="/product-bank/:id" element={<BankDetail />} />
                      <Route path="/product-bank/edit/:id" element={<EditProductBank />} />
                      <Route path="/category-product" element={<CategoryProduct />} />
                      <Route path="/pilihan-produk-bank" element={<PilihanProdukBank />} />
                      <Route path="/alamat" element={<Alamat />} />
                      <Route path="/upload-dokumen" element={<UploadDokumen />} />
                    </Routes>
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
