import React from 'react';

const AllFeatures: React.FC = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card modern-card" data-aos="fade-up">
          <div className="card-header">
            <h5 className="card-title mb-0">
              <i className="material-icons-round me-2">dashboard</i>
              Tüm Özellikler
            </h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {/* Row 1 */}
              <div className="col-lg-3 col-md-6">
                <a href="/expense" className="feature-card danger">
                  <i className="material-icons-round">receipt_long</i>
                  <span className="fw-bold">Gider Yönetimi</span>
                  <small className="text-muted">Harcama takibi</small>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="/wishlist" className="feature-card warning">
                  <i className="material-icons-round">shopping_cart</i>
                  <span className="fw-bold">Alınacaklar</span>
                  <small className="text-muted">Wishlist yönetimi</small>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="/tax" className="feature-card info">
                  <i className="material-icons-round">receipt</i>
                  <span className="fw-bold">Borç Takibi</span>
                  <small className="text-muted">Vergi, SGK, İcra</small>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="/bankaccount" className="feature-card success">
                  <i className="material-icons-round">account_balance</i>
                  <span className="fw-bold">Banka Hesapları</span>
                  <small className="text-muted">IBAN yönetimi</small>
                </a>
              </div>
              {/* Row 2 */}
              <div className="col-lg-3 col-md-6">
                <a href="/accountpassword" className="feature-card secondary">
                  <i className="material-icons-round">vpn_key</i>
                  <span className="fw-bold">Hesap Şifreleri</span>
                  <small className="text-muted">Güvenli saklama</small>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="/project" className="feature-card primary">
                  <i className="material-icons-round">task</i>
                  <span className="fw-bold">Projeler</span>
                  <small className="text-muted">Proje yönetimi</small>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="/note" className="feature-card dark">
                  <i className="material-icons-round">note</i>
                  <span className="fw-bold">Notlar</span>
                  <small className="text-muted">Not defteri</small>
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <a href="/settings" className="feature-card muted">
                  <i className="material-icons-round">settings</i>
                  <span className="fw-bold">Ayarlar</span>
                  <small className="text-muted">Sistem ayarları</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFeatures;