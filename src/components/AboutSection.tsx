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
            Bio
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            About Me
          </h2>
        </div>

        <div className={`max-w-3xl transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <p className="font-body text-base md:text-lg text-foreground leading-relaxed mb-6">
            I'm a graduate student in Digital Innovation and New Business Design, with a solid 
            background in engineering and a passion for the intersection of technology, strategy, 
            and creativity.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
            My academic journey has taken me through ICT Engineering and Computer Science, 
            where I developed strong analytical and technical skills. I combine these with 
            strategic thinking, critical problem-solving, and a genuine interest in digital 
            transformation and value creation through technology.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
            I'm currently looking for opportunities that allow me to build meaningful connections, 
            develop impactful projects in collaborative environments, and bring a positive, 
            human-centered approach to every challenge.
          </p>
          <div className="h-px bg-border mb-8" />
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Skills</p>
              <p className="font-body text-sm text-foreground">Product Strategy</p>
              <p className="font-body text-sm text-foreground">UX/UI Design</p>
              <p className="font-body text-sm text-foreground">Data Analysis</p>
              <p className="font-body text-sm text-foreground">Project Management</p>
            </div>
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Education</p>
              <p className="font-body text-sm text-foreground">MSc Digital Innovation</p>
              <p className="font-body text-sm text-foreground">MSc ICT Engineering</p>
              <p className="font-body text-sm text-foreground">BSc Computer Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
