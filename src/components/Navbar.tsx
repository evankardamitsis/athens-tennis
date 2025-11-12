"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { fadeIn } from "./animations";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "HowItWorks" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`pointer-events-auto glass-blur mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/20 px-4 py-3 shadow transition-all sm:px-6 ${isScrolled
          ? "mt-4 shadow-emerald-500/20 shadow-lg"
          : "mt-6 shadow-transparent"
          }`}
      >
        <Link
          href="#top"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
          onClick={closeMenu}
          aria-label="Αρχική AthensTennis"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--color-primary) text-sm font-bold text-white shadow-lg">
            AT
          </span>
          AthensTennis
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-(--color-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link
            href="#pricing"
            className="rounded-full bg-(--color-primary) px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
          >
            Εγγραφή
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-(--color-primary) hover:text-(--color-primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2 md:hidden"
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
                  className="rounded-2xl px-3 py-2 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#pricing"
                onClick={closeMenu}
                className="rounded-2xl bg-(--color-primary) px-3 py-2 text-center font-semibold text-white shadow-lg transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
              >
                Εγγραφή
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

