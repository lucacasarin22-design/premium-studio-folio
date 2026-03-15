import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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
    <section id="about" ref={ref} className="py-20 md:py-24 border-t border-border">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            About Me
          </p>

          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-8">
            A profile at the intersection of business, innovation and strategy
          </h2>

          <p className="font-body text-base md:text-xl leading-relaxed text-foreground max-w-3xl mx-auto">
            I am currently pursuing a Master’s degree in Digital Innovation and New Business Design
            at POLIMI Graduate School of Management. My interests lie in digital transformation,
            strategic thinking, business models, and problem solving through structured analysis.
          </p>

          <p className="font-body text-base md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto mt-6">
            This portfolio brings together academic and project-based work developed across innovation,
            strategy, platform thinking, and digital business contexts, with the goal of presenting
            not only final outputs, but also the reasoning behind them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
