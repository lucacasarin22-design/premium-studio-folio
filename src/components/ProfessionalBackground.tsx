import { useEffect, useRef, useState } from "react";

const ProfessionalBackground = () => {
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
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 text-center">
            Professional Background
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="border border-border rounded-xl bg-card/50 p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    SCM & Logistics Analyst
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    B. Braun Group · Milan
                  </p>
                </div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1 md:mt-0">
                  Feb 2025 – Oct 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;
