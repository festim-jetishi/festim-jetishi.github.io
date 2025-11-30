import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const projects = [
  { id: 1, title: 'Villa am See', category: 'Renovation', location: 'Zug', description: 'Komplettsanierung einer historischen Villa mit modernem Anbau.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000' },
  { id: 2, title: 'Stadtgarten Zug', category: 'Gartenbau', location: 'Zug', description: 'Neugestaltung einer urbanen Oase mitheimischen Pflanzen.', image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1000' },
  { id: 3, title: 'Geschäftshaus Baar', category: 'Facility', location: 'Baar', description: 'Ganzheitliches Facility Management für einen Bürokomplex.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000' },
  { id: 4, title: 'Attikawohnung', category: 'Innenausbau', location: 'Cham', description: 'Exklusiver Innenausbau mit hochwertigen Materialien.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000' },
  { id: 5, title: 'Residenz Park', category: 'Umgebung', location: 'Steinhausen', description: 'Parkähnliche Umgebungsgestaltung für eine Wohnüberbauung.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000' },
];

const ProjectImage = ({ project, setInView }: { project: typeof projects[0], setInView: (id: number) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger when crossing center line
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) setInView(project.id);
  }, [isInView, project.id, setInView]);

  return (
    <div ref={ref} className="h-[60vh] md:h-screen w-full flex items-center justify-center p-6 md:p-12">
        <div className="w-full h-full rounded-soft overflow-hidden relative group">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find(p => p.id === activeId) || projects[0];

  return (
    <section id="portfolio" className="bg-page relative">
      
      {/* Unified Layout */}
      <div className="flex flex-col md:flex-row w-full relative">
        
        {/* Left/Top: Sticky Content */}
        {/* On mobile: sticky below nav, bg-page to cover scrolling images */}
        <div className="w-full md:w-1/2 sticky top-[70px] md:top-0 z-20 bg-page/95 backdrop-blur-sm md:bg-page md:h-screen flex flex-col px-6 md:px-24 border-b md:border-b-0 border-stone-100/50">
            
            {/* Section Title */}
            <div className="mt-4 md:mt-32 mb-6 md:mb-32 flex justify-between items-end md:block">
                <div>
                    <span className="font-sans text-xs md:text-sm tracking-widest uppercase text-brand-green mb-2 md:mb-4 block">Portfolio</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-primary leading-tight">Ausgewählte <br className="hidden md:block"/>Arbeiten.</h2>
                </div>
                {/* Mobile Counter */}
                <span className="md:hidden font-mono text-xs text-stone-400">
                    0{activeProject.id} / 0{projects.length}
                </span>
            </div>
            
            {/* Dynamic Project Info */}
            <div className="flex-1 flex flex-col justify-start pb-6 md:pb-0">
                <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <span className="px-2 md:px-3 py-1 rounded-full border border-stone-200 text-[10px] md:text-xs font-bold uppercase tracking-wider text-stone-500">
                            {activeProject.category}
                        </span>
                        <span className="px-2 md:px-3 py-1 rounded-full border border-stone-200 text-[10px] md:text-xs font-bold uppercase tracking-wider text-stone-500">
                            {activeProject.location}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif text-primary mb-3 md:mb-6">
                        {activeProject.title}
                    </h3>
                    <p className="hidden md:block text-sm md:text-xl text-stone-600 font-light leading-relaxed max-w-md mb-4 md:mb-8 line-clamp-3 md:line-clamp-none">
                        {activeProject.description}
                    </p>
                    <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs md:text-sm hover:text-brand-green transition-colors pb-4 md:pb-0">
                        Case Study ansehen <ArrowUpRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </div>

        {/* Right/Bottom: Scrollable Images */}
        <div className="w-full md:w-1/2">
             {/* Spacer */}
            <div className="h-[10vh] md:h-[20vh]" /> 
            
            {projects.map(project => (
                <ProjectImage key={project.id} project={project} setInView={setActiveId} />
            ))}
            
            <div className="h-[20vh]" />
        </div>

      </div>
    </section>
  );
};
