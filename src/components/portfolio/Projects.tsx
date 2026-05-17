import { motion } from "framer-motion";
import { Github, ArrowUpRight, Star } from "lucide-react";

const projects = [
  {
    title: "Aether Agent Framework",
    desc: "Open-source multi-agent orchestration framework with tool calling, memory, and reflection loops.",
    stack: ["Python", "LangGraph", "OpenAI", "FastAPI"],
    href: "https://github.com/",
    span: "md:col-span-2 md:row-span-2",
    accent: "from-primary/20 to-accent/10",
    stars: "1.2k",
  },
  {
    title: "RAG Studio",
    desc: "Visual builder for production-grade retrieval pipelines with eval suite.",
    stack: ["Next.js", "pgvector", "TypeScript"],
    href: "https://github.com/",
    span: "",
    accent: "from-accent/20 to-primary/5",
    stars: "640",
  },
  {
    title: "VisionLens CV",
    desc: "Real-time computer vision inference at the edge with WebGPU acceleration.",
    stack: ["Rust", "WebGPU", "ONNX"],
    href: "https://github.com/",
    span: "",
    accent: "from-primary/15 to-transparent",
    stars: "320",
  },
  {
    title: "Echo Voice Agent",
    desc: "Low-latency voice assistant template with interruption handling and tool use.",
    stack: ["Deepgram", "Cartesia", "Bun"],
    href: "https://github.com/",
    span: "md:col-span-2",
    accent: "from-accent/15 to-primary/10",
    stars: "880",
  },
  {
    title: "Forecast.ai",
    desc: "Time-series forecasting toolkit with auto feature engineering & explainability.",
    stack: ["Python", "Polars", "XGBoost"],
    href: "https://github.com/",
    span: "",
    accent: "from-primary/10 to-accent/5",
    stars: "210",
  },
  {
    title: "PromptForge",
    desc: "Prompt versioning, A/B testing, and observability for LLM apps.",
    stack: ["TypeScript", "Postgres"],
    href: "https://github.com/",
    span: "",
    accent: "from-accent/10 to-primary/5",
    stars: "430",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Selected work</div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Projects from my <span className="text-gradient">GitHub.</span>
            </h2>
          </div>
          <a
            href="https://github.com/"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            <Github size={16} /> View all repositories
          </a>
        </div>

        <div className="grid md:grid-cols-3 auto-rows-[minmax(220px,auto)] gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl glass p-6 flex flex-col justify-between hover:-translate-y-1 transition-all ${p.span}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="absolute inset-0 grid-bg opacity-20" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <h3 className="font-display font-semibold text-2xl leading-tight">{p.title}</h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                  {p.desc}
                </p>
              </div>

              <div className="relative mt-6 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full glass border border-white/10 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star size={12} className="text-primary" />
                  {p.stars}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
