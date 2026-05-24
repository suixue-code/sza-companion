#!/usr/bin/env node
/**
 * Generate favicons from the official game icon and compress hero/UI images.
 * Run: node scripts/optimize-images.mjs
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const gameDir = path.join(root, 'public/images/sza-game');
const iconDir = path.join(root, 'public/icons');
const gameIcon = path.join(gameDir, 'roblox-game-icon.png');

async function writePng(buffer, dest, label) {
	await writeFile(dest, buffer);
	const kb = (buffer.length / 1024).toFixed(1);
	console.log(`  ${path.relative(root, dest)} (${kb} KB)`);
}

async function writeWebp(buffer, dest, label) {
	await writeFile(dest, buffer);
	const kb = (buffer.length / 1024).toFixed(1);
	console.log(`  ${path.relative(root, dest)} (${kb} KB)`);
}

async function buildFavicons() {
	console.log('Favicons from game icon…');
	const source = sharp(gameIcon).resize(512, 512, { fit: 'cover' });

	const sizes = [
		{ name: 'favicon-32.png', size: 32 },
		{ name: 'favicon-48.png', size: 48 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'icon-192.png', size: 192 },
		{ name: 'icon-512.png', size: 512 },
	];

	for (const { name, size } of sizes) {
		const buf = await source.clone().resize(size, size).png({ compressionLevel: 9 }).toBuffer();
		await writePng(buf, path.join(iconDir, name));
	}

	// Multi-size ICO for legacy browsers / PWA shortcuts
	const ico32 = await sharp(gameIcon).resize(32, 32).png().toBuffer();
	const ico16 = await sharp(gameIcon).resize(16, 16).png().toBuffer();
	// Minimal ICO container: use 32px PNG as favicon.ico (widely accepted)
	await writeFile(path.join(iconDir, 'favicon.ico'), ico32);
	console.log(`  ${path.relative(root, path.join(iconDir, 'favicon.ico'))} (32px PNG-as-ICO)`);
}

async function buildUiIcon() {
	console.log('UI game icon variants…');
	const sizes = [64, 128, 256];
	for (const size of sizes) {
		const png = await sharp(gameIcon)
			.resize(size, size, { fit: 'cover' })
			.png({ compressionLevel: 9, palette: true })
			.toBuffer();
		await writePng(png, path.join(gameDir, `roblox-game-icon-${size}.png`));

		const webp = await sharp(gameIcon)
			.resize(size, size, { fit: 'cover' })
			.webp({ quality: 82 })
			.toBuffer();
		await writeWebp(webp, path.join(gameDir, `roblox-game-icon-${size}.webp`));
	}
}

async function compressHeroThumbnail() {
	console.log('Hero thumbnail (roblox-thumbnail-3)…');
	const src = path.join(gameDir, 'roblox-thumbnail-3.png');
	const meta = await sharp(src).metadata();
	const width = Math.min(meta.width ?? 768, 1280);

	const jpg = await sharp(src)
		.resize(width, null, { withoutEnlargement: true })
		.jpeg({ quality: 78, mozjpeg: true })
		.toBuffer();
	await writePng(jpg, path.join(gameDir, 'roblox-thumbnail-3.jpg'));

	const webp = await sharp(src)
		.resize(width, null, { withoutEnlargement: true })
		.webp({ quality: 78 })
		.toBuffer();
	await writeWebp(webp, path.join(gameDir, 'roblox-thumbnail-3.webp'));
}

async function compressOtherThumbnails() {
	console.log('Other thumbnails…');
	for (let i = 1; i <= 5; i += 1) {
		if (i === 3) continue;
		const src = path.join(gameDir, `roblox-thumbnail-${i}.png`);
		const webp = await sharp(src)
			.resize(768, null, { withoutEnlargement: true })
			.webp({ quality: 78 })
			.toBuffer();
		await writeWebp(webp, path.join(gameDir, `roblox-thumbnail-${i}.webp`));

		const jpg = await sharp(src)
			.resize(768, null, { withoutEnlargement: true })
			.jpeg({ quality: 78, mozjpeg: true })
			.toBuffer();
		await writePng(jpg, path.join(gameDir, `roblox-thumbnail-${i}.jpg`));
	}
}

async function buildSvgFavicon() {
	console.log('SVG favicon…');
	// Raster-in-SVG for crisp game icon at any DPI; matches header brand.
	const pngBuf = await sharp(gameIcon).resize(64, 64).png({ compressionLevel: 9 }).toBuffer();
	const b64 = pngBuf.toString('base64');
	const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#07121f"/>
  <image href="data:image/png;base64,${b64}" x="4" y="4" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
  <rect x="1.5" y="1.5" width="61" height="61" rx="12.5" fill="none" stroke="#6dff39" stroke-opacity="0.35" stroke-width="2"/>
</svg>
`;
	await writeFile(path.join(root, 'public/favicon.svg'), svg);
	console.log(`  public/favicon.svg`);
}

async function main() {
	await mkdir(iconDir, { recursive: true });
	await buildFavicons();
	await buildUiIcon();
	await compressHeroThumbnail();
	await compressOtherThumbnails();
	await buildSvgFavicon();
	console.log('Done.');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
