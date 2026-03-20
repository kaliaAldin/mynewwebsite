import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPageContent } from "@/components/pages/project-page-content";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === slug);
  const previousProject = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const nextProject = index < projects.length - 1 ? projects[index + 1] : projects[0];
  return <ProjectPageContent project={project} previousProject={previousProject} nextProject={nextProject} />;
}
