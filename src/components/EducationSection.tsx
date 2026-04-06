import { GraduationCap, Building } from "lucide-react";

interface EducationEntry {
  degree: string;
  focus?: string;
  school: string;
  location: string;
  dates: string;
  description?: string;
  icon: "graduation" | "building";
}

const educationData: EducationEntry[] = [
  {
    degree: "M.S., Biomedical Engineering",
    focus: "Master's project focusing on enhancing a Robotic Hip Exoskeleton",
    school: "San Jose State University",
    location: "San Jose, CA",
    dates: "2025 – Present",
    description: "Graduate Student, Biomedical Engineering",
    icon: "graduation",
  },
  {
    degree: "B.S., Biomedical Engineering",
    focus: "Additional Focus: Computer Science",
    school: "San Jose State University",
    location: "San Jose, CA",
    dates: "2021 – 2025",
    description: "Undergraduate, Biomedical Engineering with CS focus",
    icon: "building",
  },
];

const EducationCard = ({ entry, index }: { entry: EducationEntry; index: number }) => {
  const IconComponent = entry.icon === "graduation" ? GraduationCap : Building;

  return (
    <div
      className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.2 + index * 0.15}s` }}
    >
      {/* Icon Container */}
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-plum/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-plum/30 transition-all duration-300">
        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary-light" />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        <h3 className="text-base sm:text-lg font-bold text-foreground mb-0.5 truncate">
          {entry.degree}
        </h3>
        {entry.focus && (
          <p className="text-sm text-primary-light font-medium mb-1">
            {entry.focus}
          </p>
        )}
        <p className="text-sm text-muted-foreground">
          {entry.school} • {entry.location}
        </p>
        {entry.description && (
          <p className="text-xs text-muted-foreground/70 mt-1 hidden sm:block">
            {entry.description}
          </p>
        )}
      </div>

      {/* Date Badge */}
      <div className="flex-shrink-0">
        <span className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary-light bg-primary/10 border border-primary/30 rounded-full whitespace-nowrap">
          {entry.dates}
        </span>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            My Education
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Academic foundation in biomedical engineering with a focus on medical devices, 
            robotics, and computational methods.
          </p>
          <div className="w-16 h-0.5 bg-primary/50 rounded-full mx-auto mt-6" />
        </div>

        {/* Education Cards */}
        <div className="space-y-4">
          {educationData.map((entry, index) => (
            <EducationCard key={index} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
