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
    <section id="projects" ref={sectionRef} className="py-18 md:py-20">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div
          className={`mb-12 md:mb-14 text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Selected Projects
          </p>

          <p className="font-display text-5xl md:text-6xl text-foreground">
            Selected Projects
          </p>

          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            A selection of projects focused on digital innovation, platform thinking,
            business strategy, and structured analysis.
          </p>
        </div>

        <div className="space-y-6 md:space-y-7">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${0.12 + i * 0.1}s` }}
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
