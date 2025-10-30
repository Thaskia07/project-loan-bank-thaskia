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

  useEffect(() => {
    // Pastikan adminData selalu ada
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

    // Cek status login
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    setReady(true);
  }, []);

  if (!ready) return null; // Hindari render sebelum localStorage siap

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
                <Sidebar />
                <div className="flex-1 flex flex-col md:ml-64">
                  <Header />
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
