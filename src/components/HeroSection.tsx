import portrait from "@/assets/luca-casarin.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 pb-12">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 w-full">

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

          {/* FOTO */}
          <div className="flex-shrink-0">
            <img
              src={portrait}
              alt="Luca Casarin"
              className="w-56 md:w-64 h-56 md:h-64 object-cover object-[center_30%] rounded-2xl shadow-xl"
            />
          </div>

          {/* TESTO */}
          <div className="flex flex-col justify-center text-center md:text-left">

            <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground leading-tight">
              Luca Casarin
            </h1>

            <p className="font-body text-lg text-muted-foreground mt-3">
              Digital Innovation • Strategy • Business
            </p>

            <div className="mt-6 space-y-2">

              <div>
                <a
                  href="mailto:luca.casarin22@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  luca.casarin22@gmail.com
                </a>
              </div>

              <div>
                <a
                  href="tel:+393664045983"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +39 366 4045983
                </a>
              </div>

              <div>
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

            <div className="mt-6">
              <a
                href="/cv-luca-casarin.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary-foreground bg-primary px-5 py-2.5 rounded-lg hover:bg-primary/85 transition"
              >
                Download CV
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
