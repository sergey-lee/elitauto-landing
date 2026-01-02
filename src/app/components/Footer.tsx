import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white border-t border-blue-500/20 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h3 className="text-4xl md:text-5xl mb-2 tracking-tight">
              ELIT AUTO <span className="text-blue-400">KOREA</span>
            </h3>
            <div className="flex justify-center gap-2 my-6">
              <div className="h-px w-24 bg-blue-500"></div>
              <div className="h-px w-12 bg-blue-400"></div>
              <div className="h-px w-6 bg-blue-300"></div>
            </div>
          </div>
          
          <p className="text-gray-300 mb-8 text-2xl">
            Экспорт автомобилей из Южной Кореи
          </p>  
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-2xl text-gray-300">
            <div>
              <p className="text-blue-400 mb-2">Более 3х лет</p>
              <p>на рынке</p>
            </div>
            <div>
              <p className="text-blue-400 mb-2">150+</p>
              <p>клиентов</p>
            </div>
            <div>
              <p className="text-blue-400 mb-2">24/7</p>
              <p>поддержка</p>
            </div>
            <div>
              <p className="text-blue-400 mb-2">Надежность</p>
              <p>гарантия</p>
            </div>
          </div>

          <div className="h-px bg-blue-500/20 my-8"></div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ELIT AUTO KOREA. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}