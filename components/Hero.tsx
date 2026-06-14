"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import FlowPath from "./FlowPath";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Hero() {
  return (
    <section className="section pt-28 md:pt-36">
      <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-secondary mb-4 tracking-wide">
            Presales · GST &amp; Tax Technology · Consultant in the Making
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
            Hi, I&apos;m Anuj Sharma.
          </h1>
          <p className="text-xl md:text-2xl font-display font-medium text-primary mb-6">
            Presales Professional with a Consultant&apos;s Mindset.
          </p>
          <p className="text-grey text-base md:text-lg leading-relaxed mb-3">
            I help organizations navigate complex business challenges by
            understanding how they work, simplifying technology
            conversations, and aligning practical solutions with real
            operational needs.
          </p>
          <p className="text-grey text-base md:text-lg leading-relaxed mb-8">
            From ERP and marketplace integrations to my current work in GST
            and Tax Technology, my journey has been shaped by curiosity,
            customer empathy, and continuous learning.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary text-white text-sm font-medium px-6 py-3 hover:bg-secondary transition-colors"
            >
              Let&apos;s Connect
            </a>
            <a
              href="/Anuj_Sharma_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-accent text-text text-sm font-medium px-6 py-3 hover:border-primary hover:text-primary transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/anuj-sharma-892593276"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-grey hover:text-primary transition-colors"
            >
              <LinkedinIcon size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-accent/40 rounded-3xl p-10 md:p-14"
        >
          <FlowPath />
        </motion.div>
      </div>
    </section>
  );
}
