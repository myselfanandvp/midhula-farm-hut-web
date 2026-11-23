import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export interface StaggerGroupProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport"> {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className = "",
  staggerDelay = 0.06,
  delayChildren = 0.05,
  once = false,
  ...rest
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15, margin: "-20px 0px -20px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  depth?: boolean;
}

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const REVERSE_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = "",
  distance = 10,
  depth = true,
  style,
  ...rest
}) => {
  const clampedDistance = Math.min(14, Math.max(8, distance));

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: clampedDistance,
          rotateX: depth ? 2 : 0,
          scale: depth ? 0.99 : 1,
          transformPerspective: 1200,
          transition: {
            duration: 0.4,
            ease: REVERSE_EASE,
          },
        },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          transformPerspective: 1200,
          transition: {
            duration: 0.6,
            ease: EDITORIAL_EASE,
          },
        },
      }}
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

export default StaggerGroup;

