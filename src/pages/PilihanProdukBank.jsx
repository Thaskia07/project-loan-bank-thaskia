import React, { useState } from "react";
import { Search, ArrowDownAZ, Star, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  "Pinjaman",
  "Pekerjaan",
  "Alamat",
  "Informasi Aset",
  "Informasi Tambahan",
  "Upload Dokumen",
  "Review",
  "Pilihan Produk & Bank",
  "Bank Officer",
];

const banks = [
  {
    id: 1,
    logo: "public/mandiri.png",
    bankName: "Bank Mandiri",
    product: "Bunga Special Tengah Imlek 2023",
    rating: 4,
    reviews: "1,456 Reviews",
    desc: "Mandiri KPR adalah kredit pembelian rumah yang diperuntukkan bagi nasabah yang ingin mengajukan pembiayaan rumah tinggal/perumahan/rumah developer.",
  },
  {
    id: 2,
    logo: "public/panin bank.jpg",
    bankName: "Panin Bank",
    product: "Panin KPR & KPR XTRA",
    rating: 4,
    reviews: "1,456 Reviews",
    desc: "KPR Panin adalah fasilitas kredit yang digunakan untuk pembelian rumah/apartemen/ruko baru dan seken.",
  },
  {
    id: 3,
    logo: "public/PT-MNC-Bank-International-Tbk.jpg",
    bankName: "MNC Bank",
    product: "MNC KPR Secondary",
    rating: 4,
    reviews: "1,456 Reviews",
    desc: "MNC KPR Secondary memberikan kemudahan bagi Anda yang ingin membeli rumah bekas dengan proses cepat.",
  },
  {
    id: 4,
    logo: "public/uob.jpg",
    bankName: "UOB Bank",
    product: "KPR Primary",
    rating: 5,
    reviews: "1,458 Reviews",
    desc: "Null",
  },
  {
    id: 5,
    logo: "public/uob.jpg",
    bankName: "UOB Bank",
    product: "KPR Secondary",
    rating: 4,
    reviews: "1456 Reviews",
    desc: "Null",
  },
  {
    id: 6,
    logo: "public/ocbc bank.jpg",
    bankName: "OCBC Bank",
    product: "KPR Kendali",
    rating: 4,
    reviews: "1,200 Reviews",
    desc: "Null",
  },
  {
    id: 7,
    logo: "public/cimb niaga.jpg",
    bankName: "CIMB NIAGA",
    product: "KPR Primary",
    rating: 3,
    reviews: "1420 Reviews",
    desc: "Null",
  },
  {
    id: 8,
    logo: "public/cimb niaga.jpg",
    bankName: "CIMB NIAGA",
    product: "KPR Secondary",
    rating: 4,
    reviews: "1,050 Reviews",
    desc: "Null",
  },
];

const PilihanProdukBank = () => {
  const [search, setSearch] = useState("");
  const [currentStep, setCurrentStep] = useState(7); 

  const filteredBanks = banks.filter((bank) =>
    bank.bankName.toLowerCase().includes(search.toLowerCase())
  );

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-8 overflow-x-hidden flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto mb-10 relative flex items-center justify-center">
        <button
          onClick={goPrev}
          disabled={currentStep === 0}
          className={`absolute left-0 p-2 rounded-full ${
            currentStep === 0 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex justify-between items-center w-[85%]">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <div key={index} className="flex flex-col items-center relative w-full">
                {index > 0 && (
                  <div
                    className={`absolute top-2 left-0 h-0.5 ${
                      isCompleted ? "bg-cyan-600" : "bg-gray-300"
                    }`}
                    style={{
                      width: "50%",
                      transform: "translateX(-50%)",
                      zIndex: 1,
                    }}
                  ></div>
                )}

                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-2 right-0 h-0.5 ${
                      isCompleted ? "bg-cyan-600" : "bg-gray-300"
                    }`}
                    style={{
                      width: "50%",
                      transform: "translateX(50%)",
                      zIndex: 1,
                    }}
                  ></div>
                )}

                <div
                  className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all ${
                    isActive
                      ? "bg-cyan-600 border-cyan-600 scale-110"
                      : isCompleted
                      ? "bg-cyan-600 border-cyan-600"
                      : "bg-white border-gray-400"
                  }`}
                ></div>

                <span
                  className={`mt-2 text-[11px] text-center whitespace-nowrap transition-all ${
                    isActive ? "text-cyan-600 font-semibold" : "text-gray-500"
                  }`}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>

        <button
          onClick={goNext}
          disabled={currentStep === steps.length - 1}
          className={`absolute right-0 p-2 rounded-full ${
            currentStep === steps.length - 1
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Pilihan Produk & Bank
        </h1>
        <p className="text-gray-500 mt-1">
          Silakan pilih produk bank yang sesuai dengan kebutuhan Anda
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
        <div className="flex items-center bg-white border border-gray-200 rounded-md px-3 py-2 w-full max-w-md shadow-sm">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Cari Nama Bank..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-sm text-gray-700 w-full"
          />
        </div>
        <button className="flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 shadow-sm">
          <ArrowDownAZ size={16} />
          Sort A-Z
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredBanks.map((bank) => (
          <div
            key={bank.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-center mb-3">
              <img
                src={bank.logo}
                alt={bank.bankName}
                className="w-36 h-16 object-contain"
              />
            </div>
            <div className="flex items-center justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < bank.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center mb-2">
              {bank.reviews}
            </p>
            <h2 className="font-semibold text-blue-600 text-sm text-center mb-1">
              {bank.product}
            </h2>
            <p className="text-[11px] text-gray-500 text-center leading-snug line-clamp-3">
              {bank.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-10 w-full max-w-7xl">
        <button className="bg-cyan-600 text-white px-6 py-2 rounded-md hover:bg-cyan-700 transition-all">
          Update
        </button>
      </div>
    </div>
  );
};

export default PilihanProdukBank;
