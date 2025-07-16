#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconSizes = [
  { size: 192, filename: 'icon-192x192.png' },
  { size: 512, filename: 'icon-512x512.png' },
  { size: 180, filename: 'apple-touch-icon.png' },
  { size: 32, filename: 'favicon-32x32.png' },
  { size: 16, filename: 'favicon-16x16.png' }
];

async function generateIcons() {
  const svgPath = path.join(__dirname, '../public/icon.svg');
  const outputDir = path.join(__dirname, '../public');

  console.log('🎨 アイコンを生成中...');

  try {
    if (!fs.existsSync(svgPath)) {
      console.error('❌ icon.svg が見つかりません:', svgPath);
      process.exit(1);
    }

    for (const { size, filename } of iconSizes) {
      const outputPath = path.join(outputDir, filename);

      await sharp(svgPath)
        .resize(size, size)
        .png()
        .toFile(outputPath);

      console.log(`✅ ${filename} (${size}x${size}) を生成しました`);
    }

    const faviconPath = path.join(outputDir, 'favicon.ico');
    await sharp(svgPath)
      .resize(32, 32)
      .png()
      .toFile(faviconPath.replace('.ico', '-temp.png'));

    await sharp(faviconPath.replace('.ico', '-temp.png'))
      .resize(32, 32)
      .png()
      .toFile(faviconPath.replace('.ico', '.png'));

    fs.unlinkSync(faviconPath.replace('.ico', '-temp.png'));

    console.log('✅ favicon.ico を生成しました');
    console.log('🎉 すべてのアイコンの生成が完了しました！');

  } catch (error) {
    console.error('❌ アイコン生成中にエラーが発生しました:', error);
    process.exit(1);
  }
}

generateIcons();
