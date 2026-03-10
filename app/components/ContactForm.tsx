"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";
import Button from "./Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        toast.error(data?.error || "Something went wrong while sending your message.");
        return;
      }

      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll reply as soon as I can.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Network error. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-w-0">
      <h3 className="font-body text-base font-normal text-foreground mb-6">Send Message</h3>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="font-body text-sm font-normal text-muted">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your full name"
            className="font-body text-sm text-foreground placeholder:text-muted-subtle bg-accent/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-0 border-none focus:bg-accent/15"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="font-body text-sm font-normal text-muted">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="Your email address"
            className="font-body text-sm text-foreground placeholder:text-muted-subtle bg-accent/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-0 border-none focus:bg-accent/15"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="font-body text-sm font-normal text-muted">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Share a bit about what you'd like to work on or ask"
            className="font-body text-sm text-foreground placeholder:text-muted-subtle bg-accent/10 rounded-lg px-4 py-3 resize-y focus:outline-none focus:ring-0 border-none focus:bg-accent/15"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>
        <Button
          type="submit"
          className={isSubmitting ? "opacity-60 pointer-events-none" : ""}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
