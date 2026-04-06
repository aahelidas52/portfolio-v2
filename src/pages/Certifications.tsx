import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import useSectionFocus from "@/hooks/useSectionFocus";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  description: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    id: "1",
    name: "Autodesk Inventor",
    issuer: "Autodesk",
    issueDate: "Certified",
    description:
      "Credential demonstrating proficiency in 3D CAD modeling, mechanical design workflows, and documentation.",
    credentialUrl: "#",
  },
  {
    id: "2",
    name: "SolidWorks",
    issuer: "Dassault Systèmes",
    issueDate: "Certified",
    description:
      "Credential demonstrating CAD modeling, assemblies, engineering drawings, and design communication.",
    credentialUrl: "#",
  },
  {
    id: "3",
    name: "CITI Program – Biomedical Research (Human Subjects)",
    issuer: "CITI Program",
    issueDate: "Completed",
    description:
      "Human subjects research training covering ethics, compliance, and responsible conduct for biomedical studies.",
    credentialUrl: "#",
  },
];

const CertificationCard = ({ cert, index }: { cert: Certification; index: number }) => {
  return (
    <div
      className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.2 + index * 0.15}s` }}
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/15 to-plum/15 flex items-center justify-center group-hover:from-primary/20 group-hover:to-plum/20 transition-all duration-300">
        <Award className="w-6 h-6 sm:w-7 sm:h-7 text-primary-light" />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        <h3 className="text-base sm:text-lg font-bold text-foreground mb-0.5">
          {cert.name}
        </h3>
        <p className="text-sm text-primary-light font-medium mb-1">
          {cert.issuer}
        </p>
        <p className="text-sm text-muted-foreground hidden sm:block">
          {cert.description}
        </p>
      </div>

      {/* Badge + Link */}
      <div className="flex-shrink-0 flex flex-col items-end gap-2">
        <span className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary-light bg-primary/10 border border-primary/20 rounded-full whitespace-nowrap">
          {cert.issueDate}
        </span>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex"
          >
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-xs text-muted-foreground hover:text-primary-light"
            >
              Verify
              <ExternalLink className="h-3 w-3" />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

const Certifications = () => {
  const { sectionRef, isFocused } = useSectionFocus();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className="text-center mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Certifications
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Credentials in CAD, engineering tools, and biomedical human-subjects research compliance.
            </p>
            <div className="w-16 h-0.5 bg-primary/35 rounded-full mx-auto mt-6" />
          </div>

          {/* Certification Cards */}
          <section
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`section-focusable ${isFocused ? "section-focused" : ""}`}
          >
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <CertificationCard key={cert.id} cert={cert} index={index} />
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section className="mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
              Awards & Honors
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card border border-border">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-accent/15 to-primary/15 flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Students Services Appreciation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Recognition for contribution to student services.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card border border-border">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-accent/15 to-primary/15 flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Dean’s Scholar
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Academic excellence recognition at San José State University.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
