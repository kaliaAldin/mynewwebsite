"use client";

import Link from "next/link";
import { useI18n } from "@/components/providers/i18n-provider";
import { siteConfig } from "@/data/site";

export function ContactCTA() {
  const { t } = useI18n();

  return (
    <section className="border-y border-line bg-ink text-paper">
      <div className="container-shell grid gap-6 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow text-paper/60">{t.common.startConversation}</p>
          <h2 className="mt-2 max-w-4xl text-4xl font-black uppercase leading-[0.92] tracking-brutal md:text-6xl">
            {t.contactCta.title}
          </h2>
        </div>
        <Link
          href={`mailto:${siteConfig.email}`}
          className="focus-ring inline-flex min-h-12 items-center justify-center border border-paper px-6 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-paper hover:text-ink"
        >
          {siteConfig.email}
        </Link>
      </div>
    </section>
  );
}
