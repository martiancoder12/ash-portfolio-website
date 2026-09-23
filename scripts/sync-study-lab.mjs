import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Import a validated static Study Lab build; CI deploys this checked-in snapshot.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = path.resolve(process.argv[2] || path.join(root, '../ash-study-lab/dist'))
const target = path.join(root, 'public/study-lab')
const entries = ['index.html', 'auth.js', 'style.css', 'module-system.css', 'dashboard.js', 'dashboard.css', 'lessons.js', 'app.js', 'engr-data.js', 'engr213.js', 'engr213.css', 'teaching.js', 'teaching-ui.js', 'teaching.css', 'elec-teaching.js', 'elec-ui.js', 'elec.css', 'class-notes.js', 'class-notes.css', 'elec275-notes.js', 'elec275-lectures.js', 'comp232-notes.js', 'comp232.css', 'inse201.js', 'inse201.css', 'comp248.js', 'comp248.css', 'comp248-tutorial2.js', 'comp248-tutorial2.css', 'comp248-tutorial3.js', 'comp248-tutorial3.css', 'hub.css', 'assets', 'vendor', 'prompts']
for (const entry of entries) {
  if (!fs.existsSync(path.join(source, entry))) throw new Error(`Build is missing ${entry}`)
}
fs.mkdirSync(target, { recursive: true })
for (const entry of entries) fs.cpSync(path.join(source, entry), path.join(target, entry), { recursive: true })
const indexPath = path.join(target, 'index.html')
const html = fs.readFileSync(indexPath, 'utf8')
  .replace('<head>', `<head>
<base href="/study-lab/">
<link rel="canonical" href="https://ashfaaqkazi.ca/study-lab/">
<script>if(location.pathname==='/study-lab')history.replaceState(null,'','/study-lab/'+location.search+location.hash);</script>`)
  .replace('<footer class="site-footer">', '<footer class="site-footer"><a href="/">← Ashfaaq Kazi</a>')
fs.writeFileSync(indexPath, html)
console.log('Updated the complete Study Lab at public/study-lab, mounted on /study-lab/.')
