import type { Locale } from "@/lib/i18n";

type ProjectTranslation = {
  title?: string;
  role?: string;
  client?: string;
  summary?: string;
  description?: string;
  deliverables?: string[];
  process?: string;
};

type TranslationMap = Record<string, Partial<Record<Exclude<Locale, "en">, ProjectTranslation>>>;

export const projectTranslations: TranslationMap = {
  "poster-design": {
    de: {
      title: "Poster Design",
      role: "Grafikdesigner",
      client: "Ausgewahlte Auftragsarbeiten und selbst initiierte kulturelle Briefings",
      summary: "Eine Posterreihe, die Typografie, Rhythmus und offentliche Sichtbarkeit als gemeinsames grafisches System behandelt.",
      description:
        "Eine konzentrierte Auswahl von Posterarbeiten fur Veranstaltungen, Institutionen und selbst initiierte kulturelle Anlasse. Die Serie untersucht Kontrast, typografische Spannung und die Zirkulation von Information im offentlichen Raum und verbindet rohe Wirkung mit praziser Hierarchie.",
      deliverables: ["Postersystem", "Druckfertige Gestaltung", "Digitale Adaptionen"],
      process:
        "Das System begann mit Typografie-Tests in unterschiedlichen Formaten und wurde anschliessend zu modularen Kompositionen weiterentwickelt."
    },
    ar: {
      title: "تصميم الملصقات",
      role: "مصمم جرافيك",
      client: "تكليفات مختارة ومشاريع ثقافية ذاتية",
      summary: "سلسلة ملصقات تتعامل مع الطباعة والايقاع والظهور العام كنظام بصري واحد.",
      description:
        "مجموعة مركزة من اعمال الملصقات لمؤسسات وفعاليات ومشاريع ثقافية ذاتية. تستكشف السلسلة التباين والتوتر الطباعي وتداول المعلومة في الفضاء العام مع موازنة الاثر البصري بالوضوح البنيوي.",
      deliverables: ["نظام ملصقات", "ملفات جاهزة للطباعة", "نسخ رقمية ترويجية"],
      process: "بدأ العمل باختبارات طباعية على مقاسات مختلفة ثم تطور الى تركيبات معيارية يمكن تكييفها من دون فقدان قوتها."
    }
  },
  "savvydoc-website": {
    de: {
      title: "Savvydoc Website",
      role: "Visual Designer / Web Designer",
      client: "SAVVY Contemporary",
      summary: "Eine Kulturplattform-Website, die Programm, Archiv und institutionelle Stimme klarer organisiert.",
      description:
        "Eine Webprasenz fur Savvydoc, die dichte kulturelle Programme in ein lesbares und erweiterbares digitales System ubersetzt. Im Zentrum standen Inhaltsarchitektur, Interface-Hierarchie und visuelle Kontinuitat zwischen Archiv, Publikation und Veranstaltungsformaten.",
      deliverables: ["Webdesign", "Komponentensystem", "Responsive Templates"],
      process: "Die zentrale Herausforderung bestand darin, visuelles Rauschen zu reduzieren und gleichzeitig die inhaltliche Dichte der Institution zu bewahren."
    },
    ar: {
      title: "موقع سافي دوك",
      role: "مصمم بصري / مصمم ويب",
      client: "سافي كونتيمبوراري",
      summary: "منصة ثقافية رقمية صممت لتوضيح البرمجة والارشيف والصوت المؤسسي.",
      description:
        "تصميم حضور ويب لمشروع Savvydoc يحول البرمجة الثقافية الكثيفة الى نظام رقمي قابل للقراءة والتوسع. ركز العمل على بنية المحتوى وتسلسل الواجهة والاستمرارية البصرية بين الارشيف والمنشورات والفعاليات.",
      deliverables: ["تصميم موقع", "نظام مكونات", "قوالب متجاوبة"],
      process: "كان التحدي الاساسي هو تقليل الضجيج البصري مع الحفاظ على غنى المؤسسة وتعقيدها."
    }
  },
  "play-with-three-js": {
    de: {
      title: "Play with Three.js",
      role: "Creative Developer / Visual Designer",
      client: "Eigeninitiativ",
      summary: "Ein selbst initiiertes Browserprojekt, das Coding-Fahigkeiten uber Raum, Echtzeitgrafik und Interface-Komposition sichtbar macht.",
      description:
        "Play with Three.js ist ein Konzeptprojekt, das Coding-Skills durch gestaltete visuelle Interaktion in den Vordergrund stellt. Es untersucht skulpturale Webobjekte, responsive Bewegung und browserbasierte Raumkomposition als Teil eines zeitgenossischen Design-Workflows.",
      deliverables: ["Interaktive Webszene", "Creative-Coding-Prototyp", "Responsives Interface-System"],
      process: "Das Projekt versteht Three.js nicht als Spektakel, sondern als strukturelles Material fur Layout, Interaktion und Atmosphare."
    },
    ar: {
      title: "تجربة مع Three.js",
      role: "مطور ابداعي / مصمم بصري",
      client: "مبادرة ذاتية",
      summary: "مشروع متصفح ذاتي يبرز المهارات البرمجية عبر التفاعل المكاني والرسوم الزمنية وبناء الواجهة.",
      description:
        "هذا مشروع مفاهيمي صمم لاظهار المهارات البرمجية من خلال تفاعل بصري مؤلف بعناية. يستكشف اجساما نحتية على الويب وحركة متجاوبة وتكوينا مكانيا داخل المتصفح كجزء من سير عمل تصميمي معاصر.",
      deliverables: ["مشهد ويب تفاعلي", "نموذج اولي للترميز الابداعي", "نظام واجهة متجاوب"],
      process: "يركز المفهوم على استخدام Three.js كبنية تصميمية للغلاف الجوي والتفاعل وليس كاستعراض بصري فقط."
    }
  },
  "lcc-website": {
    de: {
      title: "LCC Website",
      role: "Grafik- und Interface-Designer",
      client: "London College of Communication",
      summary: "Ein institutionelles Website-Konzept mit editorialer Sequenzierung und klarer akademischer Kommunikation.",
      description:
        "Dieses Projekt uberarbeitete die digitale Identitat einer akademischen Plattform zu einem lesbareren und visuell selbstbewussteren Erlebnis. Es verbindet institutionelle Klarheit mit einer gestalteten grafischen Sprache.",
      deliverables: ["UX/UI-Design", "Motion-Prototypen", "Design-Spezifikationen"]
    },
    ar: {
      title: "موقع LCC",
      role: "مصمم جرافيك وواجهات",
      client: "كلية لندن للاتصال",
      summary: "مفهوم لموقع مؤسسي تشكله تسلسلات تحريرية وتواصل اكاديمي واضح.",
      description:
        "يعيد هذا المشروع صياغة الهوية الرقمية لمنصة اكاديمية في تجربة اكثر وضوحا وثقة بصريا. يوازن التصميم بين الوضوح المؤسسي ولغة جرافيكية مؤلفة بعناية.",
      deliverables: ["تصميم UX/UI", "نماذج حركة", "مواصفات تصميم"]
    }
  },
  "foood-app-design": {
    de: {
      title: "FOOOD - Social Intervention App Design",
      role: "Product- und Visual Designer",
      client: "Startup-Kollaboration",
      summary: "Eine Food-Discovery-App, die Markencharakter mit einem praktischen mobilen Interface-System verbindet.",
      description:
        "Entwicklung einer visuellen und interaktiven Sprache fur eine mobile Food-Plattform mit Fokus auf Entdeckung, Kuratierung und schnelles Browsen. Das System sollte charaktervoll wirken, ohne die Nutzbarkeit zu schwachen.",
      deliverables: ["App UI", "Identity-Elemente", "Prototyp-Flows"]
    },
    ar: {
      title: "FOOOD - تصميم تطبيق تدخل اجتماعي",
      role: "مصمم منتج وبصري",
      client: "تعاون ناشئ",
      summary: "تطبيق لاكتشاف الطعام يجمع بين شخصية الهوية وواجهة موبايل عملية.",
      description:
        "بناء لغة بصرية وتفاعلية لمنصة طعام على الهاتف تركز على الاكتشاف والتنظيم والتصفح السريع. كان على النظام ان يكون ذا شخصية واضحة من دون ان يضعف قابلية الاستخدام.",
      deliverables: ["واجهة التطبيق", "عناصر الهوية", "تدفقات نموذجية"]
    }
  },
  "samat-arabic-type-design": {
    de: {
      title: "SAMAT Arabic Type Design",
      role: "Type Designer / Visual Researcher",
      client: "Eigeninitiativ",
      summary: "Eine arabische Typografie-Studie zwischen zeitgenossischem Display-Einsatz und struktureller Klarheit.",
      description:
        "Samat untersucht arabische Buchstabenformen uber Rhythmus, Abstand und raumliche Konsistenz. Das Projekt versteht Typografie zugleich als funktionale Kommunikation und kulturelle Form.",
      deliverables: ["Display-Schriftkonzept", "Specimen-Layouts", "Forschungsdokumentation"]
    },
    ar: {
      title: "تصميم الخط العربي سامات",
      role: "مصمم خطوط / باحث بصري",
      client: "مبادرة ذاتية",
      summary: "استكشاف طباعي عربي يربط الاستخدام المعاصر للعرض بالوضوح البنيوي.",
      description:
        "يبحث مشروع سامات في بناء الحرف العربي من خلال الايقاع والمسافات والاتساق المكاني، ويتعامل مع الخط كوسيلة تواصل وكشكل ثقافي في الوقت نفسه.",
      deliverables: ["مفهوم خط عرض", "نماذج عرض", "توثيق بحثي"]
    }
  },
  "khartoum-civic-map": {
    de: {
      title: "Khartoum Civic Map",
      role: "Informationsdesigner",
      client: "Zivile und kulturelle Kollaboration",
      summary: "Ein kartografisches Kommunikationsprojekt, das urbane Erinnerung und Orientierung in visuelle Form ubersetzt.",
      description:
        "Dieses Mapping-Projekt visualisiert Khartum uber Orientierungspunkte, Bewegung und geschichtete offentliche Erinnerungen. Es verbindet kartografische Logik mit grafischer Betonung und zeigt die Stadt als aktiven sozialen Raum.",
      deliverables: ["Kartendesign", "Ausstellungspanels", "Printlayouts"]
    },
    ar: {
      title: "خريطة الخرطوم المدنية",
      role: "مصمم معلومات",
      client: "تعاون مدني وثقافي",
      summary: "مشروع تواصلي قائم على الخرائط يترجم الذاكرة المدنية والتوجيه الحضري الى صيغة بصرية.",
      description:
        "يصوّر هذا المشروع الخرطوم عبر المعالم والحركة والتواريخ العامة المتراكبة، مستخدما منطق الخرائط مع تأكيدات جرافيكية تقرأ المدينة كمساحة اجتماعية حية.",
      deliverables: ["تصميم خريطة", "لوحات معرض", "تصاميم مطبوعة"]
    }
  },
  "legacy-of-exile": {
    de: {
      title: "Legacy of Exile",
      role: "Editorial Designer",
      client: "Unabhangige Publikation",
      summary: "Ein Editorial-Projekt, das Zeugnis, Bild und Dokument zu einer tragfahigen visuellen Erzahlung ordnet.",
      description:
        "Legacy of Exile ist eine Publikation uber Vertreibung, Erinnerung und die Weitergabe personlicher und kollektiver Geschichten. Das Design entwickelt einen sorgfaltigen Rhythmus zwischen textlastigen und bildgetragenen Abschnitten.",
      deliverables: ["Publikationsdesign", "Coversystem", "Promotionmaterialien"]
    },
    ar: {
      title: "ارث المنفى",
      role: "مصمم تحريري",
      client: "منشور مستقل",
      summary: "مشروع تحريري ينظم الشهادة والصورة والوثيقة ضمن سرد بصري متماسك.",
      description:
        "منشور يركز على التهجير والذاكرة وانتقال السرديات الشخصية والجماعية، ويطوّر ايقاعا مدروسا بين المقاطع النصية الكثيفة والفواصل الصورية الهادئة.",
      deliverables: ["تصميم منشور", "نظام غلاف", "مواد ترويجية"]
    }
  },
  "decol-game": {
    de: {
      title: "Decol Game",
      role: "Visual Designer / Worldbuilding",
      client: "Eigeninitiativ",
      summary: "Eine spekulative Spielumgebung, die Interface, Erzahlfragmente und grafische Textur als Forschungsmaterial nutzt.",
      description:
        "Decol Game ist ein forschungsgetriebenes interaktives Projekt, das dekoloniale Fragen uber Raum, Interface-Hinweise und visuelle Atmosphare verhandelt.",
      deliverables: ["Interaktiver Prototyp", "Visuelles System", "Szenen-Assets"]
    },
    ar: {
      title: "لعبة ديكول",
      role: "مصمم بصري / بناء عوالم",
      client: "مبادرة ذاتية",
      summary: "بيئة لعب تخيلية تستخدم الواجهة وشظايا السرد والملمس الجرافيكي كمادة بحثية.",
      description:
        "عمل تفاعلي بحثي يستكشف الاسئلة التفكيكية والاستعمارية من خلال السرد المكاني واشارات الواجهة والجو البصري.",
      deliverables: ["نموذج تفاعلي", "نظام بصري", "عناصر مشهد"]
    }
  },
  "theodor-platz": {
    de: {
      title: "Theodor Platz",
      role: "Raumgrafik-Designer",
      client: "Ortsspezifisches Ausstellungsprojekt",
      summary: "Ein Vorschlag fur raumliche Kommunikation zwischen Signaletik, Kontext und offentlichen Bewegungen.",
      description:
        "Theodor Platz untersucht, wie grafische Eingriffe Bewegung lenken und Interpretation im offentlichen Ausstellungsraum rahmen konnen.",
      deliverables: ["Ausstellungsgrafik", "Signaletik-System", "Raum-Mockups"]
    },
    ar: {
      title: "ثيودور بلاتس",
      role: "مصمم جرافيك مكاني",
      client: "مشروع معرض موقعي",
      summary: "مقترح للتواصل المكاني يربط الاشارات بالسياق وحركة الجمهور.",
      description:
        "يفحص المشروع كيف يمكن للتدخلات الجرافيكية ان توجه الحركة وتؤطر التلقي داخل فضاء عرض عام.",
      deliverables: ["جرافيك معرض", "نظام اشارات", "نماذج مكانية"]
    }
  },
  "object-of-austerity": {
    de: {
      title: "Object of Austerity",
      role: "Visueller Forscher",
      client: "Eigeninitiativ",
      summary: "Eine materielle und visuelle Studie uber Knappheit, Infrastruktur und kontrollierte Darstellung.",
      description:
        "Object of Austerity untersucht uber Bildkomposition, Objekt-Rendering und editoriale Rahmung die Okonomie der Reduktion und die Asthetik des Mangels.",
      deliverables: ["Gerenderte Objektstudien", "Forschungslayouts", "Ausstellungs-Mockups"]
    },
    ar: {
      title: "موضوع التقشف",
      role: "باحث بصري",
      client: "مبادرة ذاتية",
      summary: "دراسة مادية وبصرية حول الندرة والبنية التحتية والعرض المضبوط.",
      description:
        "يستخدم المشروع تكوين الصورة ورندر الاجسام والاطار التحريري للتحقيق في اقتصاديات التقليل وجماليات القيد.",
      deliverables: ["دراسات اجسام مرندرة", "صفحات بحثية", "نماذج معرض"]
    }
  },
  "tales-of-boats": {
    de: {
      title: "Tales of Boats",
      role: "Publikationsdesigner",
      client: "Unabhangiges Kulturprojekt",
      summary: "Eine Publikation, in der Bildrhythmus und typografische Zuruckhaltung maritime und orale Erzahlungen tragen.",
      description:
        "Tales of Boats ist ein Editorial-Projekt uber Erinnerung, Storytelling und maritime Bewegung, das mit gemessener Typografie und ruhigen Bildfolgen arbeitet.",
      deliverables: ["Buchgestaltung", "Editorial-Spreads", "Druckproduktion"]
    },
    ar: {
      title: "حكايات القوارب",
      role: "مصمم منشورات",
      client: "مشروع ثقافي مستقل",
      summary: "منشور يدعم فيه ايقاع الصورة وضبط الطباعة السرديات الشفوية والبحرية.",
      description:
        "قطعة تحريرية مبنية حول الذاكرة والحكاية والحركة البحرية، تستخدم طباعة منضبطة وتسلسلات صورية مقصوصة ومساحات بيضاء مدروسة.",
      deliverables: ["تصميم كتاب", "صفحات تحريرية", "اعداد للطباعة"]
    }
  },
  "resistance-of-the-rhizome": {
    de: {
      title: "The Resistance of the Rhizome",
      role: "Designer / Forscher",
      client: "Eigeninitiativ",
      summary: "Ein visuelles Forschungsprojekt, das verteiltes Wachstum und Widerstand in ein System aus Bild und Bewegung ubersetzt.",
      description:
        "Das Projekt untersucht Netzwerke, nichtlineare Narration und verteilte politische Form durch Grafik, Komposition und Bewegtbildstudien.",
      deliverables: ["Forschungsvisuals", "Motion-Studien", "Prasentationslayouts"]
    },
    ar: {
      title: "مقاومة الجذمور",
      role: "مصمم / باحث",
      client: "مبادرة ذاتية",
      summary: "مشروع بحث بصري يحول النمو المتوزع والمقاومة الى نظام من الصورة والحركة.",
      description:
        "يستكشف المشروع البنى الشبكية والسرد غير الخطي والاشكال السياسية الموزعة عبر تركيبات جرافيكية وتجارب صورة متحركة.",
      deliverables: ["مواد بحث بصرية", "دراسات حركة", "تصاميم عرض"]
    }
  },
  "mapping-cabral": {
    de: {
      title: "Mapping Cabral Installation",
      role: "Informations- und Editorial-Designer",
      client: "Forschungspublikation",
      summary: "Ein editoriales Kartografieprojekt, das politische Geschichte mit visueller Orientierung verwebt.",
      description:
        "Mapping Cabral verbindet historische Forschung, kartografische Sprache und editoriale Rhythmisierung, um politische Routen, Einflusse und Referenzen sichtbar zu machen.",
      deliverables: ["Kartografische Editorial-Spreads", "Timeline-Grafiken", "Publikationsdesign"]
    },
    ar: {
      title: "ترسيم كابرال",
      role: "مصمم معلومات وتحرير",
      client: "منشور بحثي",
      summary: "مشروع خرائطي تحريري ينسج التاريخ السياسي مع التوجيه البصري.",
      description:
        "يجمع المشروع بين البحث التاريخي ولغة الخرائط والايقاع التحريري لتصوير المسارات والتأثيرات السياسية ضمن نظام بصري متماسك.",
      deliverables: ["صفحات خرائط تحريرية", "رسوم خط زمني", "تصميم منشور بحثي"]
    }
  },
  "nation-or-not": {
    de: {
      title: "Nation or Not - Anticolonial Cartography",
      role: "Grafikdesigner / Forscher",
      client: "Eigeninitiativ",
      summary: "Eine publizistische Untersuchung zu Symbolen, Grenzen und instabilen nationalen Bildordnungen.",
      description:
        "Nation or Not untersucht, wie Nationen uber visuelle Kultur dargestellt, umkampft und materiell reproduziert werden.",
      deliverables: ["Publikationskonzept", "Grafisches Forschungsarchiv", "Ausstellungsreife Panels"]
    },
    ar: {
      title: "وطن ام لا - خرائط مناهضة للاستعمار",
      role: "مصمم جرافيك / باحث",
      client: "مبادرة ذاتية",
      summary: "بحث نشراتي في الرموز والحدود والصور الوطنية غير المستقرة.",
      description:
        "يدرس المشروع كيف تمثل الامم وتتنازع وتعاد ماديا عبر الثقافة البصرية، من خلال جمع الرموز والخرائط والشذرات النصية.",
      deliverables: ["مفهوم منشور", "ارشيف بحث جرافيكي", "لوحات جاهزة للعرض"]
    }
  },
  "welcome-in-germany": {
    de: {
      title: "Welcome in Germany",
      role: "Kommunikationsdesigner",
      client: "Soziales Kommunikationsprojekt",
      summary: "Ein offentliches Kommunikationssystem, das Information zuganglich und direkt gestaltet.",
      description:
        "Welcome in Germany ist ein Kommunikationsdesign-Projekt rund um Orientierung, Zuganglichkeit und offentlicher Klarheit. Es ubersetzt praktische Information in ein koharentes visuelles System.",
      deliverables: ["Informationsgrafiken", "Printmaterialien", "Animierte Social Assets"]
    },
    ar: {
      title: "اهلا بكم في المانيا",
      role: "مصمم تواصل",
      client: "مشروع تواصل اجتماعي",
      summary: "نظام تواصل عام صمم ليجعل المعلومات مباشرة وسهلة الوصول.",
      description:
        "مشروع تصميم تواصلي مبني حول التوجيه والاتاحة والوضوح العام، يترجم المعلومات العملية الى نظام بصري متماسك ومباشر.",
      deliverables: ["رسوم معلوماتية", "مواد مطبوعة", "مواد متحركة للسوشال"]
    }
  },
  "pool-untitled": {
    de: {
      title: "Pool Untitled",
      role: "Visual Artist / Designer",
      client: "Eigeninitiativ",
      summary: "Eine fotografische und grafische Studie uber Oberflache, Stille und konstruierte Atmosphare.",
      description:
        "Pool Untitled ist ein ruhigeres bildbasiertes Projekt uber Textur, Reflexion und angehaltenen Raum. Durch Zuschnitt, Sequenzierung und editoriale Zuruckhaltung entsteht Stimmung aus minimalem Material.",
      deliverables: ["Fotografische Serie", "Gedrucktes Zine", "Ausstellungsbilder"]
    },
    ar: {
      title: "بركة - بدون عنوان",
      role: "فنان بصري / مصمم",
      client: "مبادرة ذاتية",
      summary: "دراسة فوتوغرافية وجرافيكية للسطح والسكون والجو المركب.",
      description:
        "مشروع هادئ قائم على الصورة يركز على الملمس والانعكاس والفضاء المعلق، ويولد المزاج من مادة قليلة عبر القص والتسلسل والتحرير المتحفظ.",
      deliverables: ["سلسلة فوتوغرافية", "زين مطبوع", "صور للعرض"]
    }
  }
};

