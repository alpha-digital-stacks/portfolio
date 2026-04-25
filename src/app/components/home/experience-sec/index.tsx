const ExperienceSec = () => {
  const experiences = [
    {
      year: "2019 - 2022",
      title: "Frontend Developer & UX Designer",
      company: "https://www.zenkoders.com",
      type: "Remote",
      description:
        "Created responsive UIs using HTML, CSS, JavaScript, and React.js. Converted Figma designs into pixel-perfect interfaces. Worked on WordPress customization and UX enhancements while ensuring cross-device performance.",
    },
    {
      year: "2022 - 2025",
      title: "Senior Full-Stack Developer",
      company: "https://www.hnhsofttechsolutions.com",
      type: "Fulltime",
      description:
        "Built scalable web apps with React.js, Next.js, and Node.js. Developed secure APIs, managed MongoDB/SQL databases, and implemented real-time features (Socket.io) with seamless payment gateway integrations.",
    },
    {
      year: "2025 - Present",
      title: "Team Lead & Senior AI Software Engineer",
      company: "https://www.olivedigital.com",
      type: "Fulltime",
      description:
        "Leading MERN & Next.js development with a focus on AI integration and automation tools. Architecting scalable real-time systems, enterprise-level APIs, and managing team workflows to ensure high-quality code delivery.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-primary pb-7 mb-9 md:mb-16">
            <h2>Experience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                <div className="">
                  <h3 className="font-bold mb-2">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className=" relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < experiences.length - 1 ? "h-40" : "h-30"
                      } bg-muted`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border bg-white flex items-center justify-center ${
                        index === 1 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 1 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl font-normal">{exp.company}</span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
