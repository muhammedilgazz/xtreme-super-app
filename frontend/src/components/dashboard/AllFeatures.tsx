import React from 'react';
import { FiGrid, FiFileText, FiShoppingCart, FiCreditCard, FiKey, FiFolder, FiBook, FiSettings } from 'react-icons/fi';

const features = [
  {
    title: 'Gider Yönetimi',
    desc: 'Harcama takibi',
    icon: <FiFileText className="text-3xl mb-2" />,
    href: '/expense',
  },
  {
    title: 'Alınacaklar',
    desc: 'Wishlist yönetimi',
    icon: <FiShoppingCart className="text-3xl mb-2" />,
    href: '/wishlist',
  },
  {
    title: 'Borç Takibi',
    desc: 'Vergi, SGK, İcra',
    icon: <FiCreditCard className="text-3xl mb-2" />,
    href: '/tax',
  },
  {
    title: 'Banka Hesapları',
    desc: 'IBAN yönetimi',
    icon: <FiCreditCard className="text-3xl mb-2" />,
    href: '/bankaccount',
  },
  {
    title: 'Hesap Şifreleri',
    desc: 'Güvenli saklama',
    icon: <FiKey className="text-3xl mb-2" />,
    href: '/accountpassword',
  },
  {
    title: 'Projeler',
    desc: 'Proje yönetimi',
    icon: <FiFolder className="text-3xl mb-2" />,
    href: '/project',
  },
  {
    title: 'Notlar',
    desc: 'Not defteri',
    icon: <FiBook className="text-3xl mb-2" />,
    href: '/note',
  },
  {
    title: 'Ayarlar',
    desc: 'Sistem ayarları',
    icon: <FiSettings className="text-3xl mb-2" />,
    href: '/settings',
  },
];

const AllFeatures: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
        <h3 className="text-lg font-bold text-gray-900 m-0 tracking-tight flex items-center gap-2">
          <FiGrid className="text-blue-500" />Tüm Özellikler
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <a
            key={f.title}
            href={f.href}
            className="flex flex-col items-center justify-center border-2 rounded-xl p-8 transition-all duration-200 text-center bg-white border-gray-200 hover:border-blue-400 hover:shadow-lg"
          >
            <span className="mb-2 text-[#1e293b]">{f.icon}</span>
            <span className="font-bold text-lg mb-1 text-[#1e293b]">{f.title}</span>
            <span className="text-gray-500 text-sm">{f.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllFeatures;