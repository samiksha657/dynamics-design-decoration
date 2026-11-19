import Link from "next/link";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata = { title: "About" };

const VALUES = [
  "Accountability",
  "Engineering honesty",
  "Craftsmanship",
  "Safety first",
  "On-time delivery",
];

const LEADERS = [
  {
    name: "Ahmed Al Mansoori",
    role: "Managing Director",
    image: "/images/managing-director.jpg",
  },
  {
    name: "Mohammed Hassan",
    role: "Head of MEP",
    image: "/images/Head of MEP.jpg",
  },
  {
    name: "Aisha Al Mansoori",
    role: "Design Director",
    image: "/images/image1.png",
  },
  {
    name: "Omar Khalid",
    role: "Operations & Maintenance",
    image: "/images/image.png",
  },
];

const CREDENTIALS = [
  ["Trade licence", "[Licence No. & issuing authority]"],
  ["Civil Defence", "[Approved contractor status]"],
  ["Utilities", "[DEWA / ADDC registration]"],
  ["Quality & safety", "[ISO 9001 / 14001 / 45001 if held]"],
  ["Insurance", "CAR & third-party liability cover"],
  ["Coverage", "Dubai, Abu Dhabi, Sharjah & Northern Emirates"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built in the UAE, for the UAE."
        aside={
          <div className="relative aspect-square max-h-[460px] w-full overflow-hidden">
            <Image
              src="/images/UAE.jpg"
              alt="Our team working on site in the UAE"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 460px"
            />
          </div>
        }
      >
        Founded in [YEAR], Dynamics Design &amp; Decoration brings designers,
        MEP engineers, civil teams and craftsmen together under one roof — so
        clients get one partner who owns the outcome.
      </PageHero>

      <section>
        <div className="mx-auto grid max-w-page gap-12 px-6 py-20 lg:grid-cols-3 lg:px-10">
          <div>
            <p className="eyebrow">Mission</p>
            <p className="font-display mt-4 text-2xl leading-snug">
              To solve the real problems inside every space and deliver
              finished environments that work from day one.
            </p>
          </div>

          <div>
            <p className="eyebrow">Vision</p>
            <p className="font-display mt-4 text-2xl leading-snug">
              To be the UAE&apos;s most trusted end-to-end fit-out partner for
              hospitality, retail and F&amp;B.
            </p>
          </div>

          <div>
            <p className="eyebrow">Values</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              {VALUES.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      <section className="bg-sand">
        <div className="mx-auto max-w-page px-6 py-20 lg:px-10">
          <h2 className="h-display text-4xl">Leadership</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERS.map((person) => (
              <div key={person.role}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.role}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <p className="mt-4 font-semibold">{person.name}</p>
                <p className="text-sm text-ink/60">{person.role}</p>
              </div>
            ))}
          </div>


        </div>
      </section>



      <section>
        <div className="mx-auto grid max-w-page gap-12 px-6 py-20 lg:grid-cols-[1fr_1.4fr] lg:px-10">
          <h2 className="h-display text-4xl lg:text-5xl">
            Licensed, approved &amp; accountable
          </h2>

          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {CREDENTIALS.map(([t, d]) => (
              <div key={t}>
                <dt className="text-sm font-semibold">{t}</dt>
                <dd className="mt-1 text-sm text-ink/65">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto flex max-w-page flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <h2 className="h-display text-3xl lg:text-4xl">
            Join our team — we&apos;re hiring on-site talent.
          </h2>

          <Link href="/contact" className="btn-gold shrink-0">
            Careers
          </Link>
        </div>
      </section>
    </>
  );
}


