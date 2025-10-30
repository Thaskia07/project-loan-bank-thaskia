import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save, 
  X,
  Home,
  Building,
  Car,
  FileText,
  Users,
  Target,
  Percent,
  Calendar,
  Star,
  Clock,
  TrendingUp,
  Shield,
  Wallet
} from 'lucide-react';

const EditProductBank = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    id: '',
    logo: '',
    name: '',
    promo: '',
    fixRate: '',
    maxTenor: '',
    loanToValue: '',
    jaminan: '',
    target: '',
    komisi: '',
    rating: '',
    reviews: '',
    usersYearly: '',
    jenisProduct: '',
    promotionalProduct: {
      startDate: '',
      endDate: ''
    },
    appraisal: '',
    floating: '',
    penaltyFee: '',
    interestRate: '',
    fixRateYear: '',
    keterangan: '',
    url: 'null'
  });

  useEffect(() => {
    const loadProductData = () => {
      try {
        const storedBanks = JSON.parse(localStorage.getItem('bankProducts')) || [];
        const product = storedBanks.find(bank => bank.id === parseInt(id));
        
        if (product) {
          setFormData({
            id: product.id,
            logo: product.logo || '',
            name: product.name || '',
            promo: product.promo || '',
            fixRate: product.fixRate ? product.fixRate.replace('%', '') : '',
            maxTenor: product.maxTenor ? product.maxTenor.replace(' Tahun', '') : '',
            loanToValue: product.loanToValue ? product.loanToValue.replace('%', '') : '',
            jaminan: product.jaminan || '',
            target: product.target || '',
            komisi: product.komisi ? product.komisi.replace('%', '') : '',
            rating: product.rating || '',
            reviews: product.reviews || '',
            usersYearly: product.usersYearly || '',
            jenisProduct: 'Kredit Pemilikan Rumah Secondary (KPR Secondary)',
            promotionalProduct: {
              startDate: '22/01/2010',
              endDate: '22/02/2010'
            },
            appraisal: '1',
            floating: '1',
            penaltyFee: '0',
            interestRate: '3.65',
            fixRateYear: '3',
            keterangan: product.description || `${product.name} ${product.promo} - ${product.jaminan} - Target: ${product.target}`,
            url: 'null'
          });
        } else {
          alert('Produk tidak ditemukan!');
          navigate('/product-bank');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading product data:', error);
        alert('Error loading product data');
        setLoading(false);
      }
    };

    loadProductData();
  }, [id, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      // Update data di localStorage
      const storedBanks = JSON.parse(localStorage.getItem('bankProducts')) || [];
      const updatedBanks = storedBanks.map(bank => {
        if (bank.id === parseInt(id)) {
          return {
            ...bank,
            name: formData.name,
            logo: formData.logo,
            promo: formData.promo,
            fixRate: `${formData.fixRate}%`,
            maxTenor: `${formData.maxTenor} Tahun`,
            loanToValue: `${formData.loanToValue}%`,
            jaminan: formData.jaminan,
            target: formData.target,
            komisi: `${formData.komisi}%`,
            rating: parseFloat(formData.rating),
            reviews: parseInt(formData.reviews),
            usersYearly: formData.usersYearly,
            description: formData.keterangan
          };
        }
        return bank;
      });
      
      localStorage.setItem('bankProducts', JSON.stringify(updatedBanks));
      alert('Product berhasil diupdate!');
      navigate('/product-bank');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    }
  };

  const handleCancel = () => {
    navigate('/product-bank');
  };

  const jaminanOptions = [
    'Rumah / Apartemen',
    'Rumah Tinggal', 
    'Ruko / Rumah',
    'Rumah',
    'Apartemen',
    'Ruko',
    'Kendaraan Pribadi',
    'Sertifikat Perusahaan',
    'Slip Gaji'
  ];

  const targetOptions = [
    'Karyawan',
    'Profesional',
    'Wirausaha',
    'Karyawan & Wiraswasta',
    'Karyawan & Profesional',
    'Pengusaha',
    'Milenial',
    'ASN',
    'POLRI',
    'TNI'
  ];

  const jenisProductOptions = [
    'Kredit Pemilikan Rumah Secondary (KPR Secondary)',
    'KPR Primary',
    'Kredit Multiguna',
    'Kredit Refinancing',
    'Kredit Modal Usaha & Investasi',
    'Deposito',
    'Take Over',
    'Bridging Loan'
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={handleCancel}
                className="mr-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Edit Product (Bank)</h1>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span>Product</span>
                  <span className="mx-2">›</span>
                  <span>Bank Product</span>
                  <span className="mx-2">›</span>
                  <span className="text-blue-600">Edit Product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border p-6 space-y-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Bank Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Bank</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Logo URL</label>
                <input
                  type="text"
                  name="logo"
                  value={formData.logo}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="mandiri.png"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Promo Description</label>
              <input
                type="text"
                name="promo"
                value={formData.promo}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Jenis Product</h3>
            <select 
              name="jenisProduct"
              value={formData.jenisProduct}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {jenisProductOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Promotional Product</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input 
                  type="text" 
                  value={formData.promotionalProduct.startDate}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    promotionalProduct: {
                      ...prev.promotionalProduct,
                      startDate: e.target.value
                    }
                  }))}
                  placeholder="Start Date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <span className="text-gray-500">→</span>
              <div className="flex-1">
                <input 
                  type="text" 
                  value={formData.promotionalProduct.endDate}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    promotionalProduct: {
                      ...prev.promotionalProduct,
                      endDate: e.target.value
                    }
                  }))}
                  placeholder="End Date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Jaminan</h3>
            <select
              name="jaminan"
              value={formData.jaminan}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              {jaminanOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Target Market</h3>
            <select
              name="target"
              value={formData.target}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              {targetOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Rating & Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <div className="relative">
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    max="5"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                    required
                  />
                  <Star className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reviews</label>
                <input
                  type="number"
                  name="reviews"
                  value={formData.reviews}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Users Yearly</label>
                <input
                  type="text"
                  name="usersYearly"
                  value={formData.usersYearly}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="12.4K"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Financial Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Komisi</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="komisi"
                      value={formData.komisi}
                      onChange={handleInputChange}
                      step="0.1"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                      required
                    />
                    <Percent className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Appraisal</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="appraisal"
                      value={formData.appraisal}
                      onChange={handleInputChange}
                      step="0.1"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                    />
                    <Percent className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Floating</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="floating"
                      value={formData.floating}
                      onChange={handleInputChange}
                      step="0.1"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                    />
                    <Percent className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Penalty Fee</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="penaltyFee"
                      value={formData.penaltyFee}
                      onChange={handleInputChange}
                      step="0.1"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                    />
                    <Percent className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan to Value</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="loanToValue"
                      value={formData.loanToValue}
                      onChange={handleInputChange}
                      step="0.1"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                      required
                    />
                    <Percent className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="interestRate"
                      value={formData.interestRate}
                      onChange={handleInputChange}
                      step="0.01"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                    />
                    <Percent className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fix Rate</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="fixRate"
                      value={formData.fixRate}
                      onChange={handleInputChange}
                      step="0.01"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                      required
                    />
                    <Percent className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fix Rate (Year)</label>
                  <input
                    type="number"
                    name="fixRateYear"
                    value={formData.fixRateYear}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Tenor (Year)</label>
              <input
                type="number"
                name="maxTenor"
                value={formData.maxTenor}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Keterangan</h3>
            <textarea
              name="keterangan"
              value={formData.keterangan}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan keterangan produk..."
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">URL</h3>
            <input
              type="text"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
              readOnly
            />
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
              <X className="w-4 h-4" />
              <span>Batal</span>
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductBank;