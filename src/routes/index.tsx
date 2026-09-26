import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Grid2X2, MousePointer2, Sparkles, Zap } from "lucide-react";
import {
  CTA,
  FeatureCard,
  MockBrowser,
  PageShell,
  ProcessCard,
  SectionHeading,
  StarField,
} from "../components/aries";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PageShell>
      <section className="hero">
        <StarField />
        <div className="planet-glow" />
        <div className="hero-inner">
          <div className="eyebrow">We Design websites that matter, user's can't resist <ArrowRight size={15} /></div>
          <h1>Design That Powers Real<br /><span>Business Growth</span></h1>
          <p>Elevating brands through innovative and engaging web solutions.</p>
          <Link to="/waitlist" className="blue-button hero-button">Get Started</Link>
          <div className="availability"><span />2 Spots Available</div>
        </div>
        <div className="hero-projects">
          <MockBrowser variant="agency" />
          <MockBrowser variant="saas" />
          <MockBrowser variant="creative" />
        </div>
      </section>

      <section className="trust-strip">
        <div className="rating"><span className="stars">★★★★★</span><b>4.9/5</b> From 3,602 Customers</div>
        <div className="logo-row">{["Vortex", "Synergy", "Spectrum", "Velocity", "Enigma", "Lumina"].map((x) => <span key={x}>{x}</span>)}</div>
      </section>

      <section className="section section-video">
        <SectionHeading label="See How We Can Help Your Brand" title="" description="" />
        <div className="video-frame">
          <div className="video-scene">
            <div className="scene-person p1" /><div className="scene-person p2" /><div className="scene-person p3" />
            <button className="play-button"><MousePointer2 size={18} /> Play Video</button>
          </div>
        </div>
        <div className="feature-grid three">
          <FeatureCard icon={Grid2X2} title="Custom Designs">Tailored websites meticulously crafted to reflect your brand.</FeatureCard>
          <FeatureCard icon={Zap} title="Fast Performance">Optimized for lightning-fast speed to enhance user experience.</FeatureCard>
          <FeatureCard icon={Sparkles} title="SEO Friendly">Designed to improve SEO and increase visibility effortlessly.</FeatureCard>
        </div>
      </section>

      <section className="mission-panel">
        <StarField />
        <div className="mission-content">
          <p>Our mission is to design websites that<br />attract and engage customers</p>
        </div>
      </section>

      <section className="section">
        <SectionHeading label="Why Us" title="Why Arise Stands Out" description="Discover why Arise excels in delivering innovative, client-focused web design solutions." />
        <div className="feature-grid three why-grid">
          <FeatureCard icon={Sparkles} title="Expert Team">Dedicated professionals with expertise in cutting-edge web design + development.</FeatureCard>
          <FeatureCard icon={Check} title="Client-Centric Approach">Tailoring solutions to meet your unique business needs and exceed expectations.</FeatureCard>
          <FeatureCard icon={Zap} title="Proven Experience">Years of successfully delivering impactful web solutions across diverse industries.</FeatureCard>
          <FeatureCard icon={MousePointer2} title="Strategic Thinking">Every interaction is designed around your goals and audience.</FeatureCard>
          <FeatureCard icon={Grid2X2} title="Modern Systems">Scalable visual systems built to stay consistent across every page.</FeatureCard>
          <FeatureCard icon={Sparkles} title="Long-Term Support">Support and refinements after launch keep your digital presence moving.</FeatureCard>
        </div>
      </section>

      <section className="section process-section">
        <SectionHeading label="Process" title="Our Design Process" description="Explore our streamlined approach to creating bespoke websites that align with your goals." />
        <div className="process-grid">
          <ProcessCard number="01" icon={Sparkles} title="Discovery Phase">Understanding your brand, objectives, and target audience to define project goals.</ProcessCard>
          <ProcessCard number="02" icon={MousePointer2} title="Design Concept">Creating initial design concepts based on insights gathered during the discovery phase.</ProcessCard>
          <ProcessCard number="03" icon={Grid2X2} title="Development & Testing">Building and refining the website, ensuring functionality and compatibility across devices.</ProcessCard>
          <ProcessCard number="04" icon={Zap} title="Launch & Support">Deploying the finalized website and providing ongoing support to ensure long-term success.</ProcessCard>
        </div>
      </section>

      <section className="section about-split">
        <div className="team-art"><div className="team-grid-lines" /><div className="team-orb" /><div className="team-card-stack"><span /><span /><span /><span /></div></div>
        <div>
          <span className="section-label">About Us</span>
          <h2>Discover Who We Are and Our Mission</h2>
          <p>Discover who we are and our mission at Arise. We are a passionate team of creative professionals dedicated to crafting exceptional web design solutions. Our mission is to empower businesses with innovative websites that not only captivate but also drive results.</p>
          <div className="button-row"><Link to="/waitlist" className="blue-button">Contact Us <ArrowRight size={16} /></Link><Link to="/works" className="ghost-button">View Projects <ArrowRight size={16} /></Link></div>
          <div className="founders"><div><b>Ryan Matthews</b><span>Co Founder</span></div><div><b>David Parker</b><span>Co Founder</span></div></div>
        </div>
      </section>

      <section className="section tools-preview">
        <SectionHeading label="Tools" title="Tools We Utilize for Excellence" description="Discover the advanced tools and technologies we leverage to create cutting-edge websites." />
        <div className="tool-grid">{["Figurative", "FrameX", "Shopty", "Idease", "Webflew", "Payflow"].map((x) => <div className="tool-card" key={x}><span className="tool-dot" /><b>{x}</b><ArrowRight size={15} /><p>Collaborative tools and workflows for advanced digital experiences.</p></div>)}</div>
      </section>

      <section className="section projects-preview">
        <SectionHeading label="Works" title="Explore Our Recent Projects" description="Browse through our portfolio showcasing diverse, innovative web design projects and client successes." />
        <div className="projects-grid"><MockBrowser variant="saas" /><MockBrowser variant="creative" /><MockBrowser variant="agency" /></div>
        <div className="center-link"><Link to="/works">View all projects <ArrowRight size={16} /></Link></div>
      </section>

      <section className="insight-banner">
        <StarField />
        <span>Industry Insights</span><h2>Website Design Impacts<br />Customer Retention</h2><p>Capture and retain more customers by optimizing your website’s design for engagement.</p><Link to="/waitlist" className="blue-button">Start a Project</Link>
      </section>

      <section className="section comparison-preview">
        <SectionHeading label="Comparison" title="Choosing Arise Over Others" description="See why Arise stands out with superior service, innovation, and client satisfaction benchmarks." />
        <div className="comparison-table">
          {["Experienced team delivering standard solutions.", "Offers standard, template-based designs.", "Limited post-launch support and updates.", "Basic performance with average loading times.", "Basic SEO practices implemented."].map((x) => <div className="comparison-row" key={x}><span>✦ {x}</span><strong><Zap size={15} /> {x.replace("standard", "customized").replace("Basic", "Advanced").replace("average", "fast").replace("Limited", "Comprehensive")}</strong></div>)}
        </div>
      </section>

      <section className="section pricing-preview">
        <SectionHeading label="Services" title="Explore Our Core Services" description="Discover our comprehensive range of services tailored to enhance your digital presence." />
        <div className="pricing-grid">
          {[["Basic", "$1,995/m"], ["Pro", "$3,995/m"], ["Premium", "$5,995/m"]].map(([name, price], index) => <article className={`price-card ${index === 1 ? "popular" : ""}`} key={name}>{index === 1 && <span className="popular-badge">Most Popular</span>}<b>{name}</b><h3>{price}</h3><p>Pause or cancel anytime.</p><button className="ghost-button full">Get Started</button><a href="#included">Book a Call ↗</a><h4>What’s included:</h4>{["Enjoy limitless design requests.", "One request at a time", "Average 48 hours delivery", "Unlimited brands", "Ongoing support"].map((x) => <span className="check-item" key={x}><Check size={15} />{x}</span>)}</article>)}
        </div>
      </section>

      <section className="section"><CTA /></section>
    </PageShell>
  );
}
