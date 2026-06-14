"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function FinalCTA() {
  return (
    <section id="contact" className="section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-primary px-8 py-14 md:py-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-accent max-w-xl mx-auto mb-10">
            If you&apos;re working on something where business understanding
            matters as much as technical depth — I&apos;d like to hear about
            it.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:anuj152002@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary text-sm font-medium px-6 py-3 hover:bg-accent transition-colors"
            >
              <Mail size={16} />
              Let&apos;s Connect
            </a>
            <a
              href="https://www.linkedin.com/in/anuj-sharma-892593276"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white text-sm font-medium px-6 py-3 hover:bg-white/10 transition-colors"
            >
              <LinkedinIcon size={16} />
              Connect on LinkedIn
            </a>
            <a
              href="/Anuj_Sharma_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white text-sm font-medium px-6 py-3 hover:bg-white/10 transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
