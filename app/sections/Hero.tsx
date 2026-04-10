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
        <img
          src="/images/aussen.png"
          alt="Zum Zarko – Außenansicht"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
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
              <span>Schillerstraße 3, 77933 Lahr</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-zarko-terra" />
              <a href="tel:07821983792" className="hover:text-zarko-terra transition-colors">07821 983792</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-zarko-terra" />
              <span>Mo–Fr: 11:00–14:00 & ab 17:00</span>
            </div>
          </div>

          {/* Google Rating */}
          <div className="mt-6">
            <a
              href="https://www.google.com/maps/place/Zum+Zarko/@48.3409658,7.8694855,18z/data=!4m15!1m8!3m7!1s0x47912e46405fa751:0xfa21ff2608363c56!2sZum+Zarko!8m2!3d48.3409658!4d7.8707756!10e2!16s%2Fg%2F1td52b_v!3m5!1s0x47912e46405fa751:0xfa21ff2608363c56!8m2!3d48.3409658!4d7.8707756!16s%2Fg%2F1td52b_v?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zarko-cream/80 hover:text-zarko-terra transition-colors"
            >
              <span className="text-zarko-terra">★★★★</span><span className="text-zarko-cream/40">★</span>
              <span className="font-medium">4,4</span>
              <span className="text-zarko-cream/50">(656 Bewertungen)</span>
              <span className="text-xs tracking-widest text-zarko-terra">→ Google Maps</span>
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#reservieren"
              className="px-8 py-4 bg-zarko-terra text-white hover:bg-zarko-terra/90 transition-all duration-300 tracking-widest text-sm uppercase font-medium"
            >
              Tisch Reservieren
            </a>
            <a
              href="#menu"
              className="px-8 py-4 border border-zarko-cream/30 text-zarko-cream hover:border-zarko-terra hover:text-zarko-terra transition-all duration-300 tracking-widest text-sm uppercase"
            >
              Speisekarte
            </a>
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
