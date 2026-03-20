import migratedProjectContent from "@/data/migrated-project-content.json";

export const categories = [
  "All",
  "Graphic Design",
  "Editorial",
  "Web",
  "Exhibition",
  "Identity",
  "Research / Artistic Projects"
] as const;

export type ProjectCategory = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: Exclude<ProjectCategory, "All">;
  role: string;
  client: string;
  tools: string[];
  summary: string;
  description: string;
  deliverables: string[];
  featuredImage: string;
  gallery: string[];
  tags: string[];
  featured: boolean;
  galleryAspect?: "landscape" | "portrait";
  process?: string;
};

type StoredProjectCategory = Exclude<ProjectCategory, "All">;

const baseProjects: Project[] = [
  {
    slug: "poster-design",
    title: "Poster Design",
    year: "2021",
    category: "Graphic Design",
    role: "Graphic Designer",
    client: "Selected commissions and self-initiated cultural briefs",
    tools: ["InDesign", "Illustrator", "Photoshop"],
    summary: "A poster series that treats typography, rhythm, and public visibility as a single graphic system.",
    description:
      "A focused selection of poster work built for events, institutions, and self-initiated cultural announcements. The series explores contrast, typographic tension, and the circulation of information in public space, balancing raw impact with precise hierarchy. Each composition was developed to read quickly from distance while holding enough visual density to reward a closer look.",
    deliverables: ["Poster system", "Print-ready artwork", "Digital promo adaptations"],
    featuredImage: "/images/projects/poster-design.jpg",
    gallery: ["/images/projects/poster-design.jpg"],
    tags: ["Graphic Design", "Poster", "Editorial"],
    featured: true,
    galleryAspect: "portrait",
    process:
      "The system began with type stress tests across different scales and paper formats, then moved into modular compositions that could be adapted without losing their graphic force."
  },
  {
    slug: "savvydoc-website",
    title: "Savvydoc Website",
    year: "2021",
    category: "Web",
    role: "Visual Designer / Web Designer",
    client: "Savvy Contemporary",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    summary: "A cultural platform website designed to clarify programming, archives, and institutional voice.",
    description:
      "Designed a web presence for Savvydoc that translates dense cultural programming into a readable, expandable digital system. The work focused on content architecture, interface hierarchy, and visual continuity between archive, publication, and event communication. The result is a site that feels editorial and contemporary while remaining usable for broad audiences and internal publishing workflows.",
    deliverables: ["Website design", "Component system", "Responsive templates"],
    featuredImage: "/images/projects/savvydoc-website.png",
    gallery: ["/images/projects/savvydoc-website.png"],
    tags: ["Web", "Frontend", "Archive"],
    featured: true,
    process:
      "A key challenge was reducing visual noise while preserving the institution's richness, so the interface was organized around modular content blocks and strong navigation cues."
  },
  {
    slug: "play-with-three-js",
    title: "Play with Three.js",
    year: "2026",
    category: "Web",
    role: "Creative Developer / Visual Designer",
    client: "Self-initiated",
    tools: ["Three.js", "React Three Fiber", "TypeScript", "GLSL"],
    summary: "A self-initiated browser project using spatial interaction, realtime graphics, and interface composition to show coding fluency through design.",
    description:
      "Play with Three.js is a concept project built to foreground coding skills through authored visual interaction. It explores sculptural web objects, responsive motion, and browser-based spatial composition as part of a contemporary design workflow. Rather than behaving like a demo reel, the project is framed as a design environment where interface, rendering, and interaction logic are developed together, showing technical versatility alongside visual control.",
    deliverables: ["Interactive web scene", "Creative coding prototype", "Responsive interface system"],
    featuredImage: "/images/placeholders/play-with-three-js.svg",
    gallery: ["/images/placeholders/play-with-three-js.svg"],
    tags: ["Web", "Creative Coding", "Three.js"],
    featured: false,
    process:
      "The concept focuses on how a designer can use Three.js not as spectacle, but as a structural material for layout, interaction, and atmosphere in the browser."
  },
  {
    slug: "lcc-website",
    title: "LCC Website",
    year: "2025",
    category: "Web",
    role: "Graphic and Interface Designer",
    client: "London College of Communication",
    tools: ["Figma", "Webflow", "After Effects"],
    summary: "An institutional website concept shaped through editorial sequencing and clear academic communication.",
    description:
      "This project reworked the digital identity of an academic platform into a more legible and visually confident experience. The design balances institutional clarity with an authored graphic language, using strong sectioning, dense typographic cues, and flexible templates for course, research, and event content. Motion and layout shifts were used sparingly to give the site a contemporary, responsive character.",
    deliverables: ["UX/UI design", "Motion prototypes", "Design specifications"],
    featuredImage: "/images/projects/lcc-website.jpg",
    gallery: ["/images/projects/lcc-website.jpg"],
    tags: ["UX/UI", "Web", "Frontend"],
    featured: true
  },
  {
    slug: "foood-app-design",
    title: "FOOOD - Social Intervention App Design",
    year: "2020",
    category: "Web",
    role: "Product and Visual Designer",
    client: "Startup collaboration",
    tools: ["XD", "Figma"],
    summary: "A food discovery app that combines brand personality with a practical mobile interface system.",
    description:
      "Created a visual and interaction language for a mobile food platform focused on discovery, curation, and fast browsing. The system had to feel immediate and characterful without becoming playful in a way that weakened usability. Through bold type, modular cards, and restrained color coding, the app supports scanning, trust, and a memorable brand voice across key user journeys.",
    deliverables: ["App UI", "Identity elements", "Prototype flows"],
      featuredImage: "/images/imported/foood-app-design/57b61a5a-98db-44c1-8f41-5d01084f8600_rw_600.png",
      gallery: [
        "/images/imported/foood-app-design/57b61a5a-98db-44c1-8f41-5d01084f8600_rw_600.png",
        "/images/imported/foood-app-design/89f535b7-b0af-4778-8a2d-5730fb3d5112_rw_600.png",
        "/images/imported/foood-app-design/ef5bcfa6-37a2-4a29-91c6-7ceebc49a111_rw_600.png",
        "/images/imported/foood-app-design/feee816c-790b-4ada-9875-427124547dbb_rw_600.png",
        "/images/imported/foood-app-design/featured.png"
      ],
      tags: ["UX/UI", "Web"],
      featured: true,
      galleryAspect: "portrait"
    },
  {
    slug: "samat-arabic-type-design",
    title: "SAMAT Arabic Type Design",
    year: "2021",
    category: "Graphic Design",
    role: "Type Designer / Visual Researcher",
    client: "Self-initiated",
    tools: ["Glyphs", "Illustrator", "InDesign"],
    summary: "An Arabic type exploration connecting contemporary display use with structural clarity.",
    description:
      "Samat is a type design project investigating Arabic letterform construction through rhythm, spacing, and spatial consistency. The work approaches type as both functional communication and cultural form, aiming for a voice that can perform in posters, editorial settings, and digital environments. It foregrounds precision and atmosphere in equal measure, making the project relevant for both graphic systems and experimental applications.",
    deliverables: ["Display type concept", "Specimen layouts", "Research documentation"],
    featuredImage: "/images/projects/samat-arabic-type-design.png",
    gallery: ["/images/projects/samat-arabic-type-design.png"],
    tags: ["Typography", "Research"],
    featured: true
  },
  {
    slug: "khartoum-civic-map",
    title: "Khartoum Civic MAP",
    year: "2024",
    category: "Exhibition",
    role: "Information Designer",
    client: "Civic and cultural collaboration",
    tools: ["Figma", "React", "Leaflet.js"],
    summary: "A map-based communication project translating civic memory and urban orientation into visual form.",
    description:
      "This mapping project visualizes Khartoum through civic landmarks, movement, and layered public histories. Developed as both communication tool and cultural artifact, it uses cartographic logic alongside graphic emphasis to frame the city as an active social space rather than a neutral diagram. The design language emphasizes legibility, density, and structured fragmentation to reflect the complexity of lived urban experience.",
    deliverables: ["Map design", "Exhibition panels", "Print layouts"],
    featuredImage: "/images/projects/khartoum-civic-map.png",
    gallery: ["/images/projects/khartoum-civic-map.png"],
    tags: ["UX/UI", "Web", "Cartography"],
    featured: true
  },
  {
    slug: "legacy-of-exile",
    title: "Legacy of Exile",
    year: "2023",
    category: "Editorial",
    role: "Editorial Designer",
    client: "Independent publication",
    tools: ["Blender", "Unity", "Python"],
    summary: "An editorial project organizing testimony, image, and document into a durable visual narrative.",
    description:
      "Legacy of Exile is an editorial publication focused on displacement, memory, and the transmission of personal and collective histories. The design develops a careful pacing between text-heavy sections and quieter image-led intervals, giving the material clarity without flattening its emotional charge. Typography and sequencing were used to support reading depth while maintaining a strong visual identity across print and screen outputs.",
    deliverables: ["Publication design", "Cover system", "Promotional assets"],
    featuredImage: "/images/projects/legacy-of-exile.png",
    gallery: ["/images/projects/legacy-of-exile.png"],
    tags: ["3D", "Game", "Research", "Exhibition"],
    featured: false
  },
  {
    slug: "decol-game",
    title: "Decol Game",
    year: "2023",
    category: "Research / Artistic Projects",
    role: "Visual Designer / Worldbuilding",
    client: "Self-initiated",
    tools: ["Unity", "Photoshop", "Blender"],
    summary: "A speculative game environment using interface, narrative fragments, and graphic texture as research material.",
    description:
      "Decol Game is a research-driven interactive piece that explores decolonial questions through spatial narrative, interface cues, and visual atmosphere. Rather than functioning as a conventional entertainment product, it uses game language as a design method to stage attention, friction, and reading. The visual system bridges environmental form, typography, and texture to create a world that feels fragmented yet purposeful.",
    deliverables: ["Interactive prototype", "Visual system", "Scene assets"],
    featuredImage: "/images/projects/decol-game.png",
    gallery: ["/images/projects/decol-game.png"],
    tags: ["Game", "Research", "3D"],
    featured: false
  },
  {
    slug: "theodor-platz",
    title: "Theodor Platz",
    year: "2021",
    category: "Exhibition",
    role: "Spatial Graphic Designer",
    client: "Site-specific exhibition project",
    tools: ["Illustrator", "SketchUp", "InDesign", "Blender"],
    summary: "A spatial communication proposal connecting signage, context, and public movement.",
    description:
      "Theodor Platz examines how graphic interventions can guide movement and frame interpretation within a public exhibition setting. The design combines environmental text, modular signage, and architectural reference points to create an experience that is both wayfinding system and narrative layer. It emphasizes durable graphic decisions that can operate across distance, material surfaces, and changing visitor paths.",
    deliverables: ["Exhibition graphics", "Signage system", "Spatial mockups"],
    featuredImage: "/images/projects/theodor-platz.jpg",
    gallery: ["/images/projects/theodor-platz.jpg"],
    tags: ["3D", "Exhibition", "Spatial"],
    featured: false
  },
  {
    slug: "object-of-austerity",
    title: "Object of Austerity",
    year: "2022",
    category: "Exhibition",
    role: "Visual Researcher",
    client: "Self-initiated",
    tools: ["Blender", "InDesign", "Photoshop"],
    summary: "A material and visual study of scarcity, infrastructure, and controlled display.",
    description:
      "Object of Austerity uses image composition, object rendering, and editorial framing to investigate economies of reduction and the aesthetics of constraint. The project sits between exhibition concept and visual essay, using speculative objects as prompts for political reading. Its importance within the portfolio is in showing a rigorous conceptual practice that still operates through strong formal decision-making.",
    deliverables: ["Rendered object studies", "Research layouts", "Exhibition mockups"],
    featuredImage: "/images/projects/object-of-austerity.jpg",
    gallery: ["/images/projects/object-of-austerity.jpg"],
    tags: ["Installation", "AR", "Typography", "Research"],
    featured: false
  },
  {
    slug: "tales-of-boats",
    title: "Tales of Boats",
    year: "2023",
    category: "Editorial",
    role: "Publication Designer",
    client: "Independent cultural project",
    tools: ["Blender", "Unity", "After Effects"],
    summary: "A publication where image pacing and typographic restraint support oral and maritime histories.",
    description:
      "Tales of Boats is an editorial piece built around memory, storytelling, and maritime movement. The design uses measured typography, cropped image sequences, and disciplined whitespace to let narrative texture surface without over-stylization. It demonstrates a quieter side of the practice: careful editing, attention to reading tempo, and an ability to let form support rather than dominate content.",
    deliverables: ["Book design", "Editorial spreads", "Print production setup"],
    featuredImage: "/images/projects/tales-of-boats.png",
    gallery: ["/images/projects/tales-of-boats.png"],
    tags: ["3D", "Game", "Research", "Exhibition"],
    featured: false
  },
  {
    slug: "resistance-of-the-rhizome",
    title: "The Resistance of the Rhizome",
    year: "2020",
    category: "Research / Artistic Projects",
    role: "Designer / Researcher",
    client: "Self-initiated",
    tools: ["Blender", "Unity", "Archive"],
    summary: "A visual research project turning distributed growth and resistance into a system of image and motion.",
    description:
      "Resistance of the Rhizome explores networked structures, non-linear narrative, and distributed political form through graphic compositions and moving image tests. The project is experimental, but the design decisions remain disciplined, demonstrating how conceptual research can still produce transferable skills in systems thinking, sequencing, and communication design. It adds depth without displacing the portfolio's applied focus.",
    deliverables: ["Research visuals", "Motion studies", "Presentation layouts"],
    featuredImage: "/images/projects/resistance-of-the-rhizome.png",
    gallery: ["/images/projects/resistance-of-the-rhizome.png"],
    tags: ["3D", "Game", "Research"],
    featured: false
  },
  {
    slug: "mapping-cabral",
    title: "Mapping Cabral Installation",
    year: "2019",
    category: "Research / Artistic Projects",
    role: "Information and Editorial Designer",
    client: "Research publication",
    tools: ["Illustrator", "InDesign", "QGIS"],
    summary: "An editorial cartography project weaving political history with visual orientation.",
    description:
      "Mapping Cabral combines historical research, cartographic language, and editorial pacing to visualize political routes, influence, and reference. It was designed to make dense material legible without neutralizing its urgency, using maps, timelines, and textual framing devices as a coordinated system. The project demonstrates both visual discipline and the ability to work with layered, research-heavy content.",
    deliverables: ["Editorial map spreads", "Timeline graphics", "Research publication design"],
    featuredImage: "/images/projects/mapping-cabral.jpg",
    gallery: ["/images/projects/mapping-cabral.jpg"],
    tags: ["Research", "Exhibition", "Cartography"],
    featured: false
  },
  {
    slug: "nation-or-not",
    title: "Nation or Not - Anticolonial Cartography",
    year: "2018",
    category: "Research / Artistic Projects",
    role: "Graphic Designer / Researcher",
    client: "Self-initiated",
    tools: ["InDesign", "Illustrator", "Photoshop"],
    summary: "A publication-led inquiry into symbols, borders, and unstable national imagery.",
    description:
      "Nation or Not studies how nations are represented, contested, and materially reproduced through visual culture. Built as a publication and graphic research framework, it juxtaposes symbols, maps, and textual fragments to question the stability of official forms. In the portfolio it works as evidence of cultural depth and a sharp editorial eye, while remaining clearly grounded in design execution.",
    deliverables: ["Publication concept", "Graphic research archive", "Exhibition-ready panels"],
    featuredImage: "/images/projects/nation-or-not.png",
    gallery: ["/images/projects/nation-or-not.png"],
    tags: ["Editorial", "Cartography"],
    featured: false
  },
  {
    slug: "welcome-in-germany",
    title: "Welcome in Germany",
    year: "2017",
    category: "Graphic Design",
    role: "Communication Designer",
    client: "Social communication project",
    tools: ["Illustrator", "InDesign"],
    summary: "A public-facing communication system designed to make information accessible and direct.",
    description:
      "Welcome in Germany is a communication design project built around orientation, accessibility, and public clarity. The work translates practical information into a coherent visual system that feels open and direct rather than bureaucratic. It highlights the ability to design for audiences beyond the design field itself, using structure, iconography, and typography to support immediate understanding.",
    deliverables: ["Information graphics", "Print materials", "Animated social assets"],
    featuredImage: "/images/projects/welcome-in-germany.jpg",
    gallery: ["/images/projects/welcome-in-germany.jpg"],
    tags: ["Editorial", "Research"],
    featured: false
  },
  {
    slug: "pool-untitled",
    title: "Pool Untitled",
    year: "2020",
    category: "Research / Artistic Projects",
    role: "Visual Artist / Designer",
    client: "Self-initiated",
    tools: ["Unity", "Blender", "After Effects"],
    summary: "A photographic and graphic study of surface, stillness, and constructed atmosphere.",
    description:
      "Pool Untitled is a quieter image-based project focused on texture, reflection, and suspended space. Through cropping, sequencing, and restrained editorial framing, the work investigates how mood can emerge from minimal material. Within the portfolio it functions as a closing note that keeps a strong authorship present without confusing the overall emphasis on applied graphic and visual design.",
    deliverables: ["Photographic series", "Printed zine", "Exhibition images"],
    featuredImage: "/images/projects/pool-untitled.png",
    gallery: ["/images/projects/pool-untitled.png"],
    tags: ["Research", "Editorial", "Photography"],
    featured: false
  }
];

