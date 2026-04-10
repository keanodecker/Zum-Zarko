"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const curvedImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation for "Casper's"
      const chars = titleRef.current?.querySelectorAll(".split-char");
      if (chars) {
        gsap.fromTo(
          chars,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.2,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.5,
          }
        );
      }

      // Curved image reveal (clip-path animation)
      gsap.to(curvedImageRef.current, {
        clipPath: "circle(150% at 50% 50%)",
        duration: 1.8,
        ease: "power3.inOut",
        delay: 0.3,
      });

      // Parallax on scroll
      gsap.to(curvedImageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Logo fade in
      gsap.from(".nav-item", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.1,
        delay: 1.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="split-char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6">
        <div className="flex gap-8">
          <a href="#" className="nav-item text-sm text-caviar-cream/80 hover:text-caviar-gold transition-colors">
            Shop
          </a>
          <a href="#" className="nav-item text-sm text-caviar-cream/80 hover:text-caviar-gold transition-colors">
            About
          </a>
          <a href="#" className="nav-item text-sm text-caviar-cream/80 hover:text-caviar-gold transition-colors">
            Sourcing
          </a>
        </div>
        <div className="flex gap-8">
          <a href="#" className="nav-item text-sm text-caviar-cream/80 hover:text-caviar-gold transition-colors">
            Contact
          </a>
          <a href="#" className="nav-item text-sm text-caviar-cream/80 hover:text-caviar-gold transition-colors">
            Cart
          </a>
        </div>
      </nav>

      {/* Curved Image Background */}
      <div
        ref={curvedImageRef}
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: "circle(0% at 50% 50%)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a] z-10" />
        <img
          src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2000&auto=format&fit=crop"
          alt="Caviar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1
          ref={titleRef}
          className="font-serif text-[12vw] md:text-[10vw] text-[#f5f0e8] overflow-hidden"
        >
          {splitText("Casper's")}
        </h1>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
        <p className="max-w-md text-sm text-[#f5f0e8]/80 leading-relaxed">
          Exceptional caviar, sourced with care and presented with intention — created for innovative restaurants, meaningful gatherings, and unforgettable moments.
        </p>
        <div className="flex items-center gap-2 text-[#f5f0e8]">
          <span className="text-sm tracking-widest">CAVIAR BELOW</span>
          <div className="w-12 h-[1px] bg-[#f5f0e8]" />
        </div>
      </div>
    </section>
  );
}
