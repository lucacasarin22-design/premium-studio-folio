import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-24">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div
          className={`mb-16 md:mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Selected Projects
          </p>

          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Academic & Strategic Work
          </h2>

          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-3xl leading-relaxed">
            A selection of projects focused on digital innovation, business strategy,
            platform thinking, AI applications, and structured problem solving.
            The goal is not only to present outcomes, but also the reasoning,
            context, and strategic logic behind each project.
          </p>

          <div
            className={`h-px bg-border mt-8 origin-left ${
              visible ? "animate-line-expand" : "scale-x-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          />
        </div>

        <div className="space-y-10 md:space-y-12">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
