"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function RulesHero() {
    const t = useTranslations("rules.hero");

    const navItems = t.raw("navItems") as string[];

    return (
        <section className="relative">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={staggerContainer}
                className="mx-5 rounded-[40px] bg-primary-500 mt-12 px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
            >
                <div className="mx-auto max-w-[1440px]">
                    {/* Branding */}
                    <motion.p
                        variants={fadeInUp}
                        className="mb-4 text-sm font-semibold text-accent-400 sm:text-base"
                    >
                        {t("branding")}
                    </motion.p>

                    {/* Main Title */}
                    <motion.h1
                        variants={fadeInUp}
                        className="mb-6 text-3xl font-bold text-accent-500 sm:text-4xl lg:text-5xl"
                    >
                        {t("title")}
                    </motion.h1>

                    {/* Description */}
                    <motion.div variants={fadeInUp} className="mb-8 space-y-2">
                        <p className="text-base leading-relaxed text-[#E6E7D3] sm:text-lg">
                            {t("description1")}
                        </p>
                        <p className="text-base leading-relaxed text-[#E6E7D3] sm:text-lg">
                            {t("description2")}
                        </p>
                    </motion.div>

                    {/* Navigation Pills */}
                    <motion.div
                        variants={staggerContainer}
                        className="flex flex-wrap gap-3"
                    >
                        {navItems.map((item, index) => {
                            // Map Greek text to anchor IDs
                            const anchorMap: Record<string, string> = {
                                "Κατηγορίες": "categories",
                                "Categories": "categories",
                                "Πρωτάθλημα": "structure-detailed",
                                "Championship": "structure-detailed",
                                "Point System": "point-system",
                            };
                            const anchorId =
                                anchorMap[item] ||
                                item
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")
                                    .replace(/[^a-z0-9-]/g, "");
                            return (
                                <motion.a
                                    key={index}
                                    variants={fadeInUp}
                                    href={`#${anchorId}`}
                                    className="inline-flex items-center rounded-full bg-[#1E4D6F] px-6 py-3 text-sm font-semibold text-accent-500! transition hover:bg-primary-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                                >
                                    {item}
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
