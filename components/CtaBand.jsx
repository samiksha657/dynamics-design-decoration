import Link from "next/link";

export default function CtaBand({ title, label, href = "/contact", tone = "gold" }) {
  const gold = tone === "gold";
  return (
    <section className={gold ? "bg-gold text-ink" : "bg-ink text-white"}>
      <div className="mx-auto flex max-w-page flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <h2 className="h-display max-w-2xl text-3xl sm:text-4xl">{title}</h2>
        <Link href={href} className={gold ? "btn-ink shrink-0" : "btn-gold shrink-0"}>
          {label}
        </Link>
      </div>
    </section>
  );
}
