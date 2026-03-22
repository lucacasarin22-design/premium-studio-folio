import { useEffect, useRef, useState } from "react";

const GapYearSection = () => {
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
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
            International Experience
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 text-center">
            Gap Year – Australia
          </h2>

          <div className="border border-border rounded-2xl bg-card/60 p-6 md:p-8">
            <p className="font-body text-sm md:text-base text-foreground leading-relaxed">
              After completing my bachelor's degree, I spent a year in Australia pursuing a working holiday experience that took me across almost the entire country. I worked across three very different industries, hospitality, agriculture, and meat processing, including a role at NH Foods, one of Australia's leading beef processing companies.
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-relaxed mt-4">
              Moving between such contrasting environments, teams, and rhythms pushed me to adapt quickly, communicate across cultures, and collaborate with people from all over the world.
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-relaxed mt-4">
              Beyond work, travelling through Australia's vastly different regions added another layer to the experience, making it one of the most enriching and formative chapters of my life, and bringing me to full professional fluency in English.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapYearSection;
