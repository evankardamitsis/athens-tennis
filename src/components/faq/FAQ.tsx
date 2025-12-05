"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/shared";

const faqs = [
    {
        question: "Πώς δηλώνω συμμετοχή;",
        answer:
            "Συμπληρώνεις τη φόρμα εγγραφής, ορίζεις επίπεδο παιχνιδιού και σε επικοινωνούμε μέσα σε 24 ώρες.",
    },
    {
        question: "Ποιο είναι το σύστημα βαθμολογίας;",
        answer:
            "Χρησιμοποιούμε NTRP-like rating με πόντους ανά νίκη, bonus για straight sets και ποινές για no-show.",
    },
    {
        question: "Χρειάζεται να έχω partner;",
        answer:
            "Όχι. Το πρωτάθλημα είναι σόλο και βρίσκεις αντιπάλους μέσα από το matchmaking.",
    },
    {
        question: "Πού παίζουμε αγώνες;",
        answer:
            "Σε συνεργαζόμενα γήπεδα σε όλη την Αθήνα. Επιλέγετε τοποθεσία και ώρα με τον αντίπαλο.",
    },
    {
        question: "Τι γίνεται αν ακυρωθεί ένας αγώνας;",
        answer:
            "Υπάρχει πολιτική ενημέρωσης 12 ωρών. Αν δεν γίνει έγκαιρα, εφαρμόζονται ποινές rating.",
    },
    {
        question: "Πώς μπαίνω στα Playoffs;",
        answer:
            "Οι κορυφαίοι παίκτες κάθε division προκρίνονται αυτόματα. Wild cards δίνονται με βάση activity & fair play.",
    },
    {
        question: "Πώς λειτουργούν τα levels (NTRP-like);",
        answer:
            "Με αυτοαξιολόγηση στην εγγραφή και προσαρμογή από τους πρώτους 2-3 αγώνες με βάση αποτελέσματα.",
    },
    {
        question: "Υπάρχουν κατηγορίες ηλικίας;",
        answer:
            "Ναι, υπάρχουν divisions 18+, 30+, 40+ και open categories για μικτές ηλικίες.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section
            id="faq"
            className="bg-emerald-50/60 py-16 sm:py-20"
            aria-labelledby="faq-heading"
        >
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    className="text-center"
                >
                    <h2
                        id="faq-heading"
                        className="text-3xl font-semibold text-foreground sm:text-4xl"
                    >
                        Συχνές απορίες
                    </h2>
                    <p className="mt-3 text-base text-slate-600 sm:text-lg">
                        Αν χρειάζεσαι κάτι περισσότερο, στείλε μας email στο
                        hello@athenstennis.gr
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="mt-10 space-y-4"
                >
                    {faqs.map(({ question, answer }, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={question}
                                variants={fadeInUp}
                                className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggle(index)}
                                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                                    aria-expanded={isOpen}
                                >
                                    {question}
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"
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
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-sm text-slate-600">
                                                {answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

