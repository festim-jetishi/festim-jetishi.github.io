import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, User, Database, Target, Scale, Clock, Share2, Cookie, UserCheck, Lock, RefreshCw } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal } from '../components/ui/TextReveal';
import { datenschutz } from '../WEBSITE_CONTENT';

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

interface SectionData {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

const sections: SectionData[] = [
  {
    id: datenschutz.section01.id,
    number: datenschutz.section01.number,
    icon: Shield,
    title: datenschutz.section01.title,
    content: (
      <>
        <p>{datenschutz.section01.paragraph1}</p>
        <p>{datenschutz.section01.paragraph2}</p>
      </>
    )
  },
  {
    id: datenschutz.section02.id,
    number: datenschutz.section02.number,
    icon: User,
    title: datenschutz.section02.title,
    content: (
      <>
        <p className="mb-4">{datenschutz.section02.intro}</p>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="text-white font-semibold text-lg mb-3">{datenschutz.companyName}</p>
          <p className="text-white/70">
            {datenschutz.companyStreet}<br />
            {datenschutz.companyCity}<br />
            {datenschutz.companyCountry}
          </p>
          <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
            <p>
              <span className="text-white/50 text-sm">{datenschutz.emailLabel} </span>
              <a href={`mailto:${datenschutz.emailAddress}`} className="text-brand-green hover:text-brand-green/80 transition-colors">
                {datenschutz.emailAddress}
              </a>
            </p>
            <p>
              <span className="text-white/50 text-sm">{datenschutz.phoneLabel} </span>
              <a href={`tel:${datenschutz.phoneLink}`} className="text-brand-green hover:text-brand-green/80 transition-colors">
                {datenschutz.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: datenschutz.section03.id,
    number: datenschutz.section03.number,
    icon: Database,
    title: datenschutz.section03.title,
    content: (
      <>
        <div className="space-y-6">
          <div className="border-l-2 border-brand-green/30 pl-4">
            <h4 className="text-white font-medium mb-2">{datenschutz.section03.sub1Title}</h4>
            <p className="text-sm">{datenschutz.section03.sub1Text}</p>
          </div>
          <div className="border-l-2 border-brand-green/30 pl-4">
            <h4 className="text-white font-medium mb-2">{datenschutz.section03.sub2Title}</h4>
            <p className="text-sm">{datenschutz.section03.sub2Text}</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: datenschutz.section04.id,
    number: datenschutz.section04.number,
    icon: Target,
    title: datenschutz.section04.title,
    content: (
      <>
        <p className="mb-4">{datenschutz.section04.intro}</p>
        <ul className="space-y-3">
          {datenschutz.section04.purposes.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    id: datenschutz.section05.id,
    number: datenschutz.section05.number,
    icon: Scale,
    title: datenschutz.section05.title,
    content: (
      <>
        <p className="mb-4">{datenschutz.section05.intro}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {datenschutz.section05.legalBases.map((item, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-brand-green font-medium text-sm mb-1">{item.title}</h4>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </>
    )
  },
  {
    id: datenschutz.section06.id,
    number: datenschutz.section06.number,
    icon: Clock,
    title: datenschutz.section06.title,
    content: (
      <p>{datenschutz.section06.text}</p>
    )
  },
  {
    id: datenschutz.section07.id,
    number: datenschutz.section07.number,
    icon: Share2,
    title: datenschutz.section07.title,
    content: (
      <>
        <p className="mb-4">{datenschutz.section07.intro}</p>
        <ul className="space-y-2 mb-6">
          {datenschutz.section07.conditions.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <p className="text-sm text-white/60">
            <span className="text-white/80">{datenschutz.section07.noteLabel}</span> {datenschutz.section07.noteText}
          </p>
        </div>
      </>
    )
  },
  {
    id: datenschutz.section08.id,
    number: datenschutz.section08.number,
    icon: Cookie,
    title: datenschutz.section08.title,
    content: (
      <div className="bg-gradient-to-br from-brand-green/10 to-transparent rounded-xl p-6 border border-brand-green/20">
        <p>
          Unsere Website verwendet <span className="text-white font-medium">{datenschutz.section08.highlightedText}</span> oder Analyse-Tools. Es werden lediglich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.
        </p>
      </div>
    )
  },
  {
    id: datenschutz.section09.id,
    number: datenschutz.section09.number,
    icon: UserCheck,
    title: datenschutz.section09.title,
    content: (
      <>
        <p className="mb-6">{datenschutz.section09.intro}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {datenschutz.section09.rights.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
              <span className="text-brand-green font-bold text-xs mt-0.5">✓</span>
              <div>
                <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-white/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm">
          {datenschutz.section09.contactText}{' '}
          <a href={`mailto:${datenschutz.emailAddress}`} className="text-brand-green hover:underline">{datenschutz.emailAddress}</a>
        </p>
      </>
    )
  },
  {
    id: datenschutz.section10.id,
    number: datenschutz.section10.number,
    icon: Lock,
    title: datenschutz.section10.title,
    content: (
      <div className="flex items-start gap-4">
        <div className="p-3 bg-brand-green/20 rounded-xl flex-shrink-0">
          <Lock className="w-6 h-6 text-brand-green" />
        </div>
        <p>
          Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, um Ihre Personendaten vor unberechtigtem Zugriff, Verlust oder Missbrauch zu schützen. Unsere Website verwendet <span className="text-brand-green font-medium">{datenschutz.section10.highlightedText}</span> für eine sichere Datenübertragung.
        </p>
      </div>
    )
  },
  {
    id: datenschutz.section11.id,
    number: datenschutz.section11.number,
    icon: RefreshCw,
    title: datenschutz.section11.title,
    content: (
      <p>{datenschutz.section11.text}</p>
    )
  }
];

const TableOfContents: React.FC<{ activeSection: string }> = ({ activeSection }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40"
  >
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
      <span className="text-[10px] uppercase tracking-widest text-white/40 mb-3 block">{datenschutz.tableOfContentsLabel}</span>
      <div className="space-y-1">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all duration-300 select-none ${
              activeSection === section.id
                ? 'bg-brand-green/20 text-brand-green'
                : 'text-white/40'
            }`}
          >
            <span className="font-mono">{section.number}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const DatenschutzPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState(datenschutz.section01.id);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));
      
      for (const { id, element } of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-stone-900 overflow-hidden">
      {/* Table of Contents - Fixed Sidebar */}
      <TableOfContents activeSection={activeSection} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {/* Background with parallax */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
          <div className="absolute inset-0 bg-dots-light opacity-30" />
          
          {/* Abstract gradient blobs */}
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
        </motion.div>
        
        {/* Hero Content */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 md:px-12 pb-16 pt-32"
        >
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-white/60 hover:text-brand-green transition-colors mb-12 group"
            >
              <span className="p-2 rounded-full border border-white/20 group-hover:border-brand-green/50 transition-colors">
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              </span>
              <span className="text-sm uppercase tracking-[0.2em] font-medium">{datenschutz.backLinkText}</span>
            </Link>
          </motion.div>

          {/* Title */}
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block text-brand-green text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
            >
              <span className="w-12 h-[1px] bg-brand-green"></span>
              {datenschutz.sectionLabel}
            </motion.span>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6">
              <TextReveal delay={0.4} animateOnMount>{datenschutz.pageTitle}</TextReveal>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-white/60 font-light max-w-2xl"
            >
              {datenschutz.pageSubtitle}
            </motion.p>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-8 mt-12 pt-8 border-t border-white/10"
          >
            <div>
              <span className="block text-3xl font-serif text-white mb-1">{sections.length}</span>
              <span className="text-xs uppercase tracking-widest text-white/40">{datenschutz.sectionsStatLabel}</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white mb-1">{datenschutz.dsgLabel}</span>
              <span className="text-xs uppercase tracking-widest text-white/40">{datenschutz.dsgSubLabel}</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white mb-1">{datenschutz.dsgvoLabel}</span>
              <span className="text-xs uppercase tracking-widest text-white/40">{datenschutz.dsgvoSubLabel}</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-stone-900 bg-dots-light" />
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 xl:pl-48">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.article
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative scroll-mt-32"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/[0.07] transition-all duration-500 hover:border-brand-green/20">
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-brand-green/60 font-mono text-sm">{section.number}</span>
                      <div className="p-3 bg-brand-green/20 rounded-xl group-hover:bg-brand-green/30 transition-colors duration-300">
                        <section.icon className="w-5 h-5 text-brand-green" />
                      </div>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white pt-1">{section.title}</h2>
                  </div>
                  
                  {/* Content */}
                  <div className="text-white/70 leading-relaxed space-y-4 pl-0 md:pl-20">
                    {section.content}
                  </div>
                </div>
                
                {/* Decorative line connecting sections */}
                {index < sections.length - 1 && (
                  <div className="absolute left-[27px] md:left-[39px] top-full w-[2px] h-8 bg-gradient-to-b from-white/10 to-transparent" />
                )}
              </motion.article>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 max-w-4xl mx-auto"
          >
            <span className="inline-block px-6 py-3 rounded-full border border-white/10 text-white/40 text-sm">
              {datenschutz.lastUpdated}
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
};