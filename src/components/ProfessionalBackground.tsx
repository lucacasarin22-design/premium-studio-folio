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

          <div className="max-w-4xl mx-auto">
            <div className="border border-border rounded-2xl bg-card/60 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    SCM & Logistics Analyst
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground mt-1">
                    B. Braun Group · Milan
                  </p>
                </div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.2em]">
                  Feb 2025 – Oct 2025
                </p>
              </div>

              <ul className="space-y-4">
                <li className="font-body text-sm md:text-base text-foreground leading-relaxed">
                  Supported demand planning and forecasting processes, improving coordination between Global Supply Chain, Sales, Marketing, and Customer Service; contributed to maintaining <span className="font-semibold">96% on-time delivery performance</span> with the main 3PL partner.
                </li>
                <li className="font-body text-sm md:text-base text-foreground leading-relaxed">
                  Monitored and analyzed logistics KPIs such as <span className="font-semibold">OTD, transport costs, and pallet returns</span> for a <span className="font-semibold">€6M annual contract</span> with a strategic 3PL provider, supporting performance reviews, penalty assessments, and contract governance decisions.
                </li>
                <li className="font-body text-sm md:text-base text-foreground leading-relaxed">
                  Managed material lifecycle and planning parameters in <span className="font-semibold">SAP APO</span> (MRP, MOQ, lead time), supporting phase-in and phase-out decisions for Renal Care products.
                </li>
                <li className="font-body text-sm md:text-base text-foreground leading-relaxed">
                  Produced analytical insights through <span className="font-semibold">Power BI dashboards</span> and ad-hoc analyses, including forecast vs. sales gaps, backorders, and ABC analysis, to support local stock and distribution decisions.
                </li>
                <li className="font-body text-sm md:text-base text-foreground leading-relaxed">
                  Supported regulatory and compliance activities, collaborating with Regulatory Affairs on <span className="font-semibold">AIFA reporting</span> related to drug shortages.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;
