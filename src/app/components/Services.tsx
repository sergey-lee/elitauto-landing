import { Ship, Truck, Plane } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const deliveryMethods = [
    {
      icon: Ship,
      title: 'Морская доставка',
      description: 'Экономичный вариант для доставки автомобилей. Срок доставки 20-30 дней.',
      features: ['Контейнерная перевозка', 'Страхование груза', 'Таможенное оформление'],
      accent: 'from-white/20 to-transparent'
    },
    {
      icon: Truck,
      title: 'Сухопутная доставка',
      description: 'Быстрая доставка наземным транспортом. Срок доставки 7-14 дней.',
      features: ['Автовозы', 'Отслеживание груза', 'Доставка до двери'],
      accent: 'from-white/10 to-transparent'
    },
    {
      icon: Plane,
      title: 'Авиа доставка',
      description: 'Самый быстрый способ доставки. Срок доставки 2-5 дней.',
      features: ['Срочная доставка', 'VIP сервис', 'Полное сопровождение'],
      accent: 'from-white/20 to-transparent'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden" id="services">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Diagonal lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-0 right-0 w-px h-full bg-blue-500 transform rotate-12"></div>
        <div className="absolute top-0 right-20 w-px h-full bg-blue-400 transform rotate-12"></div>
        <div className="absolute top-0 right-40 w-px h-full bg-blue-300 transform rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-6 py-2 border-2 border-blue-500 text-blue-400 text-sm tracking-widest">
            СПОСОБЫ ДОСТАВКИ
          </div>
          <h2 className="text-5xl md:text-7xl mb-8 tracking-tight">
            Доставляем<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              как удобно вам
            </span>
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-24 bg-blue-500"></div>
            <div className="h-1 w-12 bg-blue-400"></div>
            <div className="h-1 w-6 bg-blue-300"></div>
          </div>
          <p className="text-xl text-gray-400 leading-relaxed">
            Мы предлагаем различные варианты доставки, чтобы вы могли выбрать оптимальный 
            способ для вашего автомобиля.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryMethods.map((method, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.accent} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative p-10 border-2 border-gray-800 hover:border-blue-500 transition-colors h-full">
                <div className="relative mb-6">
                  <motion.div
                    className="inline-block text-blue-400"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <method.icon className="h-16 w-16" />
                  </motion.div>
                </div>
                <h3 className="text-3xl mb-4 tracking-tight">{method.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {method.description}
                </p>
                <ul className="space-y-3">
                  {method.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + (idx * 0.1) }}
                    >
                      <span className="mr-3 w-1 h-1 bg-blue-500"></span>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 h-1 w-16 bg-blue-500 group-hover:w-32 transition-all"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}