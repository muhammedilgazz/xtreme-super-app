import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Mock data, will be replaced by props or API calls
const category_expenses = [
    { category_type: 'Gıda', total_amount: 500 },
    { category_type: 'Ulaşım', total_amount: 150 },
    { category_type: 'Eğlence', total_amount: 200 },
    { category_type: 'Fatura', total_amount: 300 },
    { category_type: 'Diğer', total_amount: 100 },
];

const recent_transactions = [
    { type: 'expense', description: 'Market Alışverişi', date: '2025-07-25', amount: 350 },
    { type: 'income', description: 'Maaş', date: '2025-07-24', amount: 8000 },
    { type: 'expense', description: 'Online Sipariş', date: '2025-07-23', amount: 420 },
    { type: 'income', description: 'Freelance Ödeme', date: '2025-07-22', amount: 2500 },
];

const Charts: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                const labels = category_expenses.map(item => item.category_type);
                const data = category_expenses.map(item => item.total_amount);
                const colors = [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
                    '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF'
                ];
                chartInstance.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Toplam Harcama',
                            data: data,
                            backgroundColor: colors,
                            borderColor: '#fff',
                            borderWidth: 2,
                            hoverOffset: 4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    padding: 20,
                                    usePointStyle: true,
                                    font: {
                                        size: 12
                                    }
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        const value = context.parsed;
                                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                        const percentage = ((value / total) * 100).toFixed(1);
                                        return `${context.label}: ₺${value.toLocaleString('tr-TR')} (${percentage}%)`;
                                    }
                                }
                            }
                        },
                        animation: {
                            animateScale: true,
                            animateRotate: true
                        }
                    }
                });
            }
        }
    }, []);

    return (
        <div className="row mb-4">
            {/* Expense Analysis Chart */}
            <div className="col-xl-8 mb-4">
                <div className="card modern-card" data-aos="fade-up">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0">Kategoriye Göre Gider Dağılımı</h5>
                        <div className="dropdown">
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button"
                                data-bs-toggle="dropdown">
                                Bu Ay
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Bu Ay</a></li>
                                <li><a className="dropdown-item" href="#">Son 3 Ay</a></li>
                                <li><a className="dropdown-item" href="#">Bu Yıl</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body">
                        <canvas id="categoryExpenseChart" ref={chartRef} height="300"></canvas>
                    </div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="col-xl-4 mb-4">
                <div className="card modern-card recent-transactions" data-aos="fade-up" data-aos-delay="100">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0">Son İşlemler</h5>
                        <a href="/expense" className="btn btn-sm btn-link">Tümünü Gör</a>
                    </div>
                    <div className="card-body p-0 recent-transactions-list">
                        <div className="list-group list-group-flush">
                            {recent_transactions.map((transaction, index) => (
                                <div key={index} className="list-group-item border-0 px-4 py-3 transaction-item">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                            <div
                                                className={`transaction-icon bg-${transaction.type === 'expense' ? 'danger' : 'warning'} bg-opacity-10 rounded-circle p-2`}>
                                                <i
                                                    className={`material-icons-round text-${transaction.type === 'expense' ? 'danger' : 'warning'}`}>
                                                    {transaction.type === 'expense' ? 'receipt' : 'shopping_cart'}
                                                </i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-1">
                                                {transaction.description}
                                            </h6>
                                            <small className="text-muted">
                                                {new Date(transaction.date).toLocaleDateString('tr-TR')}
                                            </small>
                                        </div>
                                        <div className="text-end">
                                            <h6 className="mb-1 text-danger">
                                                -₺{transaction.amount.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;