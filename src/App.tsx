import { useEffect, useRef, useState } from 'react'
import logo from './assets/autofaya.png'
import './App.css'

const navLinks = [
  { href: '/#platform', label: 'Platform' },
  { href: '/#workflow', label: 'Workflow' },
  { href: '/#integrations', label: 'Integrations' },
  { href: '/#security', label: 'Security' },
  { href: '/#pricing', label: 'Pricing' },
]

const metrics = [
  { value: '12k+', label: 'workflow runs tracked' },
  { value: '99.9%', label: 'platform uptime target' },
  { value: '40+', label: 'planned integration types' },
]

const platformCards = [
  {
    icon: 'account_tree',
    title: 'Visual workflow builder',
    text: 'Design triggers, conditions, forms, webhooks, and actions on a canvas your operations team can understand.',
  },
  {
    icon: 'hub',
    title: 'Integration control plane',
    text: 'Connect business systems once, then reuse them across departments without rebuilding every process.',
  },
  {
    icon: 'monitoring',
    title: 'Execution observability',
    text: 'Watch payloads, webhook events, retries, and run status as automations move through the platform.',
  },
  {
    icon: 'admin_panel_settings',
    title: 'Enterprise governance',
    text: 'Centralize access, audit trails, approval gates, and environment-specific workflow controls.',
  },
]

const workflowSteps = [
  'Webhook receives a customer or system event',
  'Autofaya validates payload and maps fields',
  'Workflow branches by department, SLA, or status',
  'Actions update tools, notify teams, and record outcomes',
]

const integrations = ['Telegram', 'Forms', 'Webhooks', 'Iframes', 'CRM', 'ERP', 'Databases', 'Internal APIs']

