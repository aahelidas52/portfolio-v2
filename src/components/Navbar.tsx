import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import resumePdf from "../assets/resume.pdf?url";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Purpose", path: "/purpose" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-primary hover:text-accent transition-colors duration-300"
          >
            Aaheli Das
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-sm font-medium ${
                    location.pathname === link.path 
                      ? "text-accent" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <a 
              href="/assets/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button size="sm" className="gap-2 bg-primary hover:bg-primary-light text-primary-foreground">
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-fade-in">
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start text-sm ${
                      location.pathname === link.path 
                        ? "text-accent bg-accent/10" 
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
              <a 
                href="/assets/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button className="w-full gap-2 bg-primary hover:bg-primary-light">
                  <FileText className="h-4 w-4" />
                  Resume
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
