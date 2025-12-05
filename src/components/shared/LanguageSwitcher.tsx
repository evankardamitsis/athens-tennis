"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

const languages = [
  { code: "el", label: "ΕΛ" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 p-1 backdrop-blur">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${locale === lang.code
            ? "bg-primary-500 text-white"
            : "text-neutral-600 hover:bg-neutral-100"
            }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
