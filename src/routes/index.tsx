import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { TechStack } from "@/components/portfolio/TechStack";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maliha Batool — AI Engineer & Automation Specialist" },
      {
        name: "description",
        content:
          "Maliha Batool builds AI agents, automation pipelines, and production LLM systems for ambitious teams. Book an AI consultation.",
      },
      { property: "og:title", content: "Maliha Batool — AI Engineer & Automation Specialist" },
      { property: "og:description", content: "AI automation, intelligent systems, and scalable digital solutions." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Maliha Batool",
        jobTitle: "AI Engineer",
        email: "mailto:malihabatool369@gmail.com",
        telephone: "+92-333-9653786",
        url: "/",
        sameAs: ["https://www.linkedin.com/", "https://github.com/"],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
