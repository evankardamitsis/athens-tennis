"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/shared";

export function Hero() {
    const t = useTranslations("hero");

    return (
        <section id="top" className="relative">
            {/* Hero Main */}
            <div className="relative overflow-hidden py-16 pt-8 sm:py-20 lg:py-12 lg:pt-8">
                <div className="mx-auto max-w-[1440px]">
                    <div
                        className="mx-5 rounded-[40px] px-14 py-8 sm:py-12 lg:py-16"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
                        }}
                    >
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
                            {/* Left Column - Content */}
                            <motion.div
                                className="space-y-6"
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                            >
                                {/* Brand Badge */}
                                <span className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-primary-500">
                                    {t("badge")}
                                </span>

                                {/* Main Heading */}
                                <h1 className="text-4xl font-bold leading-tight text-primary-500 sm:text-5xl ">
                                    {t("title")}
                                </h1>

                                {/* Description */}
                                <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                                    {t.rich("description", {
                                        bold: (chunks) => (
                                            <span className="font-bold">
                                                {chunks}
                                            </span>
                                        ),
                                    })}
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <a
                                        href="https://app.athenstennis.gr/register"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-[99px] bg-accent-500 px-8 py-3 text-base font-semibold text-primary-500! transition hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                                    >
                                        {t("ctaPrimary")}
                                    </a>
                                    <Link
                                        href="/rules"
                                        className="inline-flex items-center justify-center rounded-[99px] border border-accent-500 bg-transparent px-8 py-3 text-base font-semibold text-primary-500! transition hover:bg-accent-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                                    >
                                        {t("ctaSecondary")}
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Right Column - Image  */}
                            <motion.div
                                className="relative h-[400px] sm:h-[400px] lg:h-[400px]"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            >

                                {/* Tennis Player Image */}
                                <div className="relative h-full w-full">
                                    <Image
                                        src="/hero_ball.png"
                                        alt="Tennis player"
                                        fill
                                        className="object-contain object-center"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

