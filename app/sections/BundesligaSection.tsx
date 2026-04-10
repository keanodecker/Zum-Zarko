"use client";

import ScrollReveal from "../components/ScrollReveal";

const highlights = [
  {
    provider: "SKY",
    color: "#005FFF",
    items: [
      "Freitagabendspiele um 20:30 Uhr",
      "Topspiel am Samstag um 18:30 Uhr",
      "Alle Einzelspiele & Highlights der 1. und 2. Bundesliga",
      "Beste Fußballatmosphäre – wie im Stadion!",
    ],
  },
  {
    provider: "DAZN",
    color: "#F8FF00",
    items: [
      "Konferenz samstags ab 15:30 Uhr",
      "Alle Spiele – alle Tore – live & geballt!",
      "Die beliebte Bundesliga-Konferenz direkt bei uns",
      "Emotion pur",
    ],
  },
];

export default function BundesligaSection() {
  return (
    <section className="py-32 bg-zarko-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="block text-zarko-terra text-sm tracking-[0.3em] uppercase mb-4">
              Live-Sport im Greif Zum Zarko
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-zarko-cream leading-none">
              Bundesliga<br />
              <span className="italic text-zarko-clay">live bei uns</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-10">
              <p className="text-zarko-cream/70 leading-relaxed max-w-md">
                Traditionsgaststätte Greif Zum Zarko ist wieder am Ball –
                und zeigt dir die Bundesliga-Saison 2025/26 live in HD!
              </p>

              {highlights.map(({ provider, color, items }) => (
                <div key={provider}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold tracking-widest px-2 py-1"
                      style={{ backgroundColor: color, color: provider === "DAZN" ? "#000" : "#fff" }}
                    >
                      {provider}
                    </span>
                    <span className="text-zarko-cream/50 text-xs tracking-widest">
                      {provider === "SKY" ? "Bundesliga" : "Konferenz"}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zarko-cream/70">
                        <span className="w-1 h-1 rounded-full bg-zarko-terra mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="border-t border-zarko-cream/10 pt-8 space-y-3">
                <div className="flex items-center gap-3 text-zarko-cream/80 text-sm">
                  <span className="text-zarko-terra">✓</span>
                  Frisch gezapftes Bier &amp; herzhafte Küche
                </div>
                <p className="text-zarko-terra text-sm font-medium">
                  Sonntag ist Ruhetag – komm Freitag &amp; Samstag und erleb die Bundesliga bei uns!
                </p>
                <p className="text-zarko-cream/40 text-xs italic">
                  Greif Zum Zarko – Dein Platz fürs Spiel.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-zarko-dark/60 to-transparent z-10" />
              <img
                src="/images/partykeller.jpg"
                alt="Bundesliga Live – Greif Zum Zarko"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20 space-y-1">
                <p className="text-zarko-cream text-xs tracking-widest uppercase">Saison 2025/26</p>
                <p className="font-serif text-2xl text-zarko-cream">Live in HD</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
