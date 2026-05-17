import { motion } from "framer-motion";
import portrait from "@/assets/about-portrait.jpg";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass">
            <img
              src={portrait}
              alt="Maliha Batool"
              width={1024} height={1280}
              loading="lazy"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 via-transparent to-primary/20 mix-blend-overlay" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">About</div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            I build AI systems that <span className="text-gradient">think, act, and scale.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            With a passion for the intersection of machine learning and product design,
            I help startups and enterprises ship intelligent software — from autonomous
            agents and RAG pipelines to LLM-powered workflows and computer vision systems.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My work blends rigorous engineering with thoughtful UX, turning complex AI
            capabilities into products people genuinely want to use.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Research-driven", d: "Latest models, evaluated rigorously." },
              { t: "Production-first", d: "Observable, secure, cost-efficient." },
              { t: "Design-aware", d: "AI that fits real human workflows." },
              { t: "End-to-end", d: "From prototype to deploy and beyond." },
            ].map((i) => (
              <div key={i.t} className="glass rounded-xl p-5">
                <div className="font-display font-semibold">{i.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{i.d}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
