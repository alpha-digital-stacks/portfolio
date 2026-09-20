import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative hero-section overflow-hidden bg-background pt-28 md:pt-36 pb-16 lg:pb-24">
      <div className="glow-orb -left-24 top-10 h-72 w-72 bg-primary/25" />
      <div className="glow-orb right-0 top-40 h-80 w-80 bg-orange-300/20 hidden lg:block" />
      <div className="grain-overlay" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 md:gap-8 max-w-2xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs md:text-sm tracking-[0.18em] uppercase text-primary font-medium">
                Available for new projects
              </span>
            </div>
            <div>
              <div className="flex items-center gap-4 sm:gap-6">
                <h1>I&apos;m Junaid</h1>
                <div className="wave">
                  <Image
                    src={"/images/home/banner/wave-icon.svg"}
                    alt="wave-icon"
                    width={54}
                    height={54}
                  />
                </div>
              </div>
              <h3 className="mt-2 text-primary/90">Web & App Developer</h3>
            </div>
            <p className="max-w-xl text-base md:text-lg">
              Results-driven software engineer with 5+ years building scalable,
              high-performance web and mobile products in React.js, Next.js, and
              React Native — with a sharp eye for UI, UX, and real-time systems.
            </p>
            <p className="max-w-xl">
              I turn ideas into production-ready platforms using Node.js,
              Express, MongoDB, and Socket.io: e-commerce, live systems, and
              AI-integrated apps that stay fast, maintainable, and beautiful.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#work"
                className="btn-fill relative overflow-hidden inline-flex items-center rounded-full bg-primary px-6 py-3 text-white font-medium"
              >
                <span className="relative z-10">View selected work</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-border bg-background/80 px-6 py-3 font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Start a project
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2.2rem] bg-primary/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/40 dark:border-white/10 shadow-[0_30px_80px_-28px_rgba(20,17,15,0.55)]">
              <Image
                src={"/images/home/banner/banner-img.jpeg"}
                alt="Muhammad Junaid"
                width={685}
                height={650}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
