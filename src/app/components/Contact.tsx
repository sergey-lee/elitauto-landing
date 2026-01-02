import { Phone, Mail, MapPin, MessageCircle, Send, Instagram, Youtube, Music2 } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Contact() {
  const contacts = [
    {
      icon: Phone,
      title: 'Телефон',
      items: [
        { label: '+7 777 094 0394', link: 'tel:+77770940394' },
        { label: '+8210-5709-0394', link: 'tel:+821057090394' }
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      items: [
        { label: 'elitautokorea@gmail.com', link: 'mailto:elitautokorea@gmail.com' }
      ]
    },
    {
      icon: MapPin,
      title: 'Адрес',
      items: [
        { label: 'Южная Корея: 인천광역시 항동7가 17-70', link: null },
        { label: 'Казахстан: Астана, Нажиметдинова 39', link: null },
        { label: 'Казахстан: Алматы, Ангарская улица, 87г/1', link: null }
      ]
    }
  ];

  const messengers = [
    { name: 'WhatsApp', phone: '+7 777 094 0394', link: 'https://wa.me/77770940394', icon: MessageCircle },
    { name: 'Telegram', phone: '+8210-5709-0394', link: 'https://t.me/+821057090394', icon: Send },
    { name: 'Instagram', phone: '@elitavto_korea', link: 'https://www.instagram.com/elitavto_korea', icon: Instagram },
    { name: 'TikTok', phone: '@elitavto_korea', link: 'https://www.tiktok.com/@elitavto_korea', icon: Music2 },
    { name: 'YouTube', phone: '@elitavto_korea', link: 'https://youtube.com/@elitavto_korea', icon: Youtube }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden" id="contact">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
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
            СВЯЖИТЕСЬ С НАМИ
          </div>
          <h2 className="text-5xl md:text-7xl mb-8 tracking-tight">
            Готовы помочь<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              прямо сейчас
            </span>
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-24 bg-blue-500"></div>
            <div className="h-1 w-12 bg-blue-400"></div>
            <div className="h-1 w-6 bg-blue-300"></div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Свяжитесь с нами любым удобным способом
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
              <div className="relative p-10 border-2 border-gray-700 group-hover:border-blue-500 transition-colors text-center h-full">
                <div className="mb-6 relative">
                  <div className="inline-block p-4 border-2 border-gray-700 rounded-full group-hover:border-blue-500 transition-colors">
                    <contact.icon className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl mb-6 uppercase tracking-wider text-sm text-gray-400">{contact.title}</h3>
                <div className="space-y-3">
                  {contact.items.map((item, idx) => (
                    <div key={idx}>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-white hover:text-blue-400 transition-colors text-lg block"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <p className="text-white text-lg">{item.label}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl text-center mb-10 tracking-tight">Напишите в мессенджер</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {messengers.map((messenger, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-blue-500 text-lg hover:bg-blue-600 hover:border-blue-600 px-8 py-8 text-lg group"
                  onClick={() => window.open(messenger.link, '_blank')}
                >
                  <messenger.icon className="mr-3 h-10 w-10 text-blue-400 group-hover:text-white" />
                  <div className="text-left">
                    <div className="text-sm opacity-70 mb-1">{messenger.name}</div>
                    <div>{messenger.phone}</div>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}