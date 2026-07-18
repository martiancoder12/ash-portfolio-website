import type { ReactNode } from 'react'
import { ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react'
import '../App.css'

const projects = [
  {
    name: 'PSP360',
    tag: 'Healthcare operations platform',
    status: 'Live',
    description:
      'Three React and TypeScript frontends — case-manager console, physician portal and patient app — on one NestJS, Prisma and PostgreSQL backend. State-machine case flow, SLA escalation, RBAC and an append-only PHI audit trail.',
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'JWT / RBAC'],
    link: 'https://psp360-ops-web.vercel.app',
    linkLabel: 'Live demo',
  },
  {
    name: 'Codr',
    tag: 'Peer-to-peer matching',
    status: 'Live',
    description:
      'An installable PWA for mutual-match discovery between technology professionals. Chat unlocks only on a mutual match, backed by a PostgreSQL schema with row-level security, triggers and storage policies.',
    stack: ['Next.js 15', 'React 19', 'Supabase', 'Turborepo', 'PWA'],
    link: 'https://codr-cyan-two.vercel.app/',
    linkLabel: 'Website',
    app: 'https://www.codrapp.ca/',
  },
  {
    name: 'the-indication',
    tag: 'AI content intelligence',
    status: 'Live',
    description:
      'A Next.js application connecting the Claude API to a custom MCP server, retrieval-augmented generation over embeddings and Inngest background ingestion. Includes authentication, billing and structured content workflows.',
    stack: ['Next.js', 'Claude API', 'MCP', 'RAG', 'Stripe'],
    link: 'https://the-indication.vercel.app',
    linkLabel: 'Open live',
    code: 'https://github.com/martiancoder12/the-indication',
  },
  {
    name: 'frenchwithash.ca',
    tag: 'Marketing site + edge auth',
    status: 'Live',
    description:
      'A fast static website with Netlify edge functions gating premium content, better-auth over Postgres, GitHub Actions CI/CD and a complete technical SEO layer.',
    stack: ['HTML / CSS / JS', 'Netlify', 'better-auth', 'GitHub Actions'],
    link: 'https://www.frenchwithash.ca',
    linkLabel: 'Visit site',
  },
]

const skills = [
  ['Languages', ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML / CSS']],
  ['Frontend', ['React 19', 'Next.js', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'PWA']],
  ['Backend', ['Node.js', 'NestJS', 'Express', 'Serverless functions', 'REST APIs']],
  ['Data', ['PostgreSQL', 'Prisma', 'SQL migrations', 'Row-level security', 'MongoDB', 'Redis']],
  ['AI', ['Claude API', 'MCP servers', 'RAG / embeddings', 'Inngest background jobs']],
  ['Security', ['JWT', 'RBAC', 'NextAuth', 'better-auth', 'argon2 / bcrypt', 'Helmet']],
]

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>
}

