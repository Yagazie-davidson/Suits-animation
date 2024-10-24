"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface AnimatedHeroTextProps {
  delay: number;
  initialY: number;
  initialX: number;
  y?: number;
  x?: number;
  className?: string;
  children?: React.ReactNode;
}
const AnimatedHeroText = ({
  delay,
  initialX,
  initialY,
  y,
  x,
  className,
  children,
}: AnimatedHeroTextProps) => {
  return (
    <div className="flex items-center">
      {children
        ?.toString()
        ?.split("")
        .map((letter, index) => (
          <AnimatePresence mode="wait" key={index}>
            <motion.div
              initial={{ y: initialY, opacity: 0, x: initialX }}
              whileInView={{
                y: y,
                opacity: 1,
                x: x,
              }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: index / 25 + delay,
              }}
              viewport={{ once: true }}
            >
              <h3 className={`${className}`}>{letter}</h3>
            </motion.div>
          </AnimatePresence>
        ))}
    </div>
  );
};

export default AnimatedHeroText;
