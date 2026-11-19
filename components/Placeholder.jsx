import Image from "next/image";
import manifest from "@/lib/image-manifest.json";

const slug = (s) =>
  s.split(" — ")[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");


export default function Placeholder({ label, name, className = "", priority = false }) {
  const key = name || slug(label);
  const file = manifest.find((f) => f.replace(/\.[^.]+$/, "").toLowerCase() === key);

  if (file) {
    return (
      <div className={`relative overflow-hidden bg-panel ${className}`}>
        <Image
          src={`/images/${file}`}
          alt={label.split(" — ").pop().toLowerCase()}
          fill
          priority={priority}
          unoptimized={file.toLowerCase().endsWith(".svg")}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`ph ${className}`} role="img" aria-label={label}>
      <span className="ph-label">{label}</span>
    </div>
  );
}
