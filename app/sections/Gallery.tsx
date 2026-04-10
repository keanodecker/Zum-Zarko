"use client";

import ScrollReveal from "../components/ScrollReveal";

const images = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section className="py-32 bg-zarko-dark">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-zarko-terra text-sm tracking-[0.3em] uppercase mb-4 block">
              Impressionen
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-zarko-cream">
              Atmosphäre & Genuss
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="aspect-square overflow-hidden group cursor-pointer">
                <img
                  src={src}
                  alt={`Zum Zarko ${index + 1}`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
