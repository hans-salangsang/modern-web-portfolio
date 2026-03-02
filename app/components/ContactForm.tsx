"use client";

import Button from "./Button";

export default function ContactForm() {
  return (
    <div className="w-full min-w-0">
      <h3 className="font-body text-base font-normal text-foreground uppercase mb-6">Send Message</h3>
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="font-body text-sm font-normal text-muted">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your name"
            className="font-body text-sm text-foreground placeholder:text-muted-subtle bg-accent/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-divider focus:ring-offset-2 focus:ring-offset-background"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="font-body text-sm font-normal text-muted">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="Your email"
            className="font-body text-sm text-foreground placeholder:text-muted-subtle bg-accent/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-divider focus:ring-offset-2 focus:ring-offset-background"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="font-body text-sm font-normal text-muted">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Type your message"
            className="font-body text-sm text-foreground placeholder:text-muted-subtle bg-accent/10 rounded-lg px-4 py-3 resize-y focus:outline-none focus:ring-1 focus:ring-divider focus:ring-offset-2 focus:ring-offset-background"
          />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}
