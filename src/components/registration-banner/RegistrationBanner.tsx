"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/shared";

export function RegistrationBanner() {
    const t = useTranslations("registrationBanner");
    const steps = t.raw("steps") as { title: string; description: string }[];

    return (
        <section className="relative py-16 sm:py-20" aria-labelledby="cta-heading">
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeIn}
                    className="rounded-[40px] bg-primary-500 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12"
                >
                    <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
                        <div className="space-y-5">
                            <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                                {t("badge")}
                            </span>
                            <h2
                                id="cta-heading"
                                className="text-5xl font-bold leading-tight sm:text-5xl text-[#E6E7D3]"
                            >
                                {t("title")}{" "}
                                <span className="text-accent-400">{t("highlight")}</span>
                            </h2>

                            <div className="pt-2 hidden md:block lg:block">
                                <Image
                                    src="/arrow_down.svg"
                                    alt=""
                                    width={200}
                                    height={200}
                                    className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 mx-auto"
                                    aria-hidden
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <div
                                    key={step.title}
                                    className="flex gap-4 rounded-3xl bg-white/10 px-4 py-4 sm:px-6"
                                >
                                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-500 text-base font-bold text-primary-500">
                                        {index + 1}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold text-accent-400 sm:text-xl">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-[#E6E7D3] sm:text-base">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <p className="text-xs text-white/70 sm:text-sm">{t("note")}</p>

                            <div className="space-y-3 pt-4">
                                <a
                                    href="https://athenstennis.gr/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-primary-500! shadow-lg shadow-black/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                                >
                                    {t("ctaPrimary")}
                                </a>
                                <div className="flex justify-center">
                                    <Link
                                        href="/rules"
                                        className="text-sm font-semibold text-accent-500! underline decoration-accent-500 underline-offset-4 transition hover:text-accent-300"
                                    >
                                        {t("ctaSecondary")}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

