export const locales = ["en", "de", "ar"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  ar: "AR"
};

export const translations = {
  en: {
    nav: { home: "Home", work: "Work", about: "About", contact: "Contact", cv: "CV" },
    common: {
      berlin: "Berlin",
      available: "Available for freelance and in-house roles",
      viewWork: "View Work",
      viewFullIndex: "View full index",
      contact: "Contact",
      viewCv: "View CV",
      downloadPdf: "Download PDF",
      startConversation: "Start a conversation",
      deliverables: "Deliverables",
      process: "Process",
      previousProject: "Previous project",
      nextProject: "Next project",
      links: "Links"
    },
    home: {
      heroIntro:
        "Ahmed Isamaldin is a designer and media artist with a Master’s in Visual Communication from weißensee kunsthochschule berlin, and previous studies in physics in Khartoum and Moscow.",
      heroMeta: "Khartoum / Berlin / Graphic Design / Research",
      selectedWorkLabel: "Selected Work",
      selectedWorkTitle: "Applied work first, research in context.",
      selectedWorkDescription:
        "Design work comes first, with research projects included as part of the wider practice.",
      servicesLabel: "Services",
      servicesTitle: "Clear design, sharp communication.",
      servicesDescription:
        "Ahmed works on commissioned, institutional, and self-initiated projects.",
      services: [
        "Graphic systems for campaigns, institutions, and publications",
        "Editorial design for books, research outputs, and cultural platforms",
        "Web and interface design with strong typographic structure",
        "Exhibition graphics, signage, and spatial communication",
        "Identity development for projects that need clarity and character",
        "Design support for research-led and culturally specific content"
      ],
      ticker: ["Graphic Design", "Editorial", "Web Design", "Exhibition Design", "Identity Systems", "Cultural Communication"]
    },
    about: {
      label: "About",
      title: "A concise profile.",
      description:
        "Ahmed Isamaldin is a designer from Khartoum, based in Berlin. Trained in physics and visual communication, he works across print, editorial, web, exhibition, and digital formats.",
      summaryTitle:
        "A Berlin-based designer.",
      summaryText:
        "Ahmed Isamaldin is a designer and media artist based in Berlin and originally from Khartoum. He studied Visual Communication at weißensee kunsthochschule berlin and previously studied physics in Khartoum and Moscow.",
      summaryBullets: [
        "His work is concerned with image-making, spatial representation, archives, and research, often in relation to Sudan. Alongside his artistic and design practice, he has worked in social support and refugee assistance in Berlin. He works across different formats, combining visual, technical, and research-based methods."
      ],
      cvSummary: "CV-style summary",
      cvText:
        "Designer and researcher working across graphic design, editorial systems, digital interfaces, and exhibitions.",
      softwareSkills: "Software and skills",
      languagesNotes: "Languages and notes",
      basedNote:
        "Based in Berlin and available for graphic design, visual design, editorial, web, and cultural communication roles."
    },
    work: {
      label: "Project Index",
      title: "Work across graphic design, editorial, web, identity, and cultural communication.",
      description:
        "Applied and hireable work appears first, while research and artistic projects remain available as part of the wider practice."
    },
    contactPage: {
      label: "Contact",
      title: "Direct and professional.",
      description:
        "For full-time roles, freelance commissions, editorial collaborations, or cultural projects, get in touch by email or through the links below.",
      primaryContact: "Primary contact",
      body:
        "Based in Berlin and open to remote, hybrid, and on-site opportunities across graphic design, visual design, editorial, web, exhibition, and cultural communication.",
      phone: "Phone"
    },
    contactCta: {
      title: "Available for graphic, editorial, digital, and cultural communication roles."
    },
    footer: {
      text:
        "Designer from Khartoum, based in Berlin."
    },
    filters: {
      all: "All",
      graphic: "Graphic Design",
      editorial: "Editorial",
      web: "Web UI/UX",
      exhibition: "Exhibition",
      identity: "Identity",
      research: "Research / Artistic Projects"
    },
    cv: {
      title: "Curriculum Vitae",
      summary:
        "Graphic and visual designer working across editorial, digital, exhibition, and cultural communication.",
      profile: "Profile",
      experience: "Experience",
      experienceTitle: "Communication and design across institutions and collaborative initiatives.",
      education: "Education",
      educationTitle: "Visual communication, media art, and a scientific background.",
      languages: "Languages",
      software: "Software",
      coding: "Coding",
      exhibitions: "Exhibitions",
      exhibitionsTitle: "Selected exhibitions and festival presentations.",
      publications: "Publications",
      publicationsTitle: "Texts, essays, and editorial contributions."
    },
    projectMeta: { year: "Year", category: "Category", tags: "Tags", role: "Role", client: "Client", tools: "Tools", notes: "System notes" }
  },
  de: {
    nav: { home: "Start", work: "Projekte", about: "Info", contact: "Kontakt", cv: "CV" },
    common: {
      berlin: "Berlin",
      available: "Verfugbar fur Freelance- und Inhouse-Stellen",
      viewWork: "Projekte ansehen",
      viewFullIndex: "Gesamten Index ansehen",
      contact: "Kontakt",
      viewCv: "CV ansehen",
      downloadPdf: "PDF herunterladen",
      startConversation: "Kontakt aufnehmen",
      deliverables: "Leistungen",
      process: "Prozess",
      previousProject: "Vorheriges Projekt",
      nextProject: "Nachstes Projekt",
      links: "Links"
    },
    home: {
      heroIntro:
        "Ahmed Isamaldin ist ein Designer aus Khartum mit Sitz in Berlin.",
      heroMeta: "Khartum / Berlin / Grafikdesign / Forschung",
      selectedWorkLabel: "Ausgewahlte Arbeiten",
      selectedWorkTitle: "Angewandte Arbeit zuerst, Forschung im Kontext.",
      selectedWorkDescription:
        "Designarbeit steht im Vordergrund, Forschungsprojekte bleiben als Teil der Praxis sichtbar.",
      servicesLabel: "Leistungen",
      servicesTitle: "Klare Gestaltung, praezise Kommunikation.",
      servicesDescription:
        "Ahmed arbeitet an beauftragten, institutionellen und selbst initiierten Projekten.",
      services: [
        "Grafische Systeme fur Kampagnen, Institutionen und Publikationen",
        "Editorial Design fur Bucher, Forschungsformate und kulturelle Plattformen",
        "Web- und Interface-Design mit klarer typografischer Struktur",
        "Ausstellungsgrafik, Signaletik und raumliche Kommunikation",
        "Identitatsentwicklung fur Projekte mit Anspruch auf Klarheit und Charakter",
        "Designunterstutzung fur forschungsnahe und kulturell spezifische Inhalte"
      ],
      ticker: ["Grafikdesign", "Editorial", "Webdesign", "Ausstellungsdesign", "Identitatssysteme", "Kulturelle Kommunikation"]
    },
    about: {
      label: "Info",
      title: "Ein kompaktes Profil.",
      description:
        "Ahmed Isamaldin ist Designer aus Khartum mit Sitz in Berlin. Mit einem Hintergrund in Physik und visueller Kommunikation arbeitet er in Print, Editorial, Web, Ausstellung und digitalen Formaten.",
      summaryTitle: "Ein in Berlin arbeitender Designer.",
      summaryText:
        "Ahmed Isamaldin arbeitet zwischen Gestaltung und Forschung.",
      summaryBullets: [
        "Arbeitet in Berlin in den Bereichen Grafikdesign, Editorial, Web und Ausstellung.",
        "Interessiert sich fur visuelle und technische Methoden im Umgang mit Gewalt, Vertreibung und kollektiver Resilienz.",
        "Verfugbar fur Studio-, Institutions-, Freelance- und kollaborative Rollen."
      ],
      cvSummary: "CV-Uberblick",
      cvText:
        "Designer und Forscher mit Fokus auf Grafikdesign, Editorial-Systeme, digitale Interfaces und Ausstellungen.",
      softwareSkills: "Software und Skills",
      languagesNotes: "Sprachen und Hinweise",
      basedNote: "Mit Sitz in Berlin und verfugbar fur Rollen in Grafikdesign, Visual Design, Editorial, Web und kultureller Kommunikation."
    },
    work: {
      label: "Projektindex",
      title: "Arbeiten in Grafikdesign, Editorial, Web, Identitat und kultureller Kommunikation.",
      description: "Angewandte und hireable Arbeiten stehen zuerst, Forschung und kuenstlerische Projekte bleiben als Teil der erweiterten Praxis sichtbar."
    },
    contactPage: {
      label: "Kontakt",
      title: "Direkt und professionell.",
      description: "Fur Festanstellungen, Freelance-Projekte, Editorial-Kooperationen oder kulturelle Formate kontaktieren Sie Ahmed per E-Mail oder uber die Links unten.",
      primaryContact: "Primarer Kontakt",
      body: "Mit Sitz in Berlin und offen fur Remote-, Hybrid- und Vor-Ort-Rollen in Grafikdesign, Visual Design, Editorial, Web, Ausstellung und kultureller Kommunikation.",
      phone: "Telefon"
    },
    contactCta: {
      title: "Verfugbar fur Rollen in Grafik, Editorial, Digitalem und kultureller Kommunikation."
    },
    footer: {
      text: "Designer aus Khartum mit Sitz in Berlin."
    },
    filters: {
      all: "Alle",
      graphic: "Grafikdesign",
      editorial: "Editorial",
      web: "Web UI/UX",
      exhibition: "Ausstellung",
      identity: "Identitat",
      research: "Forschung / Kunstlerische Projekte"
    },
    cv: {
      title: "Lebenslauf",
      summary: "Grafik- und Visual Designer mit Arbeit in Editorial, digitalen Interfaces, Ausstellung und kultureller Kommunikation.",
      profile: "Profil",
      experience: "Erfahrung",
      experienceTitle: "Kommunikation und Design in Institutionen und kollaborativen Initiativen.",
      education: "Ausbildung",
      educationTitle: "Visuelle Kommunikation, Medienkunst und eine wissenschaftliche Grundlage.",
      languages: "Sprachen",
      software: "Software",
      coding: "Coding",
      exhibitions: "Ausstellungen",
      exhibitionsTitle: "Ausgewahlte Ausstellungen und Festivalprasentationen.",
      publications: "Publikationen",
      publicationsTitle: "Texte, Essays und editoriale Beitrage."
    },
    projectMeta: { year: "Jahr", category: "Kategorie", tags: "Tags", role: "Rolle", client: "Auftraggeber", tools: "Tools", notes: "Systemnotizen" }
  },
  ar: {
    nav: { home: "الرئيسية", work: "الاعمال", about: "نبذة", contact: "اتصال", cv: "السيرة" },
    common: {
      berlin: "برلين",
      available: "متاح للعمل الحر والوظائف الداخلية",
      viewWork: "عرض الاعمال",
      viewFullIndex: "عرض الفهرس الكامل",
      contact: "اتصال",
      viewCv: "عرض السيرة",
      downloadPdf: "تحميل PDF",
      startConversation: "ابدأ محادثة",
      deliverables: "المخرجات",
      process: "العملية",
      previousProject: "المشروع السابق",
      nextProject: "المشروع التالي",
      links: "الروابط"
    },
    home: {
      heroIntro:
        "أحمد عصام الدين فنان وسائط ومصمم وباحث من الخرطوم ومقيم في برلين، يعمل عبر الطباعة والتحرير والويب وتصميم المعارض. تربط ممارسته بين الانظمة البصرية والتواصل الثقافي والانتاج الرقمي مع حس واضح بالبنية والهوية.",
      heroMeta: "الخرطوم / برلين / تصميم جرافيك / بحث",
      selectedWorkLabel: "اعمال مختارة",
      selectedWorkTitle: "المشاريع التطبيقية اولا مع وضع المشاريع البحثية في سياقها.",
      selectedWorkDescription: "يعرض هذا الموقع اعمالا تصميمية قابلة للتوظيف اولا، مع الحفاظ على حضور المشاريع التجريبية التي تشكل الممارسة.",
      servicesLabel: "الخدمات",
      servicesTitle: "وضوح بصري، انظمة قوية، ووعي ثقافي.",
      servicesDescription: "يعمل احمد عبر مشاريع مؤسسية ومكلفة ومبادرات ذاتية، مع تركيز دائم على تواصل بصري واضح ومتميز.",
      services: [
        "انظمة جرافيكية للحملات والمؤسسات والمنشورات",
        "تصميم تحريري للكتب ومخرجات البحث والمنصات الثقافية",
        "تصميم ويب وواجهات ببنية طباعية قوية",
        "تصميم معارض واشارات وتواصل مكاني",
        "بناء هويات للمشاريع التي تحتاج وضوحا وشخصية",
        "دعم تصميمي للمحتوى البحثي والثقافي"
      ],
      ticker: ["تصميم جرافيك", "تحريري", "تصميم ويب", "تصميم معارض", "انظمة هوية", "تواصل ثقافي"]
    },
    about: {
      label: "نبذة",
      title: "ملف مختصر يربط بين التصميم الجرافيكي والبحث والتواصل الثقافي.",
      description:
        "أحمد عصام الدين فنان وسائط ومصمم وباحث من الخرطوم ومقيم في برلين. تلقى تكوينا في الفيزياء والاتصال البصري ويعمل عبر الطباعة والتحرير والويب والمعارض والصيغ الرقمية.",
      summaryTitle: "مصمم مقيم في برلين تتحرك ممارسته بين التصميم الجرافيكي والبحث والتفكير المكاني.",
      summaryText:
        "يجمع أحمد بين الفن والتصميم مع خبرة في العمل الاجتماعي ودعم الهجرة. وتربط ممارسته بين البحث الفني والتحليل المكاني والعمل التعاوني.",
      summaryBullets: [
        "يقيم في برلين ويعمل عبر التصميم الجرافيكي والتحريري والويب والمعارض.",
        "يهتم بكيفية استجابة الاساليب الابداعية والتقنية للعنف والتهجير والمرونة الجماعية.",
        "متاح للعمل مع الاستوديوهات والمؤسسات والمشاريع الحرة والتعاونات الثقافية."
      ],
      cvSummary: "ملخص السيرة",
      cvText: "مصمم وباحث يعمل عبر التصميم الجرافيكي والانظمة التحريرية والواجهات الرقمية والمعارض.",
      softwareSkills: "البرامج والمهارات",
      languagesNotes: "اللغات والملاحظات",
      basedNote: "مقيم في برلين ومتاح لادوار في التصميم الجرافيكي والتصميم البصري والتحرير والويب والتواصل الثقافي."
    },
    work: {
      label: "فهرس المشاريع",
      title: "اعمال في التصميم الجرافيكي والانظمة التحريرية والويب والهوية والتواصل الثقافي.",
      description: "تظهر الاعمال التطبيقية والقابلة للتوظيف اولا، بينما تبقى المشاريع البحثية والفنية جزءا من الممارسة الاوسع."
    },
    contactPage: {
      label: "اتصال",
      title: "واضح ومباشر ومهني.",
      description: "للعمل بدوام كامل او المستقل او التعاونات التحريرية او المشاريع الثقافية، تواصل عبر البريد او الروابط ادناه.",
      primaryContact: "جهة الاتصال الرئيسية",
      body: "مقيم في برلين ومتاح لفرص العمل عن بعد او الهجين او الحضوري في التصميم الجرافيكي والبصري والتحريري والويب والمعارض والتواصل الثقافي.",
      phone: "الهاتف"
    },
    contactCta: {
      title: "متاح لادوار في التصميم الجرافيكي والتحريري والرقمي والتواصل الثقافي."
    },
    footer: {
      text: "فنان وسائط ومصمم وباحث من الخرطوم ومقيم في برلين، يعمل عبر التصميم الجرافيكي والانظمة التحريرية والويب والمعارض والتواصل الثقافي."
    },
    filters: {
      all: "الكل",
      graphic: "تصميم جرافيك",
      editorial: "تحريري",
      web: "ويب UI/UX",
      exhibition: "معارض",
      identity: "هوية",
      research: "مشاريع بحثية / فنية"
    },
    cv: {
      title: "السيرة الذاتية",
      summary: "مصمم جرافيك وبصري يعمل عبر الانظمة التحريرية والواجهات الرقمية وصيغ المعارض والتواصل الثقافي القائم على البحث.",
      profile: "الملف",
      experience: "الخبرة",
      experienceTitle: "عمل ثقافي وتواصل وتصميم عبر مؤسسات ومبادرات تعاونية.",
      education: "التعليم",
      educationTitle: "اتصال بصري وفنون وسائط واساس علمي.",
      languages: "اللغات",
      software: "البرامج",
      coding: "البرمجة",
      exhibitions: "المعارض",
      exhibitionsTitle: "معارض ومشاركات مهرجانية مختارة.",
      publications: "المنشورات",
      publicationsTitle: "نصوص ومقالات ومساهمات تحريرية."
    },
    projectMeta: { year: "السنة", category: "الفئة", tags: "الوسوم", role: "الدور", client: "الجهة", tools: "الادوات", notes: "ملاحظات النظام" }
  }
} as const;

export function isRtl(locale: Locale) {
  return locale === "ar";
}
