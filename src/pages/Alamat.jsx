import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Alamat = () => {
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

  const [currentStep, setCurrentStep] = useState(2); // index ke-2 = "Alamat"

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const [data, setData] = useState({
    ktpAlamat: "",
    ktpKodepos: "",
    ktpProvinsi: "",
    ktpKota: "",
    ktpKecamatan: "",
    ktpKelurahan: "",
    domAlamat: "",
    domKodepos: "",
    domProvinsi: "",
    domKota: "",
    domKecamatan: "",
    domKelurahan: "",
    kerjaAlamat: "",
    kerjaKodepos: "",
    kerjaProvinsi: "",
    kerjaKota: "",
    kerjaKecamatan: "",
    kerjaKelurahan: "",
    domSesuaiKTP: false,
    kerjaSesuaiKTP: false,
  });

  const provinsiList = ["DKI Jakarta", "Jawa Barat", "Jawa Tengah"];
  const kotaList = {
    "DKI Jakarta": ["Jakarta Selatan", "Jakarta Timur"],
    "Jawa Barat": ["Bandung", "Bogor"],
    "Jawa Tengah": ["Semarang", "Solo"],
  };
  const kecamatanList = {
    "Jakarta Selatan": ["Kebayoran Baru", "Cilandak"],
    "Jakarta Timur": ["Matraman", "Pulogadung"],
    "Bandung": ["Cicendo", "Coblong"],
    "Bogor": ["Bogor Selatan", "Bogor Timur"],
    "Semarang": ["Semarang Selatan", "Semarang Timur"],
    "Solo": ["Banjarsari", "Laweyan"],
  };
  const kelurahanList = {
    "Kebayoran Baru": ["Gandaria", "Pulo"],
    "Cilandak": ["Tegal", "Cipete"],
    "Matraman": ["Palmerah", "Cawang"],
    "Pulogadung": ["Kayu", "Rawa"],
    "Cicendo": ["Dago", "Pasir"],
    "Coblong": ["Lebak", "Setiabudi"],
    "Bogor Selatan": ["Sukasari", "Tanah Baru"],
    "Bogor Timur": ["Cibinong", "Ciawi"],
  };

  useEffect(() => {
    const saved = localStorage.getItem("alamatData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("alamatData", JSON.stringify(data));
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedData = { ...data, [name]: checked };
      if (name === "domSesuaiKTP" && checked) {
        updatedData.domAlamat = data.ktpAlamat;
        updatedData.domKodepos = data.ktpKodepos;
        updatedData.domProvinsi = data.ktpProvinsi;
        updatedData.domKota = data.ktpKota;
        updatedData.domKecamatan = data.ktpKecamatan;
        updatedData.domKelurahan = data.ktpKelurahan;
      }
      if (name === "kerjaSesuaiKTP" && checked) {
        updatedData.kerjaAlamat = data.ktpAlamat;
        updatedData.kerjaKodepos = data.ktpKodepos;
        updatedData.kerjaProvinsi = data.ktpProvinsi;
        updatedData.kerjaKota = data.ktpKota;
        updatedData.kerjaKecamatan = data.ktpKecamatan;
        updatedData.kerjaKelurahan = data.ktpKelurahan;
      }
      setData(updatedData);
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClearSection = (section) => {
    const clearData = {
      dom: {
        domAlamat: "",
        domKodepos: "",
        domProvinsi: "",
        domKota: "",
        domKecamatan: "",
        domKelurahan: "",
        domSesuaiKTP: false,
      },
      kerja: {
        kerjaAlamat: "",
        kerjaKodepos: "",
        kerjaProvinsi: "",
        kerjaKota: "",
        kerjaKecamatan: "",
        kerjaKelurahan: "",
        kerjaSesuaiKTP: false,
      },
    };
    setData((prev) => ({ ...prev, ...clearData[section] }));
  };

  const renderInput = (name, value, placeholder) => (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );

  const renderDropdown = (name, value, options, placeholder) => (
    <select
      name={name}
      value={value}
      onChange={handleInputChange}
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const getDependentOptions = (section, field) => {
    const baseField = data[`${section}Provinsi`];
    if (field === "Kota" && baseField) return kotaList[baseField] || [];
    if (field === "Kecamatan") {
      const kota = data[`${section}Kota`];
      return kota ? kecamatanList[kota] || [] : [];
    }
    if (field === "Kelurahan") {
      const kecamatan = data[`${section}Kecamatan`];
      return kecamatan ? kelurahanList[kecamatan] || [] : [];
    }
    return [];
  };

  const renderSection = (title, prefix, showClear = false) => (
    <section className="border border-gray-300 rounded-md">
      <div
        className={`bg-blue-900 text-white px-4 py-3 font-semibold ${
          showClear ? "flex justify-between items-center" : ""
        }`}
      >
        <span>{title}</span>
        {showClear && (
          <button
            onClick={() => handleClearSection(prefix)}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
          >
            CLEAR
          </button>
        )}
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alamat Lengkap
          </label>
          {renderInput(`${prefix}Alamat`, data[`${prefix}Alamat`], "Isi Alamat Lengkap (Jalan, RT/RW)")}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kode POS</label>
          {renderInput(`${prefix}Kodepos`, data[`${prefix}Kodepos`], "Isi Kode POS")}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Provinsi</label>
          {renderDropdown(`${prefix}Provinsi`, data[`${prefix}Provinsi`], provinsiList, "--Pilih Provinsi--")}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kota</label>
          {renderDropdown(`${prefix}Kota`, data[`${prefix}Kota`], getDependentOptions(prefix, "Kota"), "--Pilih Kota--")}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kecamatan</label>
          {renderDropdown(
            `${prefix}Kecamatan`,
            data[`${prefix}Kecamatan`],
            getDependentOptions(prefix, "Kecamatan"),
            "--Pilih Kecamatan--"
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kelurahan</label>
          {renderDropdown(
            `${prefix}Kelurahan`,
            data[`${prefix}Kelurahan`],
            getDependentOptions(prefix, "Kelurahan"),
            "--Pilih Kelurahan--"
          )}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 flex flex-col items-center">
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
                    style={{ width: "50%", transform: "translateX(-50%)", zIndex: 1 }}
                  ></div>
                )}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-2 right-0 h-0.5${
                      isCompleted ? "bg-cyan-600" : "bg-gray-300"
                    }`}
                    style={{ width: "50%", transform: "translateX(50%)", zIndex: 1 }}
                  ></div>
                )}
                <div
                  onClick={() => setCurrentStep(index)}
                  className={`relative z-10 w-4 h-4 rounded-full border-2 cursor-pointer ${
                    isActive
                      ? "bg-cyan-600 border-cyan-600 scale-110"
                      : isCompleted
                      ? "bg-cyan-600 border-cyan-600"
                      : "bg-white border-gray-400"
                  }`}
                ></div>
                <span
                  className={`mt-2 text-[11px] text-center whitespace-nowrap ${
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

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Alamat</h1>

        {renderSection("Data KTP", "ktp")}

        <div className="my-4 p-4 border border-gray-300 rounded-md">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="domSesuaiKTP"
              checked={data.domSesuaiKTP}
              onChange={handleInputChange}
              className="mr-3"
            />
            <span className="text-gray-700">Domisili Sesuai KTP</span>
          </label>
        </div>

        {renderSection("Data Domisili", "dom", true)}

        <div className="my-4 p-4 border border-gray-300 rounded-md">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="kerjaSesuaiKTP"
              checked={data.kerjaSesuaiKTP}
              onChange={handleInputChange}
              className="mr-3"
            />
            <span className="text-gray-700">
              Alamat tempat bekerja / perusahaan Sesuai KTP
            </span>
          </label>
        </div>

        {renderSection("Data Alamat Tempat Bekerja", "kerja", true)}

        <div className="flex justify-end mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alamat;  