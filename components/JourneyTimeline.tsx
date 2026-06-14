"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Building2, Landmark, Compass } from "lucide-react";

const milestones = [
  {
    Icon: GraduationCap,
    title: "MBA — Marketing & Finance",
    text: "Where I learned to ask \u201cwhy\u201d before \u201chow.\u201d",
  },
  {
    Icon: BookOpen,
    title: "B.Com — Taxation",
    text: "The foundation that, years later, connects directly to where I am today.",
  },
  {
    Icon: Building2,
    title: "Emipro Technologies — ERP Presales",
    text: "Jan 2025 \u2013 Apr 2026 \u00b7 Learned that selling ERP isn\u2019t selling software \u2014 it\u2019s helping a business see itself clearly enough to choose the right tool.",
  },
  {
    Icon: Landmark,
    title: "Cygnet — GST & Tax Technology",
    text: "May 2026 \u2013 Present \u00b7 Currently building deep expertise in GST compliance, litigation, and tax technology \u2014 applying the same consultative approach to a more specialized domain.",
  },
  {
    Icon: Compass,
    title: "What\u2019s Next",
    text: "Continuing to build toward domain consulting \u2014 where business understanding meets technical depth.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
            The Journey So Far
          </h2>
          <p className="text-grey">Not a straight line — a series of zoom-outs.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div
            className="absolute left-[27px] top-2 bottom-2 w-px bg-accent md:left-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-0">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={m.title} className="relative md:grid md:grid-cols-2 md:gap-x-12">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.05 * i }}
                    className={`flex gap-4 md:gap-6 ${
                      isLeft
                        ? "md:col-start-1 md:flex-row-reverse md:text-right"
                        : "md:col-start-2"
                    } ${!isLeft ? "" : ""} md:mb-12 mb-0`}
                  >
                    <div className="shrink-0 w-14 h-14 rounded-full bg-accent border border-secondary/30 flex items-center justify-center z-10">
                      <m.Icon size={22} className="text-primary" />
                    </div>
                    <div className="pb-2">
                      <h3 className="font-display font-bold text-lg text-text mb-1">
                        {m.title}
                      </h3>
                      <p className="text-grey text-sm leading-relaxed">{m.text}</p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
