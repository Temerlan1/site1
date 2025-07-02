import React, { useState, useEffect } from 'react';

const heroImages = [
  'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3997901/pexels-photo-3997901.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1200'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleBookingClick = () => {
    // Инициация звонка на номер телефона
    window.location.href = 'tel:+79001234567';
  };

  const handleAllServicesClick = () => {
    // Переход на страницу с услугами и ценами с прокруткой к верху
    window.location.href = '#pricing';
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="min-h-screen bg-[#f5f2ed] flex flex-col items-center justify-center px-4" style={{ paddingTop: '150px' }}>
      <div className="text-center max-w-4xl mx-auto mb-8">
        {/* Main Heading - Nirvana style font */}
        <h1 className="text-5xl md:text-7xl font-light text-amber-900 mb-6 leading-tight tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: '300' }}>
          Ваша красота - наша страсть
        </h1>
        <p className="text-xl md:text-2xl text-amber-800 mb-12 font-light">
          Премиум салон красоты в центре города
        </p>

        {/* Buttons - Fully rounded like in the first image */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            onClick={handleBookingClick}
            className="bg-amber-800 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-amber-900 transition-all transform hover:scale-105 shadow-lg"
          >
            Записаться
          </button>
          <button 
            onClick={handleAllServicesClick}
            className="bg-[#f5f2ed] text-amber-800 px-10 py-4 rounded-full text-lg font-medium border border-amber-300 hover:bg-amber-50 transition-all shadow-lg"
          >
            Все услуги
          </button>
        </div>
      </div>

      {/* Image Gallery Container - Увеличен в 2 раза */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative bg-amber-50 rounded-3xl shadow-2xl overflow-hidden" style={{ aspectRatio: '30/20' }}>
          {/* Background Images */}
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Beauty salon ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
            </div>
          ))}

          {/* Image Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-amber-100' : 'bg-amber-100/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;