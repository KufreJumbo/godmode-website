"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, site } from "@/lib/site";
import { Button } from "./ui/Button";
import { Check, WhatsApp, Mail } from "./ui/Icons";

const inputClass =
  "h-12 w-full rounded-xl border border-line bg-white px-4 text-[15px] text-ink placeholder:text-slate-500 transition-colors focus:border-gold focus:shadow-glow";

/**
 * Composes the enquiry into a WhatsApp message (primary) or an email (fallback).
 * Works without a backend. Replace `compose()` with a POST to your form API when ready.
 */
export function ContactForm() {
  const [form, setForm] = useState({ name: "", business: "", contact: "", service: "", message: "" });
  const [sent, setSent] = useState<"whatsapp" | "email" | null>(null);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const compose = () => {
    const serviceLabel = services.find((s) => s.slug === form.service)?.title ?? (form.service === "not-sure" ? "Not sure yet" : "");
    return [
      `Hi GodMode AI, I'd like to start a conversation.`,
      ``,
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Contact: ${form.contact}`,
      `Service: ${serviceLabel}`,
      form.message ? `` : null,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");
  };

  const valid = form.name && form.business && form.contact && form.service;

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(compose())}`, "_blank", "noopener");
    setSent("whatsapp");
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(`Project enquiry from ${form.name}${form.business ? ` (${form.business})` : ""}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(compose())}`;
    setSent("email");
  };

  return (
    <form onSubmit={sendWhatsApp} className="card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
            Your name *
          </label>
          <input id="name" name="name" required value={form.name} onChange={update} className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="business" className="mb-2 block text-sm font-semibold text-navy">
            Business or organisation *
          </label>
          <input id="business" name="business" required value={form.business} onChange={update} className={inputClass} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="contact" className="mb-2 block text-sm font-semibold text-navy">
            Phone or email *
          </label>
          <input id="contact" name="contact" required value={form.contact} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-navy">
            What do you need? *
          </label>
          <select id="service" name="service" required value={form.service} onChange={update} className={inputClass}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
            Tell us a little about it
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={update}
            placeholder="What's slowing the business down? What would a win look like?"
            className={`${inputClass} h-auto resize-none py-3`}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" className="sm:flex-1" disabled={!valid}>
          <WhatsApp size={18} className="text-[#25D366]" />
          Send via WhatsApp
        </Button>
        <Button type="button" size="lg" variant="outline" onClick={sendEmail} disabled={!valid} className="sm:flex-1">
          <Mail size={18} />
          Send by email
        </Button>
      </div>
      <p className="mt-4 text-sm text-slate-500">{site.replyPromise} Your details are used only to reply to you.</p>

      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 flex items-center gap-2 rounded-xl bg-gold-50 px-4 py-3 text-sm font-medium text-navy"
          >
            <Check size={16} className="text-gold-700" />
            {sent === "whatsapp" ? "WhatsApp opened with your message ready to send." : "Your email app opened with the message ready to send."}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
