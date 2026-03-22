import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
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

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <section id="projects" ref={sectionRef} className="py-14 md:py-16 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div
          className={`mb-8 md:mb-10 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Selected Work
              </p>

              <p className="font-display text-4xl md:text-5xl text-foreground">
                Selected Projects
              </p>

              <p className="font-body text-sm md:text-base text-muted-foreground mt-4 max-w-2xl leading-relaxed">
                A selection of projects across digital innovation, product strategy,
                service design, platform thinking, and entrepreneurial execution.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={scrollLeft}
                className="w-11 h-11 rounded-full border border-border bg-card/70 text-foreground hover:bg-card transition-colors"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                onClick={scrollRight}
                className="w-11 h-11 rounded-full border border-border bg-card/70 text-foreground hover:bg-card transition-colors"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div
          ref={carouselRef}
          className="overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-5 px-6 md:px-12 pb-4" style={{ width: "max-content" }}>
            {projects.map((project) => (
              <div key={project.id} className="w-[320px] md:w-[360px] flex-shrink-0">
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
