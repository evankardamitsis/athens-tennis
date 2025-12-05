"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/shared";

const trustSignals = [
    "300+ παίκτες",
    "500+ αγώνες",
    "Live rankings",
    "Viber community",
];

export function TrustBar() {
    return (
        <section className="relative overflow-hidden py-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-emerald-200/50 blur-3xl sm:h-56 sm:w-56" />
                <div className="absolute -bottom-12 right-10 h-56 w-56 rounded-full bg-amber-200/45 blur-[120px]" />
                <div className="absolute -left-16 bottom-6 h-40 w-40 rounded-full bg-emerald-400/20 blur-[110px]" />
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="mx-auto flex max-w-[1440px] flex-wrap justify-center gap-3 px-5"
            >
                {trustSignals.map((signal) => (
                    <motion.span
                        variants={fadeInUp}
                        key={signal}
                        className="inline-flex items-center rounded-full border border-white/60 bg-white/90 px-4 py-2 text-sm font-medium text-slate-600 shadow-lg shadow-emerald-500/10 backdrop-blur"
                    >
                        {signal}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
}

