import { Shield, Zap, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const features = [
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Полная прозрачность сделки. Все документы и гарантии в полном порядке.'
    },
    {
      icon: Zap,
      title: 'Скорость',
      description: 'Быстрая обработка заказов и оперативная доставка вашего автомобиля.'
    },
    {
      icon: Star,
      title: 'Выгодная цена',
      description: 'Прямые поставки из Кореи без посредников. Лучшие цены на рынке.'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-blue-500 from-blue-50 relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-6 py-2 border-2 border-gray-800 text-gray-800 text-sm tracking-widest">
            О КОМПАНИИ
          </div>
          <h2 className="text-5xl md:text-7xl mb-8 tracking-tight">
            Ваш надежный<br/>партнер
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-24 bg-blue-600"></div>
            <div className="h-1 w-12 bg-blue-400"></div>
            <div className="h-1 w-6 bg-blue-300"></div>
          </div>
          <p className="text-xl text-gray-1000 leading-relaxed">
            ELIT AUTO KOREA — ваш надежный партнер по экспорту автомобилей из Южной Кореи. 
            Более 3 лет мы помогаем клиентам приобретать качественные автомобили напрямую 
            от производителей и проверенных дилеров.
          </p>
        </motion.div>

        {/* Image showcase */}
        <motion.div
          className="mb-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden border-2 border-gray-800">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644749700856-a82a92828a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzaG93cm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NjY4OTk1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Автосалон"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-2xl">Современные технологии</p>
              </div>
            </div>
            <div className="relative group overflow-hidden border-2 border-gray-800">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjY4MTMwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Роскошный интерьер"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-2xl">Премиум качество</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
  key={index} 
  className="relative group cursor-pointer"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  whileHover={{ y: -10 }}
>
  <div className="absolute inset-0 bg-gray-900 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>

  <div className="relative p-10 border-2 border-gray-800 bg-blue-600 h-full">

    {/* --- блок иконки --- */}
    <div className="mb-6 relative w-20 h-20">
      <div className="absolute inset-0 bg-blue-300 rounded-full transition-transform group-hover:scale-110"></div>
      
      {/* здесь только иконка центрируется */}
      <div className="w-full h-full flex items-center justify-center relative z-10">
        <feature.icon className="h-12 w-12 text-blue-50" />
      </div>
    </div>
    {/* --- конец блока иконки --- */}

    <h3 className="text-3xl text-white mb-4 tracking-tight">{feature.title}</h3>
    <p className="text-gray-200 leading-relaxed">{feature.description}</p>

    <div className="mt-6 h-1 w-12 bg-blue-600 group-hover:w-20 transition-all"></div>
  </div>
</motion.div>

            // <motion.div 
            //   key={index} 
            //   className="relative group cursor-pointer"
            //   initial={{ opacity: 0, y: 30 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   viewport={{ once: true }}
            //   transition={{ duration: 0.6, delay: index * 0.1 }}
            //   whileHover={{ y: -10 }}
            // >
            //   <div className="absolute inset-0 bg-gray-900 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            //   <div className="relative p-10 border-2 border-gray-800 bg-white h-full">
            //     <div className="mb-6 relative">
            //       <div className="absolute inset-0 bg-blue-500/10 rounded-full w-20 h-20 group-hover:scale-110 transition-transform"></div>
            //       <feature.icon className="h-12 w-12 relative z-10 mt-4 ml-4 text-blue-600" />
            //     </div>
            //     <h3 className="text-3xl mb-4 tracking-tight">{feature.title}</h3>
            //     <p className="text-gray-600 leading-relaxed">
            //       {feature.description}
            //     </p>
            //     <div className="mt-6 h-1 w-12 bg-blue-600 group-hover:w-20 transition-all"></div>
            //   </div>
            // </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}