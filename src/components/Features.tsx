"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Award,
  CalendarRange,
  Network,
  Trophy,
  Users,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "./animations";

const features = [
  {
    title: "Έξυπνο ματσάρισμα",
    description: "Παίζεις με αντιπάλους κοντά στο επίπεδό σου.",
    icon: Users,
  },
  {
    title: "Εύκολη οργάνωση",
    description: "Κλείσε αγώνες με ενσωματωμένο scheduler.",
    icon: CalendarRange,
  },
  {
    title: "Live αποτελέσματα",
    description: "Κατάχωρησε σκορ, δες rankings σε πραγματικό χρόνο.",
    icon: Activity,
  },
  {
    title: "Κοινότητα",
    description: "Δίκτυο παικτών, ομαδικά chats, mini events.",
    icon: Network,
  },
  {
    title: "Leaderboards",
    description: "Ανά κατηγορία, ηλικία, περιοχή.",
    icon: Award,
  },
  {
    title: "Βραβεία & Playoffs",
    description: "Κύπελλα, δώρα, τελικοί.",
    icon: Trophy,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white/80 py-16 sm:py-20"
      aria-labelledby="features-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-emerald-50 via-white to-emerald-100/50" />
      <div className="pointer-events-none absolute -top-20 right-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 left-12 h-72 w-72 rounded-full bg-amber-200/30 blur-[140px]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm"
          >
            Γιατί AthensTennis
          </motion.p>
          <motion.h2
            id="features-heading"
            variants={fadeInUp}
            className="text-3xl font-semibold text-foreground sm:text-4xl"
          >
            Κάνε το παιχνίδι σου καλύτερο.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base text-slate-600 sm:text-lg"
          >
            Από την εγγραφή μέχρι τα Playoffs, η πλατφόρμα μας σε οδηγεί σε κάθε
            βήμα.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-lg shadow-emerald-500/15 backdrop-blur transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-emerald-500/30"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

