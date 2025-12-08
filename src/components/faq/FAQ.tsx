"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function FAQ() {
    const t = useTranslations("faq");
    const items = t.raw("items") as Array<{
        question: string;
        answer: string;
    }>;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section
            id="faq"
            className="relative pb-12 pt-12 sm:pb-16 sm:pt-16"
            aria-labelledby="faq-heading"
        >
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={staggerContainer}
                    className="rounded-[40px] bg-white p-8 sm:p-12 lg:p-16"
                >
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="mb-10 text-center">
                        {/* Badge */}
                        <div className="mb-4 inline-flex items-center rounded-full bg-neutral-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                            {t("badge")}
                        </div>

                        {/* Title */}
                        <h2
                            id="faq-heading"
                            className="text-3xl font-bold text-primary-500 sm:text-4xl"
                        >
                            {t("title")}
                        </h2>
                    </motion.div>

                    {/* FAQ Items */}
                    <motion.div
                        variants={staggerContainer}
                        className="space-y-3"
                    >
                        {items.map((item, index) => {
                            const isOpen = openIndex === index;
                            const isFirst = index === 0;
                            const isLast = index === items.length - 1;

                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className={`overflow-hidden bg-neutral-100 ${isFirst
                                        ? "rounded-t-2xl"
                                        : isLast
                                            ? "rounded-b-2xl"
                                            : "rounded-none"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggle(index)}
                                        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-base font-semibold text-primary-500 sm:text-lg">
                                            {item.question}
                                        </span>
                                        <Plus
                                            className={`h-5 w-5 shrink-0 text-primary-500 transition-transform ${isOpen ? "rotate-45" : "rotate-0"
                                                }`}
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.25,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <div className="px-6 pb-6 text-sm leading-relaxed text-neutral-700 sm:text-base">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
