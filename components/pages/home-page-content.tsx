"use client";

import Link from "next/link";
import { useI18n } from "@/components/providers/i18n-provider";
import { SectionDivider3D } from "@/components/three/section-divider-3d";
import { AboutSummary } from "@/components/ui/about-summary";
import { ContactCTA } from "@/components/ui/contact-cta";
import { Hero } from "@/components/ui/hero";
import { ProjectGrid } from "@/components/ui/project-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { Ticker } from "@/components/ui/ticker";
import { featuredProjects } from "@/data/projects";
import { localizeProjects } from "@/lib/localize-projects";

export function HomePageContent() {
  const { t, locale } = useI18n();
  const localizedFeaturedProjects = localizeProjects(featuredProjects, locale);

  return (
    <>
      <Hero />
      <Ticker />
      <section className="py-8 md:py-12">
        <div className="container-shell grid gap-8">
          <SectionHeading label={t.home.selectedWorkLabel} title={t.home.selectedWorkTitle} description={t.home.selectedWorkDescription} />
          <ProjectGrid projects={localizedFeaturedProjects} />
          <div className="flex justify-end">
            <Link href="/work" className="focus-ring inline-flex min-h-11 items-center justify-center border border-line px-5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:border-ink hover:bg-accent/12">
              {t.common.viewFullIndex}
            </Link>
          </div>
        </div>
      </section>
      <SectionDivider3D />
      <section className="py-8 md:py-12">
        <div className="container-shell grid gap-8">
          <SectionHeading label={t.home.servicesLabel} title={t.home.servicesTitle} description={t.home.servicesDescription} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.home.services.map((service) => (
              <div key={service} className="border border-line bg-paper p-5">
                <p className="text-base leading-7 text-ink/80">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container-shell">
          <AboutSummary />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
