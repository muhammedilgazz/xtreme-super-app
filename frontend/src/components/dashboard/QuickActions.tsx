import React from 'react';
import { FiZap } from 'react-icons/fi';

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
        <h3 className="text-lg font-bold text-gray-900 m-0 tracking-tight flex items-center gap-2">
          <FiZap className="text-yellow-500" />Hızlı İşlemler
        </h3>
      </div>
      <div className="quick-actions-grid">
        <a href="/expense" className="quick-action-card primary">
          <div className="quick-action-icon">
            <i className="material-icons-round">receipt_long</i>
          </div>
          <h6>Yeni Gider</h6>
          <p>Harcama kaydet</p>
        </a>
        <a href="/wishlist" className="quick-action-card warning">
          <div className="quick-action-icon">
            <i className="material-icons-round">shopping_cart</i>
          </div>
          <h6>Alınacak Ekle</h6>
          <p>Wishlist yönet</p>
        </a>
        <a href="/project" className="quick-action-card success">
          <div className="quick-action-icon">
            <i className="material-icons-round">task</i>
          </div>
          <h6>Proje Ekle</h6>
          <p>Yeni proje</p>
        </a>
        <a href="/note" className="quick-action-card info">
          <div className="quick-action-icon">
            <i className="material-icons-round">note_add</i>
          </div>
          <h6>Not Ekle</h6>
          <p>Hızlı not</p>
        </a>
      </div>
    </div>
  );
};

export default QuickActions;