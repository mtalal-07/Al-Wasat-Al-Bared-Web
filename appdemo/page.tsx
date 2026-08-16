'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Menu, MoveUpRight, ShieldCheck, Sparkles, X, Zap } from 'lucide-react'

const images = {
  hero: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85',
  workshop: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85',
  stairs: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
  doors: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85',
  architectural: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1500&q=85',
  steel: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85',
}

const services = [
  { number: '01', title: 'Structural Steel', copy: 'Load-bearing frames, beams, and custom structures engineered for demanding environments.', image: images.steel, tags: ['Steel', 'Industrial'] },
  { number: '02', title: 'Architectural Metalwork', copy: 'Refined metal details that bring clarity, texture, and permanence to every building.', image: images.architectural, tags: ['Design', 'Detail'] },
  { number: '03', title: 'Stainless Steel', copy: 'Clean, corrosion-resistant fabrication for interiors, hospitality, and public spaces.', image: images.doors, tags: ['316L', 'Finishing'] },
  { number: '04', title: 'Doors & Railings', copy: 'High-performance entrances, balustrades, and handrails made for daily use.', image: images.stairs, tags: ['Access', 'Safety'] },
]

const projects = [
  { title: 'Harbour House', category: 'Architectural metalwork', location: 'Dubai, UAE', image: images.architectural, scope: 'Facade details, feature stair, handrails' },
  { title: 'Northline Logistics', category: 'Structural steel', location: 'Abu Dhabi, UAE', image: images.steel, scope: 'Canopy structure, platforms, access systems' },
  { title: 'The Foundry', category: 'Interior fabrication', location: 'Sharjah, UAE', image: images.workshop, scope: 'Partitions, counters, custom joinery' },
]

