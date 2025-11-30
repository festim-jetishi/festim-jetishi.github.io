import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-card bg-dots-dark py-32 rounded-t-[60px] md:rounded-t-[100px] mt-[-60px]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl text-primary mb-8">Starten wir ein Projekt.</h2>
          <p className="font-sans text-xl text-secondary font-light">
            Wir freuen uns auf Ihre Anfrage. Egal ob Renovation oder Unterhalt.
          </p>
        </div>

        <form className="max-w-2xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-secondary">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-stone-300 py-4 text-primary text-lg focus:outline-none focus:border-brand-green transition-colors" placeholder="Ihr Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-secondary">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-stone-300 py-4 text-primary text-lg focus:outline-none focus:border-brand-green transition-colors" placeholder="ihre@email.ch" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold text-secondary">Nachricht</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-stone-300 py-4 text-primary text-lg focus:outline-none focus:border-brand-green transition-colors resize-none" placeholder="Wie können wir helfen?"></textarea>
          </div>
          
          <div className="pt-8 flex justify-center">
            <button className="px-12 py-4 bg-primary text-white rounded-full text-lg hover:bg-stone-800 transition-all duration-300 hover:scale-105">
              Absenden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};