const pricingPlans = [
  {
    name: 'Builder',
    price: '$49',
    description: 'For teams starting with webhook and form automations.',
    features: ['Visual workflow builder', 'Webhook event history', '5 active workflows', 'Email support'],
  },
  {
    name: 'Operations',
    price: '$149',
    description: 'For growing companies automating work across departments.',
    features: ['Unlimited draft workflows', 'Advanced execution logs', 'Team collaboration', 'Priority support'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For regulated teams with scale, security, and integration requirements.',
    features: ['Dedicated environments', 'Custom integrations', 'Security review', 'SLA and onboarding'],
  },
]

type Theme = 'light' | 'dark'

type LegalPageContent = {
  eyebrow: string
  title: string
  updated: string
  intro: string
  sections: Array<{
    title: string
    text: string
  }>
}

const legalPages: Record<string, LegalPageContent> = {
  '/privacy-policy': {
    eyebrow: 'Privacy Policy',
    title: 'How Autofaya protects platform and workflow data.',
    updated: 'May 12, 2026',
    intro:
      'This policy explains how Autofaya collects, uses, and protects information when teams use our automation, workflow, webhook, form, and integration services.',
    sections: [
      {
        title: 'Information we collect',
        text:
          'We collect account information, workspace details, workflow configuration, webhook metadata, form submissions, usage logs, support messages, and billing or commercial information needed to provide the platform.',
      },
      {
        title: 'How we use information',
        text:
          'We use information to authenticate users, operate workflows, store automation designs, provide support, improve platform reliability, detect abuse, meet security obligations, and communicate important service updates.',
      },
      {
        title: 'Workflow and integration data',
        text:
          'Workflow payloads may include data sent by your connected systems. Customers are responsible for choosing what data enters Autofaya and configuring workflows according to their internal privacy and compliance requirements.',
      },
      {
        title: 'Data sharing',
        text:
          'We do not sell customer data. We may share limited information with infrastructure, email, analytics, payment, security, and support providers that help us operate Autofaya under appropriate confidentiality protections.',
      },
      {
        title: 'Security and retention',
        text:
          'We use technical and organizational safeguards to protect platform data. Data is retained for as long as needed to provide the service, meet legal obligations, resolve disputes, and maintain audit records.',
      },
      {
        title: 'Your choices',
        text:
          'Workspace administrators can manage user access, delete workflows, and request assistance with data export or deletion. Some operational logs may remain for security, compliance, or backup purposes.',
      },
    ],
  },
  '/terms-condition': {
    eyebrow: 'Terms & Conditions',
    title: 'Terms for using Autofaya workflow automation.',
    updated: 'May 12, 2026',
    intro:
      'These terms govern access to Autofaya, including the workflow builder, webhook triggers, forms, integrations, execution monitoring, and related enterprise automation services.',
    sections: [
      {
        title: 'Use of the service',
        text:
          'You may use Autofaya to design, store, and operate business workflows in accordance with these terms, your subscription, and all applicable laws and internal authorization requirements.',
      },
      {
        title: 'Accounts and access',
        text:
          'You are responsible for maintaining accurate account information, protecting credentials, and ensuring that users invited to your workspace have appropriate authority to access workflow and integration data.',
      },
      {
        title: 'Customer data and workflows',
        text:
          'You retain ownership of your workflow definitions, webhook payloads, form submissions, and connected system data. You grant Autofaya the rights needed to host, process, transmit, and display that data to provide the service.',
      },
      {
        title: 'Acceptable use',
        text:
          'You must not use Autofaya to violate laws, compromise third-party systems, send unauthorized messages, process prohibited data, bypass rate limits, or interfere with platform security or availability.',
      },
      {
        title: 'Subscriptions and availability',
        text:
          'Paid plans, usage limits, support levels, and service commitments are defined by the applicable order, plan, or written agreement. We may update the platform to improve reliability, security, and functionality.',
      },
      {
        title: 'Limitation of liability',
        text:
          'To the maximum extent permitted by law, Autofaya is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the platform or connected third-party services.',
      },
    ],
  },
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const savedTheme = window.localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function WorkflowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const currentCanvas = canvasRef.current
    if (!currentCanvas) {
      return
    }

    const currentContext = currentCanvas.getContext('2d')
    if (!currentContext) {
      return
    }

    const canvasElement: HTMLCanvasElement = currentCanvas
    const canvasContext: CanvasRenderingContext2D = currentContext

    let frame = 0
    let animationId = 0
    const nodes = [
      { x: 0.18, y: 0.28, label: 'Webhook', color: '#0f8b8d' },
      { x: 0.48, y: 0.28, label: 'Validate', color: '#2563eb' },
      { x: 0.76, y: 0.28, label: 'Route', color: '#7c3aed' },
      { x: 0.31, y: 0.66, label: 'Notify', color: '#ea580c' },
      { x: 0.62, y: 0.66, label: 'Record', color: '#16a34a' },
    ]

    function draw() {
      const rect = canvasElement.getBoundingClientRect()
      const scale = window.devicePixelRatio || 1
      canvasElement.width = rect.width * scale
      canvasElement.height = rect.height * scale
      canvasContext.setTransform(scale, 0, 0, scale, 0, 0)
      canvasContext.clearRect(0, 0, rect.width, rect.height)

      canvasContext.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--hero-canvas-bg')
      canvasContext.fillRect(0, 0, rect.width, rect.height)

      canvasContext.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--canvas-dot')
      for (let x = 18; x < rect.width; x += 24) {
        for (let y = 18; y < rect.height; y += 24) {
          canvasContext.beginPath()
          canvasContext.arc(x, y, 1.2, 0, Math.PI * 2)
          canvasContext.fill()
        }
      }

      const drawConnection = (from: (typeof nodes)[number], to: (typeof nodes)[number], offset = 0) => {
        const x1 = from.x * rect.width
        const y1 = from.y * rect.height
        const x2 = to.x * rect.width
        const y2 = to.y * rect.height
        const pulse = (Math.sin(frame * 0.04 + offset) + 1) / 2

        canvasContext.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--canvas-line')
        canvasContext.lineWidth = 2
        canvasContext.beginPath()
        canvasContext.moveTo(x1, y1)
        canvasContext.bezierCurveTo((x1 + x2) / 2, y1, (x1 + x2) / 2, y2, x2, y2)
        canvasContext.stroke()

        canvasContext.fillStyle = '#0f8b8d'
        const px = x1 + (x2 - x1) * pulse
        const py = y1 + (y2 - y1) * pulse
        canvasContext.beginPath()
        canvasContext.arc(px, py, 4, 0, Math.PI * 2)
        canvasContext.fill()
      }

      drawConnection(nodes[0], nodes[1], 0)
      drawConnection(nodes[1], nodes[2], 1.2)
      drawConnection(nodes[1], nodes[3], 2.1)
      drawConnection(nodes[2], nodes[4], 3.2)

      nodes.forEach((node) => {
        const x = node.x * rect.width
        const y = node.y * rect.height

        canvasContext.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--canvas-card')
        canvasContext.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--canvas-card-border')
        canvasContext.lineWidth = 1
        roundRect(canvasContext, x - 58, y - 28, 116, 56, 8)
        canvasContext.fill()
        canvasContext.stroke()

        canvasContext.fillStyle = node.color
        canvasContext.beginPath()
        canvasContext.arc(x - 34, y, 12, 0, Math.PI * 2)
        canvasContext.fill()

        canvasContext.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--canvas-text')
        canvasContext.font = '700 13px Manrope, sans-serif'
        canvasContext.fillText(node.label, x - 12, y + 5)
      })

      frame += 1
      animationId = window.requestAnimationFrame(draw)
    }

    draw()

    return () => window.cancelAnimationFrame(animationId)
  }, [])

  return <canvas ref={canvasRef} className="workflow-canvas" aria-label="Animated workflow diagram" />
}

function roundRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  context.beginPath()
  context.moveTo(x + radius, y)
  context.arcTo(x + width, y, x + width, y + height, radius)
  context.arcTo(x + width, y + height, x, y + height, radius)
  context.arcTo(x, y + height, x, y, radius)
  context.arcTo(x, y, x + width, y, radius)
  context.closePath()
}

