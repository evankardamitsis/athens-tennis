"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Facebook, Instagram, Mail } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function Footer() {
    const t = useTranslations("footer");

    return (
        <footer
            id="contact"
            className="relative pb-8 pt-12 text-[#E6E7D3] sm:pb-12 sm:pt-16"
            aria-labelledby="footer-heading"
        >
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={staggerContainer}
                    className="rounded-[40px] bg-primary-500 p-8 sm:p-12 lg:p-16"
                >
                    {/* Main Content - Four Columns */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
                        {/* Column 1 - Brand */}
                        <motion.div variants={fadeInUp} className="space-y-4">
                            {/* Logo + Brand Name */}
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/athens_tennis_icon.png"
                                    alt="AthensTennis logo"
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 object-contain"
                                />
                                <h2
                                    id="footer-heading"
                                    className="text-xl font-semibold"
                                >
                                    AthensTennis
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-sm leading-relaxed text-[#E6E7D3] sm:text-base">
                                {t("description")}
                            </p>
                        </motion.div>

                        {/* Column 2 - Useful Links */}
                        <motion.div variants={fadeInUp} className="space-y-3">
                            <h3 className="text-base font-semibold uppercase tracking-wide">
                                {t("useful.title")}
                            </h3>
                            <ul className="space-y-2 text-sm text-[#E6E7D3]">
                                <li>
                                    <Link
                                        href="#about"
                                        className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                                    >
                                        {t("useful.about")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/rules"
                                        className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                                    >
                                        {t("useful.regulations")}
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Column 3 - Legal */}
                        <motion.div variants={fadeInUp} className="space-y-3">
                            <h3 className="text-base font-semibold uppercase tracking-wide">
                                {t("legal.title")}
                            </h3>
                            <ul className="space-y-2 text-sm text-[#E6E7D3]">
                                <li>
                                    <Link
                                        href="/privacy-policy"
                                        className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                                    >
                                        {t("legal.privacy")}
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link
                                        href="/terms"
                                        className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                                    >
                                        {t("legal.terms")}
                                    </Link>
                                </li> */}
                            </ul>
                        </motion.div>

                        {/* Column 4 - Contact */}
                        <motion.div variants={fadeInUp} className="space-y-3">
                            <h3 className="text-base font-semibold uppercase tracking-wide">
                                {t("contact.title")}
                            </h3>
                            <div className="space-y-3">
                                {/* Email */}
                                <p className="flex items-center gap-2 text-sm text-[#E6E7D3]">
                                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                                    <a
                                        href={`mailto:${t("contact.email")}`}
                                        className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                                    >
                                        {t("contact.email")}
                                    </a>
                                </p>

                                {/* Social Icons */}
                                <div className="flex gap-3">
                                    <Link
                                        href="https://www.instagram.com/athens.tennis/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-[#E6E7D3] transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="h-5 w-5" aria-hidden="true" />
                                    </Link>
                                    <Link
                                        href="https://www.facebook.com/athenstennis.gr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-[#E6E7D3] transition hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="h-5 w-5" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Bar - Copyright & Credits */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-12 flex flex-col items-start justify-between gap-4 pt-8 text-sm text-[#E6E7D3] sm:flex-row sm:items-center"
                    >
                        <p>{t("copyright")}</p>
                        <p>
                            <span>Designed & Developed with 😍 by </span>
                            <a
                                href="https://www.belowthefold.gr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold transition hover:text-white! text-accent-500! focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                            >
                                Below The Fold
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
}
