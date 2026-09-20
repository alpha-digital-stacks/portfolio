"use client";

import { useEffect, useState } from "react";
import Logo from "../logo";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`navbar fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/70 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="py-4 md:py-5 flex items-center justify-between gap-6">
          <Logo />
          <div className="hidden md:flex items-center gap-1 rounded-full border border-border/80 bg-background/70 px-2 py-1.5 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground rounded-full transition-colors hover:text-foreground hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="btn-fill relative overflow-hidden inline-flex items-center rounded-full border border-primary px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium text-primary hover:text-white transition-colors"
          >
            <span className="relative z-10">Let’s talk</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
