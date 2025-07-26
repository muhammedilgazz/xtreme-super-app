import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#191923] text-white flex items-center justify-between px-8 py-4 transition-all duration-300">
      <div className="text-2xl font-bold">Logo</div>
      <div className="text-center flex-1">
        <span className="text-sm">© 2023 <span className="font-bold">Lorem Ipsum</span>. All Rights Reserved.</span>
      </div>
      <div className="flex items-center gap-6 text-xl">
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
      </div>
    </footer>
  );
};

export default Footer; 