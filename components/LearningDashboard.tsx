"use client";

import { motion } from "framer-motion";

const skills = [
  { label: "Enterprise Presales", value: 85 },
  { label: "GST Compliance", value: 80 },
  { label: "Functional Consulting", value: 80 },
  { label: "Tax Technology", value: 70 },
  { label: "GST Litigation", value: 60 },
];

export default function LearningDashboard() {
  return (
    <section className="section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
            What I&apos;m Building Right Now
          </h2>
          <p className="text-grey">
            Transparency about where I am — and where I&apos;m headed.
          </p>
        </motion.div>

        <div className="max-w-2xl space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-text">{skill.label}</span>
                <span className="text-grey">{skill.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-accent overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-grey mt-8 max-w-2xl">
          These numbers move every few months — and I plan to keep updating
          them publicly.
        </p>
      </div>
    </section>
  );
}
