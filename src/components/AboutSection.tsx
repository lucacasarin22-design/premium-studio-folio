import portrait from "@/assets/portrait.jpg";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-32 md:py-48 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className={`mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            About
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            The Person Behind the Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div
            className={`md:col-span-5 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          >
            <div className="overflow-hidden">
              <img
                src={portrait}
                alt="Portrait"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div
            className={`md:col-span-6 md:col-start-7 flex flex-col justify-center transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          >
            <p className="font-body text-base md:text-lg text-foreground leading-relaxed mb-6">
              I'm a creative director and designer with over a decade of experience shaping brands, 
              products, and digital experiences for ambitious clients worldwide.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              My approach sits at the intersection of strategy and aesthetics. I believe that 
              great design isn't just about how something looks — it's about how it makes people 
              feel, how it communicates, and how it endures.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
              Previously, I've led design at agencies and in-house teams across branding, editorial, 
              product, and spatial design. I'm drawn to projects that demand rigour, nuance, and 
              an unwillingness to settle for the expected.
            </p>
            <div className="h-px bg-border mb-8" />
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Specialties</p>
                <p className="font-body text-sm text-foreground">Brand Identity</p>
                <p className="font-body text-sm text-foreground">Art Direction</p>
                <p className="font-body text-sm text-foreground">UX/UI Design</p>
                <p className="font-body text-sm text-foreground">Creative Strategy</p>
              </div>
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Recognition</p>
                <p className="font-body text-sm text-foreground">Awwwards SOTD</p>
                <p className="font-body text-sm text-foreground">CSS Design Awards</p>
                <p className="font-body text-sm text-foreground">Lead Award Nominee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
