import Logo from "../logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pb-10 pt-6 bg-background">
      <div className="container">
        <div className="rounded-[2rem] border border-border/80 bg-background px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Logo />
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#work" className="hover:text-primary transition-colors">
                Work
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-sm">
              2026 © Designed by{" "}
              <Link
                href="https://github.com/alpha-digital-stacks"
                target="_blank"
                className="text-foreground hover:text-primary transition-colors"
              >
                Muhammad Junaid
              </Link>
            </p>
            <p className="text-sm">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
