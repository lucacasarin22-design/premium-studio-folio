const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Luca Casarin. All rights reserved.
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
