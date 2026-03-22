import { useEffect, useRef, useState } from "react";

const AcademicBackground = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-14 md:py-16 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
            Education
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 text-center">
            Academic Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            <div className="border border-border rounded-2xl bg-card/60 p-6 md:p-7">
              <h3 className="font-display text-2xl text-foreground">
                POLIMI Graduate School of Management
              </h3>
              <p className="font-body text-sm md:text-base text-primary mt-2">
                International Master in Digital Innovation & New Business Design
              </p>
              <p className="font-body text-sm md:text-base text-muted-foreground mt-4 leading-relaxed">
                Specialization: Digital Product & Strategy. Curriculum: Digital Product Management; Digital Product & Service Design; Customer discovery and validation; Lean startup and Agile; Product Strategy & Omnichannel Customer Experience; Digital Transformation - Digital Business Strategy & Business Models; Digital Transformation Governance; Project Management; Innovation Strategy; Organization Design.
              </p>
            </div>

            <div className="border border-border rounded-2xl bg-card/60 p-6 md:p-7">
              <h3 className="font-display text-2xl text-foreground">
                University of Milano-Bicocca
              </h3>
              <p className="font-body text-sm md:text-base text-primary mt-2">
                Bachelor in Marketing, Corporate Communication and Global Markets
              </p>
              <p className="font-body text-sm md:text-base text-muted-foreground mt-4 leading-relaxed">
                Solid foundation in management, marketing, economics and quantitative analysis, strengthened by legal and global-market studies; developed strong analytical and communication skills through multidisciplinary projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicBackground;
