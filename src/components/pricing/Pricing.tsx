"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/shared";

const plans = [
    {
        name: "Season Pass",
        description: "Συμμετοχή σε ολόκληρη τη σεζόν",
        price: "€79",
        cta: "Κάνε Εγγραφή",
        href: "https://athenstennis.gr/register",
        perks: [
            "Κατάταξη & Playoffs",
            "Live rankings",
            "Ορισμός αγώνων",
            "Community",
        ],
        highlighted: true,
    },
    {
        name: "Match Pack",
        description: "5 αγώνες προπληρωμένοι",
        price: "€39",
        cta: "Ξεκίνα τώρα",
        href: "https://athenstennis.gr/register",
        perks: ["Ορισμός αγώνων", "Καταχώρηση σκορ", "Βαθμολογία"],
        highlighted: false,
    },
];

export function Pricing() {
    return (
        <section
            id="pricing"
            className="relative overflow-hidden bg-white py-16 sm:py-20"
            aria-labelledby="pricing-heading"
        >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-tr from-emerald-50 via-white to-emerald-100/70" />
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-linear-to-b from-emerald-400/30 via-emerald-200/10 to-transparent" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-[150px]" />
            <div className="pointer-events-none absolute -right-12 top-12 h-64 w-64 rounded-full bg-amber-200/25 blur-[120px]" />
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2
                        id="pricing-heading"
                        className="text-3xl font-semibold text-foreground sm:text-4xl"
                    >
                        Διαλέγεις το πακέτο που σου ταιριάζει
                    </h2>
                    <p className="mt-4 text-base text-slate-600 sm:text-lg">
                        Ευελιξία για να δοκιμάσεις την εμπειρία ή να παίξεις full season.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="mt-12 grid gap-6 sm:grid-cols-2"
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            variants={fadeInUp}
                            className={`flex h-full flex-col rounded-3xl border p-6 shadow-lg transition ${plan.highlighted
                                ? "border-emerald-200 bg-linear-to-br from-emerald-500 via-emerald-400 to-emerald-500 text-white shadow-emerald-500/30"
                                : "border-white/70 bg-white/90 shadow-emerald-500/10 backdrop-blur"
                                }`}
                        >
                            <div className="flex-1 space-y-4">
                                <h3
                                    className={`text-2xl font-semibold ${plan.highlighted ? "text-white" : "text-foreground"
                                        }`}
                                >
                                    {plan.name}
                                </h3>
                                <p
                                    className={`text-sm ${plan.highlighted ? "text-white/80" : "text-slate-600"
                                        }`}
                                >
                                    {plan.description}
                                </p>
                                <p className="text-4xl font-semibold">{plan.price}</p>
                                <ul className="space-y-2">
                                    {plan.perks.map((perk) => (
                                        <li key={perk} className="flex items-center gap-2 text-sm">
                                            <span
                                                className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${plan.highlighted
                                                    ? "bg-white text-emerald-600"
                                                    : "bg-emerald-100 text-emerald-600"
                                                    }`}
                                            >
                                                <Check className="h-3 w-3" aria-hidden="true" />
                                            </span>
                                            <span
                                                className={
                                                    plan.highlighted ? "text-white/90" : "text-slate-600"
                                                }
                                            >
                                                {perk}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8">
                                <a
                                    href={plan.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${plan.highlighted
                                        ? "bg-white text-primary-500 shadow-lg shadow-black/10 focus-visible:ring-white focus-visible:ring-offset-emerald-500"
                                        : "bg-[#D4DE26] text-primary-500 shadow-lg shadow-emerald-500/30 focus-visible:ring-primary-500 focus-visible:ring-offset-white"
                                        }`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <p className="mt-6 text-center text-sm text-slate-500">
                    *Τέλη γηπέδου δεν περιλαμβάνονται.
                </p>
            </div>
        </section>
    );
}

