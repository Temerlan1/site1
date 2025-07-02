import React from 'react';
import { Phone, Star } from 'lucide-react';

const masters = [
  {
    name: "Анна Волкова",
    specialty: "Стилист-колорист",
    experience: "8 лет опыта",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Специалист по сложному окрашиванию и авторским стрижкам"
  },
  {
    name: "Мария Петрова", 
    specialty: "Мастер маникюра",
    experience: "5 лет опыта",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Эксперт по nail-art и укреплению ногтевой пластины"
  },
  {
    name: "Екатерина Иванова",
    specialty: "Косметолог",
    experience: "10 лет опыта", 
    image: "https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Специалист по anti-age процедурам и уходу за кожей"
  }
];

const Masters = () => {
  return (
    <section id="masters" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-amber-900 mb-4">
            Наши Мастера
          </h2>
          <p className="text-xl text-amber-800">
            Профессионалы своего дела с многолетним опытом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {masters.map((master, index) => (
            <div key={index} className="bg-yellow-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={master.image} 
                  alt={master.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-50/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-600 mr-1" />
                    <span className="text-sm font-medium text-amber-900">5.0</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-1">{master.name}</h3>
                <p className="text-amber-700 font-medium mb-1">{master.specialty}</p>
                <p className="text-amber-600 text-sm mb-3">{master.experience}</p>
                <p className="text-amber-800 mb-4">{master.description}</p>
                
                <button className="w-full bg-amber-800 text-amber-50 py-3 px-4 rounded-lg hover:bg-amber-900 transition-colors flex items-center justify-center font-medium">
                  <Phone className="w-4 h-4 mr-2" />
                  Записаться к {master.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Masters;