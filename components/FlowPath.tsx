"use client";

import { motion } from "framer-motion";
import { Briefcase, Layers, Lightbulb } from "lucide-react";

const nodes = [
  { Icon: Briefcase, label: "Business" },
  { Icon: Layers, label: "Technology" },
  { Icon: Lightbulb, label: "Solutions" },
];

/**
 * Signature element: a horizontal "flow path" of connected nodes.
 * Represents the through-line of the brand: Business -> Technology -> Solutions,
 * and echoes the same visual language used in the Journey Timeline.
 */
export default function FlowPath() {
  return (
    <div className="w-full max-w-md mx-auto" aria-hidden="true">
      <svg
        viewBox="0 0 400 120"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 60 60 H 340"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="6 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        />
        {nodes.map((_, i) => {
          const cx = 60 + i * 140;
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={60}
              r={28}
              fill="#DBEAFE"
              stroke="#2563EB"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.25 }}
            />
          );
        })}
      </svg>
      <div className="grid grid-cols-3 px-2 -mt-16 relative">
        {nodes.map(({ Icon, label }, i) => (
          <motion.div
            key={label}
            className="flex flex-col items-center justify-center gap-2 w-full"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.25 }}
          >
            <Icon size={22} className="text-primary" />
            <span className="text-xs font-medium text-grey text-center leading-none">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
