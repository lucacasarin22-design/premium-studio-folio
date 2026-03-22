import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group rounded-[18px] border border-border bg-card/70 p-4 transition-all duration-500 hover:border-primary/50 hover:bg-card shadow-sm h-full flex flex-col">
      <Link to={`/project/${project.id}`} className="block">
        <div className="overflow-hidden rounded-xl border border-border bg-secondary/30">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="mt-3 flex flex-col flex-1">
        <p className="font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {project.year} · {project.category}
        </p>

        <Link to={`/project/${project.id}`} className="block mt-2">
          <h3 className="font-display font-semibold text-lg text-foreground leading-[1.1] transition-colors duration-500 group-hover:text-primary">
            {project.title}
          </h3>
        </Link>

        <p className="font-body text-xs italic text-muted-foreground leading-relaxed mt-2">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
          {project.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="font-body text-[10px] text-primary px-2 py-0.5 rounded-md bg-secondary border border-border"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="pt-3">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center justify-center font-body text-xs font-semibold text-primary-foreground bg-primary px-4 py-2 rounded-lg hover:bg-primary/85 transition-all duration-500"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
