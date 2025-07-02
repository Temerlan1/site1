import React from 'react';

const Header = () => {
  const handleBookingClick = () => {
    // Инициация звонка на номер телефона
    window.location.href = 'tel:+79001234567';
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#f5f2ed]/95 backdrop-blur-sm shadow-sm z-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif text-amber-900 font-bold">Элегант</h1>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">О нас</a>
            <a href="#services" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">Услуги</a>
            <a href="#reviews" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">Отзывы</a>
            <a href="#contacts" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">Контакты</a>
          </nav>

          {/* Right side - CTA Button */}
          <button 
            onClick={handleBookingClick}
            className="bg-amber-800 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-amber-900 transition-all transform hover:scale-105 shadow-lg"
          >
            Записаться
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;