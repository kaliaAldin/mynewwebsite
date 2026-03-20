import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} priority={index < 3} />
      ))}
    </div>
  );
}