function getLegalPage(pathname: string) {
  return legalPages[pathname] ?? null
}

function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span>{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <div className="legal-updated">Last updated: {page.updated}</div>
      </section>

      <section className="legal-content">
        {page.sections.map((section) => (
          <article className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
        <div className="legal-note">
          <strong>Contact</strong>
          <p>
            Questions about these terms can be sent to{' '}
            <a href="mailto:legal@autofaya.com">legal@autofaya.com</a>.
          </p>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentYear = new Date().getFullYear()
  const legalPage =
    typeof window === 'undefined' ? null : getLegalPage(window.location.pathname)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="page-shell">
      <nav className="top-nav" id="top-nav">
        <div className="nav-inner">
          <a className="brand" href="/">
            <img className="brand-logo" src={logo} alt="Autofaya" />
            <span>Autofaya</span>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-outlined">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <a className="login-link" href="/login">
              Login
            </a>
            <a className="primary-button small" href="/#contact">
              Book Demo
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="/login" onClick={() => setIsMenuOpen(false)}>
            Login
          </a>
          <a className="primary-button small" href="/#contact" onClick={() => setIsMenuOpen(false)}>
            Book Demo
          </a>
        </div>
      </nav>

      {legalPage ? (
        <LegalPage page={legalPage} />
      ) : (
      <main>
        <section className="hero-section">
          <WorkflowCanvas />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-kicker">Enterprise automation platform</span>
            <h1>Autofaya runs the workflows behind modern operations.</h1>
            <p>
              Build event-driven automations across webhooks, forms, messaging tools,
              internal systems, and human approvals with one visual control plane.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="/#contact">
                Talk to Sales
              </a>
              <a className="secondary-button" href="/#workflow">
                See Workflow Engine
              </a>
            </div>
          </div>
        </section>

        <section className="metrics-band" aria-label="Autofaya platform metrics">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="platform-section" id="platform">
          <div className="section-heading">
            <span>Platform</span>
            <h2>One place to design, run, and observe business workflows.</h2>
            <p>
              Autofaya gives operations, support, sales, and engineering teams a shared
              automation layer without forcing every process into custom code.
            </p>
          </div>

          <div className="platform-grid">
            {platformCards.map((card) => (
              <article className="platform-card" key={card.title}>
                <div className="feature-icon">
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow-section" id="workflow">
          <div className="workflow-copy">
            <span>Workflow Engine</span>
            <h2>Trigger, inspect, branch, and execute.</h2>
            <p>
              Start with webhook and form triggers, inspect live payloads as they arrive,
              then route data through actions and human checkpoints.
            </p>
          </div>
          <div className="workflow-diagram" aria-label="Workflow execution lifecycle">
            {workflowSteps.map((step, index) => (
              <div className="diagram-step" key={step}>
                <div className="step-index">{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="integrations-section" id="integrations">
          <div className="section-heading compact">
            <span>Integrations</span>
            <h2>Begin simple. Expand into every system your company depends on.</h2>
          </div>
          <div className="integration-cloud">
            {integrations.map((integration) => (
              <span key={integration}>{integration}</span>
            ))}
          </div>
        </section>

        <section className="security-section" id="security">
          <div>
            <span>Enterprise Readiness</span>
            <h2>Designed for teams that need control, not chaos.</h2>
          </div>
          <div className="security-grid">
            <article>
              <strong>Audit-ready runs</strong>
              <p>Every trigger, payload, run, and action can be inspected for operational review.</p>
            </article>
            <article>
              <strong>Environment separation</strong>
              <p>Keep development, staging, and production workflows controlled as teams scale.</p>
            </article>
            <article>
              <strong>Role-based workspaces</strong>
              <p>Give builders, operators, and administrators the right level of access.</p>
            </article>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-heading compact">
            <span>Plans</span>
            <h2>Automation plans for teams from builder to enterprise.</h2>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article
                className={plan.featured ? 'pricing-card featured' : 'pricing-card'}
                key={plan.name}
              >
                {plan.featured ? <div className="pricing-badge">Recommended</div> : null}
                <h3>{plan.name}</h3>
                <div className="pricing-value">{plan.price}</div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="material-symbols-outlined">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a className={plan.featured ? 'primary-button' : 'secondary-button'} href="/#contact">
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Building'}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div>
            <span>Ready for workflow automation?</span>
            <h2>Build the automation layer your teams can actually operate.</h2>
          </div>
          <a className="primary-button" href="mailto:sales@autofaya.com">
            Schedule Enterprise Demo
          </a>
        </section>
      </main>
      )}

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">Autofaya</div>
          <nav className="footer-links">
            <a href="/#platform">Platform</a>
            <a href="/#workflow">Workflow</a>
            <a href="/#integrations">Integrations</a>
            <a href="/#security">Security</a>
            <a href="/#pricing">Pricing</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-condition">Terms</a>
          </nav>
          <div className="footer-copy">&copy; {currentYear} Autofaya. Enterprise workflow automation.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
