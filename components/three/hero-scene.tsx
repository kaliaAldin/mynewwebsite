"use client";

import Image from "next/image";
import { useI18n } from "@/components/providers/i18n-provider";

export function HeroScene() {
  const { locale } = useI18n();

  return (
    <div className="grid border border-line bg-fog/35">
      <div className="relative h-[320px] border-b border-line md:h-[460px]">
        <Image
          src="/images/editorial/punctured-upcoming.png"
          alt="Punctured project concept image"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
      <div className="border-t border-line bg-paper p-4 md:p-5">
        <div className="grid content-start gap-3">
          <p className="eyebrow text-ink/58">{locale === "de" ? "Kommendes Projekt" : locale === "ar" ? "مشروع قادم" : "Upcoming Project"}</p>
          <h3 className="text-2xl font-black uppercase tracking-brutal md:text-3xl">Punctured</h3>
          <p className="max-w-2xl text-sm leading-7 text-ink/76">
            {locale === "de"
              ? "Eine interaktive 3D-Umgebung uber Uberleben in Landschaften, die von Gewalt, Extraktion und strukturellem Verlassen gepragt sind. Mit Satellitenbildern aus Bergbaugebieten, maschineller Bildextraktion und manueller Raumkonstruktion liest das Projekt beschadigtes Terrain als aktiven Ort von Erinnerung, Ausdauer und dezentralen Lebensformen."
              : locale === "ar"
                ? "بيئة ثلاثية الابعاد تفاعلية حول البقاء داخل مشاهد شكلها العنف والاستخراج والتخلي البنيوي. باستخدام صور اقمار صناعية من مناطق التعدين واستخراج بصري عبر التعلم الالي وبناء مكاني يدوي، يتعامل المشروع مع التضاريس المتضررة كموقع حي للذاكرة والتحمل واعادة التنظيم."
                : "An interactive 3D environment about survival in landscapes shaped by violence, extraction, and structural abandonment. Using satellite imagery from mining zones, machine-learning image extraction, and manual spatial construction, the project treats damaged terrain as an active site where memory, endurance, and decentralized forms of life continue to reorganize."}
          </p>
        </div>
      </div>
    </div>
  );
}
