import type { Metadata } from "next";
import { WorkPageContent } from "@/components/pages/work-page-content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected graphic design, editorial, web, exhibition, identity, and research projects by Ahmed Isamaldin."
};

export default function WorkPage() {
  return <WorkPageContent />;
}
