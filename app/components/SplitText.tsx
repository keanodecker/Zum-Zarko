"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
}

export default function SplitText({ children, className }: SplitTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = children.split(" ");

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} className="split-line">
          <motion.span
            className="split-line-inner inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.05,
                },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
