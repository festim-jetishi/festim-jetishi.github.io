import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white/60 py-20 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h3 className="font-serif text-3xl text-white mb-6">Röllinger GmbH</h3>
            <div className="max-w-xs font-light">
              <p className="text-white/90 text-lg italic mb-2 font-serif">Für alles, was Ihr Zuhause braucht.</p>
              <p className="text-white/60 text-sm">
                Ihr Partner für Immobilien, Garten und Unterhalt in der Zentralschweiz.
              </p>
            </div>
          </div>
          
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-4">
              <span className="text-brand-green font-bold uppercase tracking-widest text-xs">Kontakt</span>
              <a href="#" className="hover:text-brand-green transition-colors">Pilatusstrasse 4, 6340 Baar</a>
              <a href="mailto:info@roellinger.ch" className="hover:text-brand-green transition-colors">info@roellinger.ch</a>
              <a href="tel:+41765112123" className="hover:text-brand-green transition-colors">076 511 21 23</a>
            </div>
            <div className="flex flex-col gap-4">
               <span className="text-brand-green font-bold uppercase tracking-widest text-xs">Rechtliches</span>
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-xs flex justify-between">
          <span>&copy; {new Date().getFullYear()} Röllinger GmbH</span>
          <span>Designed with Organic Modernity</span>
        </div>
      </div>
    </footer>
  );
};
