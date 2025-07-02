import React from 'react';

const services = [
  {
    title: "Маникюр",
    image: "https://images.pexels.com/photos/3997901/pexels-photo-3997901.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Профессиональный маникюр с покрытием"
  },
  {
    title: "Педикюр", 
    image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Идеальный уход за ногами"
  },
  {
    title: "Наращивание ресниц",
    image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Объемные и выразительные ресницы"
  },
  {
    title: "Косметология",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Профессиональный уход за кожей лица"
  }
];

const Services = () => {
  const handleServiceClick = () => {
    // Переход на страницу с услугами и ценами с прокруткой к верху
    window.location.href = '#pricing';
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="services" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-amber-900 mb-4">
            Наши Услуги
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Откройте для себя мир красоты и совершенства с нашими премиум услугами
          </p>
        </div>

        {/* Horizontal Gallery - полностью кликабельные карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={handleServiceClick}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content overlay on hover - без кнопки */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>
              </div>
              
              {/* Title always visible at bottom */}
              <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold drop-shadow-lg">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleServiceClick}
            className="bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-900 transition-colors font-medium"
          >
            Все услуги
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;