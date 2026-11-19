import fs from "node:fs";
const dir = "public/images";
fs.mkdirSync(dir, { recursive: true });
const files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp|avif|svg)$/i.test(f));
fs.writeFileSync("lib/image-manifest.json", JSON.stringify(files, null, 2));
console.log(`Image manifest: ${files.length} file(s) in ${dir}`);
