import React from 'react';
import { Phone, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif mb-4">Элегант</h3>
            <p className="text-amber-200 mb-6 leading-relaxed">
              Премиум салон красоты в центре Москвы. Мы создаем красоту 
              с заботой о каждом клиенте, используя только качественные 
              материалы и современные техники.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 p-3 rounded-full hover:from-amber-700 hover:to-amber-800 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-green-600 text-amber-50 p-3 rounded-full hover:bg-green-700 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-amber-200 hover:text-amber-50 transition-colors">Услуги</a></li>
              <li><a href="#masters" className="text-amber-200 hover:text-amber-50 transition-colors">Мастера</a></li>
              <li><a href="#promotions" className="text-amber-200 hover:text-amber-50 transition-colors">Акции</a></li>
              <li><a href="#contacts" className="text-amber-200 hover:text-amber-50 transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="tel:+79001234567" 
                className="flex items-center text-amber-300 hover:text-amber-200 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +7 (900) 123-45-67
              </a>
              <p className="text-amber-200 text-sm">
                Ежедневно 9:00 - 21:00<br />
                Без выходных
              </p>
              <p className="text-amber-200 text-sm">
                г. Москва, ул. Тверская, д. 15
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">
              © 2024 Элегант Beauty Studio. Все права защищены.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-amber-200 text-sm mr-2">Создано с</span>
              <Heart className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200 text-sm ml-2">для наших клиентов</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;