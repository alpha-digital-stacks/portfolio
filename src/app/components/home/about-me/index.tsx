import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-muted py-10 md:py-32">
        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-primary pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-75.75 h-110 hidden lg:flex">
                <Image
                  src="/images/home/about-me/about-banner-img.svg"
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p className="py-2">
                  I'm Muhammad Talha, a results-driven Senior Developer with 5+
                  years of experience specializing in building high-performance
                  web and mobile applications. Expert in the React ecosystem
                  (Next.js & React Native), I focus on transforming complex
                  business requirements into scalable digital solutions. From
                  real-time bidding systems to hospital management platforms, I
                  deliver pixel-perfect UI/UX with robust technical
                  architectures.
                </p>
                <p className="py-2">
                  I excel in bridge-building between complex backend logic and
                  intuitive user interfaces. Whether it's integrating real-time
                  features using Socket.io, implementing secure payment gateways
                  like Stripe/PayPal, or optimizing mobile performance for
                  Android & iOS, I handle the full development lifecycle with a
                  focus on clean, maintainable code and exceptional user
                  experience.
                </p>
                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-gray-300">
                  {[
                    { count: "05+", label: "Years of experience" },
                    { count: "10+", label: "Happy Clients" },
                    { count: "50+", label: "Project Completed" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src="/images/icon/lang-icon.svg"
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl">Language</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Urdu"].map((lang, index) => (
                      <Badge
                        key={index}
                        className="h-full bg-white rounded-full"
                      >
                        <p className="bg-white py-2 md:py-3.5 px-4 md:px-5 text-base xl:text-xl text-muted-foreground">
                          {lang}
                        </p>
                      </Badge>
                    ))}
                  </div>
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
