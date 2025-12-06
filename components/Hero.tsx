import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TextReveal } from './ui/TextReveal';
import { hero } from '../WEBSITE_CONTENT';

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Background Media - GPU accelerated for smooth parallax */}
      <motion.div
        style={{
          y,
          scale: 1.1,
          willChange: 'transform', // Hint for GPU compositing
          transform: 'translateZ(0)', // Force GPU layer
        }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={hero.backgroundImage}
          alt={hero.imageDescription}
          className="w-full h-full object-cover opacity-70"
          style={{ transform: 'translateZ(0)' }} // GPU layer for image
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-block text-white/80 text-xs font-sans tracking-[0.2em] uppercase mb-6 border border-brand-green/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {hero.locationBadge}
          </span>
          <div className="font-serif text-6xl md:text-8xl text-white leading-[1.25] md:leading-[1.35] mb-8 tracking-tight">
            <TextReveal delay={0.2} animateOnMount>{hero.taglinePart1}</TextReveal>
            <span className="italic font-light opacity-90 block mt-2">
                 <TextReveal delay={0.5} animateOnMount>{hero.taglinePart2}</TextReveal>
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-serif text-2xl md:text-3xl text-white/90 mb-8 -mt-4 italic"
          >
            {hero.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="font-sans text-lg md:text-xl text-white/80 max-w-xl font-light leading-relaxed"
          >
            {hero.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-green flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{hero.scrollHint}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
