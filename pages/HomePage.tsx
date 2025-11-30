import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { ParallaxSection } from '../components/ParallaxSection';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ParallaxSection />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
};