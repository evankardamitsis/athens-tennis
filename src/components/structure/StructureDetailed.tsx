"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function StructureDetailed() {
  const t = useTranslations("structure");
  const tDetailed = useTranslations("structure.detailed");

  return (
    <section
      id="structure-detailed"
      className="py-16 sm:py-20 rounded-[40px]"
      aria-labelledby="structure-detailed-heading"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1240px] px-5">
        {/* Top Section - Same as Structure.tsx */}
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
            id="structure-detailed-heading"
            className="mt-4 text-3xl font-semibold text-primary-500 sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {t.rich("description", {
              bold: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </p>
        </motion.div>

        {/* Phase Cards Section - Same as Structure.tsx */}
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
              {[
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
              ].map(({ phase, title, period }) => (
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
        </div>

        {/* Two-Phase Detailed Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {/* Phase 1: Regular Season */}
          <motion.div
            variants={fadeInUp}
            className="rounded-[32px] bg-[#F2F2EE] p-8 sm:p-10"
          >
            {/* Phase Badge */}
            <div className="inline-flex items-center rounded-lg bg-accent-500 px-3 py-1.5 text-xs font-semibold text-primary-500 mb-4">
              {tDetailed("phase1.label")}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-primary-500 mb-4">
              {tDetailed("phase1.title")}
            </h3>

            {/* Introduction */}
            <p className="text-base text-primary-500 mb-6">
              {tDetailed("phase1.intro")}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-6">
              {tDetailed.raw("phase1.bullets")?.map((bullet: string, index: number) => (
                <li key={index} className="flex gap-3">
                  {/* Yellow Diamond Icon */}
                  <div className="shrink-0 mt-1">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 0L8 4L4 8L0 4L4 0Z"
                        fill="#D4DE26"
                      />
                    </svg>
                  </div>
                  <span className="text-base text-primary-500">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Link */}
            <Link
              href="/rules#point-system"
              className="text-base text-primary-500! font-semibold underline hover:text-primary-600 transition-colors"
            >
              {tDetailed("phase1.link")}
            </Link>
          </motion.div>

          {/* Phase 2: Knockouts */}
          <motion.div
            variants={fadeInUp}
            className="rounded-[32px] bg-primary-500 p-8 sm:p-10"
          >
            {/* Phase Badge */}
            <div className="inline-flex items-center rounded-lg bg-accent-500 px-3 py-1.5 text-xs font-semibold text-primary-500 mb-4">
              {tDetailed("phase2.label")}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-accent-500 mb-4">
              {tDetailed("phase2.title")}
            </h3>

            {/* Introduction */}
            <p className="text-base text-white mb-6">
              {tDetailed("phase2.intro")}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {tDetailed.raw("phase2.bullets")?.map((bullet: string, index: number) => (
                <li key={index} className="flex gap-3">
                  {/* Yellow Diamond Icon */}
                  <div className="shrink-0 mt-1">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 0L8 4L4 8L0 4L4 0Z"
                        fill="#D4DE26"
                      />
                    </svg>
                  </div>
                  <span className="text-base text-white">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Phase 3: Finals Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="mt-12"
        >
          <div className="rounded-[32px] bg-primary-500 p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              {/* Phase 3: Text Content */}
              <div>
                {/* Phase Badge */}
                <div className="inline-flex items-center rounded-lg bg-accent-500 px-3 py-1.5 text-xs font-semibold text-primary-500 mb-4">
                  {tDetailed("phase3.label")}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-accent-500 mb-4">
                  {tDetailed("phase3.title")}
                </h3>

                {/* Introduction */}
                <p className="text-base text-white mb-6">
                  {tDetailed("phase3.intro")}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  {tDetailed.raw("phase3.bullets")?.map((bullet: string, index: number) => (
                    <li key={index} className="flex gap-3">
                      {/* Yellow Diamond Icon */}
                      <div className="shrink-0 mt-1">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 0L8 4L4 8L0 4L4 0Z"
                            fill="#D4DE26"
                          />
                        </svg>
                      </div>
                      <span className="text-base text-white">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phase 3: Image */}
              <div className="relative flex items-center justify-center lg:sticky lg:top-8">
                <div className="relative w-full">
                  <Image
                    src="/finals_structure.png"
                    alt={tDetailed("phase3.title")}
                    width={800}
                    height={1000}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
