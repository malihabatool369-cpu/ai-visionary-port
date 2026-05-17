import { motion } from "framer-motion";

const groups = [
  { title: "Languages", items: ["Python", "TypeScript", "Rust", "SQL", "Go"] },
  { title: "AI / ML", items: ["PyTorch", "LangChain", "LangGraph", "OpenAI", "Anthropic", "Hugging Face", "LlamaIndex"] },
  { title: "Data & Infra", items: ["Postgres", "pgvector", "Redis", "Kafka", "Docker", "Kubernetes", "AWS"] },
  { title: "Frontend", items: ["React", "Next.js", "TanStack", "Tailwind", "Framer Motion"] },
];

export function TechStack() {
  return (
    <section id="stack" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Tech Stack</div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            The toolkit behind <span className="text-gradient">every build.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="text-xs uppercase tracking-widest text-primary/80 mb-4">{g.title}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
