import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className={`mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Academic Projects
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            A selection of academic projects showcasing my journey across strategy, digital innovation, 
            AI, and design thinking — translating research and analysis into concrete, structured solutions.
          </p>
          <div className={`h-px bg-border mt-8 origin-left ${visible ? "animate-line-expand" : "scale-x-0"}`} style={{ animationDelay: "0.3s" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
