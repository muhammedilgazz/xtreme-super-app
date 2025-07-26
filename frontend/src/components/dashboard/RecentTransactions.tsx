import React from 'react';

const transactions = [
    { description: 'Market Alışverişi', date: '08.08.2025', amount: -500.00, icon: 'fas fa-receipt' },
    { description: 'Depozito', date: '08.08.2025', amount: -24000.00, icon: 'fas fa-building' },
    { description: 'Kira', date: '07.08.2025', amount: -24000.00, icon: 'fas fa-home' },
    { description: 'Emlak Komisyonu', date: '07.08.2025', amount: -34560.00, icon: 'fas fa-key' },
];

const RecentTransactions: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-gray-50 rounded-t-xl">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900 m-0 tracking-tight">Son İşlemler</h3>
                    <a href="#" className="text-sm text-gray-500 hover:underline">Tümünü Gör</a>
                </div>
            </div>
            <div className="p-6 flex-grow">
                <div className="space-y-4">
                    {transactions.map((transaction, index) => (
                        <div key={index} className="flex items-center">
                            <div className="bg-gray-100 rounded-lg p-2 mr-3">
                                <i className={`${transaction.icon} text-gray-600`}></i>
                            </div>
                            <div className="flex-grow">
                                <p className="font-semibold text-gray-800">{transaction.description}</p>
                                <p className="text-sm text-gray-500">{transaction.date}</p>
                            </div>
                            <p className="font-semibold text-red-500">
                                {transaction.amount.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentTransactions;