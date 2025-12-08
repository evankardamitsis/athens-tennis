"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeInUp } from "@/components/shared";

export function Structure() {
  const t = useTranslations("structure");

  const knockoutPhases = [
    {
      phase: t("phase2.label"),
      title: t("phase2.title"),
      period: t("phase2.period"),
    },
    {
      phase: t("phase3.label"),
      title: t("phase3.title"),
      period: t("phase3.period"),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 rounded-[40px]"
      aria-labelledby="structure-heading"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1240px] px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-700">
            {t("badge")}
          </div>
          <h2
            id="structure-heading"
            className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {t.rich("description", {
              bold: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-stretch"
        >
          <div className="flex-1 rounded-[32px] bg-[#F2F2EE] p-8 shadow-md shadow-accent-400/10 sm:p-10 text-center">
            <div className="inline-flex items-center rounded-full bg-accent-400 px-3 py-1 text-xs font-semibold text-slate-800">
              {t("phase1.label")}
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-2xl font-semibold text-slate-900">
                {t("phase1.title")}
              </h3>
              <p className="text-lg font-normal text-slate-700">
                {t("phase1.period")}
              </p>
            </div>
          </div>

          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-3">
              <div className="h-px w-20 border-2 border-dashed" />
              <ChevronRight className="h-6 w-6 text-black" aria-hidden />
            </div>
          </div>

          <div className="flex-1 rounded-[32px] bg-[#053c6a] p-6 text-accent-400 shadow-xl sm:p-8 text-center">
            <div className="grid h-full gap-4 sm:grid-cols-2">
              {knockoutPhases.map(({ phase, title, period }) => (
                <div
                  key={phase}
                  className="flex flex-col items-center rounded-2xl bg-white/5 p-5"
                >
                  <div className="inline-flex w-fit items-center rounded-full bg-accent-400/90 px-3 py-1 text-xs font-semibold text-slate-800">
                    {phase}
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-base text-accent-400">{period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-col items-center gap-4 text-center">
          <p className="text-xs text-slate-600 sm:text-sm">{t("note")}</p>
          <a
            href="#how-it-works-details"
            className="inline-flex items-center gap-2 rounded-full border border-accent-400  px-5 py-3 text-md font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {t("cta")}
            <ChevronRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

