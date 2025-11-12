"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { fadeInUp } from "./animations";

const whatsappLink = "https://chat.whatsapp.com/your-invite-code";

export function WhatsAppJoin() {
    return (
        <>
            <section
                id="community"
                className="relative py-16 sm:py-20"
                aria-labelledby="whatsapp-heading"
            >
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-linear-to-r from-emerald-500 via-emerald-400 to-emerald-500 p-8 text-white shadow-2xl shadow-emerald-500/35 sm:p-12"
                    >
                        <div className="absolute inset-y-0 right-0 h-full w-40 opacity-10">
                            <div className="absolute -right-12 top-0 h-40 w-40 rounded-full border-4 border-white/80" />
                            <div className="absolute -right-8 bottom-8 h-32 w-32 rounded-full border-4 border-white/60" />
                        </div>

                        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="space-y-3">
                                <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/90">
                                    <MessageCircle className="h-4 w-4" />
                                    WhatsApp Community
                                </p>
                                <h2
                                    id="whatsapp-heading"
                                    className="text-2xl font-semibold sm:text-3xl"
                                >
                                    Μπες στο WhatsApp group της κοινότητας.
                                </h2>
                                <p className="max-w-2xl text-base text-white/90 sm:text-lg">
                                    Κλείσε φιλικά, βρες αντιπάλους, μάθε πρώτος τα νέα.
                                </p>
                                <p className="text-sm font-medium text-white/80">
                                    Σεβόμαστε τους κανόνες fair play & σεβασμού.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <Link
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-emerald-600 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-500 focus-visible:ring-white"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Join στο WhatsApp
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-4 z-40 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 transition hover:translate-y-0.5 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-500 md:hidden"
                aria-label="Join στο WhatsApp"
            >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
            </Link>
        </>
    );
}

