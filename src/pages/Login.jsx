import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const adminData = JSON.parse(localStorage.getItem("adminData"));
    if (!adminData) {
      setError("⚠️ Data admin tidak ditemukan. Silakan refresh halaman.");
      return;
    }

    if (username === adminData.username && password === adminData.password) {
      localStorage.setItem("isLoggedIn", "true");
      onLogin(); // update state di App.jsx
      navigate("/");
    } else {
      setError("❌ Username atau password salah!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center text-cyan-600 mb-6">
          Admin Login
        </h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Masukkan username"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Masukkan password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Default akun: <b>admin</b> / <b>adminloan2025</b>
        </p>
      </div>
    </div>
  );
}

export default Login;
