import React from 'react';
import { MdReceipt, MdShoppingCart, MdEdit, MdTask } from 'react-icons/md';

interface QuickActionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuickActionModal: React.FC<QuickActionModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white transform -translate-y-20 transition-all duration-300 ease-out scale-95 opacity-0"
                 style={isOpen ? { transform: 'translateY(0)', opacity: 1, scale: 1 } : {}} // Animation
            >
                <div className="modal-header flex justify-between items-center pb-3 border-b border-gray-200">
                    <h5 className="modal-title text-lg font-semibold">Hızlı İşlem</h5>
                    <button type="button" className="text-gray-400 hover:text-gray-600" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-body py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-6">
                            <a href="/expense" className="btn btn-outline-danger block w-full py-3 border border-red-400 text-red-600 rounded-md text-center hover:bg-red-50">
                                <MdReceipt className="text-2xl mx-auto mb-2" /><br />
                                Gider Ekle
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="/wishlist" className="btn btn-outline-warning block w-full py-3 border border-yellow-400 text-yellow-600 rounded-md text-center hover:bg-yellow-50">
                                <MdShoppingCart className="text-2xl mx-auto mb-2" /><br />
                                Alınacak Ekle
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="/note" className="btn btn-outline-info block w-full py-3 border border-blue-400 text-blue-600 rounded-md text-center hover:bg-blue-50">
                                <MdEdit className="text-2xl mx-auto mb-2" /><br />
                                Not Ekle
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="/project" className="btn btn-outline-success block w-full py-3 border border-green-400 text-green-600 rounded-md text-center hover:bg-green-50">
                                <MdTask className="text-2xl mx-auto mb-2" /><br />
                                Proje Ekle
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickActionModal;