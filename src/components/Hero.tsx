"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";

export function Hero() {
    return (
        <section
            id="top"
            className="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pt-48"
        >
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl sm:h-96 sm:w-96" />
                <div className="absolute bottom-0 right-[-10%] h-64 w-64 rounded-full bg-accent/40 blur-3xl sm:h-72 sm:w-72" />
            </div>

            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-3xl space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 backdrop-blur">
                        🟢 AthensTennis League
                    </span>
                    <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Το πρωτάθλημα της πόλης μας.                    </h1>
                    <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                        Παίξε περισσότερο, οργανωμένα και χωρίς άγχος. Το πρωτάθλημα που κάνει το τένις εύκολο και απολαυστικό.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <Link
                            href="#pricing"
                            className="inline-flex items-center justify-center rounded-full bg-(--color-primary) px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/40 transition hover:translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                        >
                            Κάνε Εγγραφή
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-base font-semibold text-(--color-primary) shadow-sm transition hover:border-(--color-primary) hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                        >
                            Δες πώς λειτουργεί
                        </Link>
                    </div>
                    <p className="text-sm font-medium text-slate-500">
                        Επόμενη σεζόν: Ιανουάριος 2026 — Περιορισμένες θέσεις
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="relative grid gap-4 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl shadow-emerald-500/15 backdrop-blur md:grid-cols-3"
                >
                    <div className="rounded-2xl bg-slate-50/80 p-5">
                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                            Matchmaking
                        </p>
                        <p className="mt-3 text-base text-slate-600">
                            Αλγόριθμος ζευγαρώματος για ισορροπημένα, δυνατά παιχνίδια κάθε
                            εβδομάδα.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50/80 p-5">
                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                            Live Ranking
                        </p>
                        <p className="mt-3 text-base text-slate-600">
                            Διαδραστικά leaderboards ανά division, ηλικία και περιοχή.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50/80 p-5">
                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                            Community
                        </p>
                        <p className="mt-3 text-base text-slate-600">
                            Viber group για γρήγορες συνεννοήσεις, events και mini leagues.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

