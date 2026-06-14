"use client";

import { motion } from "framer-motion";

const studies = [
  {
    tag: "Australia · Healthcare",
    title: "Healthcare Transformation",
    challenge:
      "A healthcare client was running on decentralized systems — Shopify, Amazon, eBay, 3PL fulfillment, and several disconnected tools, with no single source of truth.",
    approach:
      "Despite being relatively new at the time, I facilitated multiple discovery discussions to map out how the business actually operated across these systems.",
    outcome:
      "Helped support the closure of one of the most complex opportunities of my early career.",
    takeaway: "Understanding businesses is more important than understanding products.",
  },
  {
    tag: "Italy · Amazon Vendor Central",
    title: "Amazon Vendor Central",
    challenge:
      "A client's business depended heavily on Amazon Vendor Central, and they had evaluated multiple ERP systems without success.",
    approach:
      "Rather than leading with product features, I focused on understanding the critical business workflows first — what was actually breaking, and why previous evaluations hadn't worked.",
    outcome:
      "Helped establish confidence in the proposed approach where previous attempts had stalled.",
  },
  {
    tag: "Account Management",
    title: "Winning Back Trust (AMC)",
    challenge: "A customer was dissatisfied after a poor previous support experience.",
    approach:
      "Focused on improved responsiveness and clearer expectation-setting from the outset.",
    outcome: "Successfully rebuilt trust and onboarded the customer onto an AMC engagement.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section bg-accent/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
            A Few Stories Worth Telling
          </h2>
        </motion.div>

        <div className="space-y-6">
          {studies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-accent p-8 md:p-10"
            >
              <span className="inline-block text-xs font-medium text-secondary uppercase tracking-wide mb-2">
                {s.tag}
              </span>
              <h3 className="font-display font-bold text-xl text-text mb-4">
                {s.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-grey leading-relaxed mb-4">
                <div>
                  <p className="font-medium text-text mb-1">The challenge</p>
                  <p>{s.challenge}</p>
                </div>
                <div>
                  <p className="font-medium text-text mb-1">The approach</p>
                  <p>{s.approach}</p>
                </div>
                <div>
                  <p className="font-medium text-text mb-1">The outcome</p>
                  <p>{s.outcome}</p>
                </div>
              </div>
              {s.takeaway && (
                <p className="text-primary font-display font-medium italic border-t border-accent pt-4">
                  &ldquo;{s.takeaway}&rdquo;
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
