"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Button } from "./ui/Button";

/**
 * Collects an email and opens a pre-addressed message to the company inbox.
 * Swap `onSubmit` for a mailing-list API (e.g. Mailchimp, Resend) when one is set up.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Subscribe me to GodMode AI insights");
    const body = encodeURIComponent(`Please add ${email} to the GodMode AI insights list.`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setDone(true);
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-lg flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="h-12 flex-1 rounded-full border border-line bg-white px-5 text-[15px] text-ink placeholder:text-slate-500 focus:border-gold"
      />
      <Button type="submit" size="md" arrow>
        {done ? "Check your email app" : "Subscribe"}
      </Button>
    </form>
  );
}
