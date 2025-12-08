"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function WhyUs() {
  const t = useTranslations("whyUs");

  const features = [
    {
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
    {
      title: t("feature4.title"),
      description: t("feature4.description"),
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-20 rounded-[40px] mt-12"
      aria-labelledby="features-heading"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            {t("badge")}
          </motion.p>
          <motion.h2
            id="features-heading"
            variants={fadeInUp}
            className="text-3xl font-semibold text-foreground sm:text-4xl"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base text-slate-600 sm:text-lg"
          >
            {t.rich("description", {
              bold: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-16"
        >
          {features.map(({ title, description }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="rounded-3xl bg-[#F2F2EE] px-6 py-8 text-center shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-md text-slate-700 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

