import { useEffect, useState } from 'react'
import logo from './assets/autofaya.png'
import image1 from './assets/1.png'
import image2 from './assets/2.png'
import image3 from './assets/3.png'
import image4 from './assets/4.png'
import image5 from './assets/5.png'
import image6 from './assets/6.png'
import image7 from './assets/7.png'
import image8 from './assets/8.png'
import './App.css'

const navLinks = [
  { href: '#whatsapp', label: 'WhatsApp' },
  { href: '#ai-chatbots', label: 'AI Chatbots' },
  { href: '#email', label: 'Email' },
  { href: '#widgets', label: 'Widgets' },
  { href: '#pricing', label: 'Pricing' },
]

const featureTags = ['Templates', 'Broadcasts', 'API Access']

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'For small teams launching WhatsApp and web automation.',
    features: ['1 shared inbox', 'Basic automation flows', 'Website widget', 'Email support'],
    cta: 'Start Starter',
  },
  {
    name: 'Growth',
    price: '$99',
    period: '/month',
    description: 'For growing businesses that need AI and multi-channel workflows.',
    features: ['5 team seats', 'AI chatbot training', 'Advanced flow builder', 'Priority support'],
    cta: 'Start Growth',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large operations with custom onboarding, scale, and compliance needs.',
    features: ['Unlimited seats', 'Custom integrations', 'Dedicated success manager', 'SLA and security review'],
    cta: 'Talk to Sales',
  },
]

const heroSlides = [image1, image2, image3, image4, image5, image6, image7, image8]

function App() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="page-shell">
      <nav className="top-nav" id="top-nav">
        <div className="nav-inner">
          <a className="brand" href="#">
            <img className="brand-logo" src={logo} alt="Autofaya Logo" />
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
            <a className="login-link" href="/login">
              Login
            </a>
            <a className="primary-button small" href="/signup">
              Get Started
            </a>
            <button className="menu-toggle" type="button" aria-label="Open menu">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="hero-content-grid">
            <div className="hero-copy">
              <h1>Automate every customer conversation from one place.</h1>
              <p>
                Build powerful flows across WhatsApp, AI chatbots, email, and website widgets.
                Connect with your customers where they already are, instantly.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#">
                  Start Free
                </a>
                <a className="secondary-button" href="#">
                  Book Demo
                </a>
              </div>
            </div>

            <div className="hero-demo">
              <div className="dashboard-window">
                <div className="browser-chrome">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="dashboard-layout">
                  <aside className="dashboard-sidebar">
                    <div className="sidebar-icon active">
                      <span className="material-symbols-outlined">forum</span>
                    </div>
                    <div className="sidebar-icon">
                      <span className="material-symbols-outlined">account_tree</span>
                    </div>
                    <div className="sidebar-icon">
                      <span className="material-symbols-outlined">group</span>
                    </div>
                    <div className="sidebar-icon">
                      <span className="material-symbols-outlined">bar_chart</span>
                    </div>
                  </aside>

                  <section className="inbox-panel">
                    <div className="panel-title">Active Chats</div>
                    <div className="chat-list">
                      <div className="chat-row">
                        <div className="chat-avatar whatsapp">W</div>
                        <div>
                          <div className="chat-title">WhatsApp Lead</div>
                          <div className="chat-text">How much is pricing?</div>
                        </div>
                      </div>
                      <div className="chat-row selected">
                        <div className="chat-avatar primary">W</div>
                        <div>
                          <div className="chat-title">Website Widget</div>
                          <div className="chat-text">I need help with...</div>
                        </div>
                      </div>
                      <div className="chat-row">
                        <div className="chat-avatar email">E</div>
                        <div>
                          <div className="chat-title">Email Inquiry</div>
                          <div className="chat-text">Demo request</div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="flow-builder">
                    <div className="flow-grid" aria-hidden="true" />
                    <div className="flow-content">
                      <div className="flow-card flow-card-strong">
                        <div className="flow-card-title">Incoming Message</div>
                        <div className="flow-card-subtitle">From Any Channel</div>
                      </div>

                      <div className="flow-line vertical" />

                      <div className="flow-card flow-card-ai">
                        <div className="flow-badge">AI Active</div>
                        <div className="flow-card-title">Analyze Intent</div>
                      </div>

                      <div className="flow-line vertical" />

                      <div className="flow-actions-branch">
                        <div className="flow-branch">
                          <div className="flow-line horizontal left" />
                          <div className="flow-action whatsapp-fill">Send WhatsApp</div>
                        </div>
                        <div className="flow-branch">
                          <div className="flow-line horizontal right" />
                          <div className="flow-action">Assign to Human</div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="section-heading">
            <h2>Precision tools for modern customer communication.</h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card feature-card-wide" id="whatsapp">
              <div className="feature-card-top">
                <div>
                  <h3>WhatsApp Automation</h3>
                  <p>
                    Build dynamic conversational flows on the world&apos;s most popular
                    messaging app. Native integration, no code required.
                  </p>
                </div>
                <div className="feature-icon whatsapp-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.47 1.33 4.98L2 22l5.25-1.38a9.9 9.9 0 0 0 4.77 1.22h.01c5.47 0 9.93-4.45 9.93-9.93a9.86 9.86 0 0 0-2.91-7ZM12.03 20.16h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.53 3.69-8.22 8.24-8.22a8.15 8.15 0 0 1 5.82 2.41 8.17 8.17 0 0 1 2.4 5.82c0 4.53-3.69 8.22-8.22 8.22Zm4.5-6.17c-.25-.12-1.47-.73-1.7-.82-.23-.08-.4-.12-.57.12-.17.25-.65.82-.8.98-.15.17-.3.19-.55.06-.25-.12-1.07-.39-2.04-1.25-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.38.1-.5.11-.11.25-.3.37-.45.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.12.17 1.77 2.7 4.28 3.79.6.26 1.06.42 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.19.21-.59.21-1.1.15-1.19-.06-.08-.23-.12-.48-.25Z"
                    />
                  </svg>
                </div>
              </div>

              <div className="tag-row">
                {featureTags.map((tag) => (
                  <span key={tag} className="feature-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="feature-card" id="ai-chatbots">
              <div>
                <div className="feature-icon primary-icon">
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <h3>AI Chatbots</h3>
                <p>
                  Train AI on your knowledge base to resolve 80% of tier 1 support queries
                  instantly.
                </p>
              </div>
            </article>

            <article className="feature-card" id="widgets">
              <div>
                <div className="feature-icon neutral-icon">
                  <span className="material-symbols-outlined">schema</span>
                </div>
                <h3>Visual Flows</h3>
                <p>
                  Drag-and-drop canvas to design complex multi-channel customer journeys.
                </p>
              </div>
            </article>

            <article className="feature-card feature-card-dark" id="email">
              <div className="feature-dark-copy">
                <h3>Shared Team Inbox</h3>
                <p>
                  Unify WhatsApp, Email, and Web Widgets into a single collaborative
                  workspace for your support and sales teams.
                </p>
                <a className="feature-link" href="#">
                  Explore Inbox Features
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>

              <div className="feature-dark-panel">
                <div className="feature-dark-row">
                  <span className="feature-dark-dot green" />
                  <span className="feature-dark-line short" />
                </div>
                <div className="feature-dark-row active">
                  <span className="feature-dark-dot blue" />
                  <span className="feature-dark-line long" />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-heading pricing-heading">
            <h2>Simple pricing for teams shipping faster conversations.</h2>
            <p>Choose a plan that fits your stage, then scale channels, automations, and support as you grow.</p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={plan.featured ? 'pricing-card pricing-card-featured' : 'pricing-card'}
              >
                {plan.featured ? <div className="pricing-badge">Most Popular</div> : null}
                <div>
                  <h3>{plan.name}</h3>
                  <div className="pricing-value">
                    <span className="pricing-amount">{plan.price}</span>
                    {plan.period ? <span className="pricing-period">{plan.period}</span> : null}
                  </div>
                  <p>{plan.description}</p>
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="pricing-check" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a className={plan.featured ? 'primary-button pricing-button' : 'secondary-button pricing-button'} href="#">
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="slider-section" aria-label="Autofaya product gallery">
          <div className="hero-background">
            <div className="hero-slideshow">
              {heroSlides.map((imageSrc, index) => (
                <div
                  key={imageSrc}
                  className={index === activeHeroSlide ? 'hero-slide active' : 'hero-slide'}
                >
                  <img src={imageSrc} alt="" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-inner">
          <div className="footer-brand">Autofaya</div>
          <nav className="footer-links">
            <a href="#product">Product</a>
            <a href="#features">Features</a>
            <a href="#security">Security</a>
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-of-service">Terms of Service</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-copy">© {currentYear} Autofaya. Precision Engineering for Communication.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
