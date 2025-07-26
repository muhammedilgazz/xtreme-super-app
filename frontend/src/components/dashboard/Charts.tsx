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
        <div className="bg-white rounded-xl shadow-sm h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-gray-50 rounded-t-xl">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900 m-0 tracking-tight">Kategoriye Göre Gider Dağılımı</h3>
                    <button className="text-sm text-gray-500 hover:underline">Bu Ay</button>
                </div>
            </div>
            <div className="p-6 flex-grow">
                <div className="h-full">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </div>
    );
};

export default Charts;