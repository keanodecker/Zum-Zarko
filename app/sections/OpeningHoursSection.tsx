"use client";

import ScrollReveal from "../components/ScrollReveal";

const hours = [
  { day: "Montag",     times: ["11:00–14:00", "17:00–23:00"] },
  { day: "Dienstag",   times: ["11:00–14:00", "17:00–01:00"] },
  { day: "Mittwoch",   times: ["11:00–14:00", "17:00–01:00"] },
  { day: "Donnerstag", times: ["11:00–14:00", "17:00–01:00"] },
  { day: "Freitag",    times: ["11:00–14:00", "17:00–01:00"] },
  { day: "Samstag",    times: ["11:00–01:00"] },
  { day: "Sonntag",    times: null },
];

export default function OpeningHoursSection() {
  return (
    <section id="oeffnungszeiten" className="py-32 bg-zarko-dark">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="block text-zarko-terra text-sm tracking-[0.3em] uppercase mb-4">
              Wann wir für Sie da sind
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-zarko-cream leading-none">
              Öffnungszeiten
            </h2>
          </div>
        </ScrollReveal>

        <div className="divide-y divide-zarko-cream/10">
          {hours.map(({ day, times }, index) => (
            <ScrollReveal key={day} delay={index * 0.06}>
              <div className="flex justify-between items-center py-5 group">
                <span className={`font-serif text-2xl md:text-3xl transition-colors duration-300 ${
                  times === null ? "text-zarko-cream/30" : "text-zarko-cream group-hover:text-zarko-terra"
                }`}>
                  {day}
                </span>
                {times === null ? (
                  <span className="text-zarko-terra text-sm tracking-widest uppercase">Geschlossen</span>
                ) : (
                  <div className="text-right space-y-1">
                    {times.map((t) => (
                      <p key={t} className="text-zarko-cream/70 text-sm tracking-wide">{t}</p>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 pt-8 border-t border-zarko-cream/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-zarko-cream/50 text-sm">
              Küche schließt 30 Min. vor Betriebsende · Mittagstisch täglich
            </p>
            <a href="#reservieren" className="text-xs tracking-widest border-b border-zarko-terra text-zarko-terra pb-1 hover:opacity-70 transition-opacity">
              Tisch reservieren →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
