import './assets/css/dashboard.css';
import React, { useState } from 'react';
import DashboardPage from './pages/Dashboard/DashboardPage';
import FavoriUrunlerPage from './pages/FavoriUrunlerPage';
import IcraDosyalariPage from './pages/IcraDosyalariPage';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import { FiBell, FiPlus, FiMenu } from 'react-icons/fi';

function App() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} onNavigate={setActivePage} />
      <div className="flex flex-col flex-1 transition-all duration-300 sm:ml-[220px]">
        {/* Mobilde özel header */}
        <div className="sm:hidden flex items-center justify-between px-4 py-3 bg-white shadow-md sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-xl bg-[#6366F1] flex items-center justify-center text-white font-bold text-2xl">X</span>
            <span className="text-xl font-bold text-[#6366F1]">Xtreme Hub</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-700 text-2xl flex items-center justify-center" onClick={() => {/* Hızlı Menü Modalı aç */}}>
              <FiPlus />
            </button>
            <button className="text-gray-700 text-2xl relative flex items-center justify-center">
              <FiBell />
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-xs text-white"></span>
            </button>
            <button className="text-gray-700 text-2xl flex items-center justify-center" onClick={() => setMobileSidebarOpen(true)}>
              <FiMenu />
            </button>
          </div>
        </div>
        {/* Masaüstünde normal header */}
        <div className="hidden sm:block">
          <Header />
        </div>
        <main className="flex-1 pt-4 pb-4 pr-4 pl-0">
          {activePage === 'dashboard' && <DashboardPage />}
          {activePage === 'favori-urunler' && <FavoriUrunlerPage />}
          {activePage === 'icra-dosyalari' && <IcraDosyalariPage />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
