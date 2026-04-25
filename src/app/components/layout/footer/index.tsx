import Logo from "../logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">
          <div className="relative flex items-center w-full">
            <div className="grow h-px bg-primary" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="grow h-px bg-primary" />
          </div>
          <p className="text-muted-foreground">
            2026 © Designed by{" "}
            <Link
              href="https://www.upwork.com/freelancers/~011c42c29eb76d4d4f?mp_source=share"
              target="_blank"
            >
              Muhammad Talha
            </Link>{" "}
            - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
