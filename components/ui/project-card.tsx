import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group relative border border-line bg-paper transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/work/${project.slug}`} className="focus-ring absolute inset-0 z-10" aria-label={`Open ${project.title}`} />
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-fog/35">
        <Image
          src={project.featuredImage}
          alt={`${project.title} cover image`}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="grid gap-4 p-4 md:p-5">
        <div className="flex items-start justify-between gap-4 border-b border-dashed border-line pb-3">
          <div>
            <p className="eyebrow text-ink/58">{project.category}</p>
            <h3 className="mt-2 text-2xl font-black uppercase leading-none tracking-brutal md:text-3xl">
              {project.title}
            </h3>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60">{project.year}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/56">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm leading-6 text-ink/72">{project.summary}</p>
      </div>
    </article>
  );
}
