"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function Facilities() {
  const t = useTranslations("facilities");
  const facilityAreas = t.raw("areas") as string[];

  return (
    <section
      id="facilities"
      className="bg-linear-to-b from-white via-slate-50 to-white py-16 sm:py-20 rounded-[40px]"
      aria-labelledby="facilities-heading"
    >
      <div className="mx-auto max-w-[1240px] px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="grid gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="space-y-6">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-3 text-left"
            >
              <div className="inline-flex w-fit items-center rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-700">
                {t("badge")}
              </div>
              <h2
                id="facilities-heading"
                className="text-3xl font-semibold text-foreground sm:text-4xl"
              >
                {t("title")}
              </h2>
              <p className="text-base text-slate-700 sm:text-lg">
                {t("description")}
              </p>
              <p className="text-lg font-semibold text-foreground">
                {t("subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
            >
              {facilityAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 rounded-2xl bg-[#F2F2EE] px-4 py-3 text-sm font-semibold text-slate-800"
                >
                  <Image
                    src="/location_icon.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="h-4 w-4"
                    aria-hidden
                  />
                  {area}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl bg-white">
              <Image
                src="/logos_facilities.png"
                alt={t("logosAlt")}
                width={1200}
                height={700}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
