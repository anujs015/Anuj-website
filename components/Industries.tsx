"use client";

import { motion } from "framer-motion";

const industries = [
  "Healthcare",
  "E-commerce",
  "Manufacturing",
  "Retail",
  "Wholesale",
  "Amazon Vendor Central Businesses",
  "Marketplace-Driven Organizations",
];

export default function Industries() {
  return (
    <section className="section">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
            Industries I&apos;ve Worked Across
          </h2>
          <p className="text-grey max-w-xl mx-auto mb-10">
            Different industries, different workflows — but the same
            underlying skill: learning how a business actually runs, quickly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full bg-accent text-primary text-sm font-medium px-5 py-2.5"
            >
              {industry}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-grey max-w-xl mx-auto"
        >
          Each industry came with its own language, priorities, and
          constraints. Learning to adapt quickly across all of them is,
          itself, a skill.
        </motion.p>
      </div>
    </section>
  );
}
