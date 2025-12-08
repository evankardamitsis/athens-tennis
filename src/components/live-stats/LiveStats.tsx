"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function LiveStats() {
    const t = useTranslations("liveStats");
    const stats = t.raw("items") as { value: string; label: string }[];

    return (
        <section
            id="stats"
            className="relative pb-0 pt-12 sm:pt-16"
            aria-labelledby="live-stats-heading"
        >
            <div className="mx-auto max-w-[1440px] px-5">
            <motion.div
                initial="hidden"
                whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                variants={staggerContainer}
                    className="rounded-t-[40px] bg-[#6359E30A] px-6 pb-10 pt-10 sm:px-10 sm:pb-14 sm:pt-14 lg:px-14"
            >
                <motion.h2
                    variants={fadeInUp}
                        id="live-stats-heading"
                        className="text-center text-2xl font-bold text-primary-500 sm:text-3xl"
                >
                        {t("title")}
                </motion.h2>

                    <motion.div
                        variants={staggerContainer}
                        className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6"
                    >
                    {stats.map((stat) => (
                        <motion.div
                                key={stat.label}
                            variants={fadeInUp}
                                className="rounded-3xl bg-[#6359E31A] px-6 py-7 text-center shadow-xs sm:px-8 sm:py-9"
                        >
                                <p className="text-xl font-bold text-[#0B3F63] sm:text-4xl">
                                {stat.value}
                            </p>
                                <p className="mt-2 text-base font-semibold text-[#0B3F63] sm:text-lg">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                    </motion.div>
                </motion.div>
                </div>
        </section>
    );
}

