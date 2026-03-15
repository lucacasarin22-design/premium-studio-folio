import portrait from "@/assets/luca-casarin.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[8%] left-[4%] w-64 h-64 rounded-full bg-primary/18 blur-2xl" />
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 rounded-full bg-accent/20 blur-2xl" />
        <div className="absolute top-[14%] right-[10%] w-80 h-80 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute bottom-[18%] right-[18%] w-60 h-60 rounded-full bg-accent/16 blur-2xl" />
        <div className="absolute top-[18%] right-[24%] w-[280px] h-[120px] border border-foreground/20 rounded-full rotate-[12deg]" />
        <div className="absolute bottom-[24%] left-[18%] w-[240px] h-[100px] border border-foreground/18 rounded-full -rotate-[8deg]" />
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[calc(100vh-80px)]">
          {/* Left: photo */}
          <div className="flex justify-center md:justify-center">
            <div className="w-full flex justify-center">
              <img
                src={portrait}
                alt="Luca Casarin"
                className="w-[300px] h-[380px] md:w-[380px] md:h-[470px] object-cover object-[center_18%] rounded-[36px] shadow-2xl border border-white/30"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="text-center md:text-left">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-foreground leading-[0.95]">
              Luca Casarin
            </h1>

            <p className="font-body text-xl md:text-2xl text-foreground/90 mt-6">
              Digital Innovation | Strategy | Business
            </p>

            <p className="font-body text-lg italic text-muted-foreground mt-4">
              Technology · Business · Problem Solving
            </p>

            <div className="mt-10 space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-foreground/70">✉</span>
                <a
                  href="mailto:luca.casarin22@gmail.com"
                  className="font-body text-base text-foreground hover:text-primary transition-colors"
                >
                  luca.casarin22@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-foreground/70">☎</span>
                <a
                  href="tel:+393664045983"
                  className="font-body text-base text-foreground hover:text-primary transition-colors"
                >
                  +39 366 4045983
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-foreground/70">in</span>
                <a
                  href="https://www.linkedin.com/in/lucafcasarin/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-base text-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/lucafcasarin
                </a>
              </div>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="/cv-luca-casarin.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary-foreground bg-primary px-6 py-3 rounded-xl hover:bg-primary/85 transition-all duration-500 shadow-lg"
              >
                📄 Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
