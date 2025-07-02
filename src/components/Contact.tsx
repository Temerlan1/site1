import React from 'react';
import { Phone, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacts" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-amber-900 mb-4">
            Как Нас Найти
          </h2>
          <p className="text-xl text-amber-800">
            Мы находимся в самом центре города
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative">
            <div className="bg-amber-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <p className="text-amber-800">Интерактивная карта</p>
                <p className="text-sm text-amber-700">Google Maps будет здесь</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone - Most Prominent */}
            <div className="bg-amber-100 rounded-2xl p-8 border-2 border-amber-200">
              <div className="text-center">
                <Phone className="w-12 h-12 text-amber-800 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-amber-900 mb-2">Запись по телефону</h3>
                <a 
                  href="tel:+79001234567" 
                  className="text-4xl font-bold text-amber-800 hover:text-amber-900 transition-colors block mb-4"
                >
                  +7 (900) 123-45-67
                </a>
                <button className="w-full bg-amber-800 text-amber-50 py-4 px-6 rounded-xl text-lg font-semibold hover:bg-amber-900 transition-all transform hover:scale-105">
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Позвонить Сейчас
                </button>
              </div>
            </div>

            {/* Address */}
            <div className="bg-amber-100 rounded-xl p-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-800 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Адрес</h4>
                  <p className="text-amber-800">
                    г. Москва, ул. Тверская, д. 15, стр. 1<br />
                    (вход со стороны Камергерского переулка)
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-amber-100 rounded-xl p-6">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-amber-800 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Режим работы</h4>
                  <div className="space-y-1 text-amber-800">
                    <p>Понедельник - Воскресенье: 9:00 - 21:00</p>
                    <p className="text-green-700 font-medium">Работаем без выходных</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6">
              <h4 className="font-semibold text-amber-900 mb-4">Мы в социальных сетях</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 p-3 rounded-full hover:from-amber-700 hover:to-amber-800 transition-all transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-green-600 text-amber-50 p-3 rounded-full hover:bg-green-700 transition-all transform hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-amber-800 mt-3">
                Следите за новостями и акциями в наших соцсетях
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;