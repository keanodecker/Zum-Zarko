"use client";

import ScrollReveal from "../components/ScrollReveal";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zarko-darker border-t border-zarko-cream/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <ScrollReveal>
            <h3 className="font-serif text-2xl text-zarko-cream mb-4">
              Zum <span className="text-zarko-terra">Zarko</span>
            </h3>
            <p className="text-zarko-cream/60 leading-relaxed text-sm">
              Authentische kroatische Küche im Herzen des Schwarzwalds.
              Tradition trifft auf Herzlichkeit.
            </p>
            <p className="text-zarko-cream/50 text-sm mt-3">
              Schillerstraße 3, 77933 Lahr/Schwarzwald<br />
              <a href="tel:07821983792" className="hover:text-zarko-terra transition-colors">07821 983792</a>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h4 className="text-zarko-cream font-medium mb-4">Öffnungszeiten</h4>
            <ul className="space-y-1 text-sm text-zarko-cream/60">
              <li>Mo: 11:00–14:00 & 17:00–23:00</li>
              <li>Di–Do: 11:00–14:00 & 17:00–01:00</li>
              <li>Fr: 11:00–14:00 & 17:00–01:00</li>
              <li>Sa: 11:00–01:00</li>
              <li className="text-zarko-terra">So: Geschlossen</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h4 className="text-zarko-cream font-medium mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-zarko-cream/60">
              <li><a href="#about" className="hover:text-zarko-terra transition-colors">Über uns</a></li>
              <li><a href="#menu" className="hover:text-zarko-terra transition-colors">Speisekarte</a></li>
              <li><a href="#event" className="hover:text-zarko-terra transition-colors">Events & Partykeller</a></li>
              <li>
                <a
                  href="https://www.bon-bon.de/gutschein/traditionsgaststaette-greif-zum-zarko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zarko-terra transition-colors"
                >
                  Geschenkkarte
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-zarko-cream/60 hover:text-zarko-terra transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-zarko-cream/60 hover:text-zarko-terra transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-zarko-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zarko-cream/40">
          <p>© 2025 Zum Zarko. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zarko-terra transition-colors">Impressum</a>
            <a href="#" className="hover:text-zarko-terra transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
