"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function OurPhilosophy() {
    const t = useTranslations("ourPhilosophy");
    const principles = t.raw("principles") as string[];

    return (
        <section
            id="our-philosophy"
            className="relative py-16 sm:py-20 rounded-[40px]"
            style={{
                background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
        >
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center"
                >
                    {/* Left Side - Image */}
                    <motion.div variants={fadeInUp} className="relative">
                        <Image
                            src="/rankings.png"
                            alt="Tennis player in action"
                            width={500}
                            height={700}
                            className="h-full w-full object-contain"
                            priority
                        />
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div variants={fadeInUp} className="space-y-6 p-12">
                        {/* Badge */}
                        <div className="inline-flex w-fit items-center rounded-full bg-[#0B3F631F] px-4 py-2 text-sm font-semibold text-primary-500">
                            {t("badge")}
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-bold leading-tight text-primary-500 sm:text-4xl lg:text-5xl">
                            {t("title")}
                        </h2>

                        {/* Description */}
                        <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
                            {t("description")}
                        </p>

                        {/* Subheading */}
                        <h3 className="text-lg font-semibold text-primary-500 sm:text-xl">
                            {t("subheading")}
                        </h3>

                        {/* Principles List */}
                        <div className="space-y-3">
                            {principles.map((principle, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-center gap-3 rounded-2xl bg-[#F2F2EE] px-4 py-3"                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                                        <Image
                                            src="/check-circle-svgrepo-com (1) 1.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="h-5 w-5"
                                            aria-hidden
                                        />
                                    </div>
                                    <p className="text-sm font-bold text-primary-500 sm:text-base">
                                        {principle}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Section - Separator and Tagline */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    className="mt-12 space-y-6"
                >
                    {/* Dotted Separator */}
                    <div className="border-t-2 border-dashed border-primary-500 opacity-30" />

                    {/* Tagline */}
                    <p className="text-center text-lg font-semibold text-primary-500 sm:text-xl">
                        {t("tagline")}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
