"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/shared";

const ViberLink = "https://chat.Viber.com/your-invite-code";

export function ViberJoin() {
    const t = useTranslations("viberGroup");

    return (
        <section
            id="community"
            className="relative pb-16 pt-0 sm:pb-20"
            aria-labelledby="viber-heading"
        >
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={staggerContainer}
                    className="relative overflow-hidden rounded-b-3xl p-8 text-white shadow-2xl sm:p-12"
                    style={{
                        background:
                            "linear-gradient(90deg, #6359E3 0%, #9C59E3 100%)",
                    }}
                >
                    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between py-8">
                        {/* Left Section */}
                        <motion.div variants={fadeInUp} className="space-y-4">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                                <MessageCircle className="h-4 w-4" />
                                {t("badge")}
                            </div>

                            {/* Title */}
                            <h2
                                id="viber-heading"
                                className="text-2xl font-bold sm:text-3xl lg:text-3xl"
                            >
                                {t("title")}
                            </h2>

                            {/* Description */}
                            <div className="space-y-2">
                                <p className="text-base text-white/90 sm:text-lg">
                                    {t("description1")}
                                </p>
                                <p className="text-base text-white/90 sm:text-lg">
                                    {t("description2")}
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Section - CTA Button */}
                        <motion.div
                            variants={fadeInUp}
                            className="shrink-0 lg:ml-6"
                        >
                            <a
                                href={ViberLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-primary-500! shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none "
                            >
                                {t("cta")}
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
