import { motion } from 'motion/react';

export function Partners() {
  const partners = [
    { name: 'Encar', description: 'Крупнейший автомобильный портал Кореи' },
    { name: 'KB 차차차', description: 'Ведущий сервис по продаже автомобилей' },
    { name: '헤이딜러', description: 'Платформа для дилеров и покупателей' }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Large text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-blue-500/[0.02] whitespace-nowrap pointer-events-none">
        PARTNERS
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
            НАШИ ПАРТНЕРЫ
          </div>
          <h2 className="text-5xl md:text-7xl mb-8 tracking-tight">
            Рабтаем с<br/>лучшими
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-24 bg-blue-600"></div>
            <div className="h-1 w-12 bg-blue-400"></div>
            <div className="h-1 w-6 bg-blue-300"></div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Мы работаем с крупнейшими автомобильными площадками и дилерами Южной Кореи
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-12 border-2 border-gray-800 bg-white group-hover:bg-transparent transition-colors text-center h-full flex flex-col justify-center">
                <h3 className="text-4xl mb-4 group-hover:text-white transition-colors">{partner.name}</h3>
                <div className="h-px w-16 bg-gray-800 group-hover:bg-white transition-colors mx-auto mb-4"></div>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}