function SectionHeader({ number, title, meta }: { number: string; title: string; meta: string }) {
  return (
    <div className="section-header">
      <span className="section-number">{number}</span>
      <div>
        <Eyebrow>{meta}</Eyebrow>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="paper-grid" aria-hidden="true" />

      <nav className="top-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Ashfaaq Kazi home">
          <span className="brand-mark">A</span>
          <span>Ashfaaq Kazi</span>
        </a>
        <div className="nav-links">
          <a href="#projects">projects</a>
          <a href="#profile">profile</a>
          <a href="#experience">experience</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <Eyebrow>Full-stack developer · Montréal</Eyebrow>
            <h1>Production TypeScript, built with product judgment.</h1>
            <p className="hero-copy">
              I’m Ashfaaq Kazi. I build systems across React, Next.js, Node, NestJS and PostgreSQL — with generative AI treated as real infrastructure, not decoration.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View five projects <ArrowUpRight size={16} /></a>
              <a className="button button-secondary" href="mailto:ashfaaq.kazi@outlook.com">Email me</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Portfolio summary">
            <div className="panel-kicker">Current focus</div>
            <h2>Cartograph</h2>
            <p>A real-time collaborative graph canvas where dependencies become a living map.</p>
            <div className="panel-row"><span>Base</span><strong>Montréal, QC</strong></div>
            <div className="panel-row"><span>Mode</span><strong>Remote · EN / FR</strong></div>
            <div className="panel-row"><span>Security</span><strong>RLS · RBAC · JWT</strong></div>
          </aside>
        </div>
      </header>

      <section className="stats-band" aria-label="Portfolio metrics">
        <div className="container stats-grid">
          <div><strong>08</strong><span>years building systems</span></div>
          <div><strong>05</strong><span>projects showcased</span></div>
          <div><strong>04</strong><span>live in production</span></div>
          <div><strong>02</strong><span>MCP servers built</span></div>
        </div>
      </section>

      <section className="section" id="profile">
        <div className="container">
          <SectionHeader number="01" title="A systems builder with an operator’s memory." meta="Profile" />
          <div className="profile-layout">
            <div className="profile-copy">
              <p>
                I build production TypeScript applications end to end — React and Next.js on the front, Node, NestJS and PostgreSQL behind, with AI wired into the workflow where it earns its place.
              </p>
              <p>
                Before software, I spent seven years at McKesson Canada moving from frontline patient support to Product Owner. That path taught me where systems fail: when they are built around features instead of people, workflows and trust.
              </p>
              <blockquote>
                If it has users, feedback loops and emergent behaviour, it’s a system — and a system deserves to be built intentionally.
              </blockquote>
            </div>
            <div className="profile-cards">
              <article className="info-card">
                <span className="card-label">Background</span>
                <p>Product ownership in regulated healthcare, legal training and a compliance instinct that shows up in every schema.</p>
              </article>
              <article className="info-card accent-card">
                <span className="card-label">Now</span>
                <p>McGill full-stack certificate completed. BEng Cybersecurity at Concordia begins fall 2026.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft" id="projects">
        <div className="container">
          <SectionHeader number="02" title="Five projects. Five different system problems." meta="Selected work" />

          <article className="featured-project">
            <div className="featured-main">
              <div className="project-meta-row">
                <span className="level-pill">Featured build</span>
                <span className="status-dot">In active development</span>
              </div>
              <h3>Cartograph</h3>
              <p className="featured-lede">
                A Miro-class real-time collaboration canvas where the board is a semantic graph, not a drawing. Stickies promote into typed items, connections carry dependency meaning, and the same board can render as a critical path, executive brief or saved slice.
              </p>
              <div className="feature-list">
                <div><Check size={16} /><span><strong>Custom SVG engine</strong> chosen over a library for full control of hit-testing, culling and motion.</span></div>
                <div><Check size={16} /><span><strong>Conflict-free multiplayer</strong> through Yjs CRDTs and a Node WebSocket relay.</span></div>
                <div><Check size={16} /><span><strong>Agent-native editing</strong> through a custom MCP server with validated, undoable changes.</span></div>
              </div>
              <div className="chip-row">
                {['React 19', 'TypeScript', 'Yjs CRDT', 'Custom SVG', 'Node.js', 'MCP', 'Supabase'].map((item) => <span key={item}>{item}</span>)}
              </div>
              <a className="text-link" href="https://cartograph-indol.vercel.app" target="_blank" rel="noreferrer">View Cartograph live <ArrowUpRight size={15} /></a>
            </div>
            <aside className="featured-facts">
              <span className="card-label">At a glance</span>
              <dl>
                <div><dt>Type</dt><dd>Independent build</dd></div>
                <div><dt>Rendering</dt><dd>Custom SVG</dd></div>
                <div><dt>Sync</dt><dd>Yjs + WS relay</dd></div>
                <div><dt>AI access</dt><dd>MCP · full CRUD</dd></div>
                <div><dt>Export</dt><dd>PNG · SVG · JSON · CSV</dd></div>
              </dl>
            </aside>
          </article>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.name}>
                <div className="project-index">{String(index + 2).padStart(2, '0')}</div>
                <div className="project-body">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                    <span>{project.tag}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="chip-row compact">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <div className="project-actions">
                  <span className="live-badge">{project.status}</span>
                  <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={14} /></a>
                  {'app' in project && project.app && <a className="secondary-link" href={project.app} target="_blank" rel="noreferrer">Get the app <ArrowUpRight size={14} /></a>}
                  {project.code && <a className="secondary-link" href={project.code} target="_blank" rel="noreferrer">Code <ArrowUpRight size={14} /></a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="toolkit">
        <div className="container">
          <SectionHeader number="03" title="The toolkit is broad. The bias is simple." meta="Core stack" />
          <div className="skills-grid">
            {skills.map(([group, items]) => (
              <article className="skill-card" key={group as string}>
                <h3>{group}</h3>
                <div className="chip-row compact">
                  {(items as string[]).map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="experience">
        <div className="container">
          <SectionHeader number="04" title="Seven years from operations to product ownership." meta="Experience" />
          <div className="experience-card">
            <div className="experience-heading">
              <div>
                <span className="card-label">McKesson Canada</span>
                <h3>Product Owner — Quebec Loyalty & Pharmacy Digital Platforms</h3>
              </div>
              <span className="date-range">2018 – 2025</span>
            </div>
            <div className="timeline">
              <div><strong>Product Owner</strong><span>Owned mobile, web and loyalty delivery across pharmacy and healthcare under PIPEDA and Quebec Law 25.</span></div>
              <div><strong>Project Manager</strong><span>Led specialty-health digital initiatives across CRM platforms, workflows and third-party systems.</span></div>
              <div><strong>Technical Writer</strong><span>Turned complex workflows into clear operating documentation and reusable knowledge systems.</span></div>
              <div><strong>Case operations</strong><span>Built the frontline understanding of reimbursement, patient support and compliant case flow.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <Eyebrow>Available now · Montréal</Eyebrow>
          <h2>Let’s build something intentional.</h2>
          <p>Open to full-stack developer roles — remote from Montréal, bilingual EN / FR.</p>
          <div className="contact-links">
            <a className="button button-primary" href="mailto:ashfaaq.kazi@outlook.com"><Mail size={16} /> ashfaaq.kazi@outlook.com</a>
            <a className="button button-ghost" href="tel:+14168991692"><Phone size={16} /> +1 416-899-1692</a>
            <a className="button button-ghost" href="https://github.com/martiancoder12" target="_blank" rel="noreferrer">GitHub</a>
            <a className="button button-ghost" href="https://www.linkedin.com/in/ashfaaq-kazi/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="footer-line"><span><MapPin size={13} /> Montréal, Québec</span><span>© 2026 Ashfaaq Kazi</span></div>
        </div>
      </section>
    </main>
  )
}
