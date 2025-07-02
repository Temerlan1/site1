import React from 'react';
import { Award, Shield, Heart, MapPin, Clock, Star } from 'lucide-react';

const advantages = [
  {
    icon: Award,
    title: "Топ-Мастера",
    description: "Сертифицированные специалисты с многолетним опытом"
  },
  {
    icon: Shield,
    title: "Премиум Материалы",
    description: "Только проверенные бренды и качественная косметика"
  },
  {
    icon: Heart,
    title: "Уютная Атмосфера",
    description: "Комфортная обстановка для полного расслабления"
  },
  {
    icon: Star,
    title: "Гарантия Качества",
    description: "100% гарантия на все выполненные процедуры"
  },
  {
    icon: MapPin,
    title: "Удобное Расположение",
    description: "В самом центре города с удобной парковкой"
  },
  {
    icon: Clock,
    title: "Гибкий График",
    description: "Работаем ежедневно с 9:00 до 21:00 без выходных"
  }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-amber-900 mb-4">
            Почему Выбирают Именно Нас?
          </h2>
          <p className="text-xl text-amber-800">
            Мы создаем красоту с заботой о каждом клиенте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="bg-amber-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="bg-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-300 transition-colors">
                  <IconComponent className="w-8 h-8 text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">{advantage.title}</h3>
                <p className="text-amber-800">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;