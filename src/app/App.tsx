import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PopularCars } from './components/PopularCars';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <PopularCars />
        <Services />
        <Partners />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}