import React from 'react';
import { ArrowLeft, Phone } from 'lucide-react';

const serviceCategories = [
  {
    category: "Маникюр",
    services: [
      { name: "Классический маникюр", price: "1500 ₽", duration: "60 мин" },
      { name: "Европейский маникюр", price: "1800 ₽", duration: "70 мин" },
      { name: "Маникюр с покрытием гель-лак", price: "2200 ₽", duration: "90 мин" },
      { name: "Френч маникюр", price: "2500 ₽", duration: "100 мин" },
      { name: "Дизайн ногтей (за 1 ноготь)", price: "от 100 ₽", duration: "10 мин" }
    ]
  },
  {
    category: "Педикюр",
    services: [
      { name: "Классический педикюр", price: "2000 ₽", duration: "80 мин" },
      { name: "Аппаратный педикюр", price: "2300 ₽", duration: "90 мин" },
      { name: "Педикюр с покрытием", price: "2800 ₽", duration: "120 мин" },
      { name: "СПА-педикюр", price: "3500 ₽", duration: "150 мин" }
    ]
  },
  {
    category: "Наращивание ресниц",
    services: [
      { name: "Классическое наращивание", price: "3000 ₽", duration: "120 мин" },
      { name: "2D объем", price: "3500 ₽", duration: "150 мин" },
      { name: "3D объем", price: "4000 ₽", duration: "180 мин" },
      { name: "Голливудский объем", price: "4500 ₽", duration: "200 мин" },
      { name: "Коррекция ресниц", price: "2000 ₽", duration: "90 мин" }
    ]
  },
  {
    category: "Косметология",
    services: [
      { name: "Чистка лица", price: "3500 ₽", duration: "90 мин" },
      { name: "Пилинг лица", price: "4000 ₽", duration: "60 мин" },
      { name: "Увлажняющая маска", price: "2500 ₽", duration: "45 мин" },
      { name: "Массаж лица", price: "2800 ₽", duration: "60 мин" },
      { name: "Мезотерапия", price: "6000 ₽", duration: "90 мин" }
    ]
  },
  {
    category: "Стрижки и укладки",
    services: [
      { name: "Женская стрижка", price: "от 2500 ₽", duration: "60 мин" },
      { name: "Мужская стрижка", price: "1500 ₽", duration: "45 мин" },
      { name: "Укладка волос", price: "2000 ₽", duration: "60 мин" },
      { name: "Окрашивание волос", price: "от 4000 ₽", duration: "180 мин" },
      { name: "Мелирование", price: "от 5000 ₽", duration: "240 мин" }
    ]
  }
];

const Pricing = () => {
  const handleBackClick = () => {
    window.location.href = '#services';
    // Прокрутка к верху страницы
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="pricing" className="py-20 bg-[#f5f2ed] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with back button - сдвинут вниз на 1 см */}
        <div className="flex items-center mb-8" style={{ marginTop: '1cm' }}>
          <button 
            onClick={handleBackClick}
            className="flex items-center text-amber-800 hover:text-amber-900 transition-colors mr-6"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Назад к услугам
          </button>
        </div>

        {/* Весь контент ниже кнопки также сдвинут вниз на 1 см */}
        <div style={{ marginTop: '1cm' }}>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif text-amber-900 mb-4">
              Прайс-лист услуг
            </h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              Полный перечень наших услуг с актуальными ценами
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-amber-50 rounded-2xl p-6 shadow-lg border border-amber-100">
                <h3 className="text-2xl font-serif text-amber-900 mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-3 border-b border-amber-200 last:border-b-0">
                      <div className="flex-1">
                        <h4 className="font-medium text-amber-900">{service.name}</h4>
                        <p className="text-sm text-amber-700">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-amber-900">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-amber-100 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif text-amber-900 mb-4">
                Готовы записаться?
              </h3>
              <p className="text-amber-800 mb-6">
                Позвоните нам или оставьте заявку, и мы подберем удобное время для вашего визита
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+79001234567"
                  className="bg-amber-800 text-white px-8 py-4 rounded-full hover:bg-amber-900 transition-colors font-medium flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +7 (900) 123-45-67
                </a>
                <button className="bg-amber-50 text-amber-800 px-8 py-4 rounded-full border border-amber-300 hover:bg-amber-100 transition-colors font-medium">
                  Записаться онлайн
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-amber-200/50 rounded-xl p-6 max-w-4xl mx-auto">
              <h4 className="text-lg font-semibold text-amber-900 mb-3">Важная информация</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-amber-800">
                <div>
                  <strong>Скидки:</strong> Первое посещение -20%, студентам -10%
                </div>
                <div>
                  <strong>Время работы:</strong> Ежедневно с 9:00 до 21:00
                </div>
                <div>
                  <strong>Отмена:</strong> За 24 часа до процедуры
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;