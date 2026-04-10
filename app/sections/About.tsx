"use client";

import ScrollReveal from "../components/ScrollReveal";
import SplitText from "../components/SplitText";

export default function About() {
  return (
    <section id="about" className="py-32 bg-zarko-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/images/innen.png"
                  alt="Zarko Küche"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zarko-terra text-white p-6 max-w-xs">
                <p className="font-serif text-lg italic">
                  "Kochen ist keine Kunst, sondern eine Leidenschaft, die man teilen muss."
                </p>
                <p className="text-sm mt-2 opacity-90">— Zarko</p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-zarko-terra text-sm tracking-[0.3em] uppercase mb-4 block">
                Unsere Geschichte
              </span>
            </ScrollReveal>

            <SplitText className="font-serif text-4xl md:text-5xl text-zarko-cream leading-tight mb-8">
              Ein Stück Kroatien im Herzen des Schwarzwalds
            </SplitText>

            <ScrollReveal delay={0.2}>
              <p className="text-zarko-cream/80 text-lg leading-relaxed mb-6">
                Seit über 20 Jahren bringt Zarko die Aromen seiner kroatischen Heimat nach Lahr.
                Was als kleine Familien-Gaststätte begann, ist heute eine Institution für alle,
                die authentische Balkan-Küche mit regionalen Schwarzwald-Zutaten suchen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-zarko-cream/60 leading-relaxed mb-8">
                Unsere Cevapcici werden nach traditionellem Rezept handgerollt, der Ćevapčići-Teller
                ist legendär – und unsere Schnitzelvariationen bringen das Beste aus beiden Welten zusammen.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex gap-8">
                <div>
                  <span className="block text-3xl font-serif text-zarko-terra">20+</span>
                  <span className="text-sm text-zarko-cream/60">Jahre Erfahrung</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-zarko-terra">4,4</span>
                  <span className="text-sm text-zarko-cream/60">Google Bewertung</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-zarko-terra">100%</span>
                  <span className="text-sm text-zarko-cream/60">Handgemacht</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
