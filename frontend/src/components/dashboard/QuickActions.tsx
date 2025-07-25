import React from 'react';

const QuickActions: React.FC = () => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        <div className="card modern-card" data-aos="fade-up">
          <div className="card-header">
            <h5 className="card-title mb-0">
              <i className="material-icons-round me-2">bolt</i>
              Hızlı İşlemler
            </h5>
          </div>
          <div className="card-body">
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
        </div>
      </div>
    </div>
  );
};

export default QuickActions;