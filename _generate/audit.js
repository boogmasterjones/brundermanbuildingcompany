// On-page SEO audit — run: node _generate/audit.js
// Checks every built page for the things audit tools flag: titles, descriptions, H1s,
// heading duplication, broken links/anchors, JSON-LD validity, alt text, internal linking.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    if (['_generate', '.git', '.claude', 'node_modules'].includes(f)) continue;
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})(ROOT);

const rel = (p) => '/' + path.relative(ROOT, p).split(path.sep).join('/');
const text = (s) => s.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z]+;/g, ' ');
const inbound = {}, h2s = {}, titles = {}, descs = {};
let problems = 0;
const flag = (f, msg) => { problems++; console.log('  ! ' + f + ' — ' + msg); };

for (const p of files) {
  const f = rel(p);
  const h = fs.readFileSync(p, 'utf8');
  const noindex = /name="robots" content="noindex/.test(h);
  const main = (h.match(/<main[\s\S]*<\/main>/) || [''])[0];
  const title = (h.match(/<title>(.*?)<\/title>/) || [])[1] || '';
  const desc = (h.match(/name="description" content="(.*?)"/) || [])[1] || '';
  const t = title.replace(/&amp;/g, '&'), d = desc.replace(/&amp;/g, '&');
  if (!noindex) {
    if (t.length < 30 || t.length > 65) flag(f, `title length ${t.length}`);
    if (d.length < 120 || d.length > 160) flag(f, `description length ${d.length}`);
    (titles[t] = titles[t] || []).push(f);
    (descs[d] = descs[d] || []).push(f);
  }
  const heads = [...h.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => [m[1], text(m[2]).trim()]);
  const h1 = heads.filter((x) => x[0] === '1');
  if (h1.length !== 1) flag(f, `${h1.length} H1s`);
  else if (!noindex) {
    const body = text(main.replace(/<h1[\s\S]*?<\/h1>/, '')).toLowerCase();
    const miss = h1[0][1].toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 2 && !body.includes(w));
    if (miss.length) flag(f, 'H1 words missing from body: ' + miss.join(', '));
  }
  let last = 0;
  for (const [lvl] of heads) { if (+lvl > last + 1 && last) flag(f, `heading level jumps h${last} -> h${lvl}`); last = +lvl; }
  for (const [lvl, tx] of heads) if (lvl === '2') (h2s[tx] = h2s[tx] || []).push(f);
  if (!/rel="canonical"/.test(h)) flag(f, 'no canonical');
  if (!/<html lang="en">/.test(h)) flag(f, 'no lang');
  if ((h.match(/<img(?![^>]*\balt=)/g) || []).length) flag(f, 'img without alt');
  if ((h.match(/<img(?![^>]*\bwidth=)/g) || []).length) flag(f, 'img without dimensions');
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch (e) { flag(f, 'invalid JSON-LD'); } }
  for (const m of h.matchAll(/(?:href|src)="(\/[^"#?]*)(\?[^"#]*)?(#[^"]*)?"/g)) {
    const target = m[1] === '/' ? '/index.html' : m[1];
    const tp = path.join(ROOT, target);
    if (!fs.existsSync(tp)) flag(f, 'broken link ' + m[1]);
    else if (m[3] && m[3].length > 1 && !fs.readFileSync(tp, 'utf8').includes(`id="${m[3].slice(1)}"`)) flag(f, 'broken anchor ' + m[1] + m[3]);
  }
  if ([...h.matchAll(/href="tel:[^"]+"(?! onclick)/g)].length) flag(f, 'untracked tel link');
  const ids = [...h.matchAll(/ id="([^"]+)"/g)].map((x) => x[1]);
  const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (dup.length) flag(f, 'duplicate ids ' + dup.join(','));
  const links = new Set([...main.matchAll(/href="(\/[^"#]*)/g)].map((m) => m[1]));
  for (const l of links) inbound[l] = (inbound[l] || 0) + 1;
  const words = text(main.replace(/<form[\s\S]*?<\/form>/g, '')).split(/\s+/).filter(Boolean).length;
  console.log(`${f.padEnd(46)} ${String(words).padStart(5)}w  title ${String(t.length).padStart(2)}  desc ${String(d.length).padStart(3)}  headings ${String(heads.length).padStart(2)}  body-links ${links.size}`);
}
for (const [k, v] of Object.entries(titles)) if (v.length > 1) flag(v.join(', '), 'duplicate title: ' + k);
for (const [k, v] of Object.entries(descs)) if (v.length > 1) flag(v.join(', '), 'duplicate description');
console.log('\nDuplicate H2 text across pages (3+):');
for (const [k, v] of Object.entries(h2s)) if (v.length > 2) console.log(`  ${v.length}× ${k}`);
console.log('\nContextual inbound links (from <main> only), fewest first:');
for (const [k, v] of Object.entries(inbound).sort((a, b) => a[1] - b[1]).slice(0, 12)) console.log(`  ${v}  ${k}`);
const sm = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
for (const p of files) { const f = rel(p); const h = fs.readFileSync(p, 'utf8'); const inSm = sm.includes(f === '/index.html' ? '.com/</loc>' : f + '</loc>'); const noindex = /content="noindex/.test(h); if (inSm === noindex) flag(f, inSm ? 'noindex page in sitemap' : 'indexable page missing from sitemap'); }
console.log(`\n${files.length} pages, ${problems} problem(s).`);
