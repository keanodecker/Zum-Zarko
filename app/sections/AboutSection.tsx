"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal from left
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image reveal from right with scale
      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0, scale: 1.1 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax on scroll
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#f5f0e8] flex items-center py-32"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div ref={textRef} className="space-y-8">
          <h2 className="font-serif text-6xl md:text-7xl text-[#0a0a0a] leading-none">
            WHERE TASTE
            <br />
            <span className="italic text-[#c9a962]">Meets Culture</span>
          </h2>
          <p className="text-[#0a0a0a]/70 leading-relaxed max-w-md">
            Exceptional caviar begins with purity, balance, and flavor, which is why we source globally from regions known for pristine waters and responsible practices, selecting partners who share our standards for care and quality.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm tracking-widest text-[#0a0a0a] border-b border-[#0a0a0a] pb-1 hover:text-[#c9a962] hover:border-[#c9a962] transition-colors"
          >
            SOURCING
            <span>→</span>
          </a>
        </div>

        {/* Image */}
        <div ref={imageRef} className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
              alt="Caviar presentation"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative stamp */}
          <div className="absolute -top-8 -left-8 w-32 h-32 border border-[#0a0a0a]/20 rounded-full flex items-center justify-center">
            <span className="text-xs tracking-widest text-[#0a0a0a]/40 rotate-[-15deg]">
              EST. 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
