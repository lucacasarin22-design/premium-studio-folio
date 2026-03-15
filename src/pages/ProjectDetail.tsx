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
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Project not found</h1>
          <Link to="/" className="font-body text-xs uppercase tracking-[0.25em] text-primary border-b border-primary pb-1">
            Back to Home →
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { label: "Overview", content: project.overview },
    { label: "Problem", content: project.problem },
    { label: "Process", content: project.process },
    { label: "Outcome", content: project.outcome },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="w-full h-[60vh] md:h-[75vh] overflow-hidden">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover animate-fade-in-slow"
          />
        </div>
      </section>

      {/* Title block */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 opacity-0 animate-reveal-up" style={{ animationDelay: "0.2s" }}>
          {project.category} — {project.year}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-foreground opacity-0 animate-reveal-up" style={{ animationDelay: "0.35s" }}>
          {project.title}
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground mt-8 max-w-2xl leading-relaxed opacity-0 animate-reveal-up" style={{ animationDelay: "0.5s" }}>
          {project.summary}
        </p>
      </section>

      {/* Content sections */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-12 pb-20">
        {sections.map((section, i) => (
          <div key={section.label} className="mb-16 md:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-3">
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground sticky top-24">
                  {String(i + 1).padStart(2, "0")} — {section.label}
                </p>
              </div>
              <div className="md:col-span-8 md:col-start-5">
                <p className="font-body text-sm md:text-base text-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
            <div className="h-px bg-border mt-12" />
          </div>
        ))}
      </section>

      {/* Tools */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-12 pb-20">
        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Tools & Technologies
        </p>
        <div className="flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="font-body text-xs tracking-wide text-foreground border border-border px-4 py-2"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Gallery
          </p>
          {/* Full bleed first */}
          <div className="mb-4">
            <img
              src={project.galleryImages[0]}
              alt={`${project.title} gallery 1`}
              className="w-full aspect-video object-cover"
              loading="lazy"
            />
          </div>
          {/* Two side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.galleryImages.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} gallery ${i + 2}`}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-12 pb-32">
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
