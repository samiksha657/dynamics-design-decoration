"use client";

import { useState } from "react";
import { EMIRATES, SECTOR_OPTIONS, SERVICE_OPTIONS } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); 

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-gold/50 bg-[#fffdf9] p-8" role="status">
        <h3 className="font-display text-2xl">Thank you — we have your details.</h3>
        <p className="mt-2 text-sm text-ink/70">
          Our team will contact you to arrange your free site survey.
        </p>
        <button className="btn-gold mt-6" onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">Full name</label>
          <input id="name" name="name" required className="field" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="company" className="label">Company</label>
          <input id="company" name="company" className="field" placeholder="Company / brand" />
        </div>
        <div>
          <label htmlFor="email" className="label">Email</label>
          <input id="email" name="email" type="email" required className="field" placeholder="name@company.ae" />
        </div>
        <div>
          <label htmlFor="phone" className="label">Phone</label>
          <input id="phone" name="phone" type="tel" required className="field" placeholder="+971" />
        </div>
        <div>
          <label htmlFor="sector" className="label">Sector</label>
          <select id="sector" name="sector" className="field">
            {SECTOR_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="emirate" className="label">Emirate</label>
          <select id="emirate" name="emirate" className="field">
            {EMIRATES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="service" className="label">Service required</label>
        <select id="service" name="service" className="field">
          {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="label">Describe the project or issue</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="field resize-y"
          placeholder="Area (sq ft), timeline, current problems…"
        />
      </div>
      <button type="submit" disabled={status === "sending"} className="btn-gold min-w-[200px] disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Request Free Site Survey"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
