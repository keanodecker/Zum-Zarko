"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const categories = [
  {
    name: "Vorspeisen",
    items: [
      { name: "Dalamatinska Pršut", desc: "Dalmatinischer Schinken mit Käse", price: "14,50€" },
      { name: "Ajvar", desc: "Paprikacreme mit frischem Brot", price: "8,90€" },
      { name: "Kroatischer Salat", desc: "Tomaten, Gurken, Zwiebeln, Olivenöl", price: "9,50€" },
    ]
  },
  {
    name: "Hauptgerichte",
    items: [
      { name: "Ćevapčići 'Modric'", desc: "10 handgerollte Fleischröllchen mit Zwiebeln", price: "18,90€" },
      { name: "Pljeskavica", desc: "Gegrilltes Hackfleisch mit Kajmak", price: "19,50€" },
      { name: "Schwarzwald-Schnitzel", desc: "Paniert mit Bratkartoffeln", price: "21,00€" },
      { name: "Fischplatte", desc: "Gegrillter Lachs & Dorade", price: "26,50€" },
    ]
  },
  {
    name: "Spezialitäten",
    items: [
      { name: "Peka", desc: "Schmortopf mit Lamm & Gemüse (Vorbestellung)", price: "34,00€" },
      { name: "Mixed Grill", desc: "Für 2 Personen - alle Highlights", price: "49,90€" },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-32 bg-zarko-darker relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zarko-terra/5 -skew-x-12" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-zarko-terra text-sm tracking-[0.3em] uppercase mb-4 block">
              Speisekarte
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-zarko-cream">
              Geschmack ohne Kompromisse
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <ScrollReveal key={category.name} delay={catIndex * 0.1}>
              <div>
                <h3 className="font-serif text-2xl text-zarko-terra mb-8 pb-4 border-b border-zarko-terra/30">
                  {category.name}
                </h3>
                <div className="grid gap-6">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex justify-between items-start py-4 border-b border-zarko-cream/10 hover:border-zarko-terra/50 transition-colors"
                    >
                      <div>
                        <h4 className="text-zarko-cream text-lg font-medium group-hover:text-zarko-terra transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-zarko-cream/60 text-sm mt-1">{item.desc}</p>
                      </div>
                      <span className="text-zarko-clay font-medium text-lg">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-zarko-cream/60 text-sm italic mb-6">
              Alle Gerichte auch zum Mitnehmen • Täglich wechselnde Mittagstisch-Angebote
            </p>
            <button className="px-8 py-3 border border-zarko-terra text-zarko-terra hover:bg-zarko-terra hover:text-white transition-all duration-300">
              Vollständige Speisekarte (PDF)
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
