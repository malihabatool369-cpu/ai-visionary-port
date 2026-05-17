import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Maliha Batool — Crafted with intent.
        </div>
        <div className="flex items-center gap-2">
          <a href="mailto:malihabatool369@gmail.com" className="p-2 hover:text-primary transition" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 hover:text-primary transition" aria-label="GitHub">
            <size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 hover:text-accent transition" aria-label="LinkedIn">
            <size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
