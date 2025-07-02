import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Алина К.",
    service: "Окрашивание",
    text: "Потрясающий результат! Волосы стали именно такими, как я мечтала. Мастера - настоящие профессионалы!",
    rating: 5,
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Марина Л.",
    service: "Маникюр", 
    text: "Хожу в салон уже полгода. Всегда идеальный результат и такая приятная атмосфера!",
    rating: 5,
    image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Елена М.",
    service: "Косметология",
    text: "После процедур кожа просто сияет! Рекомендую всем подругам этот салон.",
    rating: 5,
    image: "https://images.pexels.com/photos/3763150/pexels-photo-3763150.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-amber-900 mb-4">
            Отзывы Наших Клиентов
          </h2>
          <p className="text-xl text-amber-800">
            Нам доверяют и возвращаются снова и снова
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative border border-amber-100">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-300" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-amber-900">{review.name}</h4>
                  <p className="text-sm text-amber-700">{review.service}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              
              <p className="text-amber-800 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-900 transition-colors font-medium">
            Оставить свой отзыв
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;