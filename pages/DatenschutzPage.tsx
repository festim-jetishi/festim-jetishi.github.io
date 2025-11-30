import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, User, Database, Target, Scale, Clock, Share2, Cookie, UserCheck, Lock, RefreshCw } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal } from '../components/ui/TextReveal';

interface SectionData {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

const sections: SectionData[] = [
  {
    id: 'allgemein',
    number: '01',
    icon: Shield,
    title: 'Allgemeine Hinweise',
    content: (
      <>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Mit dieser Datenschutzerklärung informieren wir Sie darüber, welche Personendaten wir im Zusammenhang mit unseren Tätigkeiten, einschliesslich unserer Website, bearbeiten.
        </p>
        <p>
          Diese Datenschutzerklärung richtet sich nach dem Schweizerischen Datenschutzgesetz (DSG) und, soweit anwendbar, der EU-Datenschutz-Grundverordnung (DSGVO).
        </p>
      </>
    )
  },
  {
    id: 'verantwortlicher',
    number: '02',
    icon: User,
    title: 'Verantwortlicher',
    content: (
      <>
        <p className="mb-4">Verantwortlich für die Datenbearbeitung ist:</p>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="text-white font-semibold text-lg mb-3">Röllinger GmbH</p>
          <p className="text-white/70">
            Pilatusstrasse 4<br />
            6340 Baar<br />
            Schweiz
          </p>
          <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
            <p>
              <span className="text-white/50 text-sm">E-Mail: </span>
              <a href="mailto:info@roellinger.ch" className="text-brand-green hover:text-brand-green/80 transition-colors">
                info@roellinger.ch
              </a>
            </p>
            <p>
              <span className="text-white/50 text-sm">Telefon: </span>
              <a href="tel:+41765112123" className="text-brand-green hover:text-brand-green/80 transition-colors">
                076 511 21 23
              </a>
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'erhebung',
    number: '03',
    icon: Database,
    title: 'Erhebung und Bearbeitung von Personendaten',
    content: (
      <>
        <div className="space-y-6">
          <div className="border-l-2 border-brand-green/30 pl-4">
            <h4 className="text-white font-medium mb-2">3.1 Kontaktaufnahme</h4>
            <p className="text-sm">
              Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, erheben wir die von Ihnen mitgeteilten Daten (z.B. Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt). Diese Daten verwenden wir ausschliesslich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme mit Ihnen.
            </p>
          </div>
          <div className="border-l-2 border-brand-green/30 pl-4">
            <h4 className="text-white font-medium mb-2">3.2 Nutzung unserer Website</h4>
            <p className="text-sm">
              Beim Besuch unserer Website werden automatisch technische Daten erfasst, die Ihr Browser an unseren Server übermittelt. Dies können sein: IP-Adresse, Browsertyp und -version, Betriebssystem, Referrer-URL, Datum und Uhrzeit des Zugriffs.
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'zweck',
    number: '04',
    icon: Target,
    title: 'Zweck der Datenbearbeitung',
    content: (
      <>
        <p className="mb-4">Wir bearbeiten Ihre Personendaten zu folgenden Zwecken:</p>
        <ul className="space-y-3">
          {[
            'Beantwortung von Anfragen und Kommunikation mit Ihnen',
            'Erstellung von Offerten und Abwicklung von Aufträgen',
            'Erbringung unserer Dienstleistungen im Bereich Hauswartung, Gartenpflege und Bau',
            'Gewährleistung des technischen Betriebs unserer Website',
            'Erfüllung gesetzlicher Pflichten'
          ].map((item, i) => (
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
    id: 'rechtsgrundlage',
    number: '05',
    icon: Scale,
    title: 'Rechtsgrundlage',
    content: (
      <>
        <p className="mb-4">Die Bearbeitung Ihrer Daten erfolgt auf folgenden Rechtsgrundlagen:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Einwilligung', desc: 'Wenn Sie uns Ihre Daten freiwillig mitteilen (z.B. über das Kontaktformular)' },
            { title: 'Vertragserfüllung', desc: 'Zur Durchführung vorvertraglicher Massnahmen oder Erfüllung eines Vertrags' },
            { title: 'Berechtigte Interessen', desc: 'Zur Wahrung unserer berechtigten Geschäftsinteressen' },
            { title: 'Gesetzliche Pflichten', desc: 'Zur Erfüllung rechtlicher Verpflichtungen' }
          ].map((item, i) => (
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
    id: 'speicherdauer',
    number: '06',
    icon: Clock,
    title: 'Speicherdauer',
    content: (
      <p>
        Wir speichern Ihre Personendaten nur so lange, wie es für die Erfüllung der Zwecke, für die sie erhoben wurden, erforderlich ist oder wie es gesetzliche Aufbewahrungspflichten vorsehen. Anfragen über das Kontaktformular werden nach Abschluss der Bearbeitung und nach Ablauf allfälliger Aufbewahrungsfristen gelöscht.
      </p>
    )
  },
  {
    id: 'weitergabe',
    number: '07',
    icon: Share2,
    title: 'Weitergabe von Daten',
    content: (
      <>
        <p className="mb-4">Wir geben Ihre Personendaten nur weiter, wenn:</p>
        <ul className="space-y-2 mb-6">
          {[
            'Sie ausdrücklich eingewilligt haben',
            'Es für die Vertragserfüllung erforderlich ist',
            'Eine gesetzliche Verpflichtung besteht',
            'Es zur Wahrung berechtigter Interessen erforderlich und zulässig ist'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <p className="text-sm text-white/60">
            <span className="text-white/80">Hinweis:</span> Unsere Website wird auf GitHub Pages gehostet. Dabei können technische Daten auf Servern von GitHub, Inc. (USA) verarbeitet werden.
          </p>
        </div>
      </>
    )
  },
  {
    id: 'cookies',
    number: '08',
    icon: Cookie,
    title: 'Cookies',
    content: (
      <div className="bg-gradient-to-br from-brand-green/10 to-transparent rounded-xl p-6 border border-brand-green/20">
        <p>
          Unsere Website verwendet <span className="text-white font-medium">keine Tracking-Cookies</span> oder Analyse-Tools. Es werden lediglich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.
        </p>
      </div>
    )
  },
  {
    id: 'rechte',
    number: '09',
    icon: UserCheck,
    title: 'Ihre Rechte',
    content: (
      <>
        <p className="mb-6">Sie haben folgende Rechte in Bezug auf Ihre Personendaten:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { title: 'Auskunftsrecht', desc: 'Sie können Auskunft über Ihre bei uns gespeicherten Daten verlangen' },
            { title: 'Berichtigungsrecht', desc: 'Sie können die Berichtigung unrichtiger Daten verlangen' },
            { title: 'Löschungsrecht', desc: 'Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen' },
            { title: 'Einschränkung', desc: 'Sie können unter bestimmten Umständen die Einschränkung der Datenbearbeitung verlangen' },
            { title: 'Widerspruchsrecht', desc: 'Sie können der Bearbeitung Ihrer Daten widersprechen' },
            { title: 'Datenübertragbarkeit', desc: 'Sie können die Herausgabe Ihrer Daten in einem gängigen Format verlangen' }
          ].map((item, i) => (
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
          Um diese Rechte auszuüben, wenden Sie sich bitte an:{' '}
          <a href="mailto:info@roellinger.ch" className="text-brand-green hover:underline">info@roellinger.ch</a>
        </p>
      </>
    )
  },
  {
    id: 'sicherheit',
    number: '10',
    icon: Lock,
    title: 'Datensicherheit',
    content: (
      <div className="flex items-start gap-4">
        <div className="p-3 bg-brand-green/20 rounded-xl flex-shrink-0">
          <Lock className="w-6 h-6 text-brand-green" />
        </div>
        <p>
          Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, um Ihre Personendaten vor unberechtigtem Zugriff, Verlust oder Missbrauch zu schützen. Unsere Website verwendet <span className="text-brand-green font-medium">HTTPS-Verschlüsselung</span> für eine sichere Datenübertragung.
        </p>
      </div>
    )
  },
  {
    id: 'aenderungen',
    number: '11',
    icon: RefreshCw,
    title: 'Änderungen dieser Datenschutzerklärung',
    content: (
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. Die aktuelle Version ist auf unserer Website verfügbar. Bei wesentlichen Änderungen werden wir Sie in geeigneter Weise informieren.
      </p>
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
      <span className="text-[10px] uppercase tracking-widest text-white/40 mb-3 block">Inhalt</span>
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
  const [activeSection, setActiveSection] = useState('allgemein');
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
              <span className="text-sm uppercase tracking-[0.2em] font-medium">Zurück zur Startseite</span>
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
              Rechtliches
            </motion.span>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6">
              <TextReveal delay={0.4} animateOnMount>Datenschutz</TextReveal>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-white/60 font-light max-w-2xl"
            >
              Informationen zum Schutz Ihrer persönlichen Daten gemäss DSG und DSGVO
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
              <span className="text-xs uppercase tracking-widest text-white/40">Abschnitte</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white mb-1">DSG</span>
              <span className="text-xs uppercase tracking-widest text-white/40">Konform</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white mb-1">DSGVO</span>
              <span className="text-xs uppercase tracking-widest text-white/40">Konform</span>
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
              Stand: Dezember 2025
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
};