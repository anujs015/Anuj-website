"use client";

import { motion } from "framer-motion";
import { Globe2, Building2, Brain } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 120, suffix: "%", label: "Sales Target Achievement" },
  { value: 96, prefix: "₹", suffix: "L+", label: "Initial Billings Influenced" },
  { value: 45, prefix: "₹", suffix: "L+", label: "Largest Engagement Supported" },
];

export default function ImpactDashboard() {
  return (
    <section className="section bg-accent/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
            Numbers That Tell Part of the Story
          </h2>
          <p className="text-grey max-w-xl mx-auto">
            The rest is in how these numbers were reached — through
            conversations, not just pitches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center border border-accent"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary font-display mb-2">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-sm text-grey">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 text-center border border-accent flex flex-col items-center"
          >
            <Globe2 className="text-secondary mb-2" size={28} />
            <p className="text-2xl font-bold text-text font-display mb-1">3 Regions</p>
            <p className="text-sm text-grey">USA · Europe · India</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 text-center border border-accent flex flex-col items-center"
          >
            <Building2 className="text-secondary mb-2" size={28} />
            <p className="text-2xl font-bold text-text font-display mb-1">6+ Industries</p>
            <p className="text-sm text-grey">Across diverse business models</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-primary rounded-2xl p-8 text-center flex flex-col items-center justify-center"
          >
            <Brain className="text-white mb-2" size={28} />
            <p className="text-2xl font-bold text-white font-display">Consultant Mindset</p>
          </motion.div>
        </div>

        <p className="text-xs text-grey text-center mt-8 max-w-2xl mx-auto">
          Figures reflect initial billings recorded during my tenure. Several
          engagements generated additional implementation, expansion, and
          renewal revenue beyond what is captured here.
        </p>
      </div>
    </section>
  );
}
