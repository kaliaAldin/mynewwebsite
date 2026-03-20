"use client";

import { useI18n } from "@/components/providers/i18n-provider";
import { FilterableProjectGrid } from "@/components/ui/filterable-project-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { localizeProjects } from "@/lib/localize-projects";

export function WorkPageContent() {
  const { t, locale } = useI18n();
  const localizedProjects = localizeProjects(projects, locale);

  return (
    <section className="py-6 md:py-10">
      <div className="container-shell grid gap-8">
        <div className="border border-line bg-paper">
          <SectionHeading label={t.work.label} title={t.work.title} description={t.work.description} />
        </div>
        <FilterableProjectGrid projects={localizedProjects} />
      </div>
    </section>
  );
}
