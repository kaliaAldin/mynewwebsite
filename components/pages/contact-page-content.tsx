"use client";

import Link from "next/link";
import { useI18n } from "@/components/providers/i18n-provider";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function ContactPageContent() {
  const { t } = useI18n();

  return (
    <section className="py-6 md:py-10">
      <div className="container-shell grid gap-8">
        <div className="border border-line bg-paper">
          <SectionHeading label={t.contactPage.label} title={t.contactPage.title} description={t.contactPage.description} />
        </div>
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="border border-line bg-ink p-5 text-paper md:p-8">
            <p className="eyebrow text-paper/60">{t.contactPage.primaryContact}</p>
            <Link href={`mailto:${siteConfig.email}`} className="focus-ring mt-4 inline-flex text-3xl font-black uppercase tracking-brutal hover:text-accent md:text-5xl">
              {siteConfig.email}
            </Link>
            <p className="mt-6 max-w-xl text-sm leading-7 text-paper/76">{t.contactPage.body}</p>
            <p className="mt-4 text-sm leading-7 text-paper/76">{t.contactPage.phone}: +49 157 77015287</p>
          </div>
          <div className="grid gap-5">
            <div className="border border-line bg-paper p-5 md:p-6">
              <p className="eyebrow text-ink/58">{t.common.links}</p>
              <div className="mt-4 grid gap-3 text-sm uppercase tracking-[0.16em]">
                <Link className="focus-ring border border-line px-4 py-3 transition-colors hover:border-ink hover:bg-accent/12" href={siteConfig.links.linkedin}>LinkedIn</Link>
                <Link className="focus-ring border border-line px-4 py-3 transition-colors hover:border-ink hover:bg-accent/12" href={siteConfig.links.instagram}>Instagram</Link>
                <Link className="focus-ring border border-line px-4 py-3 transition-colors hover:border-ink hover:bg-accent/12" href={siteConfig.links.behance}>Twitter</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
