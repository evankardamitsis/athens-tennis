"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/shared";

export function TouristsBanner() {
  return (
    <section
      className="relative py-16 sm:py-20"
      aria-labelledby="tourists-banner-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-accent-500/10 blur-3xl" />
      <div className="mx-auto max-w-[1440px] px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
          className="rounded-3xl bg-foreground px-8 py-12 text-center text-white shadow-2xl sm:px-12"
        >
          <h2
            id="tourists-banner-heading"
            className="text-3xl font-semibold sm:text-4xl"
          >
            Tourists Banner
          </h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
