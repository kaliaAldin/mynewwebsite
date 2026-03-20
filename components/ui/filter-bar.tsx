"use client";

import { useI18n } from "@/components/providers/i18n-provider";
import { categories, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type FilterBarProps = {
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
};

export function FilterBar({ active, onChange }: FilterBarProps) {
  const { t } = useI18n();
  const labels: Record<ProjectCategory, string> = {
    All: t.filters.all,
    "Graphic Design": t.filters.graphic,
    Editorial: t.filters.editorial,
    Web: t.filters.web,
    Exhibition: t.filters.exhibition,
    Identity: t.filters.identity,
    "Research / Artistic Projects": t.filters.research
  };

  return (
    <div className="flex flex-wrap gap-2 border-y border-line py-4">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={cn(
            "focus-ring min-h-11 border px-4 text-left text-sm font-medium uppercase tracking-[0.16em] transition-colors",
            active === category ? "border-ink bg-ink text-paper" : "border-line hover:border-ink hover:bg-accent/12"
          )}
          aria-pressed={active === category}
        >
          {labels[category]}
        </button>
      ))}
    </div>
  );
}
