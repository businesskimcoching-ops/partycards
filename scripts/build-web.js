const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'www');

const entries = [
  'index.html',
  'partycards_template_style_hires.html',
  'manifest.webmanifest',
  'privacy.html',
  'sw.js',
  'partycards-01.png',
  'logo.jpg',
  'shotpuno-back.png',
  'icons',
  'Cards',
  'GameBacks',
  'GameCovers',
  'GameDecks'
];

function copyRecursive(source, destination) {
  if (!fs.existsSync(source)) return;
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    fs.mkdirSync(destination, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(destination, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const entry of entries) {
  copyRecursive(path.join(root, entry), path.join(outDir, entry));
}

console.log(`Built native web assets in ${outDir}`);
