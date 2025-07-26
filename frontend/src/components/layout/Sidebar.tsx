import React, { useState, useEffect } from 'react';
import { FiGrid, FiUser, FiCreditCard, FiBookOpen, FiPenTool, FiCalendar, FiImage, FiSettings, FiLogOut, FiTarget, FiRepeat, FiSmile, FiCheckSquare, FiHeart, FiBarChart2, FiTrendingUp, FiDollarSign, FiFileText, FiList, FiPlayCircle, FiBell, FiPhone, FiMusic, FiCamera, FiVideo, FiCloud, FiServer, FiMenu, FiShare2, FiClipboard, FiBook, FiEdit, FiCoffee, FiBriefcase, FiDroplet, FiPieChart, FiMoon, FiMapPin, FiCheckCircle, FiFolder, FiX } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface MenuItem {
  icon?: IconType;
  label: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { icon: FiGrid, label: 'Dashboard', subItems: [] },
  {
    icon: FiUser,
    label: 'Yaşam',
    subItems: [
      { label: 'Hedeflerim' },
      { label: 'Alışkanlıklar' },
      { label: 'Duygu Takibi' },
      { label: 'Yapılacaklar (Top 100)' },
      { label: 'Sağlıklı Yaşam' },
      { label: 'Sosyal Medya' },
      { label: 'Kişisel Gelişim' },
      { label: 'Planlar' },
      { label: 'To-Do List' },
      { label: 'Okuma Listesi' },
      { label: 'Notlar' },
      {
        label: 'Hukuk',
        icon: FiBook,
        subItems: [
          { label: 'Dosyalar' },
          { label: 'Hukuk Notları' },
          { label: 'Davalar' },
          { label: 'İcralar' },
        ]
      },
      { label: 'Projeler', icon: FiFolder }
    ],
  },
  {
    icon: FiCreditCard,
    label: 'Finans',
    subItems: [
      { label: 'Genel Bakış' },
      { label: 'Gelir & Giderler' },
      { label: 'Borç & Alacak' },
      { label: 'Bütçeler' },
      { label: 'Tasarruf & Hedefler' },
      { label: 'Abonelikler' },
      { label: 'Market & Stok' },
      { label: 'Favori Ürünler' },
      { label: 'Raporlar' },
    ],
  },
  {
    icon: FiBookOpen,
    label: 'Eğitim',
    subItems: [
      { label: 'Eğitimlerim' },
      { label: 'Öğrenim Kaynakları' },
      { label: 'Notlarım' },
      { label: 'Listelerim' },
      { label: 'İlerleme' },
      {
        label: 'Akademik',
        icon: FiBookOpen,
        subItems: [
          {
            label: 'Hukuk',
            icon: FiBook,
            subItems: [
              { label: 'Dosyalar' },
              { label: 'Hukuk Notları' },
              { label: 'Davalar' },
              { label: 'İcralar' },
            ]
          },
          { label: 'Projeler', icon: FiFolder }
        ]
      }
    ],
  },
  {
    icon: FiPenTool,
    label: 'Creator',
    subItems: [
      { label: 'Belge Oluştur' },
      { label: 'AI Asistanı' },
      { label: 'Rapor & Analiz' },
      { label: 'Medya İçerikleri' },
    ],
  },
  {
    icon: FiCalendar,
    label: 'Ajanda',
    subItems: [
      { label: 'Görevler' },
      { label: 'Hatırlatıcılar' },
      { label: 'IBAN Rehberi' },
      { label: 'Hesap Bilgileri' },
      { label: 'Telefon Rehberi' },
      { label: 'Takvim' },
    ],
  },
  {
    icon: FiImage,
    label: 'Medya',
    subItems: [
      { label: 'Müziklerim' },
      { label: 'Fotoğraflarım' },
      { label: 'Videolarım' },
      { label: 'Yedeklemeler' },
      { label: 'Medya Sunucusu' },
    ],
  },
  { icon: FiSettings, label: 'Ayarlar', subItems: [] },
];

