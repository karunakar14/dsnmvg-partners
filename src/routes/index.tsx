import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Calculator, FileText, ShieldCheck, Building2, BookOpen, Users, TrendingUp,
  Landmark, Receipt, Briefcase, Rocket, Store, Factory, Code2, ShoppingBag,
  Wrench, User, Sun, Moon, ArrowUp, ArrowRight, ArrowDown, Phone, Mail,
  MapPin, Clock, Linkedin, Twitter, Facebook, Instagram, MessageCircle,
  Check, Star, Quote, Menu, X,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-office.jpg";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "DSNMVG & Co. — Chartered Accountants & Financial Advisors" },
      { name: "description", content: "Premier CA firm since 2008. Taxation, GST, Audit, Company Registration, Payroll & Advisory for startups, SMEs, manufacturing and IT companies." },
    ],
  }),
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "team", label: "Team" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const SERVICES = [
  { icon: Calculator, title: "Taxation Services", desc: "Comprehensive tax planning, representation, and compliance to optimize your tax position and ensure full regulatory compliance." },
  { icon: Receipt, title: "GST Filing & Compliance", desc: "End-to-end GST solutions including registration, monthly/quarterly returns, annual filings, and compliance management." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory audits, internal audits, tax audits, and special investigations conducted with utmost professional standards." },
  { icon: Building2, title: "Company Registration", desc: "Seamless company incorporation, LLP registration, partnership firm setup, and all ROC-related compliance services." },
  { icon: BookOpen, title: "Accounting & Bookkeeping", desc: "Accurate ledger maintenance, financial statements, MIS reporting, and reconciliation tailored to your business." },
  { icon: Users, title: "Payroll Services", desc: "Complete payroll management including salary processing, TDS deduction, PF/ESI compliance, and statutory filings." },
  { icon: TrendingUp, title: "Financial Advisory", desc: "Strategic financial planning, investment advisory, business valuation, and merger & acquisition guidance." },
  { icon: Landmark, title: "ROC Compliance", desc: "Annual filings, board resolutions, change in directorship, and all Registrar of Companies compliance." },
  { icon: FileText, title: "Income Tax Filing", desc: "Accurate and timely income tax return filing for individuals, professionals, firms, and corporates." },
  { icon: Briefcase, title: "Business Consulting", desc: "Strategic advisory on growth, restructuring, due diligence, and process optimization for sustainable success." },
];

const INDUSTRIES = [
  { icon: Rocket, label: "Startups" },
  { icon: Store, label: "SMEs" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Code2, label: "IT Companies" },
  { icon: ShoppingBag, label: "Retail Businesses" },
  { icon: Wrench, label: "Contractors" },
  { icon: User, label: "Freelancers" },
];

const TEAM = [
  { name: "Dinesh Sharma", role: "Founder & Managing Partner", creds: "FCA, DISA, LLB · 18+ years", points: ["Former Senior Manager at Deloitte", "Expert in Corporate Taxation", "Registered Valuer"] },
  { name: "Neha Verma", role: "Co-Founder & Partner", creds: "FCA, CPA (USA) · 15+ years", points: ["Ex-KPMG Audit Manager", "International Tax Expert", "Internal Audit Specialist"] },
  { name: "Manish Gupta", role: "Partner — Advisory", creds: "FCA, MBA (Finance) · 12+ years", points: ["M&A Specialist", "Business Valuation Expert", "Investment Advisor"] },
  { name: "Vikas Patel", role: "Partner — Compliance", creds: "FCA, CS · 10+ years", points: ["ROC Compliance Specialist", "Company Law Expert", "GST Practitioner"] },
];

const STATS = [
  { value: 2500, suffix: "+", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 12000, suffix: "+", label: "Tax Returns Filed" },
  { value: 800, suffix: "+", label: "Business Registrations" },
];

const TESTIMONIALS = [
  { name: "Rajesh Khanna", role: "Founder, TechNova Pvt Ltd", quote: "DSNMVG & Co. has been instrumental in our startup journey. Their GST compliance and tax planning expertise saved us significant costs while keeping us fully compliant." },
  { name: "Priya Menon", role: "CFO, Aurelia Industries", quote: "The audit and assurance services provided by DSNMVG are exceptional. Their attention to detail and professional approach give us complete confidence in our financial reporting." },
  { name: "Amit Bhardwaj", role: "MD, Crescent Manufacturing", quote: "From ROC compliance to advisory, the team handles everything with precision. They feel like an extension of our finance team rather than an external firm." },
  { name: "Sneha Iyer", role: "Director, BluePeak Retail", quote: "Responsive, knowledgeable and proactive. DSNMVG turned our messy books into a clean financial story that helped us raise our Series A." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 120;
      for (const { id } of [...NAV].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) { setActive(id); break; }
      }
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function useCounter(target: number, start: boolean, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return n;
}

function Navbar({ theme, setTheme }: { theme: "dark" | "light"; setTheme: (t: "dark" | "light") => void }) {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h(); window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <nav className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass shadow-2xl shadow-black/30" : "bg-transparent"}`}>
          <a href="#home" className="flex items-center gap-3 group">
            <span className="grid place-items-center h-10 w-10 rounded-lg gradient-gold text-gold-foreground font-serif text-xl font-bold shadow-lg">D</span>
            <span className="font-serif text-lg sm:text-xl tracking-tight">DSNMVG <span className="text-gold">&</span> Co.</span>
          </a>
          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  data-active={active === n.id}
                  className={`shimmer-underline relative inline-block px-4 py-2 text-sm font-medium transition-colors ${active === n.id ? "text-gold" : "text-foreground/80 hover:text-foreground"}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="grid place-items-center h-10 w-10 rounded-lg glass hover:border-gold/50 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid place-items-center h-10 w-10 rounded-lg glass"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-2 animate-fade-up">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium ${active === n.id ? "text-gold bg-gold/10" : "text-foreground/80 hover:bg-white/5"}`}
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Eyebrow({ children, dot }: { children: React.ReactNode; dot?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-gold">
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-gold pulse-dot" />}
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" width={1920} height={1280} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/70 to-background" />
        <div className="absolute inset-0 gradient-radial-gold opacity-60" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <div className="animate-fade-up">
          <Eyebrow dot>Chartered Accountants Since 2008</Eyebrow>
        </div>
        <h1 className="mt-8 font-serif font-bold text-balance text-5xl sm:text-7xl lg:text-8xl leading-[1.05] animate-fade-up [animation-delay:120ms]">
          DSNMVG <span className="text-gold">&</span> Co.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-foreground/75 max-w-2xl mx-auto animate-fade-up [animation-delay:240ms]">
          Trusted Chartered Accountants & Financial Advisors delivering precision, integrity and strategic clarity.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up [animation-delay:360ms]">
          <a href="#contact" className="group inline-flex items-center justify-center gap-2 gradient-gold text-gold-foreground font-semibold px-8 py-4 rounded-xl shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:translate-y-[-2px] transition-all">
            Book Consultation
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 glass px-8 py-4 rounded-xl font-semibold hover:border-gold/60 transition-all">
            Contact Us
          </a>
        </div>
        <div className="mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/50">
          Scroll
          <ArrowDown className="h-4 w-4 animate-scroll-arrow" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <Eyebrow>About Us</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl font-bold text-balance">
            Building Trust Through <span className="text-gold">Excellence</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            DSNMVG & Co. is a premier Chartered Accountancy firm committed to delivering exceptional financial, taxation, and advisory services. With over 15 years of expertise, we have built a reputation for integrity, precision, and client-centric solutions.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal relative rounded-3xl overflow-hidden border border-border">
            <img src={aboutImg} alt="DSNMVG office" loading="lazy" width={1280} height={1024} className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="space-y-8 reveal">
            <div>
              <h3 className="font-serif text-3xl">Our Mission</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To empower businesses and individuals with transparent, compliant, and strategic financial solutions that drive sustainable growth and prosperity.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-3xl">Our Vision</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To be the most trusted financial partner for businesses across India, recognized for our expertise, innovation, and unwavering commitment to client success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="font-serif text-4xl text-gold">15<span className="text-2xl">+</span></div>
                <div className="text-sm text-muted-foreground mt-1">Years of Excellence</div>
              </div>
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="font-serif text-4xl text-gold">2500<span className="text-2xl">+</span></div>
                <div className="text-sm text-muted-foreground mt-1">Clients Served</div>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {["Integrity-first approach", "Big 4 caliber expertise", "Industry-specific solutions", "Tech-enabled compliance"].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-gold" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-navy-deep/40">
      <div className="absolute inset-0 gradient-radial-gold opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl font-bold text-balance">
            Comprehensive <span className="text-gold">Financial Solutions</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            From taxation to business consulting, we provide end-to-end financial and compliance services tailored to your needs.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative glass rounded-2xl p-6 hover-lift overflow-hidden"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div className="absolute inset-x-0 bottom-0 h-0.5 gradient-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-gold/10 border border-gold/20 text-gold mb-5 group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <Eyebrow>Industries We Serve</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl font-bold text-balance">
            Trusted Across <span className="text-gold">Industries</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise for businesses of every size and sector, understanding the unique challenges and opportunities in each industry.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.label}
              className="reveal group glass rounded-2xl p-8 text-center hover-lift cursor-default"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-gold/15 text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-all duration-500 group-hover:scale-110">
                <ind.icon className="h-6 w-6" />
              </div>
              <div className="mt-5 font-serif text-xl">{ind.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 bg-navy-deep/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl font-bold text-balance">Meet The <span className="text-gold">Experts</span></h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our leadership team brings decades of combined experience from top-tier firms, delivering excellence in every engagement.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((m, i) => (
            <article
              key={m.name}
              className="reveal glass rounded-2xl overflow-hidden hover-lift"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[3/4] relative bg-gradient-to-br from-navy to-charcoal flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 gradient-radial-gold opacity-40" />
                <span className="relative font-serif text-7xl text-gold/80">
                  {m.name.split(" ").map((p) => p[0]).join("")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl">{m.name}</h3>
                <div className="mt-1 text-gold text-sm font-medium">{m.role}</div>
                <div className="mt-2 text-xs text-muted-foreground">{m.creds}</div>
                <ul className="mt-4 space-y-2">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const n = useCounter(value, start);
  return (
    <div className="text-center">
      <div className="font-serif text-5xl sm:text-6xl font-bold">
        {n.toLocaleString()}<span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((es) => es[0].isIntersecting && setStart(true), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="py-20 border-y border-border bg-navy-deep">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((s) => <Stat key={s.label} {...s} start={start} />)}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl font-bold text-balance">What Our <span className="text-gold">Clients Say</span></h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            We take pride in the trust our clients place in us. Here's what they have to say about our services.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} className="reveal glass rounded-2xl p-8 hover-lift relative" style={{ transitionDelay: `${i * 80}ms` }}>
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/30" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <blockquote className="mt-5 text-foreground/90 italic leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid place-items-center h-12 w-12 rounded-full gradient-gold text-gold-foreground font-serif font-bold">
                  {t.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.name.length > 100) return toast.error("Please enter a valid name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return toast.error("Please enter a valid email");
    if (form.message.length > 500) return toast.error("Message too long");
    if (!form.message.trim()) return toast.error("Please enter a message");
    toast.success("Thanks! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  };
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-navy-deep/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center reveal">
          <Eyebrow>Contact Us</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl font-bold text-balance">Get In <span className="text-gold">Touch</span></h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to take the next step? Reach out for a consultation and discover how we can help your business thrive.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="reveal glass rounded-3xl p-8 sm:p-10 space-y-8">
            <h3 className="font-serif text-3xl">Contact Information</h3>
            {[
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: Mail, label: "Email", value: "info@dsnmvgco.com" },
              { icon: MapPin, label: "Office Address", value: "Suite 402, Business Tower, Sector 15, Noida, UP 201301, India" },
              { icon: Clock, label: "Business Hours", value: "Mon – Sat: 9:30 AM – 6:30 PM" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 items-start">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gold/15 text-gold shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.label}</div>
                  <div className="text-muted-foreground text-sm mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden border border-border aspect-video">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Noida+Sector+15&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="reveal glass rounded-3xl p-8 sm:p-10 space-y-5">
            <h3 className="font-serif text-3xl">Send a Message</h3>
            <div>
              <label className="text-sm font-medium">Full Name *</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100}
                className="mt-2 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-gold transition-colors" placeholder="Your full name" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Email *</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255}
                  className="mt-2 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-gold transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20}
                  className="mt-2 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-gold transition-colors" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Subject</label>
              <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="mt-2 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-gold transition-colors">
                {["General Inquiry", "Taxation", "GST & Compliance", "Audit", "Company Registration", "Advisory"].map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Message * <span className="text-muted-foreground">({form.message.length}/500)</span></label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value.slice(0, 500) })} required rows={5}
                className="mt-2 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-gold transition-colors resize-none" placeholder="How can we help you?" />
            </div>
            <button type="submit" className="w-full gradient-gold text-gold-foreground font-semibold py-4 rounded-xl shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:translate-y-[-2px] transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-lg gradient-gold text-gold-foreground font-serif text-xl font-bold">D</span>
            <span className="font-serif text-xl">DSNMVG <span className="text-gold">&</span> Co.</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Trusted Chartered Accountants & Financial Advisors delivering excellence in taxation, audit, compliance, and advisory services since 2008.
          </p>
          <div className="mt-6 flex gap-2">
            {[Linkedin, Twitter, Facebook, Instagram].map((Ic, i) => (
              <a key={i} href="#" aria-label="social" className="grid place-items-center h-10 w-10 rounded-lg glass hover:border-gold/50 hover:text-gold transition-colors">
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-xl">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {["Taxation Services", "GST Filing", "Audit & Assurance", "Company Registration", "Accounting"].map((s) => (
              <li key={s}><a href="#services" className="hover:text-gold transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="#team" className="hover:text-gold transition-colors">Our Team</a></li>
            <li><a href="#testimonials" className="hover:text-gold transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Suite 402, Business Tower, Sector 15, Noida, UP 201301</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /> info@dsnmvgco.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} DSNMVG & Co. All rights reserved.</div>
          <div className="flex gap-5"><a href="#" className="hover:text-gold">Privacy Policy</a><a href="#" className="hover:text-gold">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions({ show }: { show: boolean }) {
  return (
    <>
      <a
        href="https://wa.me/919876543210"
        target="_blank" rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 grid place-items-center h-12 w-12 rounded-full gradient-gold text-gold-foreground shadow-xl shadow-gold/30 transition-all duration-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}

function HomePage() {
  useReveal();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);
  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", h, { passive: true }); h();
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Team />
        <Stats />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions show={showTop} />
    </div>
  );
}
