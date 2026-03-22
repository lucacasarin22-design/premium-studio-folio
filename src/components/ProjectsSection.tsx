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
    <section id="projects" ref={sectionRef} className="py-14 md:py-16">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div
          className={`mb-8 md:mb-10 text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Selected Work
          </p>

          <p className="font-display text-4xl md:text-5xl text-foreground">
            Selected Projects
          </p>

          <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            A selection of projects focused on digital innovation, platform thinking,
            business strategy, and structured analysis.
          </p>
        </div>
      </div>

      {/* Horizontal scroll carousel */}
      <div
        className={`transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 px-6 md:px-12 pb-4" style={{ width: "max-content" }}>
            {projects.map((project) => (
              <div key={project.id} className="w-[340px] md:w-[380px] flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
