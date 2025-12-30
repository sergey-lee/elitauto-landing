// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { label: 'О компании', href: '#about' },
//     { label: 'Услуги', href: '#services' },
//     { label: 'Команда', href: '#team' },
//     { label: 'Контакты', href: '#contact' }
//   ];

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setMobileMenuOpen(false);
//     }
//   };

//   return (
//     <motion.header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-gray-900/95 backdrop-blur-md border-b border-blue-500/20' 
//           : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           <motion.div 
//             className="text-2xl cursor-pointer text-white tracking-tight"
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             ELIT AUTO <span className="text-blue-400">KOREA</span>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-10">
//             {navItems.map((item, index) => (
//               <motion.button
//                 key={item.href}
//                 onClick={() => scrollToSection(item.href)}
//                 className="text-white hover:text-blue-400 transition-colors relative group"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//               >
//                 {item.label}
//                 <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
//               </motion.button>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <motion.button
//             className="md:hidden text-white"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             whileTap={{ scale: 0.9 }}
//           >
//             {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </motion.button>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.nav
//               className="md:hidden pb-6 border-t border-white/10"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {navItems.map((item, index) => (
//                 <motion.button
//                   key={item.href}
//                   onClick={() => scrollToSection(item.href)}
//                   className="block w-full text-left py-4 text-white hover:bg-blue-600/20 px-4 transition-colors border-b border-blue-500/10"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                 >
//                   {item.label}
//                 </motion.button>
//               ))}
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// }

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокируем скролл body когда открыто меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'О компании', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Команда', href: '#team' },
    { label: 'Контакты', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    // Небольшая задержка чтобы меню успело закрыться
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-blue-500/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="text-2xl cursor-pointer text-white tracking-tight"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ELIT AUTO <span className="text-blue-400">KOREA</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-blue-400 transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-gray-900/98 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Content */}
            <motion.nav
              className="relative h-full flex flex-col justify-center px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-3xl text-white hover:text-blue-400 py-6 text-left transition-colors border-b border-blue-500/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}