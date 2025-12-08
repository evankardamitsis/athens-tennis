"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function PointSystem() {
  const t = useTranslations("rules.pointSystem");

  const points = t.raw("points") as Array<{
    text: string;
  }>;

  return (
    <section
      id="point-system"
      className="relative pt-12 sm:pt-16 pb-8 sm:pb-12"
      aria-labelledby="point-system-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="rounded-[40px] bg-white p-8 sm:p-12 lg:p-16"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-4 text-center">
            <span className="inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-primary-500">
              {t("badge")}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={fadeInUp} className="mb-4 text-center max-w-3xl mx-auto">
            <h2
              id="point-system-heading"
              className="text-2xl font-semibold text-primary-500 sm:text-3xl"
            >
              {t("title")}
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={fadeInUp} className="mb-8 text-center max-w-3xl mx-auto">
            <p className="text-base text-primary-500 sm:text-lg">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Points Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid gap-4 sm:grid-cols-2 max-w-5xl mx-auto"
          >
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-full bg-[#F2F2EE] px-4 py-3"
              >
                {/* Plus Circle Icon */}
                <div className="shrink-0">
                  <Image
                    src="/plus_circle.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px]"
                  />
                </div>
                {/* Point Text */}
                <span className="text-base font-medium text-primary-500">
                  {point.text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
