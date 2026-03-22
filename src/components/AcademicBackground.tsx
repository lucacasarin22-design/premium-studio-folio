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

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="border border-border rounded-xl bg-card/50 p-5 md:p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                POLIMI Graduate School of Management
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1">
                International Master in Digital Innovation & New Business Design
              </p>
            </div>

            <div className="border border-border rounded-xl bg-card/50 p-5 md:p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                University of Milano-Bicocca
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Bachelor in Marketing, Corporate Communication and Global Markets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicBackground;
