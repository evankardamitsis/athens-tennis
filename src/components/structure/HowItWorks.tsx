"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  ChevronRight,
  ClipboardList,
  Medal,
  UserPlus,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/shared";

const steps = [
  {
    title: "Εγγραφή",
    description: "Φτιάχνεις προφίλ & επίπεδο.",
    icon: UserPlus,
  },
  {
    title: "Τοποθέτηση",
    description: "Μπαίνεις σε division.",
    icon: ClipboardList,
  },
  {
    title: "Ορισμός αγώνα",
    description: "Βρίσκεις ώρα/γήπεδο με τον αντίπαλο.",
    icon: CalendarCheck,
  },
  {
    title: "Παίζεις & δηλώνεις σκορ",
    description: "Γρήγορη καταχώριση, επιβεβαίωση.",
    icon: ChevronRight,
  },
  {
    title: "Αναρριχήσου στο ranking",
    description: "Κέρδισε θέσεις και μπες στα Playoffs.",
    icon: Medal,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-linear-to-b from-white via-emerald-50/40 to-white py-16 sm:py-20"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="how-heading"
            className="text-3xl font-semibold text-foreground sm:text-4xl"
          >
            Πώς λειτουργεί
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Μπες στην εμπειρία AthensTennis σε πέντε απλά βήματα.
          </p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {steps.map(({ title, description, icon: Icon }, index) => (
            <motion.li
              key={title}
              variants={fadeInUp}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-emerald-100 bg-white p-6 text-left shadow-md shadow-emerald-500/10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-base font-semibold text-white shadow-lg">
                {index + 1}
              </span>
              <div className="flex items-center gap-3 text-(--color-primary)">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-foreground">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-slate-600">{description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

