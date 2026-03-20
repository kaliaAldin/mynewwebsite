import type { Project } from "@/data/projects";
import { projectTranslations } from "@/data/project-translations";
import type { Locale } from "@/lib/i18n";

const categoryLabels = {
  de: {
    "Graphic Design": "Grafikdesign",
    Editorial: "Editorial",
    Web: "Web UI/UX",
    Exhibition: "Ausstellung",
    Identity: "Identitat",
    "Research / Artistic Projects": "Forschung / Kunstlerische Projekte"
  },
  ar: {
    "Graphic Design": "تصميم جرافيك",
    Editorial: "تحريري",
    Web: "ويب UI/UX",
    Exhibition: "معارض",
    Identity: "هوية",
    "Research / Artistic Projects": "مشاريع بحثية / فنية"
  }
} as const;

const tagLabels: Record<string, { de: string; ar: string }> = {
  Poster: { de: "Poster", ar: "ملصق" },
  Frontend: { de: "فرونت إند", ar: "واجهة امامية" },
  Archive: { de: "Archiv", ar: "ارشيف" },
  "Creative Coding": { de: "Creative Coding", ar: "ترميز ابداعي" },
  "Three.js": { de: "Three.js", ar: "Three.js" },
  "UX/UI": { de: "UX/UI", ar: "UX/UI" },
  Typography: { de: "Typografie", ar: "طباعة" },
  Research: { de: "Forschung", ar: "بحث" },
  Cartography: { de: "Kartografie", ar: "خرائط" },
  Game: { de: "Spiel", ar: "لعبة" },
  "3D": { de: "3D", ar: "ثلاثي الابعاد" },
  Spatial: { de: "Raumlich", ar: "مكاني" },
  Installation: { de: "Installation", ar: "تركيب" },
  AR: { de: "AR", ar: "واقع معزز" },
  Photography: { de: "Fotografie", ar: "تصوير" },
  Identity: { de: "Identitat", ar: "هوية" },
  Web: { de: "Web", ar: "ويب" },
  Editorial: { de: "Editorial", ar: "تحريري" },
  "Graphic Design": { de: "Grafikdesign", ar: "تصميم جرافيك" },
  Exhibition: { de: "Ausstellung", ar: "معرض" }
};

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "en") {
    return project;
  }

  const translation = projectTranslations[project.slug]?.[locale];
  const localizedTags = project.tags.map((tag) => tagLabels[tag]?.[locale] ?? tag);

  return {
    ...project,
    title: translation?.title ?? project.title,
    role: translation?.role ?? project.role,
    client: translation?.client ?? project.client,
    summary: translation?.summary ?? project.summary,
    description: translation?.description ?? project.description,
    deliverables: translation?.deliverables ?? project.deliverables,
    process: translation?.process ?? project.process,
    category: (categoryLabels[locale][project.category] ?? project.category) as Project["category"],
    tags: localizedTags
  };
}

export function localizeProjects(projects: Project[], locale: Locale) {
  return projects.map((project) => localizeProject(project, locale));
}

