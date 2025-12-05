"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/shared";

const testimonials = [
    {
        quote: "Η καλύτερη αφορμή να παίζω κάθε εβδομάδα.",
        name: "Γιάννης",
        level: "4.0",
    },
    {
        quote: "Οργάνωση, ισορροπημένα ματς, τρομερό fun.",
        name: "Μαρία",
        level: "3.5",
    },
    {
        quote: "Ανέβασα επίπεδο μέσα σε μία σεζόν.",
        name: "Νίκος",
        level: "3.0",
    },
];

export function Testimonials() {
    return (
        <section id="our-philosophy" className="bg-linear-to-b from-white to-emerald-50/60 py-16 sm:py-20">
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="flex flex-col items-center gap-12 text-center"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-semibold text-foreground sm:text-4xl"
                    >
                        Τι λέει η κοινότητα
                    </motion.h2>
                    <motion.div
                        variants={staggerContainer}
                        className="grid w-full gap-6 sm:grid-cols-3"
                    >
                        {testimonials.map(({ quote, name, level }) => (
                            <motion.figure
                                key={name}
                                variants={fadeInUp}
                                className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-lg shadow-emerald-500/10"
                            >
                                <blockquote className="flex-1 text-base text-slate-600">
                                    “{quote}”
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-3">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                                        {name.slice(0, 1)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            {name}
                                        </p>
                                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                            {level}
                                        </p>
                                    </div>
                                </figcaption>
                            </motion.figure>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

