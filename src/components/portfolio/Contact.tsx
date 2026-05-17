import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`AI consultation — ${data.get("name")}`);
    const body = encodeURIComponent(
      `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`
    );
    window.location.href = `mailto:malihabatool369@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Contact</div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Let's build something <span className="text-gradient">intelligent.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Have an AI project in mind? Book a free 30-min consultation and let's
              map it out.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:malihabatool369@gmail.com"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/[0.07] transition"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium">malihabatool369@gmail.com</div>
                </div>
              </a>
              <a
                href="tel:+923339653786"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/[0.07] transition"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <div className="font-medium">+92 333 9653786</div>
                </div>
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank" rel="noreferrer"
                  className="p-3 glass rounded-xl hover:text-accent hover:shadow-[var(--shadow-glow-magenta)] transition"
                  aria-label="LinkedIn"
                >
                  <size={18} />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank" rel="noreferrer"
                  className="p-3 glass rounded-xl hover:text-primary hover:shadow-[var(--shadow-glow-cyan)] transition"
                  aria-label="GitHub"
                >
                  <size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={onSubmit}
            className="lg:col-span-7 glass-strong rounded-3xl p-8 lg:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <Field label="Company" name="company" placeholder="Optional" />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Project</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your AI project, goals, and timeline…"
                className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-xl font-medium hover:shadow-[var(--shadow-glow-cyan)] transition"
            >
              {sent ? <><Check size={16} /> Opening your email…</> : <>Send message <Send size={16} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
