"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, List } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/shared";

const calendarId = "your-calendar-id@group.calendar.google.com";

const views = [
    { key: "month", label: "Month", icon: CalendarDays },
    { key: "week", label: "Week", icon: Clock },
    { key: "agenda", label: "Agenda", icon: List },
] as const;

type ViewKey = (typeof views)[number]["key"];

const viewModeMap: Record<ViewKey, string> = {
    month: "MONTH",
    week: "WEEK",
    agenda: "AGENDA",
};

export function CalendarEmbed() {
    const [view, setView] = useState<ViewKey>("month");

    const calendarSrc = useMemo(() => {
        const params = new URLSearchParams({
            src: calendarId,
            ctz: "Europe/Athens",
            mode: viewModeMap[view],
            showTabs: "0",
            showPrint: "0",
            showCalendars: "0",
            showTitle: "0",
            showDate: "1",
        });

        return `https://calendar.google.com/calendar/embed?${params.toString()}`;
    }, [view]);

    return (
        <section
            id="rankings"
            className="relative overflow-hidden bg-white py-16 sm:py-20"
            aria-labelledby="calendar-heading"
        >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-emerald-50/90 via-white to-emerald-100/60" />
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-emerald-300/40 via-emerald-100/10 to-transparent" />
            <div className="pointer-events-none absolute -bottom-32 right-16 h-72 w-72 rounded-full bg-emerald-300/25 blur-[140px]" />
            <div className="mx-auto max-w-[1440px] px-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                    className="flex flex-col gap-10"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="max-w-3xl space-y-4 text-center sm:text-left"
                    >
                        <p className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700 shadow-sm">
                            Αγώνες & Events
                        </p>
                        <h2
                            id="calendar-heading"
                            className="text-3xl font-semibold text-foreground sm:text-4xl"
                        >
                            Δες το πρόγραμμα σε πραγματικό χρόνο.
                        </h2>
                        <p className="text-base text-slate-600 sm:text-lg">
                            Τα events ενημερώνονται συνεχώς.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex gap-2 rounded-full bg-slate-100/80 p-1 text-sm text-slate-600 shadow-inner shadow-white/40">
                                {views.map(({ key, label, icon: Icon }) => {
                                    const isActive = view === key;
                                    return (
                                        <button
                                            key={key}
                                            type="button"
                                            onClick={() => setView(key)}
                                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2 focus-visible:ring-offset-white ${isActive
                                                ? "bg-white text-(--color-primary) shadow-sm"
                                                : "text-slate-600 hover:text-(--color-primary)"
                                                }`}
                                            aria-pressed={isActive}
                                        >
                                            <Icon className="h-4 w-4" aria-hidden="true" />
                                            {label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg shadow-emerald-500/10">
                            <iframe
                                key={view}
                                title={`AthensTennis Calendar ${view}`}
                                src={calendarSrc}
                                className="h-full w-full"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

