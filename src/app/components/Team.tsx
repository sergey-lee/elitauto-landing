import { Phone, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Team() {
  const team = [
    {
      name: 'Zhumash Bekzat',
      position: 'CEO',
      phone: '+7 777 094 0394',
      photo: "/avatar.jpg"
    },
    {
      name: 'Аскар Санжар',
      position: 'Директор',
      phone: '+7 771 193 7771'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-blue-500 to-blue-50 relative overflow-hidden" id="team">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-blue-500/20 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 border border-blue-500/10 rounded-full"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-6 py-2 border-2 border-gray-800 text-gray-800 text-sm tracking-widest">
            НАША КОМАНДА
          </div>
          <h2 className="text-5xl md:text-7xl mb-8 tracking-tight">
            Профессионалы<br/>своего дела
          </h2>
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-24 bg-blue-600"></div>
            <div className="h-1 w-12 bg-blue-400"></div>
            <div className="h-1 w-6 bg-blue-300"></div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Профессионалы с многолетним опытом в автомобильной индустрии
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-gray-900 translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform"></div>
              <div className="relative p-12 bg-white border-2 border-gray-800">
<motion.div 
  className="flex items-center justify-center mb-8"
  whileHover={{ scale: 1.1, rotate: 5 }}
  transition={{ duration: 0.3 }}
>
  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-white group-hover:border-2 group-hover:border-gray-800 transition-all">
    
    {member.photo ? (
      <img 
        src={member.photo} 
        alt="partner" 
        className="w-full h-full object-cover rounded-full"
      />
    ) : (
      <Users className="h-16 w-16 text-white group-hover:text-blue-600 transition-colors" />
    )}

  </div>
</motion.div>


                {/* <motion.div 
                  className="flex items-center justify-center mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-white group-hover:border-2 group-hover:border-gray-800 transition-all">
                    <Users className="h-16 w-16 text-white group-hover:text-blue-600 transition-colors" />
                  </div>
                </motion.div> */}
                <h3 className="text-3xl text-center mb-2 tracking-tight">{member.name}</h3>
                <p className="text-center text-gray-600 mb-6 uppercase text-sm tracking-widest">
                  {member.position}
                </p>
                <div className="h-px bg-gray-200 mb-6"></div>
                <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  <Phone className="h-5 w-5 mr-3" />
                  <a href={`tel:${member.phone}`} className="hover:underline text-lg">
                    {member.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}