import React from 'react';

interface QuickActionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickActionModal: React.FC<QuickActionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Hızlı İşlem</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-6">
                <a href="/expense" className="btn btn-outline-danger w-100 h-100 py-3">
                  <i className="material-icons-round mb-2">receipt_long</i><br />
                  Gider Ekle
                </a>
              </div>
              <div className="col-6">
                <a href="/wishlist" className="btn btn-outline-warning w-100 h-100 py-3">
                  <i className="material-icons-round mb-2">shopping_cart</i><br />
                  Alınacak Ekle
                </a>
              </div>
              <div className="col-6">
                <a href="/note" className="btn btn-outline-info w-100 h-100 py-3">
                  <i className="material-icons-round mb-2">note_add</i><br />
                  Not Ekle
                </a>
              </div>
              <div className="col-6">
                <a href="/project" className="btn btn-outline-success w-100 h-100 py-3">
                  <i className="material-icons-round mb-2">task</i><br />
                  Proje Ekle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActionModal;