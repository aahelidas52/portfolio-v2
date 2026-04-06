import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Tagline */}
          <div className="text-center md:text-left">
            <p className="text-base font-semibold text-foreground mb-1">
              Engineering the Future of Healthcare
            </p>
            <p className="text-sm text-muted-foreground">
              Biomedical Engineering • Research • Innovation
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-4">
            <a
              href="mailto:aaheli.das2003@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 group"
            >
              <div className="p-2 rounded-xl bg-card border border-border group-hover:border-accent/30 transition-colors">
                <Mail className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline text-sm">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 group"
            >
              <div className="p-2 rounded-xl bg-card border border-border group-hover:border-accent/30 transition-colors">
                <Linkedin className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Aaheli Das
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;