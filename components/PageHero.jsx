export default function PageHero({ eyebrow, title, children, aside }) {
  return (
    <section className="bg-ink text-white">
      <div
        className={`mx-auto max-w-page px-6 py-16 lg:px-10 lg:py-24 ${
          aside ? "grid items-center gap-12 lg:grid-cols-2" : ""
        }`}
      >
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-display mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {children && <div className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75">{children}</div>}
        </div>
        {aside}
      </div>
    </section>
  );
}
