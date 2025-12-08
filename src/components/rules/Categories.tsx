"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function Categories() {
    const t = useTranslations("rules.categories");

    const categories = [
        {
            key: "under20",
            label: "Under 2.0",
            range: "ATRP 1.5 και 2.0",
            bgColor: "bg-neutral-100",
            textColor: "text-primary-500",
            barColor: "bg-neutral-100",
            barEnd: 2.0,
            labelPosition: 1.75,
        },
        {
            key: "under30",
            label: "Under 3.0",
            range: "ATRP 1.5 έως και 3.0",
            bgColor: "bg-accent-500",
            textColor: "text-primary-500",
            barColor: "bg-accent-500",
            barEnd: 3.0,
            labelPosition: 2.5,
        },
        {
            key: "open",
            label: "Open",
            range: "ATRP 1.5 έως και 4.5",
            bgColor: "bg-primary-500",
            textColor: "text-white",
            barColor: "bg-primary-500",
            barEnd: 4.5,
            labelPosition: 4.0,
        },
    ];

    return (
        <section
            id="categories"
            className="relative py-12 sm:py-16"
            aria-labelledby="categories-heading"
        >
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="rounded-[40px] p-8 sm:p-12 lg:p-16"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                >
                    {/* Badge */}
                    <motion.div variants={fadeInUp} className="mb-4 text-center">
                        <span className="inline-block rounded-lg bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-primary-500">
                            {t("badge")}
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.div variants={fadeInUp} className="mb-8 text-center">
                        <h2
                            id="categories-heading"
                            className="text-3xl font-semibold text-primary-500 sm:text-4xl"
                        >
                            {t("title")}
                        </h2>
                    </motion.div>

                    {/* Category Pills */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-12 flex flex-wrap justify-center gap-3"
                    >
                        {categories.map((category) => (
                            <span
                                key={category.key}
                                className={`rounded-full px-4 py-2 text-sm font-semibold ${category.bgColor} ${category.textColor}`}
                            >
                                {category.label}
                            </span>
                        ))}
                    </motion.div>

                    {/* Visualization Section */}
                    <motion.div
                        variants={fadeInUp}
                        className="relative mb-12 flex justify-center"
                    >
                        <div className="relative w-full max-w-4xl">
                            <Image
                                src="/categories.png"
                                alt={t("title")}
                                width={1200}
                                height={600}
                                className="w-full h-auto rounded-lg"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* ATRP Explanation */}
                    <motion.div variants={fadeInUp} className="text-center">
                        <h3 className="mb-4 text-xl font-semibold text-primary-500">
                            {t("atrpTitle")}
                        </h3>
                        <p className="mx-auto max-w-3xl text-base text-primary-500 sm:text-md">
                            {t("atrpDescription")}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