const process = [
  ['Brief', 'We listen closely, review drawings, and clarify the real constraints behind your project.'],
  ['Engineer', 'Our team turns the brief into a practical, buildable scope with clear specifications.'],
  ['Fabricate', 'Every cut, weld, and finish is inspected in our workshop before it leaves the floor.'],
  ['Deliver', 'We coordinate site delivery and installation around your programme, not ours.'],
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectIndex, setProjectIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Al Wasat home"><span className="brand-mark">AW</span><span>AL WASAT <b>METAL INDUSTRIES</b></span></a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#process" onClick={() => setMenuOpen(false)}>Our process</a><a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
        </nav>
        <a className="header-cta" href="#quote">Start a project <ArrowUpRight /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top">
        <Image className="hero-image" src={images.hero} alt="Metal worker welding in a fabrication workshop" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light"><span /> UAE-based metal fabrication</p>
          <h1>Precision metalwork.<br /><em>Built for industry.</em></h1>
          <p className="hero-copy">From first sketch to final installation, we make metal work harder, last longer, and look considered.</p>
          <div className="hero-actions"><a className="button button-accent" href="#quote">Request a quote <ArrowRight /></a><a className="button button-ghost" href="#projects">Explore our work <ArrowDownRight /></a></div>
          <div className="hero-proof"><span><b>2016</b> established</span><span><b>UAE</b> based</span><span><b>01</b> trusted partner</span></div>
        </div>
        <div className="hero-scroll"><span>Scroll to explore</span><ChevronDown /></div>
      </section>

      <section className="intro section-pad">
        <div className="section-label"><span>01</span><span className="rule" /><span>Who we are</span></div>
        <div className="intro-grid"><h2>Made with intent.<br /><span>Measured to last.</span></h2><div className="intro-copy"><p>Al Wasat is a fabrication partner for architects, contractors, and businesses who care about the details.</p><p>We combine disciplined engineering with a sharp eye for finish — delivering work that performs beautifully, from the structural core to the final edge.</p><a className="text-link" href="#quote">Tell us about your project <ArrowRight /></a></div></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading"><div><p className="eyebrow"><span /> What we do</p><h2>Built around<br /><span>your brief.</span></h2></div><p className="section-note">One team for the whole metalwork journey — from technical thinking through to a clean handover.</p></div>
        <div className="service-grid">{services.map((service, index) => <article className={index === 0 ? 'service-card featured reveal' : 'service-card reveal'} key={service.number}><div className="service-image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 700px) 85vw, 50vw" /><span className="service-number">{service.number}</span></div><div className="service-body"><div><h3>{service.title}</h3><p>{service.copy}</p><div className="tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="card-arrow" /></div></article>)}</div>
      </section>

      <section className="projects section-pad dark-section" id="projects">
        <div className="section-heading light-heading"><div><p className="eyebrow light"><span /> Selected work</p><h2>Proof in the<br /><em>finished piece.</em></h2></div><div className="project-controls"><button onClick={() => setProjectIndex((projectIndex + projects.length - 1) % projects.length)} aria-label="Previous project"><ChevronLeft /></button><button onClick={() => setProjectIndex((projectIndex + 1) % projects.length)} aria-label="Next project"><ChevronRight /></button></div></div>
        <div className="project-feature"><div className="project-visual"><Image src={projects[projectIndex].image} alt={projects[projectIndex].title} fill sizes="(max-width: 800px) 100vw, 65vw" /></div><div className="project-info"><p className="project-count">0{projectIndex + 1} / 0{projects.length}</p><p className="project-category">{projects[projectIndex].category}</p><h3>{projects[projectIndex].title}</h3><p>{projects[projectIndex].scope}</p><div className="project-meta"><span><b>Location</b>{projects[projectIndex].location}</span><span><b>Scope</b>Design + fabrication</span></div><a className="button button-light" href="#quote">Discuss a similar project <MoveUpRight /></a></div></div>
      </section>

      <section className="capabilities section-pad"><div className="cap-image"><Image src={images.workshop} alt="Al Wasat fabrication workshop" fill sizes="(max-width: 800px) 100vw, 50vw" /><div className="image-stamp"><ShieldCheck /><span>Quality<br /><b>controlled</b></span></div></div><div className="cap-content"><p className="eyebrow"><span /> Why Al Wasat</p><h2>Good work is<br /><span>in the details.</span></h2><p className="cap-lede">We keep the process close, the communication clear, and the standard high. That is how we deliver confidence before the metal ever reaches site.</p><div className="benefit-list"><div><Zap /><span><b>Technical confidence</b>Shop drawings, material call-outs, and practical solutions from day one.</span></div><div><Clock3 /><span><b>Programme discipline</b>Clear milestones and coordinated delivery that respects your schedule.</span></div><div><Sparkles /><span><b>Finish that matters</b>Careful fabrication and inspection at every visible and invisible joint.</span></div></div></div></section>

      <section className="process section-pad" id="process"><div className="section-heading"><div><p className="eyebrow"><span /> Our process</p><h2>From idea<br /><span>to installed.</span></h2></div><p className="section-note">A straightforward process, made more capable by experience.</p></div><div className="process-grid">{process.map(([title, copy], index) => <div className="process-step" key={title}><span className="process-index">0{index + 1}</span><div className="process-dot" /><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

      <section className="testimonial dark-section"><div className="quote-mark">“</div><blockquote>They understood the drawings, challenged the right details, and delivered a finish we were proud to put our name beside.</blockquote><div className="quote-by"><span className="avatar">RS</span><span><b>Rami Saleh</b><small>Project Director · Northline Developments</small></span></div></section>

      <section className="insights section-pad" id="insights"><div className="section-heading"><div><p className="eyebrow"><span /> From the workshop</p><h2>Useful thinking.<br /><span>Real material.</span></h2></div><a className="text-link" href="#quote">View all insights <ArrowRight /></a></div><div className="insight-grid"><article><Image src={images.stairs} alt="Architectural metal stairs" width={800} height={500} /><p>Materials / 06.06.24</p><h3>Choosing the right metal for architectural projects</h3><a href="#quote">Read article <ArrowUpRight /></a></article><article><Image src={images.doors} alt="Modern metal facade" width={800} height={500} /><p>Process / 22.05.24</p><h3>What good fabrication looks like before installation</h3><a href="#quote">Read article <ArrowUpRight /></a></article></div></section>

      <section className="quote-section" id="quote"><div className="quote-inner"><div><p className="eyebrow light"><span /> Start a conversation</p><h2>Have a project<br /><em>in mind?</em></h2><p>Tell us what you are working on. We will come back with the right questions and a clear next step.</p><div className="contact-details"><span>hello@alwasat.ae</span><span>+971 50 000 0000</span></div></div><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="quote-form">{submitted ? <div className="form-success"><span><Check /></span><h3>Thanks — we have your note.</h3><p>Our team will be in touch with the next step shortly.</p><button className="button button-light" type="button" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <><label>Name<input required placeholder="Your name" /></label><label>Work email<input required type="email" placeholder="you@company.com" /></label><label>Tell us about the project<textarea required placeholder="A little about scope, location, and timing..." rows={4} /></label><button className="button button-accent" type="submit">Send enquiry <ArrowRight /></button></>}</form></div></section>

      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">AW</span><span>AL WASAT <b>METAL INDUSTRIES</b></span></a><p>Metal fabrication for people building what is next.</p><span>© 2024 Al Wasat Metal Industries</span></footer><a className="mobile-quote" href="#quote">Request a quote <ArrowRight /></a>
    </main>
  )
}
