import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group rounded-[18px] border border-border bg-card/70 px-4 py-4 md:px-5 md:py-5 transition-all duration-500 hover:border-primary/50 hover:bg-card shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-5 md:gap-6 items-start">
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

        <div className="min-w-0">
          <div className="flex flex-col gap-2.5">
            <p className="font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {project.year} · {project.category}
            </p>

            <Link to={`/project/${project.id}`} className="block">
              <h3 className="font-display font-semibold text-xl md:text-3xl text-foreground leading-[1.08] transition-colors duration-500 group-hover:text-primary">
                {project.title}
              </h3>
            </Link>

            <p className="font-body text-sm md:text-base italic text-muted-foreground leading-relaxed">
              {project.summary}
            </p>

            <p className="font-body text-sm md:text-[0.98rem] text-foreground leading-relaxed max-w-4xl">
              {project.overview}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tools.slice(0, 4).map((tool) => (
                <span
                  key={tool}
                  className="font-body text-[11px] md:text-xs text-primary px-2.5 py-1 rounded-lg bg-secondary border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="pt-3">
  <Link
    to={`/project/${project.id}`}
    className="inline-flex items-center justify-center font-body text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-lg hover:bg-primary/85 transition-all duration-500"
  >
    View Project
  </Link>
</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
