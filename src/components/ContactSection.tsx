const contactItems = [
  {
    label: "EMAIL",
    value: "luca.casarin22@gmail.com",
    href: "mailto:luca.casarin22@gmail.com",
    icon: "✉",
  },
  {
    label: "MOBILE",
    value: "+39 366 404 5983",
    href: "tel:+393664045983",
    icon: "☎",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/lucafcasarin",
    href: "https://www.linkedin.com/in/lucafcasarin/",
    icon: "in",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-20 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10 md:gap-14 items-start">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Contact
            </p>

            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10">
              Let&apos;s connect
            </h2>

            <div className="space-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl border border-border bg-card/70 flex items-center justify-center text-foreground text-sm shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.label === "LINKEDIN" ? "_blank" : undefined}
                      rel={item.label === "LINKEDIN" ? "noreferrer" : undefined}
                      className="font-body text-sm md:text-base text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-[24px] bg-card/70 p-7 md:p-8">
            <h3 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Available from June 2026
            </h3>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mt-5">
              I am looking for full-time opportunities in strategy, digital innovation,
              product, and business transformation roles. Open to relocation and
              international environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="mailto:luca.casarin22@gmail.com"
                className="inline-flex items-center justify-center font-body text-sm font-semibold text-primary-foreground bg-primary px-6 py-3 rounded-lg hover:bg-primary/85 transition-all duration-500"
              >
                Send me a message
              </a>

              <a
                href="/cv-luca-casarin.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-body text-sm font-semibold text-foreground border border-border px-6 py-3 rounded-lg hover:bg-secondary/60 transition-all duration-500"
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

export default ContactSection;
