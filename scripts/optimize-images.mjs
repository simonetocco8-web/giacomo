import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const selections = [
  ['hero', 'hero', 'hero.jpg', 1024],
  ['roomTimber', 'rooms', 'room3.jpeg', 1200],
  ['roomBrick', 'rooms', 'room2.jpeg', 1200],
  ['galleryGarden', 'gallery', 'gallery2.jpeg', 1200],
  ['galleryLinen', 'gallery', 'gallery4.jpeg', 960],
  ['galleryTerrace', 'gallery', 'gallery3.jpeg', 1200],
  ['destination', 'destination', 'destination1.jpg', 1200],
];
const manifest = {};
for (const [id, group, filename, limit] of selections) {
  const folder = path.join(root, 'public/images', group);
  const input = path.join(folder, filename);
  // Apply EXIF orientation once and strip metadata in the optimized files.
  const { data, info } = await sharp(input).autoOrient().raw().toBuffer({ resolveWithObject: true });
  const maxWidth = Math.min(info.width, limit);
  const widths = [...new Set([480, 768, 1024, 1200].filter(w => w < maxWidth).concat(maxWidth))];
  const stem = id.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
  await mkdir(folder, { recursive: true });
  const formats = { webp: [], jpeg: [] };
  let dimensions;
  let total = 0;
  for (const width of widths) {
    for (const format of ['webp', 'jpeg']) {
      const extension = format === 'jpeg' ? 'jpg' : 'webp';
      const name = `${stem}-${width}.${extension}`;
      const pipeline = sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } }).resize({ width, withoutEnlargement: true });
      const result = await (format === 'webp' ? pipeline.webp({ quality: id === 'galleryGarden' ? 70 : 80, effort: 6 }) : pipeline.jpeg({ quality: 82, mozjpeg: true })).toFile(path.join(folder, name));
      formats[format].push(`/images/${group}/${name} ${result.width}w`);
      total += result.size;
      if (width === maxWidth) dimensions = { width: result.width, height: result.height };
    }
  }
  manifest[id] = {
    original: `/images/${group}/${filename}`,
    src: `/images/${group}/${stem}-${maxWidth}.jpg`,
    webp: formats.webp.join(', '),
    srcset: formats.jpeg.join(', '),
    ...dimensions,
  };
  console.log(`${id}: ${widths.join('/')} px, ${Math.round(total / 1024)} KiB across JPEG/WebP variants`);
}
await writeFile(path.join(root, 'src/data/images.generated.json'), JSON.stringify(manifest, null, 2) + '\n');
