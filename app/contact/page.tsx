import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/contact-page-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ahmed Isamaldin for design roles and collaborations."
};

export default function ContactPage() {
  return <ContactPageContent />;
}
