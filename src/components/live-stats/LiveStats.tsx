"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/shared";

const stats = [
    { value: "324", label: "Ενεργοί παίκτες" },
    { value: "1.248", label: "Ολοκληρωμένοι αγώνες" },
    { value: "4", label: "Σεζόν" },
];

export function LiveStats() {
    return (
        <section
            id="stats"
            className="relative bg-white/70 py-16 backdrop-blur sm:py-20"
        >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-emerald-100/40 via-transparent to-emerald-200/30" />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 text-center"
            >
                <motion.h2
                    variants={fadeInUp}
                    className="text-2xl font-semibold text-foreground sm:text-3xl"
                >
                    Live στατιστικά από την κοινότητα
                </motion.h2>
                <div className="grid w-full gap-6 sm:grid-cols-3">
                    {stats.map((stat) => (
                        <motion.div
                            variants={fadeInUp}
                            key={stat.label}
                            className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-500/10"
                        >
                            <p className="text-4xl font-semibold text-(--color-primary)">
                                {stat.value}
                            </p>
                            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

