"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function SponsorsStrip() {
    const t = useTranslations("sponsors");

    return (
        <section
            id="sponsors"
            className="relative bg-neutral-100 pb-12 pt-0 sm:pb-16 sm:pt-0"
            aria-labelledby="sponsors-heading"
        >
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={staggerContainer}
                    className="rounded-[40px] bg-white p-8 sm:p-12 lg:p-16"
                >
                    {/* Text */}
                    <motion.div variants={fadeInUp} className="mb-8 text-center">
                        <h2
                            id="sponsors-heading"
                            className="text-lg font-semibold text-primary-500 sm:text-xl"
                        >
                            {t("title")}
                        </h2>
                    </motion.div>

                    {/* Logos */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap items-center justify-center gap-12 sm:gap-12"
                    >
                        {/* VOLVO Logo */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/VolvoLogo-02.svg"
                                alt="Volvo"
                                width={140}
                                height={50}
                                className="h-auto w-auto max-w-[140px] object-contain"
                                style={{
                                    filter: "brightness(0)",
                                }}
                            />
                        </div>

                        {/* AVATON Logo */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/avaton-logo-transparent- (3).svg"
                                alt="Avaton"
                                width={140}
                                height={50}
                                className="h-auto w-auto max-w-[140px] object-contain"
                                style={{
                                    filter: "brightness(0)",
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
