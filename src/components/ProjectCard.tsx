import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group rounded-[28px] border border-border bg-card/50 px-6 py-6 md:px-8 md:py-8 transition-all duration-500 hover:border-primary/40 hover:bg-card/80">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8 md:gap-10 items-start">
        {/* Image */}
        <Link to={`/project/${project.id}`} className="block">
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary/30">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="min-w-0">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex flex-col xl:flex-row xl:items-center xl:gap-4">
              <p className="font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {project.year} · {project.category}
              </p>
            </div>

            <Link to={`/project/${project.id}`} className="block">
              <h3 className="font-display text-3xl md:text-5xl text-foreground leading-[1.05] transition-colors duration-500 group-hover:text-primary">
                {project.title}
              </h3>
            </Link>

            <p className="font-body text-base md:text-[1.15rem] italic text-muted-foreground leading-relaxed">
              {project.summary}
            </p>

            <p className="font-body text-base md:text-lg text-foreground leading-relaxed max-w-4xl pt-2">
              {project.overview}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.tools.slice(0, 5).map((tool) => (
                <span
                  key={tool}
                  className="font-body text-sm md:text-base text-primary px-4 py-2 rounded-xl bg-secondary border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                to={`/project/${project.id}`}
                className="inline-flex items-center justify-center font-body text-base md:text-lg font-medium text-primary-foreground bg-primary px-7 py-3 rounded-2xl hover:bg-primary/85 transition-all duration-500"
              >
                Leggi di più
              </Link>

              <Link
                to={`/project/${project.id}`}
                className="inline-flex items-center justify-center font-body text-base md:text-lg font-medium text-primary border border-border px-7 py-3 rounded-2xl hover:border-primary hover:bg-secondary/60 transition-all duration-500"
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
