import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "framer-motion";

export interface PerspectiveCardProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport"> {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt angle in degrees. Kept restrained (1.5° - 3°) to preserve brutalist geometry */
  maxTilt?: number;
  /** Whether interactive hover tilt is enabled */
  interactive?: boolean;
  /** Reveal delay */
  delay?: number;
  /** Initial subtle vertical reveal distance (8px - 14px) */
  revealDistance?: number;
  /** Bidirectional scroll */
  once?: boolean;
}

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const REVERSE_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const PerspectiveCard: React.FC<PerspectiveCardProps> = ({
  children,
  className = "",
  maxTilt = 2.5,
  interactive = true,
  delay = 0,
  revealDistance = 10,
  once = false,
  style,
  ...rest
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates normalized from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Restrained springs for smooth 3D tilt reaction without shaking
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    },
    [interactive, mouseX, mouseY]
  );

  const handleMouseEnter = () => {
    if (interactive) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const clampedDistance = Math.min(14, Math.max(8, revealDistance));

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        y: clampedDistance,
        rotateX: 2.5,
        scale: 0.985,
        transformPerspective: 1200,
        transition: {
          duration: 0.45,
          ease: REVERSE_EASE,
        },
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        transformPerspective: 1200,
        transition: {
          duration: 0.7,
          delay,
          ease: EDITORIAL_EASE,
        },
      }}
      viewport={{ once, amount: 0.15, margin: "-20px 0px -20px 0px" }}
      className={`perspective-container ${className}`}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
        ...style,
      }}
      {...rest}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          rotateX: interactive && isHovered ? rotateX : 0,
          rotateY: interactive && isHovered ? rotateY : 0,
          transition: isHovered ? "none" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PerspectiveCard;
