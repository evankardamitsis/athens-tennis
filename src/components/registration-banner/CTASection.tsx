"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/shared";

export function CTASection() {
    return (
        <section
            className="relative py-16 sm:py-20"
            aria-labelledby="cta-heading"
        >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-emerald-500/10 blur-3xl" />
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeIn}
                    className="rounded-3xl bg-foreground px-8 py-12 text-center text-white shadow-2xl sm:px-12"
                >
                    <h2
                        id="cta-heading"
                        className="text-3xl font-semibold sm:text-4xl"
                    >
                        Έλα να παίξουμε.
                    </h2>
                    <p className="mt-4 text-base text-white/80 sm:text-lg">
                        Κλείσε θέση για την επόμενη σεζόν και μπες στο ranking της Αθήνας.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <a
                            href="https://athenstennis.gr/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-[#D4DE26] px-8 py-3 text-base font-semibold text-[#0B3F63] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                        >
                            Κάνε Εγγραφή
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

