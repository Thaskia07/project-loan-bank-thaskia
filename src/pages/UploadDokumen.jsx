import React, { useState, useEffect } from "react";
import { Upload, FileText, ChevronLeft, ChevronRight } from "lucide-react";

const EditApplication = () => {
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
  const [currentStep, setCurrentStep] = useState(5); 
  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };
  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const [dokumen, setDokumen] = useState({
    ktpPemohon: "",
    ktpSuamiIstri: "",
    kartuKeluarga: "",
    akteNikahCerai: "",
    npwpPemohon: "",
    aktaHargaNotaril: "",

    dokumenJaminan: "",
    suratPengajuanBank: "",
    perjanjianKredit: "",
    dokumenPPUB: "",

    sptPPh21: "",
    slipGaji: "",
    rjkTabungan: "",
    suratRekomendasiPerusahaan: "",

    fileKekurangan1: "",
    fileKekurangan2: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("dokumenData");
    if (saved) {
      try {
        setDokumen(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading data from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dokumenData", JSON.stringify(dokumen));
  }, [dokumen]);

  const handleFileUpload = (fieldName, file) => {
    if (file) {
      setDokumen((prev) => ({
        ...prev,
        [fieldName]: file.name,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      handleFileUpload(name, files[0]);
    }
  };

  const renderUploadSection = (title, fields) => (
    <section className="border border-gray-300 rounded-md mb-6">
      <div className="bg-blue-900 text-white px-4 py-3 font-semibold">
        {title}
      </div>
      <div className="p-4 space-y-4">
        {fields.map((field) => (
          <div
            key={field.key}
            className="flex justify-between items-center border-b pb-3"
          >
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <FileText size={16} className="text-blue-600" />
              {field.label}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="file"
                name={field.key}
                onChange={handleChange}
                className="hidden"
                id={field.key}
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              />
              <label
                htmlFor={field.key}
                className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm"
              >
                <Upload size={16} /> Upload
              </label>
              <span className="text-sm text-gray-500 min-w-[120px] text-right">
                {dokumen[field.key] || "--Belum ada file--"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto mb-10 relative flex items-center justify-center">
        <button
          onClick={goPrev}
          disabled={currentStep === 0}
          className={`absolute left-0 p-2 rounded-full ${
            currentStep === 0
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-200"
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

      <div className="max-w-4xl w-full bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Edit Application</h1>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">
            Upload Dokumen
          </h2>
          <p className="text-gray-600 mb-6">
            Silahkan upload dokumen yang dibutuhkan
          </p>
          <div className="border-t border-gray-300 my-4"></div>
        </div>

        {renderUploadSection("Data Pribadi", [
          { key: "ktpPemohon", label: "Fotokopi KTP Pemohon" },
          { key: "ktpSuamiIstri", label: "Fotokopi KTP Suami / Istri" },
          { key: "kartuKeluarga", label: "Fotokopi Kartu Keluarga" },
          { key: "akteNikahCerai", label: "Fotokopi Akte Nikah/Cerai" },
          { key: "npwpPemohon", label: "Fotokopi NPWP Pemohon" },
        ])}

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
          <p className="text-sm text-yellow-800">
            Akta Harga Notaril dan didaftarkan ke KUA atau catatan sipil (Jika Ada)
          </p>
        </div>

        {renderUploadSection("Data Jaminan", [
          {
            key: "dokumenJaminan",
            label:
              "Fotokopi Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir",
          },
          {
            key: "suratPengajuanBank",
            label:
              "Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan",
          },
          {
            key: "perjanjianKredit",
            label: "Fotokopi Perjanjian Kredit (Jika Over Kredit)",
          },
          { key: "dokumenPPUB", label: "Dokumen PPUB (Jika Developer)" },
        ])}

        {renderUploadSection("Data Keuangan", [
          { key: "sptPPh21", label: "Fotokopi SPT / PPh21" },
          {
            key: "slipGaji",
            label:
              "Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir",
          },
          { key: "rjkTabungan", label: "Fotokopi RJK atau tabungan 6 bulan terakhir" },
          {
            key: "suratRekomendasiPerusahaan",
            label: "Surat Keterangan / Rekomendasi Perusahaan",
          },
        ])}

        {renderUploadSection("Data Tambahan", [
          { key: "fileKekurangan1", label: "File Kekurangan 1" },
          { key: "fileKekurangan2", label: "File Kekurangan 2" },
        ])}

        <div className="flex justify-end mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditApplication;
