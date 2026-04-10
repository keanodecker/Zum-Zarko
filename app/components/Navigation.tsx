"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Über uns", href: "#about" },
    { name: "Speisekarte", href: "#menu" },
    { name: "Öffnungszeiten", href: "#oeffnungszeiten" },
    { name: "Reservieren", href: "#reservieren" },
    { name: "Event", href: "#event" },
    { name: "Geschenkkarte", href: "https://www.bon-bon.de/gutschein/traditionsgaststaette-greif-zum-zarko/", external: true },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-zarko-darker/95 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-serif text-zarko-cream">
            Zum <span className="text-zarko-terra">Zarko</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-zarko-cream/80 hover:text-zarko-terra transition-colors duration-300 tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:07821983792"
              className="px-6 py-2 bg-zarko-terra text-white text-sm hover:bg-zarko-terra/90 transition-colors"
            >
              07821 983792
            </a>
          </div>

          <button
            className="md:hidden text-zarko-cream"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-zarko-darker"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-serif text-zarko-cream">
                  Zum <span className="text-zarko-terra">Zarko</span>
                </span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} className="text-zarko-cream" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-serif text-zarko-cream hover:text-zarko-terra transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
