"use client";

import { useI18n } from "@/components/providers/i18n-provider";

export function Ticker() {
  const { t } = useI18n();
  const items = t.home.ticker;

  return (
    <div className="overflow-hidden border-y border-line bg-accent/12 py-3">
      <div className="flex min-w-max gap-10 px-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink/80">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
