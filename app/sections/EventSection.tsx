"use client";

import ScrollReveal from "../components/ScrollReveal";

export default function EventSection() {
  return (
    <section id="event" className="py-32 bg-zarko-darker overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="block text-zarko-terra text-sm tracking-[0.3em] uppercase mb-4">
              Feiern im Greif Zum Zarko
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-zarko-cream leading-none">
              Events &<br />
              <span className="italic text-zarko-clay">Partykeller</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-zarko-darker/40 to-transparent z-10" />
              <img
                src="/images/partykeller.jpg"
                alt="Partykeller – Zum Zarko"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-8">
              <p className="text-zarko-cream/70 leading-relaxed">
                Ob Geburtstag, Firmenfeier, Hochzeit oder Vereinsabend –
                unser Partykeller bietet den perfekten Rahmen für unvergessliche
                Abende. Wir kümmern uns um alles: vom Buffet bis zur Dekoration.
              </p>

              <div className="space-y-4">
                {[
                  "Bis zu XX Personen",
                  "Exklusiv mietbar",
                  "Catering & Buffet auf Anfrage",
                  "Eigene Bar & Bestuhlung inklusive",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-zarko-cream/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-zarko-terra flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="border-t border-zarko-cream/10 pt-8 space-y-4">
                <p className="text-zarko-cream/50 text-sm">
                  Anfragen & Details telefonisch oder per E-Mail
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:07821983792"
                    className="px-6 py-3 bg-zarko-terra text-white text-sm tracking-widest uppercase text-center hover:bg-zarko-terra/90 transition-colors">
                    07821 983792
                  </a>
                  <a href="#reservieren"
                    className="px-6 py-3 border border-zarko-cream/30 text-zarko-cream text-sm tracking-widest uppercase text-center hover:border-zarko-terra hover:text-zarko-terra transition-colors">
                    Anfrage senden
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
