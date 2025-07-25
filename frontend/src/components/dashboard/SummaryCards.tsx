import React from 'react';

const SummaryCards: React.FC = () => {
  return (
    <div className="dashboard-summary-row">
      <div className="summary-card expense position-relative">
        <span>AYLIK GİDER</span>
        <h2>₺250,00</h2>
        <span className="summary-change down">-5.2%</span>
        <span className="summary-desc">geçen aya göre</span>
        <i className="bi bi-receipt summary-icon"></i>
      </div>
      <div className="summary-card receivable position-relative">
        <span>AYLIK ALINACAKLAR</span>
        <h2>₺9.102.091,88</h2>
        <span className="summary-change up">+2.1%</span>
        <span className="summary-desc">geçen aya göre</span>
        <i className="bi bi-wallet2 summary-icon"></i>
      </div>
      <div className="summary-card payment position-relative">
        <span>BORÇ ÖDEMELERİ</span>
        <h2>₺0,00</h2>
        <span className="summary-change up">+1.8%</span>
        <span className="summary-desc">geçen aya göre</span>
        <i className="bi bi-credit-card summary-icon"></i>
      </div>
      <div className="summary-card balance position-relative">
        <span>TOPLAM BAKİYE</span>
        <h2>₺0,00</h2>
        <span className="summary-change up">+8.5%</span>
        <span className="summary-desc">geçen aya göre</span>
        <i className="bi bi-pie-chart summary-icon"></i>
      </div>
    </div>
  );
};

export default SummaryCards;