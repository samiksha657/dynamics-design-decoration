import Link from "next/link";
import { NAV } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-6 py-10 text-[13px] md:flex-row md:items-center md:justify-between lg:px-10">
        <p>
          <span className="font-display text-lg text-white">Dynamics</span> Design &amp; Decoration
          <span className="ml-2">© {new Date().getFullYear()}. Dubai, UAE.</span>
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
