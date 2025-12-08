"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function Rankings() {
    const t = useTranslations("rankingsSection");
    const items = t.raw("items") as string[];

    return (
        <section
            id="rankings"
            className="relative py-12 sm:py-20 rounded-[40px]"
            style={{
                background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 60%)",
            }}
            aria-labelledby="rankings-heading"
        >
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="p-6 sm:p-10"
                >
                    <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
                        {/* Left Column */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            {/* Badge */}
                            <div className="inline-flex w-fit items-center rounded-full bg-[#0B3F631F] px-4 py-2 text-sm font-semibold text-primary-500">
                                {t("badge")}
                            </div>

                            {/* Title */}
                            <h2
                                id="rankings-heading"
                                className="text-3xl font-bold leading-tight text-primary-500 sm:text-4xl"
                            >
                                {t("title")}
                            </h2>

                            {/* Description */}
                            <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
                                {t("description")}
                            </p>

                            {/* Items List */}
                            <div className="space-y-3">
                                {items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="flex items-center gap-3 rounded-2xl bg-[#F2F2EE] px-4 py-3"
                                    >
                                        <Image
                                            src="/check-circle-svgrepo-com (1) 1.svg"
                                            alt="Check"
                                            width={24}
                                            height={24}
                                            className="h-6 w-6 shrink-0"
                                        />
                                        <p className="text-base font-semibold text-primary-500">
                                            {item}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column - Ranking table image */}
                        <motion.div variants={fadeInUp} className="flex justify-center">
                            <div className="w-full max-w-[640px] overflow-hidden rounded-3xl shadow-lg shadow-black/10">
                                <Image
                                    src="/rankings_image.png"
                                    alt="Ranking table"
                                    width={900}
                                    height={700}
                                    className="h-full w-full object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-12 space-y-12 text-center"
                    >
                        {/* Dotted Separator */}
                        <div className="border-t-2 border-dashed border-primary-500/40" />

                        {/* Tagline */}
                        <div className="space-y-2">
                            <p className="text-lg font-bold text-primary-500 sm:text-xl">
                                {t("taglineTitle")}
                            </p>
                            <p className="text-base text-neutral-700 sm:text-lg">
                                {t("taglineSubtitle")}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center -mt-6">
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center justify-center rounded-full border border-accent-500 px-6 py-3 text-base font-semibold text-primary-500! shadow-sm transition hover:bg-accent-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            >
                                {t("cta")}
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
