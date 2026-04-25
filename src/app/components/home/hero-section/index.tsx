import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-40">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Talha</h1>
                <div className="wave">
                  <Image
                    src={"/images/home/banner/wave-icon.svg"}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h3>Web & App Developer</h3>
            </div>
            <p className="text-muted-foreground font-normal max-w-md xl:max-w-xl">
              I’m a results-driven software engineer with 5+ years of experience
              specializing in React.js, Next.js, and React Native. I build
              scalable, high-performance web and mobile applications with a
              strong focus on clean UI, UX, and real-time functionality.
            </p>
            <p className="text-muted-foreground font-normal max-w-md xl:max-w-xl">
              I enjoy transforming ideas into production-ready digital products
              using modern technologies like Node.js, Express, MongoDB, and
              Socket.io. My expertise includes building e-commerce platforms,
              real-time systems, and AI-integrated applications with attention
              to performance, scalability, and user experience.
            </p>
          </div>
          <Image
            src={"/images/home/banner/banner-img.jpeg"}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={"/images/home/banner/banner-img.jpeg"}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
