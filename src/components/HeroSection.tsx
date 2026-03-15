import portrait from "@/assets/luca-casarin.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Foto */}
          <div className="flex justify-center md:justify-start">
            <img
              src={portrait}
              alt="Luca Casarin"
              className="w-64 md:w-80 aspect-square object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Testo */}
          <div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground">
              Luca Casarin
            </h1>

            <p className="font-body text-lg text-muted-foreground mt-4">
              Digital Innovation • Strategy • Business
            </p>

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">
                <span>✉</span>
                <a
                  href="mailto:luca.casarin22@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  luca.casarin22@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span>☎</span>
                <a
                  href="tel:+393664045983"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +39 366 4045983
                </a>
              </div>

              <div className="flex items-center gap-3">
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

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
