"use client";

import Link from "next/link";
import { useI18n } from "@/components/providers/i18n-provider";
import { CVDownloadButton } from "@/components/ui/cv-download-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cvData } from "@/data/cv";
import { siteConfig } from "@/data/site";

function EntryCard({ period, title, place, institution, note, description }: { period: string; title: string; place?: string; institution?: string; note?: string; description?: string }) {
  return (
    <article className="grid gap-3 border-t border-line py-4 first:border-t-0 first:pt-0">
      <p className="eyebrow text-ink/58">{period}</p>
      <div className="grid gap-2">
        <h3 className="text-xl font-black uppercase tracking-[0.08em]">{title}</h3>
        <p className="text-sm leading-6 text-ink/78">{place ?? institution}</p>
        {description ? <p className="text-sm leading-7 text-ink/74">{description}</p> : null}
        {note ? <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink/56">{note}</p> : null}
      </div>
    </article>
  );
}

function BulletList({ items }: { items: string[] }) {
  return <ul className="grid gap-3 text-sm leading-7 text-ink/76">{items.map((item) => <li key={item} className="border-t border-line pt-3 first:border-t-0 first:pt-0">{item}</li>)}</ul>;
}

const cvLocalized = {
  de: {
    profile: [
      "Grafik- und Visual Designer aus Khartum mit Sitz in Berlin. Arbeitet zwischen Print, Editorial, Web, Ausstellung und digitalem Design.",
      "Verbindet visuelle Kommunikation, kunstlerische Forschung und technische Produktion in kulturellen und institutionellen Kontexten.",
      "Verfugbar fur Rollen in Grafikdesign, Visual Design, Editorial, Web und kultureller Kommunikation."
    ]
  },
  ar: {
    profile: [
      "مصمم جرافيك وبصري من الخرطوم ومقيم في برلين، تمتد ممارسته بين الطباعة والتحرير والويب والمعارض والتصميم الرقمي.",
      "يجمع بين الاتصال البصري والبحث الفني والانتاج التقني مع خبرة في المؤسسات الثقافية والسياقات الاجتماعية.",
      "متاح لادوار في التصميم الجرافيكي والبصري والتحرير والويب والتواصل الثقافي."
    ]
  }
} as const;

export function CVPageContent() {
  const { t, locale } = useI18n();
  const profile = locale === "en" ? cvData.profile : cvLocalized[locale].profile;

  return (
    <article className="py-6 md:py-10">
      <div className="container-shell grid gap-8">
        <section className="border border-line bg-paper">
          <div className="grid gap-6 p-5 md:p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-5">
              <p className="eyebrow text-ink/58">{cvData.hero.location} / {siteConfig.title}</p>
              <h1 className="max-w-5xl text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-brutal">{siteConfig.name}</h1>
              <p className="max-w-3xl text-base leading-7 text-ink/76 md:text-lg">{t.cv.summary}</p>
            </div>
            <div className="grid content-between gap-6 border-t border-line pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <div className="grid gap-3 text-sm leading-6 text-ink/78">
                <p>{cvData.hero.address}</p>
                <Link href={`mailto:${cvData.hero.email}`}>{cvData.hero.email}</Link>
                <Link href={`tel:${cvData.hero.phone.replace(/\s+/g, "")}`}>{cvData.hero.phone}</Link>
                <Link href={cvData.hero.website} target="_blank" rel="noreferrer">{cvData.hero.website}</Link>
                <Link href={cvData.hero.github} target="_blank" rel="noreferrer">{cvData.hero.github}</Link>
              </div>
              <div className="flex flex-wrap gap-3 print:hidden">
                <CVDownloadButton href={siteConfig.pdfCvHref} download label={t.common.downloadPdf} />
                <Link href="/work" className="focus-ring inline-flex min-h-11 items-center justify-center border border-line px-5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:border-ink hover:bg-accent/12">{t.common.viewWork}</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-line bg-paper p-5 md:p-6">
            <p className="eyebrow text-ink/58">{t.cv.profile}</p>
            <div className="mt-4 grid gap-4 text-sm leading-7 text-ink/76 md:text-base">{profile.map((item) => <p key={item}>{item}</p>)}</div>
          </div>
          <div className="border border-line bg-paper">
            <SectionHeading label={t.cv.experience} title={t.cv.experienceTitle} />
            <div className="grid gap-2 px-4 pb-5 md:px-6 md:pb-6 lg:px-8">{cvData.experience.map((item) => <EntryCard key={`${item.period}-${item.title}`} {...item} />)}</div>
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="border border-line bg-paper">
            <SectionHeading label={t.cv.education} title={t.cv.educationTitle} />
            <div className="grid gap-2 px-4 pb-5 md:px-6 md:pb-6 lg:px-8">{cvData.education.map((item) => <EntryCard key={`${item.period}-${item.title}`} {...item} />)}</div>
          </div>
          <div className="grid gap-6">
            <div className="border border-line bg-paper p-5 md:p-6"><p className="eyebrow text-ink/58">{t.cv.languages}</p><div className="mt-4"><BulletList items={cvData.skills.languages} /></div></div>
            <div className="border border-line bg-paper p-5 md:p-6"><p className="eyebrow text-ink/58">{t.cv.software}</p><div className="mt-4 grid gap-2 md:grid-cols-2">{cvData.skills.software.map((item) => <span key={item} className="border border-line px-3 py-3 text-sm leading-6 text-ink/76">{item}</span>)}</div></div>
            <div className="border border-line bg-paper p-5 md:p-6"><p className="eyebrow text-ink/58">{t.cv.coding}</p><div className="mt-4 flex flex-wrap gap-2">{cvData.skills.coding.map((item) => <span key={item} className="border border-line px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink/72">{item}</span>)}</div></div>
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="border border-line bg-paper"><SectionHeading label={t.cv.exhibitions} title={t.cv.exhibitionsTitle} /><div className="px-4 pb-5 md:px-6 md:pb-6 lg:px-8"><BulletList items={cvData.exhibitions} /></div></div>
          <div className="border border-line bg-paper"><SectionHeading label={t.cv.publications} title={t.cv.publicationsTitle} /><div className="px-4 pb-5 md:px-6 md:pb-6 lg:px-8"><BulletList items={cvData.publications} /></div></div>
        </section>
      </div>
    </article>
  );
}
