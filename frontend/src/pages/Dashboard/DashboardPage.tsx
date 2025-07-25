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

const DashboardPage: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    const refreshDashboard = () => {
        // showInfo('Dashboard yenileniyor...');
        setTimeout(() => {
            location.reload();
        }, 1000);
    };

    return (
        <div className="app-content">
            <div className="container-fluid">
                {/* Enhanced Dashboard Header */}
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h1 className="h3 mb-0 text-gradient">Dashboard</h1>
                                <p className="text-muted mb-0">Hoş geldin Muhammed! Bugün senin için harika bir gün. Aşağıda özet bilgilerini bulabilirsin.</p>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn btn-secondary btn-sm" onClick={refreshDashboard}>
                                    <i className="material-icons-round">refresh</i>
                                    Yenile
                                </button>
                                <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
                                    <i className="bi bi-plus-circle me-2"></i>Hızlı Ekle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Yeni Dashboard Welcome ve Özet Bilgiler */}
                <div className="dashboard-welcome-row" style={{display: 'flex', gap: '24px', marginBottom: '32px'}}>
                    <div className="welcome-card" style={{flex: 1, display: 'flex', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', padding: '32px', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div className="welcome-content">
                            <h3>Bütçe Yönetimine Hoş Geldin</h3>
                            <p>Harcamaların ne durumda, bir bakalım mı?</p>
                            <div className="welcome-actions" style={{marginTop: '16px', display: 'flex', gap: '12px'}}>
                                <button className="btn btn-light">Hesap Satın Al</button>
                                <button className="btn btn-dark">Özellikleri Gör</button>
                            </div>
                        </div>
                        <div>
                            <img src="/assets/images/hero.png" alt="Hoş Geldin" className="welcome-hero-img" style={{maxWidth: '180px'}} />
                        </div>
                    </div>
                    <div className="dashboard-graph-card" style={{width: '340px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', padding: '24px'}}>
                        <div className="cash-header d-flex justify-content-between align-items-start">
                            <div>
                                <div className="cash-title">MEVCUT KASA</div>
                                <div className="cash-date"><span className="cash-time">09:20AM</span> <span className="cash-day">04 Jan</span></div>
                            </div>
                            <div className="cash-change up">▲ 2.89%</div>
                        </div>
                        <div className="cash-amount" style={{fontSize: '2rem', fontWeight: 700, margin: '16px 0'}}>₺1,567</div>
                        <div className="cash-progressbar" style={{height: '8px', background: '#eee', borderRadius: '4px', marginBottom: '8px'}}>
                            <div className="cash-progressbar-inner" style={{width: '80%', height: '100%', background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', borderRadius: '4px'}}></div>
                        </div>
                        <div className="d-flex justify-content-between cash-footer">
                            <span className="cash-footer-left">0%</span>
                            <span className="cash-footer-right">8%</span>
                        </div>
                    </div>
                </div>

                {/* Dashboard Summary Row */}
                <div className="dashboard-summary-row" style={{display: 'flex', gap: '24px', marginBottom: '32px'}}>
                    <div className="summary-card expense position-relative" style={{flex: 1, background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)'}}>
                        <span>AYLIK GİDER</span>
                        <h2>₺250,00</h2>
                        <span className="summary-change down">-5.2%</span>
                        <span className="summary-desc">geçen aya göre</span>
                        <i className="bi bi-receipt summary-icon"></i>
                    </div>
                    <div className="summary-card receivable position-relative" style={{flex: 1, background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)'}}>
                        <span>AYLIK ALINACAKLAR</span>
                        <h2>₺9.102.091,88</h2>
                        <span className="summary-change up">+2.1%</span>
                        <span className="summary-desc">geçen aya göre</span>
                        <i className="bi bi-wallet2 summary-icon"></i>
                    </div>
                    <div className="summary-card payment position-relative" style={{flex: 1, background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)'}}>
                        <span>BORÇ ÖDEMELERİ</span>
                        <h2>₺0,00</h2>
                        <span className="summary-change up">+1.8%</span>
                        <span className="summary-desc">geçen aya göre</span>
                        <i className="bi bi-credit-card summary-icon"></i>
                    </div>
                    <div className="summary-card balance position-relative" style={{flex: 1, background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)'}}>
                        <span>TOPLAM BAKİYE</span>
                        <h2>₺0,00</h2>
                        <span className="summary-change up">+8.5%</span>
                        <span className="summary-desc">geçen aya göre</span>
                        <i className="bi bi-pie-chart summary-icon"></i>
                    </div>
                </div>

                {/* Diğer dashboard bileşenleri */}
                <Charts />
                <QuickActions />
                <AllFeatures />
                <QuickActionModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            </div>
        </div>
    );
};

export default DashboardPage;