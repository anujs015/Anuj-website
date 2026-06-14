"use client";

import { motion } from "framer-motion";

const questions = [
  "How does your business actually operate, day to day?",
  "Where are the bottlenecks — and who feels them most?",
  "What matters most to the stakeholders in this room?",
  "What does success look like, six months from now?",
];

export default function ConsultantMindset() {
  return (
    <section id="mindset" className="section bg-text">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            I Don&apos;t Start With Products.
            <br />
            I Start With Questions.
          </h2>
          <p className="text-accent max-w-2xl mx-auto mb-12 leading-relaxed">
            The best technology decisions don&apos;t begin with a feature
            list. They begin with understanding workflows, people, and
            objectives — before any solution enters the conversation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {questions.map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/15 bg-white/5 p-5 text-left"
            >
              <p className="text-white text-sm leading-relaxed">{q}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl font-display font-medium text-white max-w-2xl mx-auto leading-relaxed"
        >
          Products change. Workflows evolve. But the discipline of asking the
          right questions first — that&apos;s the part of the job I find most
          valuable, and the part I want to keep getting better at.
        </motion.p>
      </div>
    </section>
  );
}
