"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/components/shared";

const sponsors = [
    "RacquetPro",
    "CourtTime",
    "FitFuel",
    "AceWear",
    "Serve&Volley",
    "CityCourts",
];

const repeatedSponsors = [...sponsors, ...sponsors];

export function SponsorsStrip() {
    return (
        <section
            id="sponsors"
            className="bg-slate-900 py-12 sm:py-16"
            aria-labelledby="sponsors-heading"
        >
            <h2 id="sponsors-heading" className="sr-only">
                Χορηγοί & Συνεργάτες
            </h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="relative overflow-hidden"
            >
                <div className="marquee">
                    {repeatedSponsors.map((name, index) => (
                        <div
                            key={`${name}-${index}`}
                            className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold uppercase tracking-widest text-white/60 transition hover:text-white"
                        >
                            <span className="whitespace-nowrap">{name}</span>
                        </div>
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-slate-900 via-slate-900/80 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-slate-900 via-slate-900/80 to-transparent" />
            </motion.div>
        </section>
    );
}

