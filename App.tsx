import React from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/ui/CustomCursor';
import { Noise } from './components/ui/Noise';
import { Preloader } from './components/ui/Preloader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About'; // ScrollyTelling
import { Services } from './components/Services'; // Soft Grid
import { ParallaxSection } from './components/ParallaxSection';
import { Portfolio } from './components/Portfolio'; // Carousel
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <SmoothScroll>
    <Preloader />
    <div className="min-h-screen bg-page text-primary selection:bg-brand-green selection:text-primary font-sans">
      <CustomCursor />
      <Noise />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Services />
        <ParallaxSection />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
    </SmoothScroll>
  );
};

export default App;
