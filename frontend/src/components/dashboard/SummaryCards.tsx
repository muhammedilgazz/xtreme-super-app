import React from 'react';

const SummaryCards: React.FC = () => {
  return (
    <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Kart 1: Aylık Gider */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-semibold text-gray-500">AYLIK GİDER</h4>
          <i className="fas fa-shopping-bag text-5xl text-red-400" style={{ opacity: 0.7 }}></i>
        </div>
        <p className="text-3xl font-bold text-gray-800 mb-2">₺250,00</p>
        <div className="flex items-center text-sm">
          <i className="fas fa-arrow-down text-red-500 mr-1 text-xs"></i>
          <span className="text-red-500 font-semibold text-xs">5%</span>
          <span className="text-gray-500 ml-auto text-xs">vs. Son ay</span>
        </div>
      </div>
      {/* Kart 2: Aylık Alacaklar */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-semibold text-gray-500">AYLIK ALACAKLAR</h4>
          <i className="fas fa-receipt text-5xl text-green-500" style={{ opacity: 0.7 }}></i>
        </div>
        <p className="text-3xl font-bold text-gray-800 mb-2">₺9.102.091,88</p>
        <div className="flex items-center text-sm">
          <i className="fas fa-arrow-up text-green-500 mr-1 text-xs"></i>
          <span className="text-green-500 font-semibold text-xs">18%</span>
          <span className="text-gray-500 ml-auto text-xs">vs. Son ay</span>
        </div>
      </div>
      {/* Kart 3: Borç Ödemeleri */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-semibold text-gray-500">BORÇ ÖDEMELERİ</h4>
          <i className="fas fa-hand-holding-dollar text-5xl text-purple-500" style={{ opacity: 0.7 }}></i>
        </div>
        <p className="text-3xl font-bold text-gray-800 mb-2">₺0,00</p>
        <div className="flex items-center text-sm">
          <i className="fas fa-arrow-up text-green-500 mr-1 text-xs"></i>
          <span className="text-green-500 font-semibold text-xs">0%</span>
          <span className="text-gray-500 ml-auto text-xs">vs. Son ay</span>
        </div>
      </div>
      {/* Kart 4: Toplam Bakiye */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-semibold text-gray-500">TOPLAM BAKİYE</h4>
          <i className="fas fa-wallet text-5xl text-blue-500" style={{ opacity: 0.7 }}></i>
        </div>
        <p className="text-3xl font-bold text-gray-800 mb-2">₺0,00</p>
        <div className="flex items-center text-sm">
          <i className="fas fa-arrow-up text-green-500 mr-1 text-xs"></i>
          <span className="text-green-500 font-semibold text-xs">0%</span>
          <span className="text-gray-500 ml-auto text-xs">vs. Son ay</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;