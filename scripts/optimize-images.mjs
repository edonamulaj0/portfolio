// Generates resized WebP variants of the site's photos.
// Run after adding or replacing an image: `npm run images`
// Static export ships images as-is (no Next image optimizer), so sizes are made here.
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const pub = path.resolve("public");

/** One-off images: [source, output, max width] */
const singles = [
  ["donahero.jpg", "img/hero-desktop.webp", 2000],
  ["donamob.jpg", "img/hero-mobile.webp", 900],
  ["dona.png", "img/portrait.webp", 800],
];

/** Every gallery photo gets a grid thumbnail and a lightbox size */
const galleryVariants = [
  ["sm", 800],
  ["lg", 1600],
];

async function write(src, out, width) {
  const dest = path.join(pub, out);
  await mkdir(path.dirname(dest), { recursive: true });
  const info = await sharp(path.join(pub, src))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(dest);
  console.log(`${out}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)}KB`);
}

for (const [src, out, width] of singles) await write(src, out, width);

const photos = (await readdir(path.join(pub, "gallery"))).filter((f) => /\.(jpe?g|png)$/i.test(f));
for (const file of photos) {
  const name = file.replace(/\.[^.]+$/, "");
  for (const [dir, width] of galleryVariants) {
    await write(path.join("gallery", file), `gallery/${dir}/${name}.webp`, width);
  }
}
