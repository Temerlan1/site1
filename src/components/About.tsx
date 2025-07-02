import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#f5f2ed]" style={{ marginTop: '-80px', paddingTop: '100px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Content - теперь на всю ширину */}
          <div className="flex flex-col justify-center space-y-6 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-amber-900 mb-6">
              О нашем салоне
            </h2>
            <p className="text-lg text-amber-800 leading-relaxed">
              Салон красоты "Элегант" - это место, где ваши мечты о красоте становятся реальностью. 
              Мы создали уникальное пространство, где каждый клиент получает индивидуальный подход 
              и профессиональный сервис высочайшего уровня.
            </p>
            <p className="text-lg text-amber-800 leading-relaxed">
              Наша команда состоит из опытных мастеров, которые постоянно совершенствуют свои навыки 
              и следят за последними тенденциями в мире красоты. Мы используем только качественные 
              материалы и современное оборудование.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-3xl mx-auto">
              <div className="text-center bg-amber-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-900">5+</div>
                <div className="text-amber-700">лет опыта</div>
              </div>
              <div className="text-center bg-amber-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-900">1000+</div>
                <div className="text-amber-700">довольных клиентов</div>
              </div>
              <div className="text-center bg-amber-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-900">15+</div>
                <div className="text-amber-700">видов услуг</div>
              </div>
              <div className="text-center bg-amber-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-900">10</div>
                <div className="text-amber-700">опытных мастеров</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;