import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Алексей М.',
      location: 'Алматы, Казахстан',
      text: 'Отличный сервис! Купил Hyundai Sonata через ELIT AUTO KOREA. Весь процесс был прозрачным, все документы в порядке. Доставка заняла 3 недели.',
      rating: 5
    },
    {
      name: 'Марина С.',
      location: 'Москва, Россия',
      text: 'Очень довольна покупкой! Ребята помогли с выбором автомобиля, все объяснили. Kia Sportage приехал в идеальном состоянии. Рекомендую!',
      rating: 5
    },
    {
      name: 'Нурлан Т.',
      location: 'Астана, Казахстан',
      text: 'Профессиональный подход к делу. Заказывал Genesis G80. Все этапы отслеживал онлайн. Цена действительно выгодная по сравнению с местными дилерами.',
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-blue-500 to-blue-50 relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-blue-500/[0.02] whitespace-nowrap pointer-events-none">
        REVIEWS
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
            ОТЗЫВЫ КЛИЕНТОВ
          </div>
          <h2 className="text-5xl md:text-7xl mb-8 tracking-tight">
            Нам доверяют
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-24 bg-blue-600"></div>
            <div className="h-1 w-12 bg-blue-400"></div>
            <div className="h-1 w-6 bg-blue-300"></div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Более 150 довольных клиентов доверяют нам
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gray-900 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
              <div className="relative p-8 border-2 border-gray-800 bg-white h-full">
                <Quote className="h-10 w-10 mb-4 opacity-20 text-blue-600" />
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-blue-600 text-blue-600" />
                  ))}
                </div>
                <p className="mb-8 text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t-2 border-gray-800 pt-4">
                  <p className="mb-1 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}