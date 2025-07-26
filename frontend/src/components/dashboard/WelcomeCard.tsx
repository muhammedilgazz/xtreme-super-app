import React from 'react';
import heroImg from '../../assets/images/hero.png';

const WelcomeCard: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-8 flex items-center justify-between shadow-lg">
      <div>
        <h2 className="text-2xl font-bold text-white">Bütçe Yönetimine Hoş Geldin, Muhammed</h2>
        <p className="text-gray-400 mt-2 mb-6">Harcamaların ne durumda, bir bakalım mı?</p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-gray-900 font-semibold py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors shadow-md">Hesap Satın Al</button>
          <button className="bg-gray-700 text-white font-semibold py-2 px-5 rounded-lg hover:bg-gray-600 transition-colors shadow-md">Özellikleri Gör</button>
        </div>
      </div>
      <div className="hidden lg:block flex-shrink-0">
        <img src={heroImg} alt="Hoş Geldin" className="w-40 h-40 object-cover rounded-full" />
      </div>
    </div>
  );
};

export default WelcomeCard;