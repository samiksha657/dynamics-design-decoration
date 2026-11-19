import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { SECTORS } from "@/lib/data";

export const metadata = { title: "Sectors" };

const SECTOR_IMAGES = [
  "/images/Hotels-resorts.jpg",
  "/images/Mall-units.jpg",
  "/images/Restaurantscafés.jpg",
];

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="We understand how your space earns money."
      >
        Guest comfort, footfall, table turns, brand standards — each sector
        has its own pressures. Our solutions are built around them.
      </PageHero>

      {SECTORS.map((s, i) => (
        <section key={s.tag} className="border-b border-ink/10">
          <div className="mx-auto grid max-w-page items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-20">
            <div
              className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? "lg:order-2" : ""
                }`}
            >
              <Image
                src={SECTOR_IMAGES[i]}
                alt={s.title}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="eyebrow">{s.tag}</p>

              <h2 className="h-display mt-2 text-3xl lg:text-4xl">
                {s.title}
              </h2>

              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/70">
                {s.intro}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-ink/75">
                <strong className="font-semibold text-ink">
                  Common issues we solve:
                </strong>{" "}
                {s.issues}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                <strong className="font-semibold text-ink">
                  What we deliver:
                </strong>{" "}
                {s.deliver}
              </p>
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        tone="ink"
        title="Also serving offices, clinics and residential villas."
        label="Discuss Your Space"
      />
    </>
  );
}
