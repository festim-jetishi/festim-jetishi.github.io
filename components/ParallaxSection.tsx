import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-24 px-4 md:px-8 bg-page overflow-hidden">
      <div 
        ref={ref}
        className="relative h-[80vh] w-full rounded-soft overflow-hidden"
      >
        <motion.div 
          style={{ y, scale: 1.1 }}
          className="absolute inset-0 w-full h-full"
        >
           <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Quote Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white text-center max-w-5xl px-6 leading-tight italic">
            "Weil Ihr Zuhause mehr ist als nur ein Ort.<br />Es ist Ihr Mittelpunkt."
          </h2>
        </div>
      </div>
    </section>
  );
};
