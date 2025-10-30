import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Edit, Trash2, ArrowLeft } from "lucide-react";


const BankDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bank, setBank] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const banks = JSON.parse(localStorage.getItem("bankProducts")) || [];
    const selectedBank = banks.find((b) => b.id === parseInt(id));
    setBank(selectedBank);
  }, [id]);

  const handleDelete = () => {
    const banks = JSON.parse(localStorage.getItem("bankProducts")) || [];
    const updatedBanks = banks.filter(b => b.id !== parseInt(id));
    localStorage.setItem("bankProducts", JSON.stringify(updatedBanks));
    setShowDeleteConfirm(false);
    navigate("/product-bank");
  };

  if (!bank) return <p className="text-center text-gray-500">Bank tidak ditemukan.</p>;

  return (
    <div className="min-h-screen bg-white py-4 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900 mb-1">Bank Product Detail (Bank)</h1>
          </div>
          <div className="flex gap-2">
            <Link
              to={`/product-bank/edit/${bank.id}`}
              className="bg-yellow-500 text-white px-4 py-2 rounded text-sm hover:bg-yellow-600 transition-colors flex items-center gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit Product
            </Link>
            
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete Product
            </button>
          </div>
        </div>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">Product</h2>
          <div className="border border-gray-300 rounded">
            <div className="bg-blue-900 text-white px-3 py-2 font-semibold">
              <h3 className="text-base">Bank Product Detail</h3>
            </div>
            
            <div className="p-3">
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-1">Bank</div>
                <div className="flex items-center gap-3">
                  <img
                    src={`/${bank.logo?.replace("public/", "")}`}
                    alt={bank.name}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-lg font-bold text-gray-900">{bank.name}</span>
                </div>
              </div>

              <div className="space-y-0">
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Name Product</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.promo || "Bunga Special Tengah Imlek 2023"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Jaminan</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.jaminan || "Ruko, Rukan, Rumah, Apartemen"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Target Market</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.target || "Karyawan, Pengusaha"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Komisi</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.komisi || "1.5%"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Appraisal</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.appraisal || "1%"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Floating</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.floating || "1%"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Loan to Value</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.loanToValue || "85%"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Penalty Fee</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.penaltyFee || "-"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Interest Rate</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.interestRate || "3.65%"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Fix Rate %</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.fixRate || "3.88%"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Fix Rate (year)</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.fixRateYear || "3"}</div>
                </div>
                
                <div className="flex border-b border-gray-300 py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Max Tenor (year)</div>
                  <div className="w-3/5 text-sm text-gray-900">{bank.maxTenor || "20 Tahun"}</div>
                </div>
                
                <div className="flex py-2">
                  <div className="w-2/5 text-sm font-semibold text-gray-700">Keterangan</div>
                  <div className="w-3/5 text-sm text-gray-900">
                    {bank.description || `${bank.name} ${bank.promo} - ${bank.jaminan} - Target: ${bank.target}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-start mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>
        </div>

        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Konfirmasi Hapus</h3>
              <p className="text-gray-600 mb-4">
                Apakah Anda yakin ingin menghapus produk <strong>{bank.name}</strong>? Tindakan ini tidak dapat dibatalkan.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BankDetail;