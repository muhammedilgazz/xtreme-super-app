import React from 'react';

const WelcomeCard: React.FC = () => {
  return (
    <div className="dashboard-welcome-row">
      <div className="welcome-card">
        <div className="welcome-content">
          <h3>Bütçe Yönetimine Hoş Geldin</h3>
          <p>Harcamaların ne durumda, bir bakalım mı?</p>
          <div className="welcome-actions">
            <button className="btn btn-light">Account purchase</button>
            <button className="btn btn-dark">View features</button>
          </div>
        </div>
        <div>
          <img src="/assets/images/hero.png" alt="Hoş Geldin" className="welcome-hero-img" />
        </div>
      </div>
      <div className="dashboard-graph-card">
        <div className="cash-header d-flex justify-content-between align-items-start">
          <div>
            <div className="cash-title">MEVCUT KASA</div>
            <div className="cash-date"><span className="cash-time">09:20AM</span> <span className="cash-day">04 Jan</span></div>
          </div>
          <div className="cash-change up">▲ 2.89%</div>
        </div>
        <div className="cash-amount">₺1,567</div>
        <div className="cash-progressbar">
          <div className="cash-progressbar-inner" style={{ width: '80%' }}></div>
        </div>
        <div className="d-flex justify-content-between cash-footer">
          <span className="cash-footer-left">0%</span>
          <span className="cash-footer-right">8%</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;