const migratedProjectMap = new Map(migratedProjectContent.map((item) => [item.slug, item]));

function cleanImportedText(text: string) {
  return text
    .replace(/Â/g, "")
    .replace(/Ã¼/g, "ü")
    .replace(/Ã¶/g, "ö")
    .replace(/Ã¤/g, "ä")
    .replace(/ÃŸ/g, "ß")
    .replace(/â€™/g, "’")
    .replace(/â€œ/g, "“")
    .replace(/â€/g, "”")
    .replace(/â€“/g, "–")
    .replace(/ØµÙ…Øª/g, "Samat")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function mergeGallery(existing: string[], incoming: string[]) {
  const filteredIncoming = incoming.filter((image) => image.includes("_rw_") || image.includes("_rwc_"));
  const source = filteredIncoming.length > 0 ? filteredIncoming : incoming;
  return Array.from(new Set(source)).slice(0, 12).length > 0 ? Array.from(new Set(source)).slice(0, 12) : existing;
}

function extFromUrl(url: string) {
  const withoutQuery = url.split("?")[0];
  const match = withoutQuery.match(/\.(png|jpg|jpeg|webp)$/i);
  return match ? `.${match[1].toLowerCase()}` : ".jpg";
}

function localizeFeaturedImage(slug: string, remoteUrl: string) {
  return `/images/imported/${slug}/featured${extFromUrl(remoteUrl)}`;
}

function localizeGalleryImages(slug: string, remoteUrls: string[]) {
  return remoteUrls.map((url, index) => `/images/imported/${slug}/gallery-${String(index + 1).padStart(2, "0")}${extFromUrl(url)}`);
}

function filterBrokenLocalizedImages(slug: string, images: string[], featuredImage: string) {
  const brokenBySlug: Record<string, string[]> = {
    "foood-app-design": [
      "gallery-01.png",
      "gallery-02.png",
      "gallery-03.png",
      "gallery-04.png",
      "gallery-05.png",
      "gallery-06.png"
    ],
    "khartoum-civic-map": ["gallery-03.png", "gallery-09.png", "gallery-10.png"],
    "resistance-of-the-rhizome": ["gallery-11.jpeg"]
  };

  const broken = new Set(brokenBySlug[slug] ?? []);
  const filtered = images.filter((image) => !broken.has(image.split("/").pop() ?? ""));
  return filtered.length > 0 ? filtered : [featuredImage];
}

function buildSummary(text: string, fallback: string) {
  const cleaned = cleanImportedText(text).split("\n")[0]?.trim();

  if (!cleaned) {
    return fallback;
  }

  if (cleaned.length <= 170) {
    return cleaned;
  }

  return `${cleaned.slice(0, 167).trimEnd()}...`;
}

export const projects: Project[] = baseProjects.map((project) => {
  const imported = migratedProjectMap.get(project.slug);

  if (!imported) {
    return project;
  }

  const localizedFeaturedImage = imported.importedFeaturedImage
    ? localizeFeaturedImage(project.slug, imported.importedFeaturedImage)
    : project.featuredImage;
  const localizedGallery = imported.importedGallery?.length
    ? filterBrokenLocalizedImages(
        project.slug,
        localizeGalleryImages(project.slug, mergeGallery(project.gallery, imported.importedGallery)),
        localizedFeaturedImage
      )
    : project.gallery;

  return {
    ...project,
    title: imported.importedTitle || project.title,
    year: imported.importedYear || project.year,
    category:
      (
        {
          "welcome-in-germany": "Identity",
          "foood-app-design": "Identity",
          "lcc-website": "Identity",
          "savvydoc-website": "Identity"
        }[project.slug] as StoredProjectCategory | undefined
    ) ||
      ((imported.importedCategory as StoredProjectCategory | undefined) || project.category),
    summary: imported.importedDescription ? buildSummary(imported.importedDescription, project.summary) : project.summary,
    description: imported.importedDescription ? cleanImportedText(imported.importedDescription) : project.description,
    featuredImage: project.slug === "foood-app-design" ? project.featuredImage : localizedFeaturedImage,
    gallery: project.slug === "foood-app-design" ? project.gallery : localizedGallery,
    tags: imported.importedTags?.length ? [...imported.importedTags] : project.tags
  };
});

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
