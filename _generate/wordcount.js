// Word counts per page: "main" = everything in <main>; "own" = main minus shared blocks
// (quote section, motto band, trust bar, CTA band) — i.e. the copy unique to that page.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { if (['_generate', '.git', '.claude', 'node_modules'].includes(f)) continue; const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (p.endsWith('.html')) files.push(p); } })(ROOT);
const words = (h) => h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
const rows = files.map((p) => {
  const h = fs.readFileSync(p, 'utf8');
  if (/content="noindex/.test(h)) return null;
  const main = (h.match(/<main[\s\S]*<\/main>/) || [''])[0];
  const own = main
    .replace(/<section[^>]*id="quote"[\s\S]*?<\/section>/g, '')
    .replace(/<section class="motto-band"[\s\S]*?<\/section>/g, '')
    .replace(/<div class="trust-bar">[\s\S]*?<\/div><\/div>/g, '')
    .replace(/<div class="cta-band">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '');
  return ['/' + path.relative(ROOT, p).split(path.sep).join('/'), words(main), words(own)];
}).filter(Boolean).sort();
for (const [f, m, o] of rows) console.log(f.padEnd(58), String(m).padStart(5), 'main', String(o).padStart(5), 'own');
