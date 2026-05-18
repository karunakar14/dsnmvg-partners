import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Mail,
  MapPin,
  Menu,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sun,
  Moon,
  X,
} from "lucide-react";
import { toast, Toaster } from "sonner";

import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-office.jpg";

const services = [
  "Taxation and GST compliance",
  "Audit and assurance",
  "Company registration",
  "Accounting and bookkeeping",
  "Payroll and ROC filings",
  "Business advisory",
];

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.title = "DSNMVG & Co. | Chartered Accountants";
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Thanks! We’ll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" richColors />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-gold-foreground font-serif text-xl font-bold">
              D
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight">
              DSNMVG <span className="text-gold">&amp;</span> Co.
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-accent"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-accent md:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-border bg-background px-4 py-3 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden pt-24"
        >
          <div className="absolute inset-0">
            <img src={heroBg} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold backdrop-blur">
                Chartered Accountants Since 2008
              </span>
              <h1 className="mt-6 font-serif text-5xl leading-tight font-bold text-balance sm:text-6xl lg:text-7xl">
                Financial clarity for growing businesses.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                DSNMVG &amp; Co. helps startups, SMEs, and established companies with taxation,
                compliance, audits, and strategic advisory.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-4 font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  View services
                </a>
              </div>
            </div>

            <div className="grid gap-4 self-end">
              {[
                {
                  icon: ShieldCheck,
                  title: "Compliance first",
                  text: "Reliable filings and reporting built around deadlines.",
                },
                {
                  icon: Building2,
                  title: "Business support",
                  text: "Practical advice for entities at every growth stage.",
                },
                {
                  icon: ReceiptText,
                  title: "Tax and GST",
                  text: "Structured support for recurring and annual obligations.",
                },
              ].map((card) => (
                <article key={card.title} className="glass rounded-2xl p-6 shadow-lg">
                  <card.icon className="h-6 w-6 text-gold" />
                  <h2 className="mt-4 font-serif text-2xl font-semibold">{card.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                About us
              </span>
              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                A practical team for complex financial work.
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground">
                We work closely with founders and finance teams to keep records clean, filings on
                time, and decisions better informed.
              </p>

              <ul className="mt-8 grid gap-4">
                {services.slice(0, 4).map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-gold" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <img src={aboutImg} alt="Office interior" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-border bg-card/40 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                Services
              </span>
              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                Everything you need to stay compliant.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service}
                  className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1"
                >
                  <h3 className="font-serif text-2xl font-semibold">{service}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Clear, timely support designed to reduce friction and keep your business moving.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                Contact
              </span>
              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                Let’s talk about your next filing, audit, or setup.
              </h2>

              <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-gold" />
                  +91 98765 43210
                </p>
                <p className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-gold" />
                  info@dsnmvgco.com
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                  Suite 402, Business Tower, Sector 15, Noida, UP 201301
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-medium">Name</span>
                  <input
                    value={form.name}
                    onChange={(event) =>
                      setForm((value) => ({ ...value, name: event.target.value }))
                    }
                    className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-gold"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((value) => ({ ...value, email: event.target.value }))
                    }
                    className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-gold"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    value={form.message}
                    onChange={(event) =>
                      setForm((value) => ({ ...value, message: event.target.value }))
                    }
                    rows={5}
                    className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-gold"
                    placeholder="Tell us a little about what you need."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-4 font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} DSNMVG &amp; Co.</span>
          <span>Built with React and Vite.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
