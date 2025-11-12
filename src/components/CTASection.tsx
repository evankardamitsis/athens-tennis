"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";

export function CTASection() {
    return (
        <section
            className="relative py-16 sm:py-20"
            aria-labelledby="cta-heading"
        >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-emerald-500/10 blur-3xl" />
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
                        <Link
                            href="#pricing"
                            className="inline-flex items-center justify-center rounded-full bg-(--color-accent) px-8 py-3 text-base font-semibold text-foreground shadow-lg shadow-black/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                        >
                            Κάνε Εγγραφή
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

