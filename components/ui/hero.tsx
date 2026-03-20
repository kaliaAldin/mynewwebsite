"use client";

import Link from "next/link";
import { useI18n } from "@/components/providers/i18n-provider";
import { siteConfig } from "@/data/site";
import { HeroScene } from "@/components/three/hero-scene";
import { CVDownloadButton } from "@/components/ui/cv-download-button";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="border-b border-line">
      <div className="container-shell grid min-h-[calc(100vh-80px)] gap-8 py-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-10">
        <div className="flex flex-col justify-between border border-line bg-paper">
          <div className="grid gap-6 border-b border-line p-5 md:p-8">
            <p className="eyebrow text-ink/60">{t.common.berlin} / {t.common.available}</p>
            <h1 className="balanced-text max-w-5xl text-[clamp(3.6rem,10vw,9rem)] font-black uppercase leading-[0.9] tracking-brutal">
              Ahmed Isamaldin
            </h1>
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-base leading-7 text-ink/74 md:text-lg">{t.home.heroIntro}</p>
              <p className="eyebrow max-w-xs text-ink/58 md:text-right">{t.home.heroMeta}</p>
            </div>
          </div>
          <div className="grid gap-3 p-5 md:grid-cols-3 md:p-8">
            <Link
              href="/work"
              className="focus-ring inline-flex min-h-12 items-center justify-center border border-ink bg-ink px-5 text-sm font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              {t.common.viewWork}
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center border border-line px-5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:border-ink hover:bg-accent/12"
            >
              {t.common.contact}
            </Link>
            <CVDownloadButton href={siteConfig.cvHref} label={t.common.viewCv} />
          </div>
        </div>
        <HeroScene />
      </div>
    </section>
  );
}
