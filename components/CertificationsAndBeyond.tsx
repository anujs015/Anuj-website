"use client";

import { motion } from "framer-motion";
import { Award, Palette, Plane, Music, Trophy } from "lucide-react";

const certifications = [
  "Odoo Shopify Connector — Functional Assessment",
  "Odoo WooCommerce Connector — Functional Assessment",
  "Advanced Digital Marketing Certification",
];

const interests = [
  { Icon: Palette, label: "Graphic Design" },
  { Icon: Plane, label: "Traveling" },
  { Icon: Music, label: "Music" },
  { Icon: Trophy, label: "Sports" },
];

export default function CertificationsAndBeyond() {
  return (
    <section className="section bg-accent/30">
      <div className="container-narrow grid md:grid-cols-2 gap-12">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
            Certifications
          </h2>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-start gap-3 bg-white rounded-xl border border-accent p-4 text-sm text-text"
              >
                <Award size={18} className="text-primary shrink-0 mt-0.5" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Beyond Work */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
            Beyond Work
          </h2>
          <p className="text-grey text-sm mb-6">
            Curiosity outside work has a way of showing up inside it.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {interests.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white rounded-xl border border-accent p-4 text-sm text-text"
              >
                <Icon size={18} className="text-secondary" />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-grey leading-relaxed">
            Whether it&apos;s noticing a good layout, planning a trip&apos;s
            logistics, or following a tactical match — the habit of breaking
            things down and finding patterns carries over.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
