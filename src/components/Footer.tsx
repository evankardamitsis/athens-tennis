"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail } from "lucide-react";
import { fadeInUp } from "./animations";

const usefulLinks = [
    { label: "About", href: "#top" },
    { label: "Κανονισμός", href: "#faq" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
];

export function Footer() {
    return (
        <footer
            id="contact"
            className="bg-slate-950 py-14 text-white"
            aria-labelledby="footer-heading"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-4"
            >
                <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 p-2 ring-1 ring-white/20">
                        <Image
                            src="/athenstennis-logo.png"
                            alt="AthensTennis logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </span>
                    <h2 id="footer-heading" className="text-xl font-semibold">
                        AthensTennis
                    </h2>
                    <p className="text-sm text-white/70">
                        Φτιάχνουμε την πιο ζωντανή κοινότητα ερασιτεχνικού τένις στην
                        Αθήνα.
                    </p>
                </div>
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
                        Χρήσιμα
                    </h3>
                    <ul className="space-y-2 text-sm text-white/80">
                        {usefulLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
                        Νομικά
                    </h3>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li>
                            <Link
                                href="/privacy"
                                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                            >
                                Πολιτική Απορρήτου
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                            >
                                Όροι Χρήσης
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
                        Επικοινωνία
                    </h3>
                    <p className="flex items-center gap-2 text-sm text-white/80">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        <a
                            href="mailto:hello@athenstennis.gr"
                            className="underline-offset-4 hover:underline"
                        >
                            hello@athenstennis.gr
                        </a>
                    </p>
                    <div className="flex gap-3">
                        <Link
                            href="https://instagram.com/athenstennis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white/80 transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-5 w-5" aria-hidden="true" />
                        </Link>
                        <Link
                            href="https://facebook.com/athenstennis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white/80 transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-5 w-5" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </motion.div>
            <div className="mt-12 px-4 text-center text-xs text-white/50 sm:px-6 lg:px-8">
                © {new Date().getFullYear()} AthensTennis. All rights reserved.
            </div>
        </footer>
    );
}

