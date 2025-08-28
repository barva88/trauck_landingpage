const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 1) Build Tailwind CSS (minified)
console.log('Building Tailwind CSS...');
execSync('npx tailwindcss -i ./src/input.css -o ./src/output.css --minify', { stdio: 'inherit' });

// 2) Create dist folder
const dist = path.join(__dirname, '..', 'dist');
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });

// 3) Copy src files to dist
const src = path.join(__dirname, '..', 'src');
function copyRecursive(srcDir, destDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
copyRecursive(src, dist);

// 4) Move compiled CSS into dist root and update index.html link to ./output.css
console.log('Updating HTML references...');
const indexPath = path.join(dist, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/<link rel="stylesheet" href="output.css" \/>/, '<link rel="stylesheet" href="./output.css" />');
fs.writeFileSync(indexPath, html, 'utf8');

console.log('Build complete. Dist folder is ready.');
