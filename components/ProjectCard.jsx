import Image from "next/image";

const projectImages = [
  "/images/image-hotel2.jpg",
  "/images/mall.jpg",
  "/images/Ballroom.jpg",
  "/images/cafeproject.jpg",
  "/images/guestroom.jpg",
  "/images/AMC.jpg",
];

export default function ProjectCard({ p, className = "", index = 0 }) {
  const image = projectImages[index % projectImages.length];

  return (
    <article>
      <div className={`relative aspect-[4/3] overflow-hidden ${className}`}>
        <Image
          src={image}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <p className="eyebrow mt-4">{p.kind}</p>
      <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-ink/65">{p.body}</p>
    </article>
  );
}


