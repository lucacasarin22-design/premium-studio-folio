import { useState, useRef, useEffect } from "react";

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-14 md:py-16 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-3">
            Let's connect
          </h2>
          <p className="font-body text-sm text-muted-foreground">
            Available from June 2026 for full-time opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div
            className={`md:col-span-5 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-5">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  Email
                </p>
                <a
                  href="mailto:luca.casarin22@gmail.com"
                  className="font-body text-sm text-foreground hover:text-primary transition-colors duration-500"
                >
                  luca.casarin22@gmail.com
                </a>
              </div>

              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  Phone
                </p>
                <a
                  href="tel:+393664045983"
                  className="font-body text-sm text-foreground hover:text-primary transition-colors duration-500"
                >
                  +39 366 404 5983
                </a>
              </div>

              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/lucafcasarin/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-sm text-foreground hover:text-primary transition-colors duration-500"
                >
                  linkedin.com/in/lucafcasarin
                </a>
              </div>

              <div>
                <a
                  href="/cv-luca-casarin.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-primary-foreground bg-primary/30 border border-primary px-5 py-2.5 rounded-lg hover:bg-primary/50 transition-all duration-500 mt-2"
                >
                  📄 Download CV
                </a>
              </div>
            </div>
          </div>

          <div
            className={`md:col-span-6 md:col-start-7 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-500"
                />
              </div>

              <div>
                <label className="block font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-500"
                />
              </div>

              <div>
                <label className="block font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="font-body text-xs uppercase tracking-[0.25em] text-primary-foreground bg-primary px-7 py-3 rounded-lg hover:bg-primary/80 transition-all duration-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
