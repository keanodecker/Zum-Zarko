"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image zoom out on scroll
      gsap.fromTo(
        imageRef.current,
        { scale: 1.3 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Text character animation
      const chars = textRef.current?.querySelectorAll(".split-char");
      if (chars) {
        gsap.fromTo(
          chars,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="split-char inline-block overflow-hidden">
        <span className="inline-block">{char === " " ? "\u00A0" : char}</span>
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="relative h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background Image with Zoom */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{ transform: "scale(1.3)" }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a]/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2000&auto=format&fit=crop"
          alt="Caviar ritual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-between p-8">
        {/* Main Text */}
        <div className="pt-32">
          <h2
            ref={textRef}
            className="font-serif text-[8vw] md:text-[6vw] text-[#f5f0e8] leading-none overflow-hidden"
          >
            {splitText("NOT JUST CAVIAR,")}
            <br />
            {splitText("A MODERN RITUAL.")}
          </h2>
        </div>

        {/* Newsletter */}
        <div className="flex justify-end">
          <div className="max-w-md space-y-4">
            <p className="text-sm text-[#f5f0e8]/60 tracking-widest">JOIN THE LIST</p>
            <p className="text-sm text-[#f5f0e8]/80">
              Become a member of Casper's Caviar to get exclusive content and first look at new arrivals.
            </p>
            <div className="flex border-b border-[#f5f0e8]/30 pb-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent flex-1 text-[#f5f0e8] placeholder-[#f5f0e8]/40 outline-none"
              />
              <button className="text-[#f5f0e8] hover:text-[#c9a962] transition-colors">→</button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-between items-end border-t border-[#f5f0e8]/10 pt-8">
          <div className="max-w-sm">
            <p className="text-xs text-[#f5f0e8]/60 leading-relaxed">
              Premium-grade caviar, thoughtfully sourced from pristine waters around the world and presented with intention — crafted to bring people together through exceptional flavor, texture, and shared moments.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="space-y-2">
              <p className="text-xs text-[#f5f0e8]/40 tracking-widest">INFORMATION</p>
              <ul className="space-y-1 text-sm text-[#f5f0e8]/80">
                <li><a href="#" className="hover:text-[#c9a962] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#c9a962] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#c9a962] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#c9a962] transition-colors">Caviar 101</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-[#f5f0e8]/40 tracking-widest">SHOP</p>
              <ul className="space-y-1 text-sm text-[#f5f0e8]/80">
                <li><a href="#" className="hover:text-[#c9a962] transition-colors">White Sturgeon</a></li>
                <li><a href="#" className="hover:text-[#c9a962] transition-colors">Siberian Sturgeon</a></li>
                <li><a href="#" className="hover:text-[#c9a962] transition-colors">Ossetra</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center pt-4 text-xs text-[#f5f0e8]/40">
          <span>Casper's Caviar © 2026</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#c9a962] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#c9a962] transition-colors">Credits</a>
          </div>
        </div>
      </div>
    </section>
  );
}
