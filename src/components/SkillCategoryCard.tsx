import { LucideIcon } from "lucide-react";

interface SkillCategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

const SkillCategoryCard = ({
  title,
  description,
  icon: Icon,
  skills,
}: SkillCategoryCardProps) => {
  return (
    <div className="flat-card rounded-2xl p-6 lg:p-8 border border-border hover:border-accent/30 transition-colors">
      
      {/* Header */}
      <div className="flex items-start gap-4 mb-6 text primary">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            {description}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-3 py-1.5
              text-xs
              font-medium
              text-foreground/70
              bg-secondary/20
              border border-border/60
              hover:border-accent/20
              rounded-full
              transition-colors
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
