"use client";

import Link from "next/link";
import { useI18n } from "@/components/providers/i18n-provider";
import { siteConfig } from "@/data/site";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-2">
        <div>
          <p className="eyebrow text-paper/60">Ahmed Isamaldin</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-paper/78">
            {t.footer.text}
          </p>
        </div>
        <div className="grid gap-4 md:justify-items-end">
          <Link className="focus-ring text-2xl font-black uppercase tracking-brutal hover:text-accent" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </Link>
          <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.14em] text-paper/70">
            <Link className="focus-ring hover:text-paper" href={siteConfig.links.instagram}>
              Instagram
            </Link>
            <Link className="focus-ring hover:text-paper" href={siteConfig.links.linkedin}>
              LinkedIn
            </Link>
            <Link className="focus-ring hover:text-paper" href={siteConfig.links.behance}>
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
