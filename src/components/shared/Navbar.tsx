"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { fadeIn } from "@/components/shared";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#how-it-works", label: t("howItWorks") },
    { href: "#our-philosophy", label: t("ourPhilosophy") },
    { href: "#rankings", label: t("rankings") },
    { href: "#faq", label: t("faq") },
    { href: "#contact", label: t("contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="pointer-events-none fixed left-0 top-0 z-50 w-full"
    >
      <div
        className={`pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-white/20 bg-white px-5 py-3 shadow transition-all ${isScrolled
          ? "mt-4 shadow-lg"
          : "mt-6 shadow-transparent"
          }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-primary-500"
          onClick={closeMenu}
          aria-label="Αρχική AthensTennis"
        >

          <Image
            src="/athens_tennis_logo.png"
            alt="AthensTennis logo"
            width={45}
            height={45}
            className="object-contain"
            priority
          />

          <span className="text-primary-500">AthensTennis</span>
        </Link>

        <div className="hidden items-center gap-8 text-md font-medium text-slate-600 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <a
            href="https://app.athenstennis.gr/register"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent-500 px-5 py-2 text-md font-semibold text-primary-500! shadow-lg shadow-emerald-500/30 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            {tCommon("register")}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-primary-500 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 md:hidden"
          onClick={toggleMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-4 mt-2 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur md:hidden"
          >
            <div className="flex flex-col gap-4 text-base font-medium text-slate-700">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-3 py-2 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
              <a
                href="https://app.athenstennis.gr/register"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="rounded-2xl bg-accent-500 px-3 py-2 text-center font-semibold text-primary-500! shadow-lg transition hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                {tCommon("register")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

