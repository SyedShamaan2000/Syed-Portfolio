import { ReactNode } from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  key?: string | number;
}

export default function ScrollReveal({ children, delay = 0, direction = "up" }: ScrollRevealProps) {
  const directions = {
    up: { y: 25 },
    down: { y: -25 },
    left: { x: 25 },
    right: { x: -25 },
    none: {}
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1] // Elegant ease out Bezier curve
      }}
    >
      {children}
    </motion.div>
  );
}
