"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "White Sturgeon",
    origin: "USA",
    price: "Starts at $135.00",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop",
    dish: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Siberian Sturgeon",
    origin: "POL",
    price: "Starts at $130.00",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    dish: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ossetra",
    origin: "BGR",
    price: "Starts at $145.00",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=800&auto=format&fit=crop",
    dish: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ShopSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll
      const cards = gsap.utils.toArray<HTMLElement>(".product-card");

      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: "+=3000",
          snap: 1 / (cards.length - 1),
        },
      });

      // Sticky text animation
      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-[#f5f0e8] overflow-hidden">
      {/* Sticky Title */}
      <div
        ref={textRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
      >
        <h2 className="font-serif text-[15vw] text-[#0a0a0a] opacity-10 whitespace-nowrap">
          SHOP CAVIAR
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="horizontal-scroll-container h-full items-center pl-[20vw]"
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-card flex-shrink-0 w-[80vw] h-[70vh] flex items-center justify-center gap-8 px-8"
          >
            {/* Product Can */}
            <div className="relative w-1/3 aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <span className="text-xs tracking-widest text-[#0a0a0a]/60 border border-[#0a0a0a]/20 px-3 py-1 rounded-full">
                  {product.origin}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="w-1/3 text-center space-y-4">
              <h3 className="font-serif text-4xl text-[#0a0a0a]">{product.name}</h3>
              <p className="text-sm text-[#0a0a0a]/60 tracking-widest">{product.price}</p>
              <button className="text-xs tracking-widest border-b border-[#0a0a0a] pb-1 hover:text-[#c9a962] hover:border-[#c9a962] transition-colors">
                Click to shop
              </button>
            </div>

            {/* Dish Image */}
            <div className="w-1/3 aspect-square">
              <img
                src={product.dish}
                alt={`${product.name} dish`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
