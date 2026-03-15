import portrait from "@/assets/portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] right-[5%] w-64 h-40 rounded-full border border-foreground/20 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-[60%] left-[3%] w-48 h-32 rounded-full border border-foreground/15 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-accent/20 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-[20%] right-[15%] w-44 h-44 rounded-full bg-accent/15 animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-[45%] right-[30%] w-24 h-24 rounded-full bg-primary/10 animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-[10%] left-[20%] w-56 h-36 rounded-full border border-foreground/10 animate-float"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src={portrait}
                alt="Luca Casarin"
                className="w-64 md:w-80 aspect-square object-cover rounded-3xl shadow-2xl opacity-0 animate-reveal-up"
                style={{ animationDelay: "0.3s" }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-40 h-24 rounded-full border border-foreground/15 animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>

          <div>
            <div className="overflow-hidden">
              <h1
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground opacity-0 animate-reveal-up"
                style={{ animationDelay: "0.4s" }}
              >
                Luca Casarin
              </h1>
            </div>

            <div className="overflow-hidden mt-4">
              <p
                className="font-body text-base md:text-lg text-foreground/80 opacity-0 animate-reveal-up"
                style={{ animationDelay: "0.55s" }}
              >
                Digital Innovation | Strategy | Business
              </p>
            </div>

            <div className="overflow-hidden mt-2">
              <p
                className="font-display text-lg italic text-muted-foreground opacity-0 animate-reveal-up"
                style={{ animationDelay: "0.65s" }}
              >
                Technology · Business · Problem Solving
              </p>
            </div>

            <div className="mt-8 space-y-3 opacity-0 animate-reveal-up" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-3">
                <span className="text-foreground/60">✉</span>
                <a
                  href="mailto:luca@email.com"
                  className="font-body text-sm text-foreground hover:text-primary transition-colors duration-300"
                >
                  luca@email.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-foreground/60">☎</span>
                <a
                  href="tel:+393331234567"
                  className="font-body text-sm text-foreground hover:text-primary transition-colors duration-300"
                >
                  +39 333 123 4567
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-foreground/60">in</span>
                <a
                  href="https://www.linkedin.com/in/luca-casarin"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-sm text-foreground hover:text-primary transition-colors duration-300"
                >
                  linkedin.com/in/luca-casarin
                </a>
              </div>
            </div>

            <div className="overflow-hidden mt-8">
              <a
                href="/cv-luca-casarin.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-primary-foreground bg-primary/30 border border-primary px-6 py-3 rounded-lg hover:bg-primary/50 transition-all duration-500 opacity-0 animate-reveal-up"
                style={{ animationDelay: "0.95s" }}
              >
                📄 CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
