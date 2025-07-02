import React from 'react';
import { Phone, Gift, Clock, Sparkles } from 'lucide-react';

const Promotions = () => {
  return (
    <section id="promotions" className="py-20 bg-gradient-to-r from-amber-700 to-amber-600 text-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-amber-900/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-50/10 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 mr-3" />
            <span className="text-xl font-medium">Специальные предложения</span>
          </div>
          <h2 className="text-4xl font-serif mb-4">
            Акции и Спецпредложения
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Promotion */}
          <div className="bg-amber-50/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-50/20">
            <div className="flex items-center mb-4">
              <Sparkles className="w-6 h-6 mr-2 text-yellow-300" />
              <span className="text-yellow-300 font-medium">Для новых клиентов</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Скидка 20% на все процедуры при первом посещении!
            </h3>
            <p className="text-amber-100 mb-6 text-lg">
              Подарите себе день красоты и сэкономьте на первом визите. 
              Предложение действует на все услуги салона.
            </p>
            <div className="flex items-center mb-6 text-yellow-300">
              <Clock className="w-5 h-5 mr-2" />
              <span>Предложение ограничено по времени</span>
            </div>
            <a 
              href="tel:+79001234567"
              className="inline-flex items-center justify-center bg-amber-50 text-amber-800 px-8 py-4 rounded-xl text-lg font-bold hover:bg-amber-100 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              <Phone className="w-6 h-6 mr-3" />
              УЗНАТЬ ПОДРОБНОСТИ
            </a>
          </div>

          {/* Secondary Promotions */}
          <div className="space-y-6">
            <div className="bg-amber-50/10 backdrop-blur-sm rounded-xl p-6 border border-amber-50/20">
              <h4 className="text-xl font-bold mb-3">Программа лояльности</h4>
              <p className="text-amber-100 mb-4">
                Каждое 5-е посещение - скидка 15%
              </p>
              <button className="text-yellow-300 hover:text-yellow-200 font-medium">
                Подробнее →
              </button>
            </div>
            
            <div className="bg-amber-50/10 backdrop-blur-sm rounded-xl p-6 border border-amber-50/20">
              <h4 className="text-xl font-bold mb-3">Подарочные сертификаты</h4>
              <p className="text-amber-100 mb-4">
                Идеальный подарок для близких
              </p>
              <button className="text-yellow-300 hover:text-yellow-200 font-medium">
                Купить сертификат →
              </button>
            </div>
            
            <div className="bg-amber-50/10 backdrop-blur-sm rounded-xl p-6 border border-amber-50/20">
              <h4 className="text-xl font-bold mb-3">Комплексные программы</h4>
              <p className="text-amber-100 mb-4">
                Скидка до 25% на пакеты услуг
              </p>
              <button className="text-yellow-300 hover:text-yellow-200 font-medium">
                Смотреть пакеты →
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-amber-50/20 backdrop-blur-sm rounded-xl p-6 inline-block">
            <p className="text-xl mb-2">Звоните прямо сейчас:</p>
            <a href="tel:+79001234567" className="text-3xl font-bold hover:text-yellow-300 transition-colors">
              +7 (900) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;