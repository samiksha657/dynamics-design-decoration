import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { FAQ } from "@/lib/data";

export const metadata = { title: "Contact" };

const DETAILS = [
  ["Head office", ["[Building, Street, Area]", "Dubai, United Arab Emirates"]],
  ["Call / WhatsApp", ["+971 [X] [XXX XXXX]"]],
  ["Email", ["[info@domain.ae]"]],
  ["24/7 maintenance hotline", ["+971 [X] [XXX XXXX]"]],
  ["Hours", ["Mon – Sat, 8:00 – 18:00"]],
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us about your space.">
        Share a few details and our team will arrange a free site survey, typically within [XX] working hours.
      </PageHero>

      <section>
        <div className="mx-auto grid max-w-page gap-14 px-6 py-16 lg:grid-cols-[1.3fr_1fr] lg:px-10">
          <ContactForm />
          <div className="space-y-6 lg:pl-10">
            {DETAILS.map(([t, lines]) => (
              <div key={t}>
                <p className="eyebrow !text-gold-dark">{t}</p>
                {lines.map((l) => (
                  <p key={l} className="mt-1 text-sm">{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-page px-6 pb-20 lg:px-10">
          <div className="mx-auto max-w-page px-6 pb-20 lg:px-10">
            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Google Maps - Office Location"
                src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full aspect-[16/6] min-h-[220px]"
              ></iframe>
            </div>
          </div>
         
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-page px-6 py-16 lg:px-10">
          <h2 className="h-display text-4xl">Frequently asked</h2>
          <div className="mt-10 grid gap-x-16 gap-y-8 md:grid-cols-2">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="text-sm font-semibold">{f.q}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
