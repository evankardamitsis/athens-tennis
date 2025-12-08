"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer } from "@/components/shared";

// SVG Icon Component
function SvgIcon({ src, alt, className }: { src: string; alt: string; className?: string }) {
    return (
        <Image
            src={src}
            alt={alt}
            width={48}
            height={48}
            className={className}
        />
    );
}

const features = [
    {
        icon: "/ranking-svgrepo-com 1.svg",
        text: "matchesForAllLevels",
    },
    {
        icon: "/check-circle-svgrepo-com (1) 1.svg",
        text: "friendlyEnvironment",
    },
    {
        icon: "/structure-business-svgrepo-com 1.svg",
        text: "clearStructure",
    },
];

export function HeroSecondary() {
    const t = useTranslations("hero.secondary");

    return (
        <section className="relative pb-12 sm:pb-20">
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="rounded-[40px] bg-primary-500 px-8 py-16 text-center sm:px-12 sm:py-20 lg:px-16 lg:py-24"
                >
                    {/* Logo */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-6 flex justify-center"
                    >

                        <Image
                            src="/athens_tennis_icon.png"
                            alt="AthensTennis logo"
                            width={82}
                            height={82}
                            className="object-contain"
                            priority
                        />


                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        variants={fadeInUp}
                        className="mb-4 text-3xl font-bold text-[#E6E7D3] sm:text-4xl"
                    >
                        {t("title")}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mb-6 max-w-3xl text-base leading-relaxed text-[#E6E7D3]/80 sm:text-lg"
                    >
                        {t.rich("description", {
                            bold: (chunks) => (
                                <span className="font-semibold text-[#E6E7D3]">
                                    {chunks}
                                </span>
                            ),
                        })}
                    </motion.p>

                    {/* Sub-heading */}
                    <motion.h3
                        variants={fadeInUp}
                        className="mb-8 text-lg font-medium text-[#E6E7D3]/90 sm:text-xl"
                    >
                        {t("subheading")}
                    </motion.h3>

                    {/* Feature Cards */}
                    <motion.div
                        variants={staggerContainer}
                        className="grid gap-6 sm:grid-cols-3"
                    >
                        {features.map(({ icon, text }) => (
                            <motion.div
                                key={text}
                                variants={fadeInUp}
                                className="rounded-2xl bg-[#1E4d6f] p-6"
                            >
                                <div className="mb-4 flex justify-center">
                                    <SvgIcon
                                        src={icon}
                                        alt={text}
                                        className="h-12 w-12"
                                    />
                                </div>
                                <p className="text-center text-base font-medium text-[#D4DE26] sm:text-lg">
                                    {t(`features.${text}`)}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
