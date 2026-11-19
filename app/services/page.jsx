import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { SERVICES } from "@/lib/data";

export const metadata = { title: "Services" };

const SERVICE_IMAGES = [
  "/images/Turnkey.jpg",
  "/images/MEPAir-Conditioning Enhancement.jpg",
  "/images/hotel-construction.jpg",
  "/images/acoustic.jpg",
  "/images/Interior Design.jpg",
  "/images/MaintenancAMC.jpg",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six disciplines. One accountable team."
      >
        Take a single service or the full turnkey package. Every engagement
        starts with a site diagnosis and ends with a documented handover.
      </PageHero>

      {SERVICES.map((s, i) => (
        <section key={s.title} className="border-b border-ink/10">
          <div className="mx-auto grid max-w-page items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-20">

            <div
              className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? "lg:order-2" : ""
                }`}
            >
              <Image
                src={SERVICE_IMAGES[i]}
                alt={s.title}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="font-display text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>

              <h2 className="h-display mt-2 text-3xl lg:text-4xl">
                {s.title}
              </h2>

              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/70">
                {s.long}
              </p>

              <ul className="mt-6 grid gap-x-8 gap-y-2.5 text-sm text-ink/80 sm:grid-cols-2">
                {s.items.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      ))}

      <CtaBand
        title="Not sure which service you need? Start with a survey."
        label="Book a Site Survey"
      />
    </>
  );
}


