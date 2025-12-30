import { ImageWithFallback } from './figma/ImageWithFallback';
import { Phone, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import heroImage from '../../assets/3f9fced673a76c809afad8fa00b8670af1faf083.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src={heroImage}
          alt="ELIT AUTO KOREA"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-950/80 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="max-w-4xl">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl mb-4 tracking-tight">
              ELIT AUTO<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                KOREA
              </span>
            </h1>
            <div className="flex gap-2 items-center">
              <motion.div 
                className="h-1 bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              <motion.div 
                className="h-1 w-6 bg-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-3xl md:text-5xl mb-8 font-light leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Покупка авто из Кореи — <br/>
            <span className="italic">без рисков, спокойно и прозрачно</span>
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Экспорт автомобилей в Казахстан, Россию и по всему миру
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg group border-0"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Связаться с нами
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-8 py-6 text-lg group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши услуги
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: '3+', label: 'лет на рынке' },
              { number: '150+', label: 'довольных клиентов' },
              { number: '24/7', label: 'поддержка' }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative p-6 border border-blue-500/30 group-hover:border-blue-500">
                  <div className="text-5xl md:text-6xl mb-2 font-light text-blue-400">{stat.number}</div>
                  <div className="text-gray-400 uppercase text-sm tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-blue-400/50" />
      </motion.div>
    </section>
  );
}