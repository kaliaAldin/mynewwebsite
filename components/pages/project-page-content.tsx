"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/providers/i18n-provider";
import { PlayWithThreeHeaderScene } from "@/components/three/play-with-three-header-scene";
import { PlayWithThreeScene } from "@/components/three/play-with-three-scene";
import { PlayWithThreeSidebarScene } from "@/components/three/play-with-three-sidebar-scene";
import { ProjectHeaderScene } from "@/components/three/project-header-scene";
import { ImageGallery } from "@/components/ui/image-gallery";
import { ProjectMeta } from "@/components/ui/project-meta";
import { type Project } from "@/data/projects";
import { localizeProject } from "@/lib/localize-projects";

export function ProjectPageContent({ project, previousProject, nextProject }: { project: Project; previousProject: Project; nextProject: Project }) {
  const { t, locale } = useI18n();
  const localizedProject = localizeProject(project, locale);
  const localizedPrevious = localizeProject(previousProject, locale);
  const localizedNext = localizeProject(nextProject, locale);
  const isPlayWithThree = project.slug === "play-with-three-js";

  return (
    <article className="py-6 md:py-10">
      <div className="container-shell grid gap-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-line bg-paper">
            <div className="grid gap-6 p-5 md:p-8">
              <p className="eyebrow text-ink/58">{localizedProject.category} / {localizedProject.year}</p>
              <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.92] tracking-brutal md:text-7xl">{localizedProject.title}</h1>
              <p className="max-w-2xl text-base leading-7 text-ink/74 md:text-lg">{localizedProject.summary}</p>
              <p className="max-w-3xl text-sm leading-7 text-ink/72 md:text-base">{localizedProject.description}</p>
            </div>
          </div>
          {isPlayWithThree ? <PlayWithThreeHeaderScene /> : <ProjectHeaderScene />}
        </div>
        <ProjectMeta project={localizedProject} />
        {isPlayWithThree ? <PlayWithThreeScene /> : null}
        <section className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-5">
            <div className="border border-line bg-paper p-5 md:p-6">
              <p className="eyebrow text-ink/58">{t.common.deliverables}</p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink/80">
                {localizedProject.deliverables.map((item) => <li key={item} className="border-b border-dashed border-line pb-3 last:border-b-0">{item}</li>)}
              </ul>
            </div>
            {localizedProject.process ? <div className="border border-line bg-paper p-5 md:p-6"><p className="eyebrow text-ink/58">{t.common.process}</p><p className="mt-4 text-sm leading-7 text-ink/76">{localizedProject.process}</p></div> : null}
            {isPlayWithThree ? <PlayWithThreeSidebarScene /> : <div className="border border-line bg-paper p-2"><div className="relative aspect-[4/5] overflow-hidden border border-line bg-fog/35"><Image src={localizedProject.featuredImage} alt={`${localizedProject.title} featured image`} fill className="object-cover" sizes="(min-width: 1024px) 28vw, 100vw" /></div></div>}
          </div>
          {isPlayWithThree ? (
            <div className="border border-line bg-paper p-5 md:p-6">
              <p className="eyebrow text-ink/58">{t.projectMeta.notes}</p>
              <div className="mt-4 grid gap-4 text-sm leading-7 text-ink/76 md:text-base">
                <p>{locale === "de" ? "Das Projekt ist als kleine Familie von Szenenvarianten aufgebaut, nicht als sich wiederholende Demo." : locale === "ar" ? "تم بناء المشروع كعائلة صغيرة من تنويعات المشاهد بدلا من عرض متكرر واحد." : "The project is structured as a small family of scene variants rather than a single repeated demo."}</p>
                <p>{locale === "de" ? "Das zentrale Motiv ist ein ringartiges Torsystem, das aus der Sprache der Website-Divider weiterentwickelt wurde." : locale === "ar" ? "يعتمد المفهوم المركزي على نظام حلقي مستمد من لغة الفواصل في الموقع ثم اعيد بناؤه كشكل مكاني اكثر تعقيدا." : "The central motif is a wheel-like torus system, adapted from the site divider and rebuilt as a more complex spatial form."}</p>
              </div>
            </div>
          ) : <ImageGallery images={localizedProject.gallery} title={localizedProject.title} aspect={localizedProject.galleryAspect} />}
        </section>
        <nav className="grid gap-4 border-t border-line pt-5 md:grid-cols-2">
          <Link href={`/work/${previousProject.slug}`} className="focus-ring border border-line p-5 transition-colors hover:border-ink hover:bg-accent/12"><p className="eyebrow text-ink/58">{t.common.previousProject}</p><p className="mt-2 text-2xl font-black uppercase tracking-brutal">{localizedPrevious.title}</p></Link>
          <Link href={`/work/${nextProject.slug}`} className="focus-ring border border-line p-5 text-right transition-colors hover:border-ink hover:bg-accent/12"><p className="eyebrow text-ink/58">{t.common.nextProject}</p><p className="mt-2 text-2xl font-black uppercase tracking-brutal">{localizedNext.title}</p></Link>
        </nav>
      </div>
    </article>
  );
}

