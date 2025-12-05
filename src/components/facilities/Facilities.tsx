"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function Facilities() {
  return (
    <section
      id="facilities"
      className="relative overflow-hidden bg-white/80 py-16 sm:py-20"
      aria-labelledby="facilities-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
        >
          <motion.h2
            id="facilities-heading"
            variants={fadeInUp}
            className="text-3xl font-semibold text-foreground sm:text-4xl"
          >
            Facilities
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base text-slate-600 sm:text-lg"
          >
            Coming soon...
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
