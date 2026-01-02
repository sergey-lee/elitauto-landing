import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function PopularCars() {
  const cars = [
    {
      brand: 'Genesis',
      model: 'G80',
      image: 'https://images.unsplash.com/photo-1714614935738-f953543c8c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lc2lzJTIwZzgwJTIwbHV4dXJ5fGVufDF8fHx8MTc2Njg5OTUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Премиум седан с роскошным интерьером',
      price: 'от $15,000'
    },
    {
      brand: 'Genesis',
      model: 'GV70',
      image: 'https://images.unsplash.com/photo-1723100286449-5b0fd5291855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lc2lzJTIwZ3Y3MCUyMHN1dnxlbnwxfHx8fDE3NjY4OTk1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Компактный премиум кроссовер',
      price: 'от $19,000'
    },
    {
      brand: 'Lexus',
      model: 'LX700h',
      image: 'https://github.com/sergey-lee/elitauto-landing/blob/main/src/assets/lexus_lh700.jpg?raw=true',
      description: 'Компактный премиум кроссовер',
      price: 'от $120,000'
    },
    {
      brand: 'BMW',
      model: '5 Series',
      image: 'https://github.com/sergey-lee/elitauto-landing/blob/main/src/assets/bmw5.jpg?raw=true',
      description: 'Спортивный премиум седан',
      price: 'от $10,000'
    },
    {
      brand: 'Hyundai',
      model: 'Sonata',
      image: 'https://images.unsplash.com/photo-1726038021851-9dc24938b376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXVuZGFpJTIwc29uYXRhfGVufDF8fHx8MTc2Njg5OTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Современный семейный седан',
      price: 'от $5,000'
    },
    {
      brand: 'Hyundai',
      model: 'Palisade',
      image: 'https://github.com/sergey-lee/elitauto-landing/blob/main/src/assets/palisade.jpg?raw=true',
      description: 'Премиальный семейный SUV',
      price: 'от $30,000'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-blue-500 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-6 py-2 border-2 border-gray-800 text-gray-800 text-sm tracking-widest">
            ПОПУЛЯРНЫЕ МОДЕЛИ
          </div>
          <h2 className="text-5xl md:text-7xl mb-8 tracking-tight">
            Выберите свой<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black">
              автомобиль мечты
            </span>
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-24 bg-blue-600"></div>
            <div className="h-1 w-12 bg-blue-400"></div>
            <div className="h-1 w-6 bg-blue-300"></div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Мы работаем с ведущими автомобильными брендами Кореи и мира
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden border-2 border-gray-800">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <ImageWithFallback
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-500/30 to-transparent"></div>

                  
                  {/* Price tag */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 text-sm font-bold">
                    {car.price}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-blue-50">
                  <div className="mb-2">
                    <span className="text-sm text-blue-600 uppercase tracking-wider">{car.brand}</span>
                  </div>
                  <h3 className="text-3xl mb-3 tracking-tight">{car.model}</h3>
                  <p className="text-gray-600 mb-4">{car.description}</p>
                  
                  {/* <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="text-sm uppercase tracking-wider mr-2">Подробнее</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div> */}
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 pointer-events-none transition-colors"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xl text-gray-600 mb-6">
            Не нашли нужную модель? Мы поможем найти любой автомобиль из Кореи!
          </p>
          <button
            className="px-10 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg inline-flex items-center gap-3 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Связаться с нами
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}