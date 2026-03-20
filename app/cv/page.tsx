import type { Metadata } from "next";
import { CVPageContent } from "@/components/pages/cv-page-content";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum Vitae of Ahmed Isamaldin, Berlin-based graphic and visual designer."
};

export default function CVPage() {
  return <CVPageContent />;
}
