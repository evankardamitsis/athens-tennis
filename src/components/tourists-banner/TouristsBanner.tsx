"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/shared";

export function TouristsBanner() {
  const t = useTranslations("touristsBanner");
  const features = t.raw("features") as string[];

  return (
    <section
      className="relative pb-2 pt-0 sm:pb-16 sm:pt-0"
      aria-labelledby="tourists-banner-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="relative overflow-hidden rounded-[40px] bg-primary-500 p-8 sm:p-12 lg:p-16"
        >
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
            {/* Left Section - Text Content */}
            <motion.div variants={fadeInUp} className="space-y-6 text-[#E6E7D3] w-[80%]">
              {/* Logo/Icon */}
              <div className="flex items-center gap-3">
                <Image
                  src="/athens_tennis_icon.png"
                  alt="AthensTennis logo"
                  width={82}
                  height={82}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Heading */}
              <h2
                id="tourists-banner-heading"
                className="text-2xl font-bold sm:text-3xl lg:text-4xl"
              >
                {t("title")}
              </h2>

              {/* Description */}
              <p className="text-base leading-relaxed text-[#E6E7D3] sm:text-lg">
                {t("description")}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="/start_icon.svg"
                      alt="Star icon"
                      width={16}
                      height={16}
                      className="h-4 w-4 shrink-0"
                    />
                    <span className="text-sm font-semibold text-accent-500 sm:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="https://athenstennis.gr/athens-tennis/play-tennis-in-athens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-primary-500! shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                >
                  {t("cta")}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
              variants={fadeInUp}
              className="relative h-64 overflow-hidden rounded-3xl lg:h-full md:min-h-[400px]"
              style={{
                clipPath:
                  "circle(150% at 0% 50%)",
              }}
            >
              <Image
                src="/tennis_shot.jpg"
                alt="Tennis player in action"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