const subMenuIcons: { [key: string]: IconType } = {
  'Hedeflerim': FiTarget,
  'Alışkanlıklar': FiRepeat,
  'Duygu Takibi': FiSmile,
  'Yapılacaklar (Top 100)': FiCheckSquare,
  'Sağlıklı Yaşam': FiHeart,
  'yeme-içme takibi': FiCoffee,
  'tedavi takibi diş check-up vb': FiBriefcase,
  'şu içme hatırlatma': FiDroplet,
  'kalori takibi': FiPieChart,
  'uyku verileri': FiMoon,
  'yürüyüş takibi': FiMapPin,
  'sağlık verileri tahlil sonuçları (tüm zamanlar)': FiFileText,
  'kontrol': FiCheckCircle,
  'ilaç bitim aşı zamanı bildirimleri': FiBell,
  'Sosyal Medya': FiShare2,
  'Kişisel Gelişim': FiTrendingUp,
  'Planlar': FiClipboard,
  'To-Do List': FiCheckSquare,
  'Okuma Listesi': FiBook,
  'Notlar': FiEdit,
  'Genel Bakış': FiBarChart2,
  'Gelir & Giderler': FiDollarSign,
  'Borç & Alacak': FiTrendingUp,
  'Bütçeler': FiBarChart2,
  'Tasarruf & Hedefler': FiTarget,
  'Abonelikler': FiFileText,
  'Market & Stok': FiList,
  'Favori Ürünler': FiHeart,
  'Raporlar': FiBarChart2,
  'Eğitimlerim': FiBookOpen,
  'Öğrenim Kaynakları': FiBookOpen,
  'Notlarım': FiFileText,
  'Listelerim': FiList,
  'İlerleme': FiTrendingUp,
  'Belge Oluştur': FiFileText,
  'AI Asistanı': FiGrid,
  'Rapor & Analiz': FiBarChart2,
  'Medya İçerikleri': FiImage,
  'Görevler': FiCheckSquare,
  'Hatırlatıcılar': FiBell,
  'IBAN Rehberi': FiFileText,
  'Hesap Bilgileri': FiDollarSign,
  'Telefon Rehberi': FiPhone,
  'Takvim': FiCalendar,
  'Müziklerim': FiMusic,
  'Fotoğraflarım': FiCamera,
  'Videolarım': FiVideo,
  'Yedeklemeler': FiCloud,
  'Medya Sunucusu': FiServer,
};

