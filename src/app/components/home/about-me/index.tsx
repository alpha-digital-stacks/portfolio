import Image from "next/image";
import SectionHeading from "../../shared/section-heading";

const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-28 bg-background">
      <div className="relative py-16 md:py-28">
        <div className="container relative z-10">
          <SectionHeading title="About Me" index="01" eyebrow="Profile" />

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 xl:gap-16 items-start">
            <div className="hidden lg:block">
              <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-3">
                <Image
                  src="/images/home/about-me/about-banner-img.svg"
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <p className="text-base md:text-lg">
                I&apos;m Muhammad Junaid, a results-driven Senior Developer with
                5+ years of experience specializing in high-performance web and
                mobile applications. Expert in the React ecosystem (Next.js
                &amp; React Native), I turn complex requirements into scalable
                digital products — from real-time bidding systems to hospital
                platforms — with pixel-perfect UI and solid architecture.
              </p>
              <p className="mt-4">
                I connect complex backend logic with intuitive interfaces:
                Socket.io realtime, Stripe/PayPal payments, and mobile
                performance on Android &amp; iOS. Full lifecycle, clean code,
                and an experience people actually enjoy using.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { count: "10+", label: "Happy clients" },
                  { count: "50+", label: "Projects completed" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-card px-5 py-6"
                  >
                    <h3 className="text-primary">{item.count}</h3>
                    <p className="mt-2 text-sm md:text-base">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                    <Image
                      src="/images/icon/lang-icon.svg"
                      alt="lang-icon"
                      width={22}
                      height={22}
                    />
                  </div>
                  <p className="text-base xl:text-lg text-foreground">
                    Languages
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {["English", "Urdu"].map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full border border-border bg-background px-5 py-2.5 text-sm md:text-base text-muted-foreground"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
