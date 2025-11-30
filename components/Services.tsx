import React, { useState } from 'react';
import { Home, Leaf, Hammer, Trash2, Building2, Shovel, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  label: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Hauswartung',
    label: '24/7 Service',
    description: 'Umfassende Betreuung Ihrer Liegenschaften mit höchster Sorgfalt. Von der technischen Überwachung bis zur Reinigung sorgen wir für Werterhalt und gepflegte Atmosphäre – rund um die Uhr.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: 'Gartenpflege',
    label: 'Grünflächen',
    description: 'Kreative Gestaltung und nachhaltiger Unterhalt Ihrer Gartenanlagen. Wir verwandeln Aussenbereiche in lebendige Oasen, die zu jeder Jahreszeit Freude bereiten.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: 'Umbauten',
    label: 'Renovation',
    description: 'Fachgerechte Planung und Ausführung von Umbau- und Renovationsprojekten. Wir begleiten Sie von der ersten Idee bis zur schlüsselfertigen Übergabe.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    title: 'Management',
    label: 'Facility',
    description: 'Ganzheitliches Facility Management für den Werterhalt Ihrer Immobilien. Wir optimieren Betriebsabläufe und senken Kosten durch intelligente Bewirtschaftung.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    title: 'Rückbau',
    label: 'Entsorgung',
    description: 'Sicherer Rückbau und umweltgerechte Entsorgung. Wir schaffen Platz für Neues und garantieren eine saubere, vorschriftsgemässe Trennung aller Materialien.',
    icon: Trash2,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    title: 'Immobilien',
    label: 'Handel',
    description: 'Kompetente Beratung bei Kauf und Verkauf. Wir unterstützen Sie mit Marktkenntnis und Diskretion bei Ihren Immobiliengeschäften.',
    icon: Shovel,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
  },
];

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);

  return (
    <section id="services" className="py-24 md:py-32 bg-stone-100 bg-dots-dark relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 md:pl-8">
           <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs mb-6 block flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-green"></span>
              Unsere Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-primary leading-[1.1]">
              Kompetenz in <br/>
              <span className="text-stone-400">jedem Bereich.</span>
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Service List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            {services.map((service) => (
              <ServiceItem 
                key={service.id} 
                service={service} 
                isActive={activeService === service.id}
                onActivate={() => setActiveService(service.id)}
              />
            ))}
          </div>

          {/* Right Column: Sticky Image Preview (Desktop) */}
          <div className="hidden lg:block w-1/2 relative">
             <div className="sticky top-[20vh] w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={services.find(s => s.id === activeService)?.image} 
                      alt="Service Preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 p-10 text-white">
                      <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                            {React.createElement(services.find(s => s.id === activeService)!.icon, { className: "w-6 h-6" })}
                          </div>
                          <span className="uppercase tracking-widest text-sm font-medium">
                            {services.find(s => s.id === activeService)?.label}
                          </span>
                      </div>
                      <h3 className="text-3xl font-serif">
                          {services.find(s => s.id === activeService)?.title}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

interface ServiceItemProps {
  service: Service;
  isActive: boolean;
  onActivate: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, isActive, onActivate }) => {
  return (
    <div 
      onClick={onActivate}
      onMouseEnter={onActivate}
      className={`group relative p-6 md:p-8 rounded-xl transition-all duration-500 cursor-pointer overflow-hidden border border-transparent ${isActive ? 'bg-white shadow-xl border-stone-100' : 'hover:bg-white hover:shadow-lg'}`}
    >
      <div className="flex justify-between items-start relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
             <span className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-brand-green' : 'text-stone-400'}`}>
               0{service.id}
             </span>
             <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-300 ${isActive ? 'text-primary' : 'text-primary/60'}`}>
               {service.title}
             </h3>
          </div>
          
          <motion.div 
            initial={false}
            animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-secondary/80 text-lg leading-relaxed mb-6 font-light max-w-xl">
              {service.description}
            </p>
            
            <div className="flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider group/link">
              <span>Details ansehen</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </div>
            
            {/* Mobile Image (Visible only on small screens when active) */}
            <div className="lg:hidden mt-6 rounded-lg overflow-hidden h-48 w-full relative">
               <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <div className={`p-3 rounded-full transition-all duration-300 ${isActive ? 'bg-brand-green text-white rotate-45' : 'bg-stone-200 text-stone-500'}`}>
           <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
