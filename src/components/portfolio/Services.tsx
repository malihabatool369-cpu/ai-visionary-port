import { motion } from "framer-motion";
import { Bot, Workflow, Brain, MessageSquareCode, LineChart, Shield } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Agents", desc: "Autonomous agents that plan, reason, and execute multi-step tasks with tools and memory." },
  { icon: Workflow, title: "Automation Pipelines", desc: "Event-driven workflows that connect your stack and remove repetitive operational toil." },
  { icon: Brain, title: "Custom LLM Apps", desc: "RAG, fine-tuning, and production LLM systems tailored to your domain and data." },
  { icon: MessageSquareCode, title: "Conversational AI", desc: "Chat, voice, and multimodal assistants with brand-aligned UX and guardrails." },
  { icon: LineChart, title: "ML & Forecasting", desc: "Predictive models, anomaly detection, and analytics that drive measurable outcomes." },
  { icon: Shield, title: "AI Strategy & Audit", desc: "Roadmaps, evaluations, and risk reviews to ship AI responsibly and confidently." },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Services</div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            What I build for <span className="text-gradient">ambitious teams.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            End-to-end AI engineering, from rough idea to revenue-generating system.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group glass rounded-2xl p-7 hover:bg-white/[0.07] transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:shadow-[var(--shadow-glow-cyan)] transition-shadow">
                <s.icon size={22} />
              </div>
              <h3 className="font-display font-semibold text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
