import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  DollarSign,
  Briefcase,
  CreditCard,
  PiggyBank,
  Building2,
  TrendingUp,
  Star,
  Clock,
  Percent,
  Shield,
  Target,
  Wallet,
  TrendingUp as Chart,
  Plus,
  Search as SearchIcon,
  ChevronDown,
} from "lucide-react";

const ProductBank = () => {
  const [banks, setBanks] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [productType, setProductType] = useState("");

  useEffect(() => {
    const storedBanks = JSON.parse(localStorage.getItem("bankProducts"));
    if (!storedBanks) {
      const data = [
        {
          id: 1,
          logo: "mandiri.png",
          name: "Bank Mandiri",
          promo: "Bunga Spesial Tengah Imlek 2023",
          fixRate: "6.25%",
          maxTenor: "20 Tahun",
          loanToValue: "85%",
          jaminan: "Rumah / Apartemen",
          target: "Karyawan",
          komisi: "1.5%",
          rating: 4.5,
          reviews: 120,
          usersYearly: "12.4K",
          productType: "kpr-secondary" 
        },
        {
          id: 2,
          logo: "panin bank.jpg",
          name: "Panin Bank",
          promo: "Fix Rate Spesial 5 Tahun",
          fixRate: "6.00%",
          maxTenor: "10 Tahun",
          loanToValue: "85%",
          jaminan: "Rumah Tinggal",
          target: "Profesional",
          komisi: "1.8%",
          rating: 4.6,
          reviews: 180,
          usersYearly: "10.7K",
          productType: "kpr-primary" 
        },
        {
          id: 3,
          logo: "PT-MNC-Bank-International-Tbk.jpg",
          name: "MNC Bank",
          promo: "Promo Suku Bunga Ringan 2024",
          fixRate: "5.90%",
          maxTenor: "25 Tahun",
          loanToValue: "90%",
          jaminan: "Rumah / Apartemen",
          target: "Karyawan & Wiraswasta",
          komisi: "1.2%",
          rating: 4.4,
          reviews: 90,
          usersYearly: "9.2K",
          productType: "multiguna" 
        },
        {
          id: 4,
          logo: "commonbank.jpg",
          name: "Commonwealth Bank",
          promo: "Fix Rate Spesial Hingga 3 Tahun",
          fixRate: "6.10%",
          maxTenor: "15 Tahun",
          loanToValue: "80%",
          jaminan: "Rumah Tinggal",
          target: "Profesional",
          komisi: "1.6%",
          rating: 4.7,
          reviews: 150,
          usersYearly: "11.5K",
          productType: "refinancing" 
        },
        {
          id: 5,
          logo: "commonbank.jpg",
          name: "Commonwealth Bank",
          promo: "Promo Bunga KPR Ringan",
          fixRate: "6.35%",
          maxTenor: "20 Tahun",
          loanToValue: "85%",
          jaminan: "Rumah / Apartemen",
          target: "Karyawan",
          komisi: "1.4%",
          rating: 4.7,
          reviews: 150,
          usersYearly: "11.5K",
          productType: "kpr-secondary" 
        },
        {
          id: 6,
          logo: "uob.jpg",
          name: "UOB Bank",
          promo: "KPR Bunga Spesial Hingga 10 Tahun",
          fixRate: "6.50%",
          maxTenor: "10 Tahun",
          loanToValue: "85%",
          jaminan: "Ruko / Rumah",
          target: "Wirausaha",
          komisi: "1.7%",
          rating: 4.6,
          reviews: 200,
          usersYearly: "15.3K",
          productType: "kpr-primary" 
        },
        {
          id: 7,
          logo: "uob.jpg",
          name: "UOB Bank",
          promo: "Bunga Spesial Akhir Tahun",
          fixRate: "6.45%",
          maxTenor: "15 Tahun",
          loanToValue: "85%",
          jaminan: "Rumah / Apartemen",
          target: "Profesional",
          komisi: "1.5%",
          rating: 4.6,
          reviews: 200,
          usersYearly: "15.3K",
          productType: "multiguna" 
        },
        {
          id: 8,
          logo: "ocbc bank.jpg",
          name: "OCBC Bank",
          promo: "Promo KPR Fix Rate 5 Tahun",
          fixRate: "6.20%",
          maxTenor: "25 Tahun",
          loanToValue: "85%",
          jaminan: "Rumah Tinggal",
          target: "Karyawan",
          komisi: "1.5%",
          rating: 4.5,
          reviews: 160,
          usersYearly: "13.8K",
          productType: "kpr-secondary" 
        },
        {
          id: 9,
          logo: "cimb niaga.jpg",
          name: "CIMB Niaga",
          promo: "Fix Rate Ringan 3 Tahun",
          fixRate: "6.30%",
          maxTenor: "20 Tahun",
          loanToValue: "85%",
          jaminan: "Ruko / Rumah",
          target: "Karyawan",
          komisi: "1.4%",
          rating: 4.5,
          reviews: 175,
          usersYearly: "14.1K",
          productType: "refinancing" 
        },
        {
          id: 10,
          logo: "cimb niaga.jpg",
          name: "CIMB Niaga",
          promo: "Bunga KPR Spesial Akhir Tahun",
          fixRate: "6.40%",
          maxTenor: "25 Tahun",
          loanToValue: "85%",
          jaminan: "Rumah / Apartemen",
          target: "Profesional",
          komisi: "1.3%",
          rating: 4.5,
          reviews: 175,
          usersYearly: "14.1K",
          productType: "kpr-primary" 
        },
        {
          id: 11,
          logo: "cimb niaga.jpg",
          name: "CIMB Niaga",
          promo: "Promo KPR Spesial Tahun Baru",
          fixRate: "6.35%",
          maxTenor: "20 Tahun",
          loanToValue: "85%",
          jaminan: "Rumah / Apartemen",
          target: "Karyawan & Profesional",
          komisi: "1.5%",
          rating: 4.5,
          reviews: 180,
          usersYearly: "14.5K",
          productType: "multiguna" 
        },
      ];
      localStorage.setItem("bankProducts", JSON.stringify(data));
      setBanks(data);
    } else {
      setBanks(storedBanks);
    }
  }, []);

  const categories = [
    { icon: <Home className="w-5 h-5 text-blue-600" />, name: "KPR" },
    { icon: <CreditCard className="w-5 h-5 text-green-600" />, name: "Multiguna" },
    { icon: <TrendingUp className="w-5 h-5 text-orange-600" />, name: "Refinancing" },
    { icon: <Briefcase className="w-5 h-5 text-purple-600" />, name: "Kredit Modal Usaha & Investasi" },
    { icon: <PiggyBank className="w-5 h-5 text-pink-600" />, name: "Deposito" },
    { icon: <Building2 className="w-5 h-5 text-indigo-600" />, name: "Take Over" },
    { icon: <DollarSign className="w-5 h-5 text-teal-600" />, name: "Bridging Loan" },
  ];

  const filteredBanks = banks
    .filter(bank => bank.name.toLowerCase().includes(search.toLowerCase()))
    .filter(bank => (categoryFilter ? bank.target.includes(categoryFilter) : true))
    .filter(bank => (productType ? bank.productType === productType : true)) // TAMBAH FILTER INI
    .sort((a, b) => {
      if (sortOption === "rating") return b.rating - a.rating;
      if (sortOption === "fixRate") return parseFloat(a.fixRate) - parseFloat(b.fixRate);
      if (sortOption === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => setCategoryFilter(cat.name)}
            className={`bg-white border shadow-sm rounded-xl flex flex-col items-center justify-center p-4 hover:shadow-md transition-all cursor-pointer
              ${categoryFilter === cat.name ? "border-blue-600" : ""}`}
          >
            <div className="mb-2">{cat.icon}</div>
            <p className="text-sm font-semibold text-gray-700 text-center">{cat.name}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 mb-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Cari bank..."
            className="border rounded-lg p-2 pl-10 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="relative">
          <select
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="border rounded-lg p-2 pl-3 pr-8 appearance-none"
          >
            <option value="">Kredit Pemilikan...</option>
            <option value="kpr-primary">KPR Primary</option>
            <option value="kpr-secondary">KPR Secondary</option>
            <option value="multiguna">Kredit Multiguna</option>
            <option value="refinancing">Kredit Refinancing</option>
          </select>
          <ChevronDown className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            className="border rounded-lg p-2 pl-3 pr-8 appearance-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">A-Z</option>
            <option value="name">Nama A-Z</option>
            <option value="rating">Rating (Tinggi → Rendah)</option>
            <option value="fixRate">Fix Rate (Rendah → Tinggi)</option>
          </select>
          <ChevronDown className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        <button
          onClick={() => alert("Tambah bank baru!")}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Tambah Product
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {filteredBanks.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Tidak ada produk yang ditemukan.</p>
          </div>
        ) : (
          filteredBanks.map((bank) => (
            <div
              key={bank.id}
              className="bg-white rounded-xl shadow-md border p-4 flex flex-col sm:flex-row justify-between hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center w-full sm:w-1/5 border-r sm:pr-4 mb-4 sm:mb-0">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="w-28 h-14 object-contain mb-2"
                />
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <p className="text-sm font-medium">{bank.rating}</p>
                </div>
                <p className="text-xs text-gray-500">{bank.reviews} reviews</p>
                <div className="w-full border-t my-2"></div>
                <p className="text-xs text-gray-500">
                  Users: <span className="font-semibold">{bank.usersYearly}</span>/yearly
                </p>
              </div>

              <div className="flex-1 sm:pl-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{bank.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{bank.promo}</p>
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="space-y-1">
                    <p className="flex items-center gap-2">
                      <Percent className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-700">Fix Rate:</span> {bank.fixRate}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-700">Max Tenor:</span> {bank.maxTenor}
                    </p>
                    <p className="flex items-center gap-2">
                      <Chart className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-700">Loan to Value:</span> {bank.loanToValue}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-700">Jaminan:</span> {bank.jaminan}
                    </p>
                    <p className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-700">Target:</span> {bank.target}
                    </p>
                    <p className="flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-700">Komisi:</span> {bank.komisi}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-center sm:justify-end mt-4 sm:mt-0 sm:w-1/5">
                <Link
                  to={`/product-bank/${bank.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all"
                >
                  Detail
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductBank;