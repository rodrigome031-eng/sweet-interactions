import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Layers3,
  Menu,
  Palette,
  Rocket,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Works", to: "/works" },
  { label: "Blogs", to: "/blogs" },
  { label: "Timeline", to: "/timeline" },
  { label: "Waitlist", to: "/waitlist" },
];

const pageItems = [
  { label: "About", to: "/about" },
  { label: "Tools", to: "/tools" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="aries-header">
      <div className="aries-header-inner">
        <Link to="/" className="aries-logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">A</span><span>rise</span><sup>UI</sup>
        </Link>

        <nav className="aries-nav desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={location.pathname === item.to ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <div className="nav-pages">
            <button
              className={pageItems.some((item) => location.pathname === item.to) ? "active" : ""}
              onClick={() => setPagesOpen((value) => !value)}
              aria-expanded={pagesOpen}
            >
              All Pages <ChevronDown size={15} />
            </button>
            {pagesOpen && (
              <div className="nav-dropdown">
                {pageItems.map((item) => (
                  <Link key={item.to} to={item.to} onClick={() => setPagesOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Link to="/waitlist" className="blue-button header-cta">Contact Us</Link>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          {[...navItems, ...pageItems].map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link to="/waitlist" className="blue-button" onClick={() => setOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="aries-site">
      <SiteHeader />
      <main>{children}</main>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <SectionLabel>{label}</SectionLabel>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function MockBrowser({ variant = "agency", className = "" }: { variant?: string; className?: string }) {
  return (
    <div className={`mock-browser ${className}`}>
      <div className="browser-top"><i /><i /><i /><span>{variant}.studio</span></div>
      <div className={`browser-art browser-${variant}`}>
        <div className="browser-nav"><b>{variant === "saas" ? "NOVA" : "Arise"}</b><span>Home</span><span>Services</span><span>About</span><button>Get Started</button></div>
        <div className="browser-copy">
          <small>Digital experiences</small>
          <strong>{variant === "saas" ? "Build faster. Grow smarter." : "Fresh ideas for modern brands."}</strong>
          <em />
          <em />
          <button>Explore project <ArrowRight size={12} /></button>
        </div>
      </div>
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Zap;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="feature-card">
      <div className="icon-box"><Icon size={21} /></div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export function ProcessCard({
  number,
  icon: Icon,
  title,
  children,
}: {
  number: string;
  icon: typeof Sparkles;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="process-card">
      <div className="process-icon"><Icon size={20} /></div>
      <span className="step-badge">Step {number}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export function CTA() {
  return (
    <section className="cta-panel">
      <div className="beam beam-left" />
      <div className="beam beam-right" />
      <SectionLabel>Ready when you are</SectionLabel>
      <h2>Start Your Project</h2>
      <p>Contact us today to start crafting your exceptional and customized website solution.</p>
      <div className="pill-row">
        {["Customized design", "Ongoing support", "Fast delivery"].map((item) => (
          <span key={item}><Check size={14} />{item}</span>
        ))}
      </div>
      <Link to="/waitlist" className="blue-button">Start a Project <ArrowRight size={16} /></Link>
    </section>
  );
}

export const StarField = ({ className = "" }: { className?: string }) => <div className={`star-field ${className}`} aria-hidden="true" />;

export const Icon = {
  Palette,
  Zap,
  Code2,
  Rocket,
  Users,
  Layers3,
  Sparkles,
  Star,
};
