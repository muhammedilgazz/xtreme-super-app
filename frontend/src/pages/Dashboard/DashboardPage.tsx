import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/css/dashboard.css';
import WelcomeCard from '../../components/dashboard/WelcomeCard';
import SummaryCards from '../../components/dashboard/SummaryCards';
import Charts from '../../components/dashboard/Charts';
import QuickActions from '../../components/dashboard/QuickActions';
import AllFeatures from '../../components/dashboard/AllFeatures';
import QuickActionModal from '../../components/dashboard/QuickActionModal';
import RecentTransactions from '../../components/dashboard/RecentTransactions';

const DashboardPage: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="p-6 min-h-screen">
            <div className="max-w-9xl mx-auto flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                        <p className="text-gray-500">Hoş geldin! Finansal durumuna göz at.</p>
                    </div>
                    <div className="bg-purple-700 text-white p-4 rounded-lg shadow-lg min-w-[220px]">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold">İzmir</p>
                                <p className="text-xs">Bulutlu</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-4xl font-bold">32°</p>
                                <p className="text-2xl ml-2">☁️</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Üstte iki kart tam genişlikte yan yana */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
                    <div className="md:col-span-9">
                        <WelcomeCard />
                    </div>
                    <div className="md:col-span-3 h-full flex items-stretch">
                        <div className="bg-gray-800 text-white p-6 rounded-xl flex flex-col justify-between w-full">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-base text-white font-semibold">MEVCUT KASA</p>
                                    <p className="text-xs text-gray-500">09:20AM 04 Jan</p>
                                </div>
                                <p className="text-green-400 text-sm font-semibold">▲ 2.89%</p>
                            </div>
                            <p className="text-3xl font-bold my-3">₺1,567</p>
                            <div className="w-full bg-gray-700 rounded-full h-1.5">
                                <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '8%'}}></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>0%</span>
                                <span>8%</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Banner grid içinde, inputun sağında mikrofon ikonu */}
                <div className="bg-gray-800 text-white p-4 rounded-xl flex flex-col md:flex-row md:justify-between md:items-center">
                    <h2 className="text-lg font-semibold mb-4 md:mb-0">Xtreme AI Hazır! Hemen Dene... Yapay Zekaya Danış →</h2>
                    <form className="flex gap-2 w-full min-w-0 max-w-full overflow-hidden md:flex md:justify-end md:items-center md:gap-2 md:w-auto md:ml-auto md:whitespace-nowrap" style={{wordBreak: 'break-word'}}>
                        <div className="relative flex-1">
                            <input type="text" placeholder="İstemizi yazın veya sesli iletin" className="w-full min-w-0 max-w-full md:w-[300px] md:max-w-[300px] px-3 py-2 rounded-md text-lg text-gray-800 pr-5" />
                            <button type="button" tabIndex={-1} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 focus:outline-none">
                                <i className="fas fa-microphone"></i>
                            </button>
                        </div>
                        <button type="submit" className="bg-white text-black font-semibold px-6 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100 shadow-none">Gönder</button>
                    </form>
                </div>
                <SummaryCards />
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                    <div className="xl:col-span-8">
                        <Charts />
                    </div>
                    <div className="xl:col-span-4">
                        <RecentTransactions />
                    </div>
                </div>
                <QuickActions />
                <AllFeatures />
            </div>
            <QuickActionModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default DashboardPage;