import type { Metadata } from "next";
import { Contact } from "../sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Jérémie Bodjrenou (ITZJEY) pour votre projet web ou mobile. Email, WhatsApp et formulaire — réponse rapide depuis Sèmè-Kpodji, Bénin.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact standalone />;
}
