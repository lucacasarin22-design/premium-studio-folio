const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-body text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          {["LinkedIn", "GitHub", "Email"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