interface SidebarProps {
  mobileOpen?: boolean;
  setMobileOpen?: (open: boolean) => void;
  onNavigate?: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen = false, setMobileOpen, onNavigate }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  // Mobilde varsayılan collapsed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  // Sidebar genişlik classları
  const sidebarWidth = collapsed ? 'w-24 min-w-[96px]' : 'w-[220px] min-w-[220px]';
  const sidebarFlexWidth = collapsed ? 'w-16' : 'w-[200px]';

  return (
    <>
      {/* Hamburger icon - sadece mobilde */}
      {/* Mobilde tam ekran sidebar ve overlay */}
      {mobileOpen && setMobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-40" onClick={() => setMobileOpen(false)}></div>
          <aside className="fixed top-0 left-0 z-50 w-screen h-screen bg-[#444464] shadow-2xl p-0 transition-all duration-300 overflow-y-auto sm:hidden">
            <div className="p-4">
              <button
                className="absolute top-4 right-4 text-white bg-[#23232a] rounded-full p-2 z-50"
                onClick={() => setMobileOpen(false)}
                aria-label="Menüyü Kapat"
              >
                <FiX size={28} />
              </button>
              {/* Sidebar içeriği (mobilde) */}
              {/* Ana Sidebar */}
              <div className={`flex flex-col w-full items-center transition-all duration-300 relative`}>
                {/* Collapsible Toggle mobilde gerek yok */}
                {/* Logo ve Başlık */}
                <div className={`flex items-center gap-3 mb-10 mt-20 w-full justify-center`}>
                  <span className="w-10 h-10 rounded-xl bg-[#6366F1] flex items-center justify-center text-white font-bold text-2xl">X</span>
                  <span className="text-white font-semibold text-xl">Xtreme Hub</span>
                </div>
                {/* Kullanıcı Bilgisi */}
                <div className="flex items-center gap-2 mb-6 bg-[#2d3142] rounded-xl px-4 py-2 shadow-sm">
                  <span className="w-12 h-12 rounded-full bg-[#bfc6e0] flex items-center justify-center text-[#444464] font-bold text-2xl">M</span>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-base leading-tight">Muhammed</span>
                    <span className="text-[#b0b3c6] text-xs leading-tight">UI/UX Designer</span>
                  </div>
                </div>
                {/* Menü */}
                <nav className="flex flex-col gap-2 w-full mt-2">
                  {menuItems.map((item, idx) => {
                    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                    const isActive = item.subItems && item.subItems.length > 0 && activeMenu === item.label && (isMobile ? true : !collapsed);
                    return (
                      <React.Fragment key={item.label}>
                        <div className="relative">
                          <a
                            href="#"
                            onClick={() => {
                              if (item.label === 'Dashboard' && onNavigate) onNavigate('dashboard');
                              else if (item.subItems) setActiveMenu(activeMenu === item.label ? null : item.label);
                            }}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-200
                              ${activeMenu === item.label ? 'bg-[#23223A] text-white shadow-md' : 'text-[#e5e7eb] hover:bg-[#23223A] hover:text-white'}
                              ${item.subItems && item.subItems.length > 0 ? 'cursor-pointer' : ''}`}
                          >
                            {item.icon && <span className="w-6 h-6 flex items-center justify-center text-xl">{item.icon && <item.icon />}</span>}
                            <span>{item.label}</span>
                          </a>
                          {/* Alt Menü */}
                          {isActive && item.subItems && (
                            <div className="w-full mt-2 rounded-b-xl p-2 bg-[#33334d] shadow-xl transition-all duration-300 origin-top transform scale-y-100 opacity-100">
                              <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 w-full h-full content-start">
                                {item.subItems.map((subItem) => (
                                  <a
                                    key={subItem.label}
                                    href="#"
                                    onClick={() => {
                                      if (subItem.label === 'Favori Ürünler' && onNavigate) onNavigate('favori-urunler');
                                    }}
                                    className="flex flex-col items-center justify-center gap-1 px-1 py-3 rounded-lg text-[#e5e7eb] hover:bg-[#23223A] hover:text-white transition-all duration-200 min-h-[70px]"
                                  >
                                    {subItem.icon && (
                                      <span className="w-7 h-7 flex items-center justify-center text-xl mb-1">
                                        {React.createElement(subItem.icon)}
                                      </span>
                                    )}
                                    {subMenuIcons[subItem.label] && !subItem.icon && (
                                      <span className="w-7 h-7 flex items-center justify-center text-xl mb-1">
                                        {React.createElement(subMenuIcons[subItem.label])}
                                      </span>
                                    )}
                                    <span className="text-xs text-center leading-tight">{subItem.label}</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  })}
                </nav>
                {/* Çıkış Butonu */}
                <div className="mt-8 mb-4 w-full flex justify-center pb-2">
                  <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-[#6366F1] font-semibold shadow-lg hover:bg-[#f3f4f6] transition-all text-base">
                    <FiLogOut />
                    Çıkış Yap
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Masaüstü ve sm üstü için normal sidebar */}
      <aside className={`hidden sm:block fixed top-0 left-0 z-40 h-screen bg-[#444464] shadow-2xl p-4 transition-all duration-300 overflow-y-auto ${sidebarWidth} lg:w-auto lg:min-w-0`}>
      {/* Ana Sidebar */}
        <div className={`flex flex-col ${sidebarFlexWidth} items-center transition-all duration-300 relative`}>
        {/* Collapsible Toggle - sadece mobilde görünür */}
        <button
          className={`z-20 shadow-md transition-all flex items-center justify-center bg-[#23232a] text-white rounded-full p-2 sm:p-2.5 hover:bg-[#18181b] sm:hidden ${collapsed ? 'opacity-70' : ''} ${collapsed ? 'absolute top-0 left-1 right-1 mx-auto' : 'absolute top-2 right-2'}`}
          style={collapsed ? { left: '50%', transform: 'translateX(-50%)', opacity: 0.7, width: '44px', height: '44px' } : { width: '44px', height: '44px' }}
          onClick={() => setCollapsed((prev) => !prev)}
          aria-label="Menüyü Daralt/Genişlet"
        >
          <FiMenu className="text-xl" />
        </button>
        {/* Logo ve Başlık */}
        <div className={`flex items-center gap-3 mb-10 mt-20 w-full justify-center ${collapsed ? 'justify-center' : ''}`}>
          <span className="w-10 h-10 rounded-xl bg-[#6366F1] flex items-center justify-center text-white font-bold text-2xl">X</span>
          {!collapsed && <span className="text-white font-semibold text-xl">Xtreme Hub</span>}
        </div>
        {/* Kullanıcı Bilgisi */}
        {!collapsed && (
            <div className="flex items-center gap-2 mb-6 bg-[#2d3142] rounded-xl px-4 py-2 shadow-sm">
            <span className="w-12 h-12 rounded-full bg-[#bfc6e0] flex items-center justify-center text-[#444464] font-bold text-2xl">M</span>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-base leading-tight">Muhammed</span>
              <span className="text-[#b0b3c6] text-xs leading-tight">UI/UX Designer</span>
            </div>
          </div>
        )}
        {/* Menü */}
        <nav className="flex flex-col gap-2 w-full mt-2">
          {menuItems.map((item, idx) => {
            const isActive = item.subItems && item.subItems.length > 0 && activeMenu === item.label && !collapsed;
            return (
              <React.Fragment key={item.label}>
                <div className="relative">
                  <a
                    href="#"
                    onClick={() => item.subItems && !collapsed && setActiveMenu(activeMenu === item.label ? null : item.label)}
                    className={`flex items-center gap-3 ${collapsed ? 'justify-center px-0' : 'px-6'} py-3 rounded-xl font-medium transition-all duration-200
                      ${activeMenu === item.label && !collapsed ? 'bg-[#23223A] text-white shadow-md' : 'text-[#e5e7eb] hover:bg-[#23223A] hover:text-white'}
                      ${item.subItems && item.subItems.length > 0 ? 'cursor-pointer' : ''}`}
                  >
                    {item.icon && <span className="w-6 h-6 flex items-center justify-center text-xl">{item.icon && <item.icon />}</span>}
                    {!collapsed && <span>{item.label}</span>}
                  </a>
                  {/* Alt Menü sadece geniş modda açılır, mobilde tam genişlikte ve üstte açılır */}
                  {isActive && (
                      <>
                        {/* Her ekranda: submenu ana menüden sonra aşağıda açılır */}
                        <div className="w-full mt-2 rounded-b-xl p-2 bg-[#33334d] shadow-xl transition-all duration-300 origin-top transform scale-y-100 opacity-100">
                      <div className="grid grid-cols-2 gap-2 w-full h-full content-start">
                        {item.subItems && item.subItems.map((subItem) => (
                          <a
                            key={subItem.label}
                            href="#"
                                onClick={() => {
                                  if (subItem.label === 'Favori Ürünler' && onNavigate) onNavigate('favori-urunler');
                                }}
                            className="flex flex-col items-center justify-center gap-1 px-1 py-3 rounded-lg text-[#e5e7eb] hover:bg-[#23223A] hover:text-white transition-all duration-200 min-h-[70px]"
                          >
                                {subItem.icon && (
                                  <span className="w-7 h-7 flex items-center justify-center text-xl mb-1">
                                    {React.createElement(subItem.icon)}
                                  </span>
                                )}
                                {subMenuIcons[subItem.label] && !subItem.icon && (
                              <span className="w-7 h-7 flex items-center justify-center text-xl mb-1">
                                {React.createElement(subMenuIcons[subItem.label])}
                              </span>
                            )}
                            <span className="text-xs text-center leading-tight">{subItem.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                      </>
                  )}
                </div>
                {/* Mobilde alt menü açıldığında sonraki menüler aşağı kaysın */}
                {item.subItems && item.subItems.length > 0 && isActive && collapsed && (
                  <div className="h-40 sm:hidden"></div>
                )}
              </React.Fragment>
            );
          })}
        </nav>
        {/* Çıkış Butonu */}
        <div className="mt-8 mb-4 w-full flex justify-center pb-2">
          {collapsed ? (
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#6366F1] shadow-lg hover:bg-[#f3f4f6] transition-all text-2xl">
              <FiLogOut />
            </button>
          ) : (
            <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-[#6366F1] font-semibold shadow-lg hover:bg-[#f3f4f6] transition-all text-base">
              <FiLogOut />
              Çıkış Yap
            </button>
          )}
        </div>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
