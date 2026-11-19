"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-semibold">Dynamics</span>
          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/50 sm:inline">
            Design &amp; Decoration
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={pathname === n.href ? "text-gold-light" : "text-white/90 hover:text-white"}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-gold hidden md:inline-flex">
          Request a Site Survey
        </Link>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-6 pb-5 md:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-white/10 py-3 text-sm ${
                pathname === n.href ? "text-gold-light" : "text-white/90"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold mt-4 w-full">
            Request a Site Survey
          </Link>
        </nav>
      )}
    </header>
  );
}
