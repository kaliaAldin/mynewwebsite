import type { Metadata } from "next";
import Image from "next/image";
import { SectionDivider3D } from "@/components/three/section-divider-3d";
import { AboutSummary } from "@/components/ui/about-summary";
import { CVDownloadButton } from "@/components/ui/cv-download-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Ahmed Isamaldin, a Berlin-based graphic and visual designer."
};

const software = ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Figma", "Blender", "After Effects", "Glyphs", "QGIS"];
const skills = ["Art direction", "Editorial systems", "Publication design", "Identity design", "Web design", "Exhibition graphics", "Type design", "Visual research"];
const languages = ["Arabic", "English", "German"];

export default function AboutPage() {
  return (
    <>
      <section className="py-6 md:py-10">
        <div className="container-shell grid gap-8">
          <div className="border border-line bg-paper">
            <SectionHeading
              label="About"
              title="A concise profile."
              description="Ahmed Isamaldin is a designer from Khartoum, based in Berlin. Trained in physics and visual communication, he works across print, editorial, web, exhibition, and digital formats."
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border border-line bg-fog/25 p-2">
              <div className="relative aspect-[4/5] overflow-hidden border border-line bg-paper">
                <Image
                  src="/images/portrait/ahmed.jpg"
                  alt="Portrait of Ahmed Isamaldin"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                />
              </div>
            </div>
            <AboutSummary />
          </div>
        </div>
      </section>

      <SectionDivider3D />

      <section className="py-6 md:py-10">
        <div className="container-shell grid gap-5 lg:grid-cols-3">
          <div className="border border-line bg-paper p-5 md:p-6">
            <p className="eyebrow text-ink/58">CV-style summary</p>
            <p className="mt-4 text-sm leading-7 text-ink/76">
              Designer and researcher working across graphic design, editorial systems, digital interfaces, and
              exhibitions.
            </p>
            <CVDownloadButton href={siteConfig.cvHref} className="mt-6 w-full md:w-fit" />
          </div>

          <div className="border border-line bg-paper p-5 md:p-6">
            <p className="eyebrow text-ink/58">Software and skills</p>
            <div className="mt-4 grid gap-5">
              <div>
                <h2 className="text-lg font-black uppercase tracking-[0.08em]">Software</h2>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/76">
                  {software.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-black uppercase tracking-[0.08em]">Skills</h2>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink/76">
                  {skills.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-line bg-paper p-5 md:p-6">
            <p className="eyebrow text-ink/58">Languages and notes</p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink/76">
              {languages.map((item) => (
                <li key={item} className="border-b border-dashed border-line pb-3 last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-ink/76">
              Based in Berlin and available for graphic design, visual design, editorial, web, and communication roles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
