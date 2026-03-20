"use client";

import { localeLabels, locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/providers/i18n-provider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex flex-wrap gap-2">
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={cn(
            "focus-ring inline-flex min-h-11 items-center border px-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors",
            locale === item ? "border-ink bg-ink text-paper" : "border-line text-ink hover:border-ink hover:bg-accent/10"
          )}
        >
          {localeLabels[item]}
        </button>
      ))}
    </div>
  );
}
