import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export interface CutoutRevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Keep vertical float subtle (around 4px-8px) to prevent layout disconnect */
  floatDistance?: number;
  once?: boolean;
}

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const REVERSE_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

/**
 * Specially designed for transparent fish cutouts and layered hero assets.
 * Avoids heavy directional slide-ins or aggressive reverse shifts that cause
 * clipping or visual jarring, anchoring the specimen with subtle depth settling.
 */
export const CutoutReveal: React.FC<CutoutRevealProps> = ({
  children,
  className = "",
  delay = 0.1,
  duration = 0.8,
  floatDistance = 6,
  once = false,
  style,
  ...rest
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0.35,
        scale: 0.985,
        y: floatDistance,
        transition: {
          duration: 0.5,
          ease: REVERSE_EASE,
        },
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: EDITORIAL_EASE,
        },
      }}
      viewport={{ once, amount: 0.15, margin: "-20px 0px -20px 0px" }}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        ...style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default CutoutReveal;

