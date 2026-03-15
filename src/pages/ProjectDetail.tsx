import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center px-6">
          <h1 className="font-display text-4xl text-foreground mb-4">Project not found</h1>
          <Link
            to="/"
            className="font-body text-xs uppercase tracking-[0.25em] text-primary border-b border-primary pb-1"
          >
            Back to Home →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="w-full h-[55vh] md:h-[72vh] overflow-hidden">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover animate-fade-in-slow"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[950px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <p
          className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 opacity-0 animate-reveal-up"
          style={{ animationDelay: "0.15s" }}
        >
          {project.category} — {project.year}
        </p>

        <h1
          className="font-display text-5xl md:text-7xl text-foreground opacity-0 animate-reveal-up"
          style={{ animationDelay: "0.3s" }}
        >
          {project.title}
        </h1>

        <p
          className="font-body text-lg md:text-xl text-muted-foreground mt-8 max-w-3xl leading-relaxed opacity-0 animate-reveal-up"
          style={{ animationDelay: "0.45s" }}
        >
          {project.summary}
        </p>
      </section>

      {/* Flowing narrative */}
      <section className="max-w-[950px] mx-auto px-6 md:px-12 pb-12">
        <div className="max-w-3xl">
          <p className="font-body text-base md:text-lg text-foreground leading-8 mb-10">
            {project.overview}
          </p>

          <img
            src={project.galleryImages[0]}
            alt={`${project.title} visual 1`}
            className="w-full rounded-2xl object-cover mb-10"
            loading="lazy"
          />

          <p className="font-body text-base md:text-lg text-foreground leading-8 mb-10">
            {project.problem}
          </p>

          <p className="font-body text-base md:text-lg text-foreground leading-8 mb-10">
            {project.process}
          </p>

          <img
            src={project.galleryImages[1]}
            alt={`${project.title} visual 2`}
            className="w-full rounded-2xl object-cover mb-10"
            loading="lazy"
          />

          <p className="font-body text-base md:text-lg text-foreground leading-8 mb-10">
            {project.outcome}
          </p>

          {project.galleryImages[2] && (
            <img
              src={project.galleryImages[2]}
              alt={`${project.title} visual 3`}
              className="w-full rounded-2xl object-cover mb-6"
              loading="lazy"
            />
          )}
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-[950px] mx-auto px-6 md:px-12 py-10 md:py-16">
        <div className="h-px bg-border mb-8" />
        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Tools & Skills
        </p>
        <div className="flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="font-body text-xs tracking-wide text-foreground border border-border bg-secondary/40 px-4 py-2 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Back */}
      <section className="max-w-[950px] mx-auto px-6 md:px-12 pb-28">
        <Link
          to="/#projects"
          className="font-body text-xs uppercase tracking-[0.25em] text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors duration-500"
        >
          ← Back to All Projects
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
