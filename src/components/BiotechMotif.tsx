import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  opacity?: number; // 0..1
  animated?: boolean;
};

export default function BiotechMotif({
  className = "",
  opacity = 0.14,
  animated = false,
}: Props) {
  const reduce = useReducedMotion();
  const shouldAnimate = animated && !reduce;

  return (
    <motion.svg
      viewBox="0 0 220 220"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
      initial={false}
      animate={shouldAnimate ? { rotate: 360 } : { rotate: 0 }}
      transition={
        shouldAnimate
          ? { duration: 60, ease: "linear", repeat: Infinity }
          : undefined
      }
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="64" cy="80" r="8" />
        <circle cx="156" cy="140" r="8" />
        <path d="M72 80 C 105 52, 118 168, 148 140" />
        <path d="M106 92 L 120 86" />
        <path d="M112 126 L 126 132" />
      </g>
    </motion.svg>
  );
}
