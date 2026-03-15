import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="bg-background min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-20 flex items-center">
            <Link
              to="/#projects"
              className="font-body text-xs uppercase tracking-[0.22em] text-foreground hover:text-primary transition-colors"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>

        <div className="pt-32 px-6 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Project not found</h1>
          <Link
            to="/#projects"
            className="font-body text-sm text-primary hover:text-foreground transition-colors"
          >
            Return to portfolio
          </Link>
        </div>
      </div>
    );
  }

  const fullNarrative =
    (project as any).fullNarrative ||
    `${project.overview}\n\n${project.problem}\n\n${project.process}\n\n${project.outcome}`;

  const narrativeParagraphs = fullNarrative
    .split("\n")
    .map((p: string) => p.trim())
    .filter(Boolean);

  const slidesUrl = (project as any).slidesUrl || "";
  const pdfUrl = (project as any).pdfUrl || "";
  const externalProjectUrl = (project as any).externalProjectUrl || "";

  return (
    <div className="bg-background min-h-screen">
      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link
            to="/#projects"
            className="font-body text-xs uppercase tracking-[0.22em] text-foreground hover:text-primary transition-colors"
          >
            ← Back to Projects
          </Link>

          <div className="hidden md:block font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {project.title}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-10 md:gap-14 items-center">
            <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm">
              <img
                src={project.cover}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground mb-3">
                {project.year} · {project.category}
              </p>

              <h1 className="font-display text-4xl md:text-6xl text-foreground leading-[1.02]">
                {project.title}
              </h1>

              <p className="font-body text-lg md:text-xl text-muted-foreground mt-5 leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2.5 mt-6">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-body text-xs md:text-sm text-primary px-3 py-1.5 rounded-lg bg-secondary border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-8 md:py-10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="rounded-[24px] border border-border bg-card/70 p-6 md:p-8">
            <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground mb-4">
              Executive Summary
            </p>

            <p className="font-body text-base md:text-lg text-foreground leading-relaxed max-w-4xl">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Full explanation */}
      <section className="py-10 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-[220px_minmax(0,1fr)] gap-8 md:gap-12">
            <div className="xl:pt-2">
              <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Full Explanation
              </p>
            </div>

            <div className="max-w-4xl">
              <div className="space-y-6">
                {narrativeParagraphs.map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="font-body text-base md:text-lg text-foreground leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {project.galleryImages?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                  {project.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-[20px] border border-border bg-card"
                    >
                      <img
                        src={image}
                        alt={`${project.title} visual ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Slides / full deck */}
      <section className="py-10 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="rounded-[24px] border border-border bg-card/70 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.24em] text-muted-foreground mb-2">
                  Full Slides / Deck
                </p>
                <h2 className="font-display text-2xl md:text-4xl text-foreground">
                  Project Material
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {pdfUrl && (
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center font-body text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-lg hover:bg-primary/85 transition-all duration-500"
                  >
                    Open PDF
                  </a>
                )}

                {slidesUrl && (
                  <a
                    href={slidesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center font-body text-sm font-semibold text-primary border border-border px-5 py-2.5 rounded-lg hover:border-primary hover:bg-secondary/60 transition-all duration-500"
                  >
                    Open Slides
                  </a>
                )}

                {externalProjectUrl && (
                  <a
                    href={externalProjectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center font-body text-sm font-semibold text-primary border border-border px-5 py-2.5 rounded-lg hover:border-primary hover:bg-secondary/60 transition-all duration-500"
                  >
                    External Link
                  </a>
                )}
              </div>
            </div>

            {pdfUrl ? (
              <div className="overflow-hidden rounded-[18px] border border-border bg-background">
                <iframe
                  src={pdfUrl}
                  title={`${project.title} PDF`}
                  className="w-full h-[720px]"
                />
              </div>
            ) : slidesUrl ? (
              <div className="rounded-[18px] border border-border bg-secondary/40 p-8 text-center">
                <p className="font-body text-base text-foreground mb-4">
                  Slides available through external link.
                </p>
                <a
                  href={slidesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center font-body text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-lg hover:bg-primary/85 transition-all duration-500"
                >
                  Open Slides
                </a>
              </div>
            ) : (
              <div className="rounded-[18px] border border-border bg-secondary/40 p-8 text-center">
                <p className="font-body text-base text-muted-foreground">
                  Full slides or PDF can be added here.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom back link */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <Link
            to="/#projects"
            className="font-body text-sm text-primary hover:text-foreground transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
