"use client";

import { useI18n } from "@/components/providers/i18n-provider";
import { siteConfig } from "@/data/site";
import { CVDownloadButton } from "@/components/ui/cv-download-button";

export function AboutSummary() {
  const { t } = useI18n();

  return (
    <div className="grid gap-6 border border-line bg-paper p-5 md:grid-cols-[1.1fr_0.9fr] md:p-8">
      <div className="grid gap-4">
        <p className="eyebrow text-ink/58">{t.about.label}</p>
        <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.95] tracking-brutal md:text-5xl">
          {t.about.summaryTitle}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-ink/74 md:text-base">{t.about.summaryText}</p>
      </div>
      <div className="grid content-between gap-6 border-t border-line pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
        <ul className="grid gap-3 text-sm leading-6 text-ink/76">
          {t.about.summaryBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <CVDownloadButton href={siteConfig.cvHref} className="w-full md:w-fit" label={t.common.viewCv} />
      </div>
    </div>
  );
}
