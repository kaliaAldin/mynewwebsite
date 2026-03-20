"use client";

import { useI18n } from "@/components/providers/i18n-provider";
import type { Project } from "@/data/projects";

type ProjectMetaProps = {
  project: Project;
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  const { t } = useI18n();
  const items = [
    [t.projectMeta.year, project.year],
    [t.projectMeta.category, project.category],
    [t.projectMeta.tags, project.tags.join(", ")],
    [t.projectMeta.role, project.role],
    [t.projectMeta.client, project.client],
    [t.projectMeta.tools, project.tools.join(", ")]
  ];

  return (
    <dl className="grid gap-4 border border-line bg-paper p-4 md:grid-cols-2 md:p-6">
      {items.map(([term, detail]) => (
        <div key={term} className="border-b border-dashed border-line pb-3 last:border-b-0">
          <dt className="eyebrow text-ink/58">{term}</dt>
          <dd className="mt-2 text-sm leading-6 text-ink/80">{detail}</dd>
        </div>
      ))}
    </dl>
  );
}
