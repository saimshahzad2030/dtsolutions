import type { Metadata } from "next";
import { contactPage } from "@/data/site";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.description,
};

export default function ContactPage() {
  return <ContactContent />;
}

