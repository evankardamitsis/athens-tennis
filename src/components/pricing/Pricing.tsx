"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function Pricing() {
    const t = useTranslations("pricing");

    const plans = [
        {
            key: "payAsYouPlay",
            hasDiscount: false,
        },
        {
            key: "p100",
            hasDiscount: true,
        },
        {
            key: "p300",
            hasDiscount: true,
        },
    ];

    return (
        <section
            id="pricing"
            className="relative pb-12"
            aria-labelledby="pricing-heading"
        >
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="rounded-t-[40px] rounded-b-2xl bg-primary-500 p-8 sm:p-12 lg:p-16"
                >
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="mb-10 text-center">
                        <h2
                            id="pricing-heading"
                            className="text-3xl font-bold text-white sm:text-4xl lg:text-4xl"
                        >
                            {t("title")}
                        </h2>
                        <p className="mt-4 text-base text-white/90 sm:text-lg">
                            {t("subtitle")}
                        </p>
                    </motion.div>

                    {/* Pricing Cards */}
                    <motion.div
                        variants={staggerContainer}
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {plans.map((plan) => {
                            const planData = t.raw(plan.key) as Record<string, string>;
                            const isPayAsYouPlay = plan.key === "payAsYouPlay";

                            return (
                                <motion.div
                                    key={plan.key}
                                    variants={fadeInUp}
                                    className={`relative flex flex-col rounded-2xl bg-[#F4F4F414] p-6 shadow-lg ${plan.key === "p100" ? "border border-accent-400" : ""
                                        }`}
                                >
                                    {/* Discount Badge */}
                                    {plan.hasDiscount && planData.discount && (
                                        <div className="absolute right-4 top-4 rounded-lg bg-accent-500 px-3 py-1 text-sm font-bold text-primary-500">
                                            {planData.discount}
                                        </div>
                                    )}

                                    {/* Card Content */}
                                    <div className="flex-1 space-y-4">
                                        {/* Title */}
                                        <h3 className="text-md font-bold text-accent-500">
                                            {planData.name}
                                        </h3>

                                        {/* Pricing */}
                                        <div className="mt-8 space-y-2">
                                            {isPayAsYouPlay ? (
                                                <>
                                                    <p className="text-md font-bold text-[#E6E7D3] sm:text-2xl">
                                                        {planData.priceSingle}
                                                    </p>
                                                    <p className="text-xl font-bold text-[#E6E7D3] sm:text-2xl">
                                                        {planData.priceDouble}
                                                    </p>
                                                </>
                                            ) : (
                                                <p className="text-2xl font-bold text-[#E6E7D3] sm:text-2xl">
                                                    {planData.price}
                                                </p>
                                            )}
                                        </div>

                                        {/* Details */}
                                        {!isPayAsYouPlay && (
                                            <div className="space-y-1 text-sm text-[#E6E7D3]">
                                                <p>{planData.detail1}</p>
                                                <p>{planData.detail2}</p>
                                            </div>
                                        )}

                                        {/* Features */}
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-3 text-sm text-[#E6E7D3]">
                                                <Image
                                                    src="/check-circle-svgrepo-com (1) 1.svg"
                                                    alt="Check"
                                                    width={20}
                                                    height={20}
                                                    className="h-5 w-5 shrink-0"
                                                />
                                                {planData.feature1}
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-[#E6E7D3]">
                                                <Image
                                                    src="/check-circle-svgrepo-com (1) 1.svg"
                                                    alt="Check"
                                                    width={20}
                                                    height={20}
                                                    className="h-5 w-5 shrink-0"
                                                />
                                                {planData.feature2}
                                            </li>
                                        </ul>

                                        {/* Footnote */}
                                        <p className="mt-4 text-xs text-white/70">
                                            {planData.footnote}
                                        </p>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-6">
                                        <a
                                            href="https://athenstennis.gr/athens-tennis/news-blog"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-full items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-base font-semibold text-primary-500! transition hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                                        >
                                            {planData.cta}
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Footer Link */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-10 text-center text-sm text-[#E6E7D3]"
                    >
                        <Link
                            href="#faq"
                            className="underline decoration-white underline-offset-4 transition hover:text-accent-500"
                        >
                            {t.rich("footer", {
                                bold: (chunks) => (
                                    <span className="font-semibold underline decoration-white underline-offset-4">
                                        {chunks}
                                    </span>
                                ),
                            })}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
