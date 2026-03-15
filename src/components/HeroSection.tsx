import portrait from "@/assets/luca-casarin.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[82vh] flex items-center overflow-hidden pt-16 md:pt-20 pb-10 md:pb-14">
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="flex justify-center md:justify-center">
            <img
              src={portrait}
              alt="Luca Casarin"
              className="w-64 md:w-80 aspect-square object-cover object-[center_22%] rounded-3xl shadow-2xl"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground">
              Luca Casarin
            </h1>

            <p className="font-body text-lg text-muted-foreground mt-4">
              Digital Innovation • Strategy • Business
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span>✉</span>
                <a
                  href="mailto:luca.casarin22@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  luca.casarin22@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <span>☎</span>
                <a
                  href="tel:+393664045983"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +39 366 4045983
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <span>in</span>
                <a
                  href="https://www.linkedin.com/in/lucafcasarin/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
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
                className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-primary-foreground bg-primary px-6 py-3 rounded-xl hover:bg-primary/85 transition-all duration-500"
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
