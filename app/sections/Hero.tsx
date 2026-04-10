"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-zarko-darker"
    >
      {/* Background */}
      <div className="hero-bg absolute inset-0 w-full h-[120%] -top-[10%]">
        <div className="absolute inset-0 bg-gradient-to-b from-zarko-darker/80 via-zarko-darker/50 to-zarko-darker z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="hero-content max-w-4xl">
          <span className="inline-block text-zarko-terra text-sm tracking-[0.4em] uppercase mb-6 font-medium">
            Kroatisch • Mediterran • Regional
          </span>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-zarko-cream mb-6 leading-none">
            Zum Zarko
          </h1>

          <p className="text-xl md:text-2xl text-zarko-clay font-light mb-4 italic">
            Wo das Schwarzwald-Herz auf Kroatien trifft
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-zarko-cream/80">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-zarko-terra" />
              <span>Hauptstraße 45, 77933 Lahr</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-zarko-terra" />
              <span>+49 7821 12345</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-zarko-terra" />
              <span>Di-So: 11:30-14:30 & 17:30-22:00</span>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-zarko-terra text-white hover:bg-zarko-terra/90 transition-all duration-300 tracking-widest text-sm uppercase font-medium">
              Tisch Reservieren
            </button>
            <button className="px-8 py-4 border border-zarko-cream/30 text-zarko-cream hover:border-zarko-terra hover:text-zarko-terra transition-all duration-300 tracking-widest text-sm uppercase">
              Speisekarte
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-zarko-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-zarko-terra rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
