import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import CtaBand from "@/components/CtaBand";
import Testimonials from "@/components/Testimonials";
import { SERVICES, PROCESS, WHY, PROJECTS } from "@/lib/data";

const STATS = [
  ["20+", "Years in UAE construction"],
  ["50+", "Projects delivered"],
  ["7", "Emirates served"],
  ["24/7", "Maintenance response"],
];

export default function Home() {
  return (
    <>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-page lg:grid-cols-[1.1fr_1fr]">
          <div className="px-6 py-16 lg:px-10 lg:py-24">
            <p data-aos="fade-up" className="eyebrow">Fit-out · MEP · Civil · Acoustics · Maintenance — UAE</p>
            <h1 data-aos="fade-up" data-aos-delay="100" className="h-display mt-6 text-5xl sm:text-6xl lg:text-7xl">
              Spaces engineered to perform.
              <span className="block italic text-gold-light">Finished to impress.</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className="mt-8 max-w-xl text-[15px] leading-relaxed text-white/75">
              Dynamics Design &amp; Decoration delivers complete turnkey fit-out across Dubai, Abu Dhabi and the
              Northern Emirates — from MEP and civil works to acoustic treatment, bespoke interiors and long-term
              maintenance. One team. One contract. One point of accountability.
            </p>
            <div data-aos="fade-up" data-aos-delay="300" className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">Start Your Project</Link>
              <Link href="/projects" className="btn-outline">View Our Work</Link>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1200" className="relative min-h-[320px] overflow-hidden lg:min-h-full">
            <img
              src="images/home-image.jpg"
              alt="Luxury modern commercial office interior fit-out"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>

        </div>
        <div className="border-t border-white/10">
          <dl className="mx-auto grid max-w-page grid-cols-2 lg:grid-cols-4">
            {STATS.map(([n, l], i) => (
              <div key={l} data-aos="fade-up" data-aos-delay={i * 100} data-aos-offset="0" className="border-white/10 px-6 py-6 odd:border-r lg:border-r lg:px-10 lg:last:border-r-0">
                <dt className="order-2 text-xs text-white/55">{l}</dt>
                <dd className="font-display text-3xl">{n}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>


      <section className="border-b border-ink/10">
        <div data-aos="fade-in" className="mx-auto flex max-w-page flex-wrap items-center gap-x-10 gap-y-4 px-6 py-6 text-[11px] uppercase tracking-[0.18em] text-ink/45 lg:px-10">
          <span>Trusted by</span>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>[Client logo]</span>
          ))}
        </div>
      </section>


      <section>
        <div className="mx-auto grid max-w-page gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-28">
          <div data-aos="fade-right">
            <p className="eyebrow">Who we are</p>
            <h2 className="h-display mt-5 text-4xl lg:text-5xl">
              We find the problem before we build the solution.
            </h2>
          </div>
          <div data-aos="fade-left" className="space-y-5 text-[15px] leading-relaxed text-ink/75">
            <p>
              Most fit-out problems in the UAE are not aesthetic — they are hidden. Undersized cooling in a packed
              restaurant. A hotel ballroom that echoes. A retail unit whose drainage fails the mall&apos;s inspection a
              week before opening.
            </p>
            <p>
              Our engineers and designers start every project with a site diagnosis, then design a customised
              solution and deliver it end-to-end: authority approvals, MEP, civil, joinery, finishes, handover and
              aftercare — all under one roof.
            </p>
            <Link href="/about" className="inline-block text-sm font-semibold text-gold-dark hover:underline">
              Our story →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10">
          <div data-aos="fade-up" className="flex items-end justify-between gap-6">
            <h2 className="h-display text-4xl lg:text-5xl">Everything under one contract</h2>
            <Link href="/services" className="shrink-0 text-sm text-gold-light hover:underline">All services →</Link>
          </div>
          <div className="mt-14 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <div key={s.title} data-aos="fade-up" data-aos-delay={(i % 3) * 120} className="border-b border-r border-white/10 p-8">
                <p className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-medium">{s.title.replace(" & Air-Conditioning Enhancement", "")}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{s.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-28">
          <p data-aos="fade-up" className="eyebrow">How we work</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="h-display mt-4 text-4xl lg:text-5xl">From diagnosis to handover</h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((s, i) => (
              <li key={s.title} data-aos="fade-up" data-aos-delay={i * 120} className="border-t border-ink/30 pt-5">
                <p className="font-display text-4xl text-gold">{i + 1}</p>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-page px-6 pb-20 lg:px-10 lg:pb-28">
          <div data-aos="fade-up" className="flex items-end justify-between gap-6">
            <h2 className="h-display text-4xl lg:text-5xl">Selected projects</h2>
            <Link href="/projects" className="shrink-0 text-sm text-gold-dark hover:underline">View portfolio →</Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
            <FeatureTile
              className="lg:col-span-2 lg:row-span-2"
              image="image-hotel.webp"
              kind="Hospitality · MEP"
              title="Air-Conditioning Enhancement —  HVAC Solutions, Dubai"
              tall
              delay={0}
            />
            <FeatureTile image="image-hotel2.jpg" kind="F&B · Turnkey" title="Global Eatery, Gurgaon" delay={150} />
            <FeatureTile image="mall.jpg" kind="Retail · Fit-out" title="Cloth Store, DLF Mall" delay={300} />
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-page gap-12 px-6 py-20 lg:grid-cols-[1fr_2fr] lg:px-10">
          <h2 data-aos="fade-right" className="h-display text-4xl lg:text-5xl">Why UAE operators choose Dynamics</h2>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <div key={w.title} data-aos="fade-up" data-aos-delay={(i % 2) * 100 + Math.floor(i / 2) * 80}>
                <h3 className="text-sm font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaBand title="Planning a fit-out or fixing a problem space?" label="Book a Free Site Survey" />
    </>
  );
}



function FeatureTile({ image, kind, title, className = "", tall = false, delay = 0 }) {
  return (
    <div data-aos="zoom-in-up" data-aos-delay={delay} className={`flex flex-col ${className}`}>
      <Placeholder
        label={title}
        name={image.replace(/\.[^.]+$/, "")}
        className={`flex-1 ${tall ? "min-h-[360px] lg:min-h-[520px]" : "min-h-[220px]"
          }`}
      />
      <div className="bg-ink px-5 py-4 text-white">
        <p className="eyebrow">{kind}</p>
        <p className="mt-1 text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}


