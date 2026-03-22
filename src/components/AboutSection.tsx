import { useEffect, useRef, useState } from "react";

const skillBlocks = [
  {
    title: "Data & Analytics",
    skills: ["Excel Advanced", "Power BI", "Data Analysis", "Data Visualization"],
  },
  {
    title: "Business Tools",
    skills: ["SAP", "PowerPoint"],
  },
  {
    title: "Product & Strategy",
    skills: ["Strategic Analysis & Problem Structuring", "Business Model & Product Strategy"],
  },
  {
    title: "AI & Digital Tools",
    skills: ["Figma", "Lovable", "Claude Code"],
  },
];

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
    <section id="about" ref={ref} className="py-14 md:py-16 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-center">
            About Me
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 text-center">
            Business, innovation and structured problem solving
          </h2>

          <p className="font-body text-base md:text-lg leading-relaxed text-foreground max-w-3xl mx-auto text-center">
            I am currently pursuing a Master's degree in Digital Innovation and New Business Design
            at POLIMI Graduate School of Management. My interests lie in digital transformation,
            strategic thinking, business models, and applied problem solving.
          </p>

          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto mt-4 text-center">
            This portfolio collects academic and project-based work developed across innovation,
            strategy, platform thinking, and digital business contexts, with the goal of showing
            both outcomes and the reasoning behind them.
          </p>

          {/* Skills Blocks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {skillBlocks.map((block) => (
              <div
                key={block.title}
                className="border border-border rounded-xl bg-card/50 p-4"
              >
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                  {block.title}
                </p>
                <ul className="space-y-1.5">
                  {block.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-body text-xs text-foreground/80 leading-snug"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
