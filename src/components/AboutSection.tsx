import { GraduationCap, FlaskConical, Cpu, Heart, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import useSectionFocus from "@/hooks/useSectionFocus";

const quickFacts = [
  { icon: GraduationCap, label: "Major", value: "Biomedical Engineering" },
  { icon: FlaskConical, label: "University", value: "Your University Name" },
  { icon: Cpu, label: "Research Focus", value: "Medical Devices & Biomechanics" },
  { icon: Heart, label: "Interests", value: "Healthcare Innovation" },
];

const AboutSection = () => {
  const { sectionRef, isFocused } = useSectionFocus();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`py-24 lg:py-32 relative section-focusable ${
        isFocused ? "section-focused" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* LEFT — QUICK FACTS */}
          <div
            className="lg:col-span-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flat-card rounded-2xl p-6 lg:p-8 border-accent/20 hover:border-accent/30 transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Quick Facts
              </h3>

              <div className="space-y-5">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-4 group">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary-light group-hover:bg-primary/15 transition-colors">
                      <fact.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        {fact.label}
                      </p>
                      <p className="text-foreground font-medium">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — BIO + TITLE */}
          <div
            className="lg:col-span-3 space-y-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* MOVED HEADER HERE */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                About Me
              </h2>
              <div className="w-16 h-0.5 bg-accent rounded-full" />
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              I am a dedicated biomedical engineering student with a passion for developing innovative 
              solutions that improve patient outcomes and advance healthcare technology. My academic 
              journey has equipped me with a strong foundation in both engineering principles and 
              biological sciences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Through hands-on research experience and collaborative projects, I have developed 
              expertise in areas ranging from medical device design to computational biomechanics. 
              I am driven by the potential to make a meaningful impact on people's lives through 
              technology and innovation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not in the lab or classroom, you'll find me exploring the latest advancements 
              in biomedical research, participating in engineering competitions, or mentoring fellow 
              students in STEM fields.
            </p>

            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Resume</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                View or download my detailed resume for a comprehensive overview.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 rounded-xl">
                    <Eye className="h-4 w-4" />
                    View Resume
                  </Button>
                </a>

                <a href="/assets/resume.pdf" download>
                  <Button size="sm" className="gap-2 rounded-xl bg-primary hover:bg-primary-light">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
