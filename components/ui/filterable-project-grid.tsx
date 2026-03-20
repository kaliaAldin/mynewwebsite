"use client";

import { useMemo, useState } from "react";
import { FilterBar } from "@/components/ui/filter-bar";
import { ProjectGrid } from "@/components/ui/project-grid";
import { type Project, type ProjectCategory } from "@/data/projects";

type FilterableProjectGridProps = {
  projects: Project[];
};

export function FilterableProjectGrid({ projects }: FilterableProjectGridProps) {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (active === "All") {
      return projects;
    }

    if (active === "Web") {
      return projects.filter(
        (project) =>
          project.category === "Web" ||
          project.tags.includes("Web") ||
          project.tags.includes("UX/UI")
      );
    }

    if (active === "Editorial") {
      return projects.filter(
        (project) =>
          project.category === "Editorial" ||
          project.tags.includes("Editorial")
      );
    }

    if (active === "Identity") {
      return projects.filter(
        (project) =>
          project.category === "Identity" ||
          project.tags.includes("Identity")
      );
    }

    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <div className="grid gap-8">
      <FilterBar active={active} onChange={setActive} />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
