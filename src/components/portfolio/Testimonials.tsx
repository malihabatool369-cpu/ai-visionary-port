import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    q: "Maliha shipped an AI agent that replaced three operations roles. Quietly brilliant engineer.",
    a: "Priya Shah",
    r: "CTO, Nimbus Logistics",
  },
  {
    q: "She turned our messy data into a forecasting system the whole exec team relies on weekly.",
    a: "Daniel Okafor",
    r: "Head of Product, Finlytics",
  },
  {
    q: "Best AI engineer we've worked with. Strategic, fast, and obsessed with quality.",
    a: "Lena Vargas",
    r: "Founder, Loomwave",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Testimonials</div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Trusted by teams <span className="text-gradient">shipping fast.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-7 relative"
            >
              <Quote size={28} className="text-primary/40" />
              <blockquote className="mt-4 text-lg leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <div className="font-medium">{t.a}</div>
                <div className="text-sm text-muted-foreground">{t.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
