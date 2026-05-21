/**
 * generate-mobile-images.mjs
 * 
 * Generates mobile-optimized WebP variants for all images served by the site.
 * Mobile variants are 768px wide at quality 75 (target ≤150 KB).
 * Run: node scripts/generate-mobile-images.mjs
 * 
 * Requires: sharp (already in devDependencies)
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, basename, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'public', 'images');

const MOBILE_WIDTH = 768;
const QUALITY = 75;

// Directories to process
const TARGET_DIRS = [
  'photoshoot-glimpses',
];

// Individual files (hero slider images, about image, etc.)
const TARGET_FILES = [
  'sanjana-about.webp',
  'Sanjana-glimpse-01.webp',
  'Sanjana-glimpse-02.webp',
  'Sanjana-glimpse-03.webp',
  'Sanjana-glimpse-04.webp',
  'Sanjana-glimpse-05.webp',
  'photo_9.webp',
  'photo_8.webp',
  'photo_10.webp',
];

async function processFile(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath).metadata();
    // Skip if source is already ≤ mobile width
    if (info.width && info.width <= MOBILE_WIDTH) {
      console.log(`  SKIP (already small): ${basename(inputPath)}`);
      return;
    }

    await sharp(inputPath)
      .resize({ width: MOBILE_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const { size } = await stat(outputPath);
    const kb = Math.round(size / 1024);
    const icon = kb > 150 ? '⚠️' : '✅';
    console.log(`  ${icon} ${basename(outputPath)} — ${kb} KB`);
  } catch (err) {
    console.error(`  ❌ Error processing ${inputPath}: ${err.message}`);
  }
}

async function processDirectory(dirPath) {
  let entries;
  try {
    entries = await readdir(dirPath);
  } catch {
    console.warn(`  Directory not found: ${dirPath}`);
    return;
  }

  for (const entry of entries) {
    const ext = extname(entry).toLowerCase();
    if (!['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) continue;
    if (entry.includes('-mobile.')) continue; // skip already processed

    const inputPath = join(dirPath, entry);
    const stem = basename(entry, ext);
    const outputPath = join(dirPath, `${stem}-mobile.webp`);

    await processFile(inputPath, outputPath);
  }
}

async function main() {
  console.log('📱 Generating mobile image variants...\n');

  // Process full directories
  for (const dir of TARGET_DIRS) {
    const dirPath = join(ROOT, dir);
    console.log(`\n📂 ${dir}/`);
    await processDirectory(dirPath);
  }

  // Process individual files
  console.log('\n📂 images/ (root)');
  for (const file of TARGET_FILES) {
    const inputPath = join(ROOT, file);
    const ext = extname(file);
    const stem = basename(file, ext);
    const outputPath = join(ROOT, `${stem}-mobile.webp`);
    await processFile(inputPath, outputPath);
  }

  console.log('\n✨ Done! Add -mobile.webp variants to srcset attributes in your JSX.');
}

main().catch(console.error);
