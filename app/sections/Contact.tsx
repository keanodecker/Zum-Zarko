"use client";

import ScrollReveal from "../components/ScrollReveal";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-zarko-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <div>
              <span className="text-zarko-terra text-sm tracking-[0.3em] uppercase mb-4 block">
                Kontakt
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-zarko-cream mb-8">
                Besuchen Sie uns
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-zarko-terra mt-1" size={24} />
                  <div>
                    <h4 className="text-zarko-cream font-medium mb-1">Adresse</h4>
                    <p className="text-zarko-cream/70">Schillerstraße 3<br/>77933 Lahr/Schwarzwald</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-zarko-terra mt-1" size={24} />
                  <div>
                    <h4 className="text-zarko-cream font-medium mb-1">Telefon</h4>
                    <a href="tel:07821983792" className="text-zarko-cream/70 hover:text-zarko-terra transition-colors">07821 983792</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-zarko-terra mt-1" size={24} />
                  <div>
                    <h4 className="text-zarko-cream font-medium mb-1">E-Mail</h4>
                    <p className="text-zarko-cream/70">info@zumzarko.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-zarko-terra mt-1" size={24} />
                  <div>
                    <h4 className="text-zarko-cream font-medium mb-1">Öffnungszeiten</h4>
                    <div className="text-zarko-cream/70 space-y-1">
                      <p>Mo: 11:00–14:00 & 17:00–23:00</p>
                      <p>Di–Do: 11:00–14:00 & 17:00–01:00</p>
                      <p>Fr: 11:00–14:00 & 17:00–01:00</p>
                      <p>Sa: 11:00–01:00</p>
                      <p className="text-zarko-terra mt-2">So: Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-zarko-gray p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-zarko-cream mb-6">Tisch reservieren</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-zarko-dark border border-zarko-cream/20 p-4 text-zarko-cream placeholder-zarko-cream/40 focus:border-zarko-terra focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    className="w-full bg-zarko-dark border border-zarko-cream/20 p-4 text-zarko-cream placeholder-zarko-cream/40 focus:border-zarko-terra focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="w-full bg-zarko-dark border border-zarko-cream/20 p-4 text-zarko-cream focus:border-zarko-terra focus:outline-none transition-colors"
                  />
                  <select className="w-full bg-zarko-dark border border-zarko-cream/20 p-4 text-zarko-cream focus:border-zarko-terra focus:outline-none transition-colors">
                    <option>2 Personen</option>
                    <option>3 Personen</option>
                    <option>4 Personen</option>
                    <option>5-8 Personen</option>
                    <option>8+ Personen</option>
                  </select>
                </div>
                <textarea
                  rows={4}
                  placeholder="Besondere Wünsche..."
                  className="w-full bg-zarko-dark border border-zarko-cream/20 p-4 text-zarko-cream placeholder-zarko-cream/40 focus:border-zarko-terra focus:outline-none transition-colors resize-none"
                />
                <button className="w-full py-4 bg-zarko-terra text-white hover:bg-zarko-terra/90 transition-colors font-medium tracking-wider uppercase">
                  Reservierung anfragen
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
