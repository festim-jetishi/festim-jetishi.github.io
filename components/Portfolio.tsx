import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';
import { portfolio } from '../WEBSITE_CONTENT';
import { BeforeAfterSlider } from './ui/BeforeAfterSlider';

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

const ProjectImage = ({ project, setInView }: { project: typeof portfolio.projects[0], setInView: (id: number) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger when crossing center line
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) setInView(project.id);
  }, [isInView, project.id, setInView]);

  const hasBeforeImage = !!project.beforeImage;

  return (
    <div ref={ref} className="h-[60vh] xl:h-[75vh] w-full flex items-center justify-center p-6 xl:p-16">
        <div className="w-full h-full max-w-4xl rounded-soft overflow-hidden relative group">
            {hasBeforeImage ? (
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.image}
                beforeLabel={portfolio.beforeLabel}
                afterLabel={portfolio.afterLabel}
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
        </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const [activeId, setActiveId] = useState(portfolio.projects[0].id);
  const activeProject = portfolio.projects.find(p => p.id === activeId) || portfolio.projects[0];

  return (
    <section id="portfolio" className="bg-page bg-dots-dark relative">
      
      {/* Unified Layout */}
      <div className="flex flex-col xl:flex-row w-full relative">
        
        {/* Left/Top: Sticky Content */}
        {/* On mobile/tablet: sticky below nav, bg-page to cover scrolling images */}
        {/* Added portfolio-blur-fallback for Safari mobile performance */}
        <div className="w-full xl:w-1/2 sticky top-[70px] xl:top-0 z-20 bg-page/95 bg-dots-dark backdrop-blur-sm portfolio-blur-fallback xl:bg-page xl:h-screen flex flex-col px-5 md:px-8 xl:px-24 py-3 md:py-4 xl:py-0 border-b xl:border-b-0 border-stone-100/50">
            
            {/* Section Title - Hidden on mobile/tablet, shown on desktop */}
            <div className="hidden xl:block mt-32 mb-32">
                <span className="font-sans text-sm tracking-widest uppercase text-brand-green mb-4 block">{portfolio.sectionLabel}</span>
                <h2 className="font-serif text-6xl text-primary leading-tight">
                  {portfolio.sectionTitle.split(' ').slice(0, 1).join(' ')} <br/>
                  {portfolio.sectionTitle.split(' ').slice(1).join(' ')}
                </h2>
            </div>
            
            {/* Dynamic Project Info */}
            <div className="flex-1 flex flex-col justify-start xl:pb-0">
                <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Mobile/Tablet: Compact layout */}
                    <div className="xl:hidden">
                        <div className="flex items-center justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                            <div className="flex items-center gap-2 md:gap-3">
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-stone-200 text-[10px] md:text-xs font-bold uppercase tracking-wider text-stone-500">
                                    {activeProject.category}
                                </span>
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-stone-200 text-[10px] md:text-xs font-bold uppercase tracking-wider text-stone-500">
                                    {activeProject.location}
                                </span>
                            </div>
                            <span className="font-mono text-xs md:text-sm text-stone-400">
                                0{activeProject.id}/0{portfolio.projects.length}
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-serif text-primary leading-tight">
                            {activeProject.title}
                        </h3>
                    </div>
                    
                    {/* Desktop: Full layout */}
                    <div className="hidden xl:block">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 rounded-full border border-stone-200 text-xs font-bold uppercase tracking-wider text-stone-500">
                                {activeProject.category}
                            </span>
                            <span className="px-3 py-1 rounded-full border border-stone-200 text-xs font-bold uppercase tracking-wider text-stone-500">
                                {activeProject.location}
                            </span>
                        </div>
                        <h3 className="text-5xl font-serif text-primary mb-6">
                            {activeProject.title}
                        </h3>
                        <p className="text-xl text-stone-600 font-light leading-relaxed max-w-md mb-8 pb-0">
                            {activeProject.description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Right/Bottom: Scrollable Images */}
        <div className="w-full xl:w-1/2">
             {/* Spacer */}
            <div className="h-[10vh] xl:h-[20vh]" />
            
            {portfolio.projects.map(project => (
                <ProjectImage key={project.id} project={project} setInView={setActiveId} />
            ))}
            
            <div className="h-[5vh]" />
        </div>

      </div>
    </section>
  );
};
