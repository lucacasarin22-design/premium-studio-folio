const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Luca Casarin. All rights reserved.
        </p>

        <div className="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/lucafcasarin/"
            target="_blank"
            rel="noreferrer"
            className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            LinkedIn
          </a>

          <a
            href="mailto:luca.casarin22@gmail.com"
            className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
