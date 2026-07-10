import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(__dirname, 'public/images/Program Brochures');
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg'));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputName = file.replace('.jpg', '.webp');
  const outputPath = path.join(inputDir, outputName);

  const before = fs.statSync(inputPath).size;
  await sharp(inputPath)
    .webp({ quality: 82 })
    .toFile(outputPath);
  const after = fs.statSync(outputPath).size;

  console.log(`${file} → ${outputName}  |  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (${Math.round((1 - after/before)*100)}% smaller)`);
}
console.log('\nDone! All images converted to WebP.');
