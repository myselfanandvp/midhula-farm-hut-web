import React from "react";
import { motion, type HTMLMotionProps, type TargetAndTransition } from "framer-motion";

export interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport"> {
  children: React.ReactNode;
  className?: string;
  /** Direction from which the element subtly enters. Defaults to "up" */
  direction?: "up" | "down" | "none";
  /** Subtle vertical translation distance (defaults to 10px, constrained between 8px and 14px) */
  distance?: number;
  /** Delay in seconds before animation triggers */
  delay?: number;
  /** Duration of reveal in seconds (editorial pacing: 0.65s) */
  duration?: number;
  /** Enable subtle 3D perspective and depth settling (rotateX & scale) */
  depth?: boolean;
  /** Whether the animation should only play once on initial scroll-down. Default is true */
  once?: boolean;
  /** Viewport amount required to trigger (0.0 to 1.0) */
  amount?: number | "some" | "all";
  /** Root margin for triggering */
  margin?: string;
  /** Optional custom initial state override */
  customInitial?: TargetAndTransition;
  /** Optional custom visible state override */
  customVisible?: TargetAndTransition;
}

/**
 * Editorial bezier curve: crisp initial velocity that settles into a smooth,
 * weighted stop matching high-end brutalist publication design.
 */
const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  direction = "up",
  distance = 10,
  delay = 0,
  duration = 0.65,
  depth = true,
  once = true,
  amount = 0.15,
  margin = "-20px 0px -20px 0px",
  customInitial,
  customVisible,
  style,
  ...rest
}) => {
  // Constrain distance within subtle 8px-14px bounds as requested
  const clampedDistance = Math.min(14, Math.max(8, distance));

  const yOffset =
    direction === "up" ? clampedDistance : direction === "down" ? -clampedDistance : 0;

  const initialValues: TargetAndTransition = customInitial ?? {
    opacity: 0,
    y: yOffset,
    rotateX: depth ? 2.5 : 0,
    scale: depth ? 0.985 : 1,
    transformPerspective: 1200,
  };

  const visibleValues: TargetAndTransition = customVisible ?? {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transformPerspective: 1200,
    transition: {
      duration,
      delay,
      ease: EDITORIAL_EASE,
    },
  };

  return (
    <motion.div
      initial={initialValues}
      whileInView={visibleValues}
      viewport={{ once, amount, margin }}
      className={className}
      style={{
        transformStyle: depth ? "preserve-3d" : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
