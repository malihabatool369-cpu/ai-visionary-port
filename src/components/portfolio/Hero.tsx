import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-ai.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs text-muted-foreground mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            Building intelligent systems · Available for Q1 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            AI automation,
            <br />
            <span className="text-gradient">engineered</span> for scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            I'm <span className="text-foreground font-medium">Maliha Batool</span> — an AI engineer designing
            intelligent agents, automation pipelines, and production-grade ML systems
            for forward-thinking teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-[var(--shadow-glow-cyan)] transition-all"
            >
              Start a project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              View work
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/"
                target="_blank" rel="noreferrer"
                className="p-2.5 glass rounded-full hover:text-primary hover:shadow-[var(--shadow-glow-cyan)] transition-all"
                aria-label="GitHub"
              >
                <size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank" rel="noreferrer"
                className="p-2.5 glass rounded-full hover:text-accent hover:shadow-[var(--shadow-glow-magenta)] transition-all"
                aria-label="LinkedIn"
              >
                <size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { v: "30+", l: "Projects shipped" },
              { v: "12", l: "AI agents deployed" },
              { v: "100%", l: "Client retention" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-display font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden neon-border animate-float">
            <img
              src={heroImg}
              alt="AI neural network visualization"
              width={1536} height={1024}
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-4 max-w-[220px]">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[var(--shadow-glow-cyan)]" />
              Live agent uptime
            </div>
            <div className="mt-1 font-display text-2xl font-bold">99.98%</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
