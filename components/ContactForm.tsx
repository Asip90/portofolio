"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/data";
import { Button } from "./ui/Button";

const field =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-brand focus:outline-none focus-visible:outline-none";
const label = "mb-1.5 block text-sm font-medium text-ink-soft";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const body = `Bonjour Jérémie,%0D%0A%0D%0A${encodeURIComponent(
      message
    )}%0D%0A%0D%0A— ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject || `Projet — message de ${name}`
    )}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Nom</label>
          <input id="name" name="name" required placeholder="Votre nom" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="vous@exemple.com" className={field} />
        </div>
      </div>
      <div className="mt-4">
        <label className={label} htmlFor="subject">Sujet</label>
        <input id="subject" name="subject" placeholder="De quoi parle-t-on ?" className={field} />
      </div>
      <div className="mt-4">
        <label className={label} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet en quelques lignes…"
          className={`${field} resize-none`}
        />
      </div>
      <Button type="submit" size="lg" className="mt-5 w-full">
        Envoyer le message
        <Send className="h-4 w-4" />
      </Button>
      {sent && (
        <p className="mt-3 text-center text-sm text-brand" role="status">
          Votre logiciel de messagerie s&apos;ouvre avec le message pré-rempli.
        </p>
      )}
    </form>
  );
}
