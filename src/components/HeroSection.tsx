import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover animate-fade-in-slow"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 pb-20 md:pb-32">
        <div className="overflow-hidden">
          <h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-foreground animate-reveal-up"
            style={{ animationDelay: "0.3s" }}
          >
            Your Name
          </h1>
        </div>
        <div className="overflow-hidden mt-6">
          <p
            className="font-body text-sm md:text-base text-muted-foreground max-w-lg tracking-wide opacity-0 animate-reveal-up"
            style={{ animationDelay: "0.6s" }}
          >
            Creative Director & Designer — crafting meaningful brands, digital
            experiences, and visual narratives.
          </p>
        </div>
        <div className="overflow-hidden mt-10">
          <a
            href="#projects"
            className="inline-block font-body text-xs uppercase tracking-[0.25em] text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors duration-500 opacity-0 animate-reveal-up"
            style={{ animationDelay: "0.9s" }}
          >
            View Selected Work →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
