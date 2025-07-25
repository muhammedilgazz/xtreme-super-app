import React, { useState, useEffect, useRef } from 'react';
import { FiCalendar, FiPlus, FiZap, FiFileText, FiSearch, FiBell, FiChevronDown, FiCpu } from 'react-icons/fi';

const Header: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState('Temmuz 2025');
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isEkleDropdownOpen, setIsEkleDropdownOpen] = useState(false);
  const [isHizliIslemlerDropdownOpen, setIsHizliIslemlerDropdownOpen] = useState(false);
  const [isRaporOlusturDropdownOpen, setIsRaporOlusturDropdownOpen] = useState(false);

  const monthDropdownRef = useRef<HTMLDivElement>(null);
  const ekleDropdownRef = useRef<HTMLDivElement>(null);
  const hizliIslemlerDropdownRef = useRef<HTMLDivElement>(null);
  const raporOlusturDropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  const months = [
    'Ocak 2025', 'Şubat 2025', 'Mart 2025', 'Nisan 2025', 'Mayıs 2025', 'Haziran 2025',
    'Temmuz 2025', 'Ağustos 2025', 'Eylül 2025', 'Ekim 2025', 'Kasım 2025', 'Aralık 2025',
  ];
  const ekleMenuItems = ['Yeni Görev', 'Yeni Proje', 'Yeni Etkinlik'];
  const hizliIslemlerMenuItems = ['Görev Ata', 'Hatırlatıcı Oluştur', 'Not Ekle'];
  const raporOlusturMenuItems = ['Günlük Rapor', 'Haftalık Rapor', 'Aylık Rapor'];

  const handleMonthSelect = (month: string) => {
    setCurrentMonth(month);
    setIsMonthDropdownOpen(false);
  };
  const handleUserMenuItemClick = (item: string) => {
    setIsUserDropdownOpen(false);
  };
  const handleEkleMenuItemClick = (item: string) => {
    setIsEkleDropdownOpen(false);
  };
  const handleHizliIslemlerMenuItemClick = (item: string) => {
    setIsHizliIslemlerDropdownOpen(false);
  };
  const handleRaporOlusturMenuItemClick = (item: string) => {
    setIsRaporOlusturDropdownOpen(false);
  };
  const toggleDropdown = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsMonthDropdownOpen(false);
    setIsUserDropdownOpen(false);
    setIsEkleDropdownOpen(false);
    setIsHizliIslemlerDropdownOpen(false);
    setIsRaporOlusturDropdownOpen(false);
    setter(prev => !prev);
  };
  const handleAIClick = () => {};

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMonthDropdownOpen && monthDropdownRef.current && !monthDropdownRef.current.contains(event.target as Node)) {
        setIsMonthDropdownOpen(false);
      }
      if (isEkleDropdownOpen && ekleDropdownRef.current && !ekleDropdownRef.current.contains(event.target as Node)) {
        setIsEkleDropdownOpen(false);
      }
      if (isHizliIslemlerDropdownOpen && hizliIslemlerDropdownRef.current && !hizliIslemlerDropdownRef.current.contains(event.target as Node)) {
        setIsHizliIslemlerDropdownOpen(false);
      }
      if (isRaporOlusturDropdownOpen && raporOlusturDropdownRef.current && !raporOlusturDropdownRef.current.contains(event.target as Node)) {
        setIsRaporOlusturDropdownOpen(false);
      }
      if (isUserDropdownOpen && userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMonthDropdownOpen, isEkleDropdownOpen, isHizliIslemlerDropdownOpen, isRaporOlusturDropdownOpen, isUserDropdownOpen]);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-xl shadow-lg w-full max-w-screen-2xl mx-auto flex-wrap">
      {/* Sol Bölüm */}
      <div className="flex flex-nowrap items-center md:gap-2 lg:gap-4 mb-4 md:mb-0 w-full md:w-auto">
        {/* Ay Dropdown */}
        <div className="relative inline-block text-left" ref={monthDropdownRef}>
          <button
            type="button"
            className="inline-flex justify-center items-center gap-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
            id="month-menu-button"
            aria-expanded={isMonthDropdownOpen}
            aria-haspopup="true"
            onClick={() => toggleDropdown(setIsMonthDropdownOpen)}
          >
            <FiCalendar className="h-5 w-5 text-gray-500" />
            {currentMonth}
            <FiChevronDown className={`-mr-1 h-5 w-5 text-gray-500 transition-transform ${isMonthDropdownOpen ? 'rotate-180' : 'rotate-0'}`} aria-hidden="true" />
          </button>
          {isMonthDropdownOpen && (
            <div className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 max-h-60 overflow-y-auto" role="none">
                {months.map((month) => (
                  <a
                    key={month}
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                    role="menuitem"
                    tabIndex={-1}
                    onClick={() => handleMonthSelect(month)}
                  >
                    {month}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Ekle Dropdown */}
        <div className="relative inline-block text-left" ref={ekleDropdownRef}>
          <button
            type="button"
            className="inline-flex justify-center items-center gap-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
            onClick={() => toggleDropdown(setIsEkleDropdownOpen)}
          >
            <FiPlus className="h-5 w-5" />
            <span>Ekle</span>
            <FiChevronDown className={`-mr-1 h-5 w-5 text-gray-500 transition-transform ${isEkleDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {isEkleDropdownOpen && (
            <div className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="none">
                {ekleMenuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                    role="menuitem"
                    onClick={() => handleEkleMenuItemClick(item)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Hızlı İşlemler Dropdown */}
        <div className="relative inline-block text-left" ref={hizliIslemlerDropdownRef}>
          <button
            type="button"
            className="inline-flex justify-center items-center gap-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
            onClick={() => toggleDropdown(setIsHizliIslemlerDropdownOpen)}
          >
            <FiZap className="h-5 w-5" />
            <span>Hızlı İşlemler</span>
            <FiChevronDown className={`-mr-1 h-5 w-5 text-gray-500 transition-transform ${isHizliIslemlerDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {isHizliIslemlerDropdownOpen && (
            <div className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="none">
                {hizliIslemlerMenuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                    role="menuitem"
                    onClick={() => handleHizliIslemlerMenuItemClick(item)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Rapor Oluştur Dropdown */}
        <div className="relative inline-block text-left" ref={raporOlusturDropdownRef}>
          <button
            type="button"
            className="inline-flex justify-center items-center gap-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
            onClick={() => toggleDropdown(setIsRaporOlusturDropdownOpen)}
          >
            <FiFileText className="h-5 w-5" />
            <span>Rapor Oluştur</span>
            <FiChevronDown className={`-mr-1 h-5 w-5 text-gray-500 transition-transform ${isRaporOlusturDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
          </button>
          {isRaporOlusturDropdownOpen && (
            <div className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="none">
                {raporOlusturMenuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                    role="menuitem"
                    onClick={() => handleRaporOlusturMenuItemClick(item)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Komut Gir (Search Bar) */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 text-sm w-full flex-grow max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
          <FiSearch className="h-5 w-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Komut Gir"
            className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>
      {/* Sağ Bölüm */}
      <div className="flex items-center md:gap-4 w-full md:w-auto mt-4 md:mt-0 justify-end">
        {/* Tutar Gösterimi */}
        <div className="flex items-center space-x-1 whitespace-nowrap">
          <div className="relative flex items-center justify-center w-6 h-6 bg-green-500 rounded-full text-white text-xs font-bold">
            $
          </div>
          <span className="font-semibold text-gray-800">40.45</span>
        </div>
        {/* Bildirim ve AI ikonları */}
        <div className="flex items-center space-x-4">
          {/* AI Butonu */}
          <div className="relative">
            <FiCpu className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" onClick={handleAIClick} />
          </div>
          {/* Bildirim Zili İkonu */}
          <div className="relative">
            <FiBell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              <span className="sr-only">Yeni bildirimler</span>
            </span>
          </div>
        </div>
        {/* Kullanıcı Bilgileri ve Dropdown */}
        <div className="relative flex items-center space-x-2 cursor-pointer group whitespace-nowrap" ref={userDropdownRef} onClick={() => toggleDropdown(setIsUserDropdownOpen)}>
          <img
            src="https://placehold.co/40x40/FF5733/FFFFFF?text=MI"
            alt="User Avatar"
            className="h-10 w-10 rounded-full cursor-pointer object-cover"
          />
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">Muhammed ILGAZ</p>
            <p className="text-xs text-gray-500">Hesap yöneticisi</p>
          </div>
          <FiChevronDown className={`h-5 w-5 text-gray-500 group-hover:text-gray-700 transition-transform ${isUserDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
          {isUserDropdownOpen && (
            <div
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none top-full"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() => handleUserMenuItemClick('Profil')}
                >
                  Profil
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() => handleUserMenuItemClick('Ayarlar')}
                >
                  Ayarlar
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() => handleUserMenuItemClick('Çıkış Yap')}
                >
                  Çıkış Yap
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
