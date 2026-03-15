import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group rounded-[22px] border border-border bg-card/70 px-5 py-5 md:px-6 md:py-6 transition-all duration-500 hover:border-primary/40 hover:bg-card">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-6 md:gap-8 items-start">
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
          <div className="flex flex-col gap-3">
            <p className="font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {project.year} · {project.category}
            </p>

            <Link to={`/project/${project.id}`} className="block">
              <h3 className="font-display font-semibold text-2xl md:text-4xl text-foreground leading-[1.08] transition-colors duration-500 group-hover:text-primary">
                {project.title}
              </h3>
            </Link>

            <p className="font-body text-sm md:text-lg italic text-muted-foreground leading-relaxed">
              {project.summary}
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-relaxed max-w-4xl pt-1">
              {project.overview}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tools.slice(0, 5).map((tool) => (
                <span
                  key={tool}
                  className="font-body text-xs md:text-sm text-primary px-3 py-1.5 rounded-lg bg-secondary border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-5">
              <Link
                to={`/project/${project.id}`}
                className="inline-flex items-center justify-center font-body text-sm md:text-base font-medium text-primary-foreground bg-primary px-5 py-2.5 rounded-xl hover:bg-primary/85 transition-all duration-500"
              >
                Leggi di più
              </Link>

              <Link
                to={`/project/${project.id}`}
                className="inline-flex items-center justify-center font-body text-sm md:text-base font-medium text-primary border border-border px-5 py-2.5 rounded-xl hover:border-primary hover:bg-secondary/60 transition-all duration-500"
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
