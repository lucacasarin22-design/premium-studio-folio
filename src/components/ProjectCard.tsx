import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isOdd = index % 2 !== 0;

  return (
    <Link
      to={`/project/${project.id}`}
      className={`group block ${isOdd ? "md:mt-24" : ""}`}
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-all duration-1000"
          loading="lazy"
        />
      </div>
      <div className="mt-5">
        <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {project.category} — {project.year}
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mt-2 group-hover:text-primary transition-colors duration-500">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground mt-2 max-w-md leading-relaxed">
          {project.summary}
        </p>
        <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-primary mt-4 border-b border-transparent group-hover:border-primary transition-all duration-500">
          View Project →
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
