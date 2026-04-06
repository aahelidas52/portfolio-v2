import { FolderKanban, Lightbulb, Microscope, Award } from "lucide-react";
import useSectionFocus from "@/hooks/useSectionFocus";

const stats = [
  { icon: FolderKanban, value: "8+", label: "Projects", color: "primary" },
  { icon: Lightbulb, value: "15+", label: "Skills", color: "primary-light" },
  { icon: Microscope, value: "3+", label: "Research Areas", color: "primary" },
  { icon: Award, value: "5+", label: "Certifications", color: "primary-light" },
];

const StatsStrip = () => {
  const { sectionRef, isFocused } = useSectionFocus();

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`py-16 lg:py-20 relative section-focusable ${isFocused ? 'section-focused' : ''}`}
    >
      {/* Subtle top line */}
      <div className="absolute top-0 left-0 right-0 accent-line-gold" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={`flat-card flat-card-hover rounded-2xl p-6 lg:p-8 text-center transition-all duration-300 group border-${stat.color}/10 hover:border-${stat.color}/20`}>
                <div className={`inline-flex p-3 rounded-xl bg-${stat.color}/10 text-${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle bottom line */}
      <div className="absolute bottom-0 left-0 right-0 accent-line-gold" />
    </section>
  );
};

export default StatsStrip;