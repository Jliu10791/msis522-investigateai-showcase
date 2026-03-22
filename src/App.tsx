import {
  BarChart3,
  Brain,
  CheckCircle2,
  Code2,
  FileText,
  ImageIcon,
  Layers3,
  Lightbulb,
  Link as LinkIcon,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from 'lucide-react';
import { projectData } from './data/projectData';

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function PlaceholderGalleryCard({ title, caption, placeholder }: { title: string; caption: string; placeholder: string }) {
  return (
    <div className="surface gallery-card">
      <div className="gallery-placeholder">
        <div className="gallery-placeholder-inner">
          <ImageIcon size={28} />
          <p>{placeholder}</p>
        </div>
      </div>
      <div className="gallery-body">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-container">
        <section className="hero surface hero-surface">
          <div className="hero-copy">
            <div className="template-pill">
              <Sparkles size={14} />
              MSIS 522 · Team 10
            </div>
            <h1>{projectData.title}</h1>
            <p className="owner-line">{projectData.ownerLine}</p>
            <p className="hero-subtitle">{projectData.subtitle}</p>
            <p className="hero-summary">{projectData.executiveSummary}</p>

            <div className="badge-row">
              {projectData.badges.map((badge) => (
                <span key={badge} className="chip">
                  {badge}
                </span>
              ))}
            </div>

            <div className="link-row">
              {projectData.links.map((link) => (
                <a
                  key={`${link.label}-${link.url}`}
                  href={link.url}
                  className={link.primary ? 'primary-link' : 'secondary-link'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="surface instructions-surface">
          <div className="instruction-heading">
            <div className="icon-box cyan-box">
              <FileText size={22} />
            </div>
            <div>
              <p className="instruction-title">Project at a glance</p>
              <p className="instruction-subtitle">A multi-agent investment analysis platform for disciplined retail decision-making.</p>
            </div>
          </div>

          <div className="metrics-grid">
            {projectData.metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p className="metric-label">{metric.label}</p>
                <p className="metric-value">{metric.value}</p>
                <p className="metric-note">{metric.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box emerald-box">
                <Target size={18} />
              </div>
              <div>
                <p className="eyebrow">Problem</p>
                <h3>What problem are you trying to solve?</h3>
              </div>
            </div>
            <p className="body-copy">{projectData.problemStatement}</p>
            <div className="meta-grid">
              <div className="mini-panel">
                <p className="mini-label">Audience</p>
                <p>{projectData.audience}</p>
              </div>
              <div className="mini-panel">
                <p className="mini-label">Impact Goal</p>
                <p>{projectData.impactGoal}</p>
              </div>
              <div className="mini-panel">
                <p className="mini-label">Status</p>
                <p>{projectData.status}</p>
              </div>
            </div>
          </div>

          <div className="dark-card padded-card">
            <div className="card-heading">
              <div className="icon-box dark-icon-box">
                <Lightbulb size={18} />
              </div>
              <div>
                <p className="dark-eyebrow">Solution</p>
                <h3>What are you building?</h3>
              </div>
            </div>
            <p className="dark-copy">{projectData.solutionSummary}</p>
            <div className="method-row">
              {projectData.methods.map((method) => (
                <span key={method} className="dark-chip">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Product Structure"
            title="Three decision surfaces"
            description="InvestiGate is organized around three connected views: workflow, portfolio context, and final recommendation."
          />
          <div className="card-grid two-up">
            <div className="surface padded-card">
              <div className="card-heading">
                <div className="icon-box cyan-box">
                  <Network size={18} />
                </div>
                <h3>Workflow</h3>
              </div>
              <p className="body-copy compact">
                A user enters a natural-language query (e.g., "Should I buy ACN?"), selects Buy/Hold/Sell, and sets amount, risk tolerance, and time horizon. The system retrieves SEC 10-K filings, live market data, and historical precedents, then runs Bull, Bear, and Strategist agents in parallel before the Judge synthesizes a final verdict.
              </p>
            </div>
            <div className="surface padded-card">
              <div className="card-heading">
                <div className="icon-box emerald-box">
                  <BarChart3 size={18} />
                </div>
                <h3>Portfolio</h3>
              </div>
              <p className="body-copy compact">
                The portfolio dashboard surfaces total value, gain/loss, growth trends, and per-position detail across sectors. It flags concentration risks when a single stock or sector exceeds safe thresholds, detects hidden exposure through ETF look-through analysis, and identifies missing protections such as bond buffers or international diversification.
              </p>
            </div>
            <div className="surface padded-card">
              <div className="card-heading">
                <div className="icon-box violet-box">
                  <Lightbulb size={18} />
                </div>
                <h3>Recommendation</h3>
              </div>
              <p className="body-copy compact">
                The results view presents the full analysis: an executive verdict with traffic-light signal, the Bull's investment thesis, the Bear's principal risks, the Strategist's allocation recommendation, hidden exposure detection, historical scenario precedents, a confidence breakdown across key dimensions, a data log of sources consulted, a disclaimer, and an exportable report.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Gallery"
            title="Product walkthrough"
            description="Visual walkthrough of the InvestiGate experience across workflow, portfolio, and recommendation views."
          />
          <div className="card-grid two-up">
            {projectData.gallery.map((item) =>
              item.assetPath ? (
                <div key={item.title} className="surface gallery-card">
                  <div className="gallery-image-wrap">
                    <img src={item.assetPath} alt={item.title} className="gallery-image" />
                  </div>
                  <div className="gallery-body">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </div>
                </div>
              ) : (
                <PlaceholderGalleryCard
                  key={item.title}
                  title={item.title}
                  caption={item.caption}
                  placeholder={item.placeholder ?? 'Add a visual asset here'}
                />
              ),
            )}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box lab-box">
                <Wrench size={18} />
              </div>
              <div>
                <p className="eyebrow">Stack</p>
                <h3>Technology stack</h3>
              </div>
            </div>
            <div className="stack-list">
              {projectData.stack.map((group) => (
                <div key={group.category} className="stack-card">
                  <div className="stack-title-row">
                    <Layers3 size={16} />
                    <h4>{group.category}</h4>
                  </div>
                  <div className="badge-row compact-row">
                    {group.tools.map((tool) => (
                      <span key={tool} className="chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="body-copy compact">{group.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box violet-box">
                <Brain size={18} />
              </div>
              <div>
                <p className="eyebrow">Methods</p>
                <h3>Core AI methods</h3>
              </div>
            </div>
            <div className="method-grid">
              {projectData.methods.map((method) => (
                <div key={method} className="method-card">
                  <div className="method-icon">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <p className="method-title">{method}</p>
                    <p className="method-note"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Product"
            title="Key capabilities"
            description="The core features that power InvestiGate's structured decision-support workflow."
          />
          <div className="card-grid two-up">
            {projectData.features.map((feature) => (
              <div key={feature.title} className="surface padded-card">
                <div className="card-heading">
                  <div className="icon-box cyan-box">
                    <Rocket size={18} />
                  </div>
                  <h3>{feature.title}</h3>
                </div>
                <p className="body-copy compact">{feature.description}</p>
                <div className="check-list">
                  {feature.highlights.map((highlight) => (
                    <div key={highlight} className="check-item">
                      <CheckCircle2 size={16} />
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box lab-box">
                <Network size={18} />
              </div>
              <div>
                <p className="eyebrow">Architecture</p>
                <h3>System architecture</h3>
              </div>
            </div>
            <div className="architecture-list">
              {projectData.architecture.map((step, index) => (
                <div key={step.title} className="architecture-card">
                  <div className="step-badge">{index + 1}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box cyan-box">
                <Code2 size={18} />
              </div>
              <div>
                <p className="eyebrow">Code Highlights</p>
                <h3>Implementation highlights</h3>
              </div>
            </div>
            <div className="code-list">
              {projectData.codeHighlights.map((snippet) => (
                <div key={snippet.title} className="code-card">
                  <div className="code-card-top">
                    <div>
                      <h4>{snippet.title}</h4>
                      <p>{snippet.note}</p>
                    </div>
                    <span className="language-pill">{snippet.language}</span>
                  </div>
                  <pre>
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box cyan-box">
                <BarChart3 size={18} />
              </div>
              <div>
                <p className="eyebrow">Roadmap</p>
                <h3>Development roadmap</h3>
              </div>
            </div>
            <div className="roadmap-list">
              {projectData.roadmap.map((phase) => (
                <div key={phase.phase} className="roadmap-card">
                  <p className="roadmap-phase">{phase.phase}</p>
                  <div className="roadmap-items">
                    {phase.items.map((item) => (
                      <div key={item} className="bullet-item">
                        <span />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box danger-box">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="eyebrow">Risks</p>
                <h3>Risks and constraints</h3>
              </div>
            </div>
            <div className="risk-list">
              {projectData.risks.map((risk) => (
                <div key={risk.title} className="risk-card">
                  <h4>{risk.title}</h4>
                  <p>{risk.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-card">
          <div>
            <p className="dark-eyebrow">Summary</p>
            <h2>Built for better decisions</h2>
            <p>
              InvestiGate exists because retail investors deserve the same structured analysis that institutional teams take for granted {'\u2014'} without the six-figure terminal cost.
            </p>
          </div>

          <div className="card-grid two-up">
            <div className="closing-mini-card">
              <div className="card-heading">
                <div className="icon-box dark-icon-box">
                  <Users size={18} />
                </div>
                <h3>Who benefits?</h3>
              </div>
              <p>Self-directed retail investors who want structured, evidence-grounded analysis instead of headline-chasing and guesswork.</p>
            </div>
            <div className="closing-mini-card">
              <div className="card-heading">
                <div className="icon-box dark-icon-box">
                  <Target size={18} />
                </div>
                <h3>What changes?</h3>
              </div>
              <p>Fewer impulsive trades during volatility. More portfolio-aware, evidence-scored decision-making before every buy, hold, or sell.</p>
            </div>
            <div className="closing-mini-card">
              <div className="card-heading">
                <div className="icon-box dark-icon-box">
                  <Layers3 size={18} />
                </div>
                <h3>Why this build?</h3>
              </div>
              <p>Multi-agent adversarial debate with Gated RAG grounding and evidence scoring forces the system to present both sides and flag weak claims.</p>
            </div>
            <div className="closing-mini-card">
              <div className="card-heading">
                <div className="icon-box dark-icon-box">
                  <Rocket size={18} />
                </div>
                <h3>What is next?</h3>
              </div>
              <p>Plaid portfolio sync, voice input, and real-time agent streaming to move from demo prototype toward production.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
