"use client";

import { motion } from "framer-motion";

const cases = [
  {
    title: "Fixed-Cost Implementation Model",
    pain: "A client had a poor implementation experience with another vendor and was hesitant about open-ended engagements.",
    contribution: "I helped define scope upfront and proposed a fixed-cost implementation approach.",
    outcome: "A more customer-centric engagement model that addressed the client's core concern directly.",
  },
  {
    title: "Bundle-Based Commercial Offering",
    pain: "Customers purchasing multiple connectors had limited pricing flexibility.",
    contribution: "Contributed ideas that led to bundled offerings and implementation incentives.",
    outcome: "Improved value perception and a simpler purchasing decision for customers.",
  },
];

export default function VoiceOfCustomer() {
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
            When Customer Feedback Shapes the Offering
          </h2>
          <p className="text-grey">
            Some of the most useful contributions I&apos;ve made didn&apos;t
            come from selling — they came from listening.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-accent p-8"
            >
              <h3 className="font-display font-bold text-lg text-text mb-4">
                {c.title}
              </h3>
              <div className="space-y-3 text-sm text-grey leading-relaxed">
                <p>
                  <span className="font-medium text-text">The pain point: </span>
                  {c.pain}
                </p>
                <p>
                  <span className="font-medium text-text">The contribution: </span>
                  {c.contribution}
                </p>
                <p>
                  <span className="font-medium text-text">The outcome: </span>
                  {c.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
