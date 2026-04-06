import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  summary: string;
  tags: string[];
  icon: LucideIcon;
  slug: string;
  accentColor?: "primary" | "primary-light" | "accent";
}

const ProjectCard = ({ title, summary, tags, icon: Icon, slug, accentColor = "primary" }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${slug}`} className="block group">
      <div className="flat-card rounded-2xl p-6 lg:p-8 border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-full flex flex-col">
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl bg-${accentColor}/10 text-${accentColor} mb-5 group-hover:bg-${accentColor}/15 group-hover:scale-110 transition-all duration-300 self-start`}>
          <Icon className="h-6 w-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
          {summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-primary-light bg-primary/10 border border-primary/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;