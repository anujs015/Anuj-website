"use client";

import { motion } from "framer-motion";
import { Search, ArrowLeftRight, Sparkles } from "lucide-react";

const pillars = [
  {
    Icon: Search,
    title: "Understand the Business First",
    text: "Before any product conversation, I try to understand how a company actually operates — its workflows, bottlenecks, and what success looks like to the people in the room.",
  },
  {
    Icon: ArrowLeftRight,
    title: "Translate Complexity Into Clarity",
    text: "Technology conversations get complicated fast. I help bridge the gap between technical teams and business stakeholders so decisions are made with confidence, not confusion.",
  },
  {
    Icon: Sparkles,
    title: "Influence Better Outcomes",
    text: "From shaping commercial models to suggesting product bundles based on real customer pain points, I contribute ideas that outlast the deal itself.",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
            What I Actually Do
          </h2>
          <p className="text-grey">
            Strip away the job titles, and the work has always been the same
            three things:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-accent p-8 hover:border-secondary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <p.Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-text mb-2">
                {p.title}
              </h3>
              <p className="text-grey text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
