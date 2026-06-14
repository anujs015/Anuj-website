"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const emiproPoints = [
  "Worked across Odoo, Shopify, WooCommerce, and marketplace connectors including Amazon, eBay, and Walmart",
  "Supported both product-led and services-led engagements, with typical project kick-offs between ₹3–5L and average project sizes of ₹15–20L",
  "Sold 4 connectors to a single client and 3 connectors to multiple clients, with custom scratch development on a Rithum connector representing one of the largest opportunities supported",
  "Reduced dependency on functional teams by independently handling commercial and foundational functional discussions",
  "Introduced functional demonstrations during presales — a practice later adopted more broadly across the team",
  "Prepared SLA frameworks that improved expectation-setting with customers",
  "Worked closely with clients and partners across the USA, Europe, and India",
];

const emiproResults = [
  "Achieved 120% of assigned sales targets",
  "Influenced opportunities resulting in initial billings exceeding ₹96 lakh — with the largest single engagement exceeding ₹45 lakh and continuing to grow beyond my tenure",
];

const cygnetPoints = [
  "GST compliance frameworks and enterprise use cases",
  "GST litigation management — notice types, appeal hierarchies, and the lifecycle of disputes, including the shift from Sections 73/74 to the newly introduced Section 74A from FY 2024-25",
  "Customer solutioning for enterprise tax technology buyers — CFOs, Tax Managers, and SAP/ERP consultants",
  "Enterprise presales for compliance and litigation management products",
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-accent/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
            Experience
          </h2>
        </motion.div>

        {/* Cygnet - current */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border border-accent p-8 md:p-10 mb-8"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <h3 className="font-display font-bold text-xl text-text">
              Presales Executive — Cygnet
            </h3>
            <span className="text-sm text-grey">May 2026 – Present</span>
          </div>
          <p className="text-grey text-sm mb-5">
            I&apos;m currently building expertise in GST compliance and tax
            technology — an area where the same consultative instincts apply,
            but to a more specialized and regulation-heavy domain.
          </p>
          <p className="text-sm font-medium text-text mb-3">
            What I&apos;m building expertise in:
          </p>
          <ul className="space-y-2">
            {cygnetPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-grey leading-relaxed">
                <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Emipro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-accent p-8 md:p-10"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <h3 className="font-display font-bold text-xl text-text">
              Business Development Executive — ERP Presales, Emipro Technologies
            </h3>
            <span className="text-sm text-grey">Oct 2024 – Apr 2026</span>
          </div>
          <p className="text-grey text-sm mb-5">
            Joined Emipro(It was my on campus placment) through a three month training program and transitioned into a full time ERP Presales role. This wasn&apos;t a typical sales role. It was where I learned that
            the best presales conversations don&apos;t start with a demo —
            they start with a question about how the customer&apos;s business
            runs today.
          </p>

          <p className="text-sm font-medium text-text mb-3">What I worked on:</p>
          <ul className="space-y-2 mb-6">
            {emiproPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-grey leading-relaxed">
                <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm font-medium text-text mb-3">Results:</p>
          <ul className="space-y-2">
            {emiproResults.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-grey leading-relaxed">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
